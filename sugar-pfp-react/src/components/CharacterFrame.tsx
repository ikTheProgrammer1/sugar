import { useState } from 'react';
import { ActiveItems, CategoryType } from '../types/types';
import '../styles/CharacterFrame.css';

const CharacterFrame = () => {
  const [activeItems, setActiveItems] = useState<ActiveItems>({
    background: 'whitebg.png',
    hat: null,
    clothing: null,
    hands: null
  });

  const toggleItem = (category: CategoryType, item: string) => {
    setActiveItems(prev => ({
      ...prev,
      [category]: prev[category] === item ? null : item
    }));
  };

  const resetCharacter = () => {
    setActiveItems({
      background: 'whitebg.png',
      hat: null,
      clothing: null,
      hands: null
    });
  };

  return (
    <div className="character-frame">
      <div 
        className="background-layer"
        style={{
          display: 'block',
          background: activeItems.background 
            ? `url(/assets/images/backgrounds/${activeItems.background})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <img className="base-character" src="/assets/images/squirrel.png" alt="Base Squirrel" />
      {activeItems.hands && (
        <img className="hands-layer" src={`/assets/images/hands/${activeItems.hands}`} alt="Hands" />
      )}
      {activeItems.clothing && (
        <img className="clothing-layer" src={`/assets/images/clothing/${activeItems.clothing}`} alt="Clothing" />
      )}
      {activeItems.hat && (
        <img className="hat-layer" src={`/assets/images/hats/${activeItems.hat}`} alt="Hat" />
      )}
    </div>
  );
};

export default CharacterFrame;
