import { CategoryType } from '../types/types';
import { downloadCharacter } from '../utils/downloadUtils';
import '../styles/Controls.css';

interface ControlsProps {
  onShowOptions: (category: CategoryType) => void;
  onReset: () => void;
}

const Controls = ({ onShowOptions, onReset }: ControlsProps) => {
  return (
    <>
      <div className="controls">
        <button onClick={downloadCharacter}>Download</button>
        <button onClick={() => console.log('Randomize')}>Randomize</button>
        <button onClick={onReset}>Reset</button>
      </div>
      <div className="category-buttons">
        <button onClick={() => onShowOptions('background')}>Background</button>
        <button onClick={() => onShowOptions('hat')}>Hat</button>
        <button onClick={() => onShowOptions('clothing')}>Clothing</button>
        <button onClick={() => onShowOptions('hands')}>Hands</button>
      </div>
    </>
  );
};

export default Controls;
