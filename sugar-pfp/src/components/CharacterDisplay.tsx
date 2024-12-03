import React from "react";

interface CharacterDisplayProps {
  selectedTraits: {
    Backgrounds: string;
    Clothing: string;
    Eyes: string;
    Hands: string;
    Hats: string;
  };
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ selectedTraits }) => {
  return (
    <div id="character-display" className="character-display">
      {/* Background */}
      {selectedTraits.Backgrounds && (
        <img
          src={selectedTraits.Backgrounds}
          alt="Background"
          className="trait-layer background-layer"
        />
      )}

      {/* Base Squirrel */}
      <img
        src="assets/images/squirrel.png"
        alt="Base Squirrel"
        className="character-image"
      />

      {/* Clothing */}
      {selectedTraits.Clothing && (
        <img
          src={selectedTraits.Clothing}
          alt="Clothing"
          className="trait-layer clothing-layer"
        />
      )}

      {/* Eyes */}
      {selectedTraits.Eyes && (
        <img
          src={selectedTraits.Eyes}
          alt="Eyes"
          className="trait-layer eyes-layer"
        />
      )}

      {/* Hands */}
      {selectedTraits.Hands && (
        <img
          src={selectedTraits.Hands}
          alt="Hands"
          className="trait-layer hands-layer"
        />
      )}

      {/* Hats */}
      {selectedTraits.Hats && (
        <img
          src={selectedTraits.Hats}
          alt="Hats"
          className="trait-layer hats-layer"
        />
      )}
    </div>
  );
};

export default CharacterDisplay;
