import React, { useState } from "react";
import { EBackgrounds } from "../enums/EBackgrounds";
import { EClothing } from "../enums/EClothing";
import { EEyes } from "../enums/EEyes";
import { EHands } from "../enums/EHands";
import { EHats } from "../enums/EHats";

type Traits = {
  Backgrounds: string;
  Clothing: string;
  Eyes: string;
  Hands: string;
  Hats: string;
};
interface TraitsPanelProps {
  onSelect: (category: keyof Traits, option: string) => void;
  selectedTraits: {
    Backgrounds: string;
    Clothing: string;
    Eyes: string;
    Hands: string;
    Hats: string;
  };
}

const TraitsPanel: React.FC<TraitsPanelProps> = ({ onSelect, selectedTraits }) => {
  const [activeCategory, setActiveCategory] = useState<keyof Traits>("Backgrounds");

  const categories = ["Backgrounds", "Clothing", "Eyes", "Hands", "Hats"];

  const optionsByCategory: { [key: string]: string[] } = {
    Backgrounds: EBackgrounds,
    Clothing: EClothing,
    Eyes: EEyes,
    Hands: EHands,
    Hats: EHats,
  };

  const activeOptions = optionsByCategory[activeCategory] || [];

  return (
    <div className="traits-panel">
      <h2 className="panel-title">Squirrel Available Traits</h2>
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category as keyof Traits)}
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
            className={`option-image ${
              selectedTraits[activeCategory] === option ? "selected" : ""
            }`}
            onClick={() => onSelect(activeCategory, option)} // Handle selection/deselection
          />
        ))}
      </div>
    </div>
  );
};

export default TraitsPanel;
