"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const Vortex = (props) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = 0.1;
  const rangeSpeed = 2;
  const baseRadius = 1;
  const rangeRadius = 4;
  const baseHue = 220;
  const rangeHue = 100;
  const noiseSteps = 8;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";

  let noise3D;
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  const HALF_PI = 0.5 * Math.PI;
  const TAU = 2 * Math.PI;
  const TO_RAD = Math.PI / 180;

  let animationId;

  useEffect(() => {
    initNoise3D();
    initParticles();
    initCanvas();
    draw();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const initNoise3D = () => {
    noise3D = createNoise3D();
  };

  const initParticles = () => {
    let i;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    let canvas, x, y, vx, vy, life, ttl, speed, radius, hue;

    canvas = canvasRef.current;
    x = Math.random() * canvas.a.width;
    y = center[1] + randRange(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + Math.random() * rangeTTL;
    speed = baseSpeed + Math.random() * rangeSpeed;
    radius = baseRadius + Math.random() * rangeRadius;
    hue = baseHue + Math.random() * rangeHue;

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const updateParticles = () => {
    let i;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i);
    }
  };

  const updateParticle = (i) => {
    let canvas, x, y, vx, vy, life, ttl, speed, x2, y2, t, sin, cos, n, globalTime;

    canvas = canvasRef.current;
    globalTime = Date.now() * 0.0001;

    x = particleProps[i];
    y = particleProps[i + 1];
    n = noise3D(x * xOff, y * yOff, globalTime * zOff) * noiseSteps * TAU;
    vx = Math.cos(n);
    vy = Math.sin(n);
    life = particleProps[i + 4];
    ttl = particleProps[i + 5];
    speed = particleProps[i + 6];

    x2 = x + vx * speed;
    y2 = y + vy * speed;

    if (x2 < 0 || x2 > canvas.a.width || y2 < 0 || y2 > canvas.a.height) {
      initParticle(i);
    } else {
      particleProps[i] = x2;
      particleProps[i + 1] = y2;
      particleProps[i + 2] = vx;
      particleProps[i + 3] = vy;
      particleProps[i + 4] = life + 1;
    }
  };

  const renderParticles = () => {
    let canvas, ctx, i, x, y, vx, vy, life, ttl, speed, radius, hue, alpha;

    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
      x = particleProps[i];
      y = particleProps[i + 1];
      life = particleProps[i + 4];
      ttl = particleProps[i + 5];
      radius = particleProps[i + 7];
      hue = particleProps[i + 8];

      alpha = 1 - life / ttl;

      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + particleProps[i + 2], y + particleProps[i + 3]);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  };

  const renderGlow = () => {
    let canvas, ctx;

    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    renderParticles();
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    renderParticles();
    ctx.restore();
  };

  const renderToCanvas = () => {
    let canvas, ctx;

    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    renderGlow();
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    renderParticles();
    ctx.restore();
  };

  const draw = () => {
    let canvas, ctx;

    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.a.width, canvas.a.height);

    updateParticles();
    renderToCanvas();

    animationId = requestAnimationFrame(draw);
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    function resizeCanvas() {
      if (container) {
        canvas.a = {
          width: container.offsetWidth,
          height: container.offsetHeight,
        };
        canvas.width = canvas.a.width;
        canvas.height = canvas.a.height;

        center[0] = 0.5 * canvas.a.width;
        center[1] = 0.5 * canvas.a.height;
      }
    }
  };

  const randRange = (range) => Math.random() * range;

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)} ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: backgroundColor,
        }}
      ></canvas>
      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  );
}; 