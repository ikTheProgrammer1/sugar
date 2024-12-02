import React, { useState } from "react";
import { EBackgrounds } from "../enums/EBackgrounds";
import { EClothing } from "../enums/EClothing";
import { EEyes } from "../enums/EEyes";
import { EHands } from "../enums/EHands";
import { EHats } from "../enums/EHats";

const TraitsPanel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Backgrounds");

  // Categories list
  const categories = ["Backgrounds", "Clothing", "Eyes", "Hands", "Hats"];

  // Options mapped by category
  const optionsByCategory: { [key: string]: string[] } = {
    Backgrounds: EBackgrounds,
    Clothing: EClothing,
    Eyes: EEyes,
    Hands: EHands,
    Hats: EHats,
  };

  // Get options for the active category
  const activeOptions = optionsByCategory[activeCategory] || [];

  return (
    <div className="traits-panel">
      <h2 className="panel-title">Squirrel Available Traits</h2>
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="options-grid">
        {activeOptions.map((option, index) => (
          <img
            key={index}
            src={option}
            alt={`${activeCategory} Option ${index + 1}`}
            className="option-image"
          />
        ))}
      </div>
    </div>
  );
};

export default TraitsPanel;