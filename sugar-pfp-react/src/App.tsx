import React from "react";
import CharacterDisplay from "./components/CharacterDisplay";
import TraitsPanel from "./components/TraitsPanel";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="left-section">
        <CharacterDisplay />
        <div className="controls">
          <button className="control-button">Download</button>
          <button className="control-button">Randomizer</button>
        </div>
      </div>
      <div className="right-section">
        <TraitsPanel />
      </div>
    </div>
  );
};

export default App;