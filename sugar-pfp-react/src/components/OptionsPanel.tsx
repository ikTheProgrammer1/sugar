import React from 'react';

interface OptionsPanelProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ options, onSelectOption }) => {
  return (
    <div className="options-panel">
      {options.map((option) => (
        <button key={option} onClick={() => onSelectOption(option)}>
          <img src={`/assets/${option}`} alt={option} />
        </button>
      ))}
    </div>
  );
};

export default OptionsPanel;
