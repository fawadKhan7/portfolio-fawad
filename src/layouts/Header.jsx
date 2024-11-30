import { HeroParallax } from "@/components/Parallax";
import { headerData } from "@/data/HeaderData";
import React from "react";

const Header = () => {
  return <HeroParallax products={headerData} />;
};

export default Header;
