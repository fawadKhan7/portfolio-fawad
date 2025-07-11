"use client";
import { useState } from "react";
import { CardSpotlight } from "./CardSpotlight";

const ThemeSelector = ({ onThemeSelect }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    {
      id: "xai-inspired",
      name: "AI Elegance",
      description: "x.AI inspired - Pure black with subtle electric blue accent",
      colors: ["#000000", "#00E5FF"],
      gradient: "from-black via-gray-900 to-black",
      accent: "#00E5FF",
      style: "AI, Tech, Premium",
      preview: "Ultra-premium, sophisticated, cutting-edge technology feel",
      psychology: "Deep black projects ultimate sophistication, electric blue suggests innovation & intelligence"
    },
    {
      id: "midnight-steel",
      name: "Midnight Steel",
      description: "Deep charcoal with platinum silver - industrial elegance",
      colors: ["#0D1117", "#C0C0C0"],
      gradient: "from-gray-900 via-slate-900 to-black",
      accent: "#C0C0C0",
      style: "Tech, Engineering, Corporate",
      preview: "Modern, professional, sleek industrial aesthetic",
      psychology: "Dark charcoal conveys strength & reliability, silver suggests precision & high-tech"
    },
    {
      id: "obsidian-gold",
      name: "Obsidian Gold",
      description: "Obsidian black with refined gold - ultimate luxury",
      colors: ["#0C0C0C", "#FFD700"],
      gradient: "from-black to-stone-900",
      accent: "#FFD700",
      style: "Luxury, Executive, Premium",
      preview: "Exclusive, high-end, commands premium pricing",
      psychology: "Obsidian black creates mystery & power, gold triggers luxury & success"
    },
    {
      id: "dark-forest",
      name: "Dark Forest",
      description: "Deep forest green with emerald accent - premium natural",
      colors: ["#0B1426", "#50C878"],
      gradient: "from-slate-900 via-green-900 to-black",
      accent: "#50C878",
      style: "Sustainability, Finance, Growth",
      preview: "Sophisticated, growth-oriented, premium environmental feel",
      psychology: "Deep forest suggests stability & wisdom, emerald conveys growth & prosperity"
    },
    {
      id: "carbon-fiber",
      name: "Carbon Fiber",
      description: "Carbon black with neon cyan - high-tech performance",
      colors: ["#1A1A1A", "#00FFFF"],
      gradient: "from-gray-900 via-slate-800 to-black",
      accent: "#00FFFF",
      style: "Gaming, Sports, Performance",
      preview: "High-performance, cutting-edge, athletic sophistication",
      psychology: "Carbon black suggests performance & strength, cyan creates energy & innovation"
    },
    {
      id: "royal-purple",
      name: "Royal Purple",
      description: "Deep purple with rose gold - creative luxury",
      colors: ["#1A0B2E", "#F7CAC9"],
      gradient: "from-purple-900 via-indigo-900 to-black",
      accent: "#F7CAC9",
      style: "Creative, Luxury, Fashion",
      preview: "Artistic sophistication, creative luxury, unforgettable presence",
      psychology: "Royal purple conveys creativity & nobility, rose gold suggests refined luxury"
    }
  ];

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme.id);
    if (onThemeSelect) {
      onThemeSelect(theme);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Choose Your
          <span className="bg-gradient-to-r from-gray-300 via-white to-gray-200 bg-clip-text text-transparent ml-3">
            Elegance
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
          Premium dark themes inspired by x.AI and top-tier portfolios
        </p>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Sophisticated, elegant themes that project premium quality and leave clients with an unforgettable impression of professionalism
        </p>
      </div>

      {/* Theme Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <CardSpotlight
              key={theme.id}
              className={`h-full cursor-pointer transition-all duration-300 ${
                selectedTheme === theme.id ? 'ring-2 ring-blue-400 scale-105' : ''
              }`}
              onClick={() => handleThemeSelect(theme)}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Theme Preview */}
                <div className={`h-24 rounded-lg bg-gradient-to-r ${theme.gradient} mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-2">
                      {theme.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-white/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div 
                    className="absolute bottom-2 right-2 w-8 h-8 rounded-full border-2 border-white"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>

                {/* Theme Info */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {theme.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {theme.description}
                </p>

                {/* Style Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {theme.style.split(', ').map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preview Description */}
                <p className="text-gray-400 text-xs italic mb-3">
                  {theme.preview}
                </p>

                {/* Psychology Impact */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-xs text-gray-300 font-medium mb-1">🧠 Psychology:</p>
                  <p className="text-xs text-gray-400">
                    {theme.psychology}
                  </p>
                </div>

                {/* Select Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    selectedTheme === theme.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  onClick={() => handleThemeSelect(theme)}
                >
                  {selectedTheme === theme.id ? 'Selected' : 'Select Theme'}
                </button>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>

      {/* Selected Theme Info */}
      {selectedTheme && (
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Theme Selected: {themes.find(t => t.id === selectedTheme)?.name}
            </h3>
            <p className="text-gray-300 mb-6">
              Ready to apply this elegant theme to your portfolio? Click the button below to proceed.
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              onClick={() => {
                alert(`You selected: ${themes.find(t => t.id === selectedTheme)?.name}\n\nTell me which theme you selected and I'll implement it for you!`);
              }}
            >
              Apply This Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector; 