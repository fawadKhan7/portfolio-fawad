"use client";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const GLOBE_RADIUS = 4;

const pointsData = [
  {
    id: 1,
    lat: 40.7128,
    lng: -74.0060,
    size: 0.05,
    color: "#ffffff",
    label: "New York"
  },
  {
    id: 2,
    lat: 51.5074,
    lng: -0.1278,
    size: 0.04,
    color: "#ffffff",
    label: "London"
  },
  {
    id: 3,
    lat: 35.6762,
    lng: 139.6503,
    size: 0.04,
    color: "#ffffff",
    label: "Tokyo"
  },
  {
    id: 4,
    lat: 24.8607,
    lng: 67.0011,
    size: 0.07,
    color: "#ffffff",
    label: "Home Base"
  },
  {
    id: 5,
    lat: 37.7749,
    lng: -122.4194,
    size: 0.04,
    color: "#ffffff",
    label: "San Francisco"
  },
  {
    id: 6,
    lat: -33.8688,
    lng: 151.2093,
    size: 0.04,
    color: "#ffffff",
    label: "Sydney"
  }
];

const arcsData = [
  {
    order: 1,
    startLat: 24.8607,
    startLng: 67.0011,
    endLat: 40.7128,
    endLng: -74.0060,
    arcAlt: 0.3,
    color: "#808080"
  },
  {
    order: 2,
    startLat: 24.8607,
    startLng: 67.0011,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.25,
    color: "#808080"
  },
  {
    order: 3,
    startLat: 24.8607,
    startLng: 67.0011,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.4,
    color: "#808080"
  }
];

const Globe = ({ className }) => {
  const [globeData, setGlobeData] = useState(null);

  useEffect(() => {
    const data = {
      points: pointsData,
      arcs: arcsData
    };
    setGlobeData(data);
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <GlobeComponent globeData={globeData} />
      </Canvas>
    </div>
  );
};

const GlobeComponent = ({ globeData }) => {
  const globeRef = useRef();
  const pointsGroupRef = useRef();
  const arcsGroupRef = useRef();
  const { scene } = useThree();
  const [animatedArcs, setAnimatedArcs] = useState([]);

  useEffect(() => {
    if (!globeData) return;

    // Clear previous objects
    scene.children.forEach((child) => {
      if (child.userData.isGlobeObject) {
        scene.remove(child);
      }
    });

    // Create main globe - simple wireframe matching the theme
    const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x404040, // dark gray
      transparent: true,
      opacity: 0.4,
      wireframe: true
    });

    const globe = new THREE.Mesh(geometry, material);
    globe.userData.isGlobeObject = true;
    scene.add(globe);
    globeRef.current = globe;

    // Create subtle atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.02, 16, 16);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x202020, // darker gray
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.userData.isGlobeObject = true;
    scene.add(atmosphere);

    // Create points group
    const pointsGroup = new THREE.Group();
    pointsGroup.userData.isGlobeObject = true;
    scene.add(pointsGroup);
    pointsGroupRef.current = pointsGroup;

    // Add points
    globeData.points.forEach((point) => {
      const { lat, lng, size, color } = point;
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      const x = -(GLOBE_RADIUS + 0.05) * Math.sin(phi) * Math.cos(theta);
      const y = (GLOBE_RADIUS + 0.05) * Math.cos(phi);
      const z = (GLOBE_RADIUS + 0.05) * Math.sin(phi) * Math.sin(theta);

      // Point mesh
      const pointGeometry = new THREE.SphereGeometry(size, 8, 8);
      const pointMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, // white
        transparent: true,
        opacity: 0.9
      });
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
      pointMesh.position.set(x, y, z);
      pointsGroup.add(pointMesh);

      // Add subtle glow - only for home base
      if (point.label === "Home Base") {
        const glowGeometry = new THREE.SphereGeometry(size * 2, 8, 8);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xc0c0c0, // light gray
          transparent: true,
          opacity: 0.2
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        glowMesh.position.set(x, y, z);
        pointsGroup.add(glowMesh);
      }
    });

    // Create arcs group
    const arcsGroup = new THREE.Group();
    arcsGroup.userData.isGlobeObject = true;
    scene.add(arcsGroup);
    arcsGroupRef.current = arcsGroup;

    // Add arcs
    const arcs = [];
    globeData.arcs.forEach((arc, index) => {
      const { startLat, startLng, endLat, endLng, arcAlt } = arc;
      
      const startPhi = (90 - startLat) * (Math.PI / 180);
      const startTheta = (startLng + 180) * (Math.PI / 180);
      const endPhi = (90 - endLat) * (Math.PI / 180);
      const endTheta = (endLng + 180) * (Math.PI / 180);

      const startX = -(GLOBE_RADIUS + 0.05) * Math.sin(startPhi) * Math.cos(startTheta);
      const startY = (GLOBE_RADIUS + 0.05) * Math.cos(startPhi);
      const startZ = (GLOBE_RADIUS + 0.05) * Math.sin(startPhi) * Math.sin(startTheta);

      const endX = -(GLOBE_RADIUS + 0.05) * Math.sin(endPhi) * Math.cos(endTheta);
      const endY = (GLOBE_RADIUS + 0.05) * Math.cos(endPhi);
      const endZ = (GLOBE_RADIUS + 0.05) * Math.sin(endPhi) * Math.sin(endTheta);

      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      const midZ = (startZ + endZ) / 2;
      const distance = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
      const arcHeight = GLOBE_RADIUS * (1 + arcAlt);
      const factor = arcHeight / distance;

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(startX, startY, startZ),
        new THREE.Vector3(midX * factor, midY * factor, midZ * factor),
        new THREE.Vector3(endX, endY, endZ)
      ]);

      const points = curve.getPoints(50);
      const arcGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const arcMaterial = new THREE.LineBasicMaterial({ 
        color: 0x808080, // gray
        transparent: true,
        opacity: 0.6
      });
      const arcLine = new THREE.Line(arcGeometry, arcMaterial);
      arcsGroup.add(arcLine);
      arcs.push({ line: arcLine, material: arcMaterial });
    });

    setAnimatedArcs(arcs);

    return () => {
      scene.children.forEach((child) => {
        if (child.userData.isGlobeObject) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
          scene.remove(child);
        }
      });
    };
  }, [globeData, scene]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
    if (pointsGroupRef.current) {
      pointsGroupRef.current.rotation.y += 0.001;
    }
    if (arcsGroupRef.current) {
      arcsGroupRef.current.rotation.y += 0.001;
    }

    // Subtle arc animation
    animatedArcs.forEach((arc, index) => {
      if (arc.material) {
        const opacity = 0.4 + 0.2 * Math.sin(time * 1 + index * 1);
        arc.material.opacity = opacity;
      }
    });
  });

  return null;
};

export default Globe; 