import React from 'react';

interface ControlsProps {
  onDownload: () => void;
  onRandomize: () => void;
  onReset: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onDownload, onRandomize, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onDownload}>Download</button>
      <button onClick={onRandomize}>Randomize</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
