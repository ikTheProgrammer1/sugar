import React, { useState } from "react";
import CharacterDisplay from "./components/CharacterDisplay";
import TraitsPanel from "./components/TraitsPanel";
import html2canvas from "html2canvas";
import "./styles/App.css";

type Traits = {
  Backgrounds: string;
  Clothing: string;
  Eyes: string;
  Hands: string;
  Hats: string;
};

const App: React.FC = () => {
  // State to store selected traits
  const [selectedTraits, setSelectedTraits] = useState({
    Backgrounds: "",
    Clothing: "",
    Eyes: "",
    Hands: "",
    Hats: "",
  });

  const handleTraitSelect = (category: keyof Traits, option: string) => {
    setSelectedTraits((prevTraits) => {
      if (prevTraits[category] === option) {
        return { ...prevTraits, [category]: "" };
      }
      return { ...prevTraits, [category]: option };
    });
  };


  // Download the combined image
  const handleDownloadImage = async () => {
    const characterElement = document.getElementById("character-display");
    if (characterElement) {
      const canvas = await html2canvas(characterElement);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "custom-squirrel.png";
      link.click();
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="left-section">
          <CharacterDisplay selectedTraits={selectedTraits} />
          <div className="controls">
            <button className="control-button" onClick={handleDownloadImage}>
              Download
            </button>
          </div>
        </div>
        <div className="right-section">
          <TraitsPanel onSelect={handleTraitSelect} selectedTraits={selectedTraits} />
        </div>
      </div>
      <footer>
        © 2024 Squirrel Customizer
      </footer>
    </>
  );
};

export default App;
