import { useState } from 'react'
import CharacterFrame from './components/CharacterFrame'
import Controls from './components/Controls'
import { CategoryType } from './types/types'
import './styles/App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null)

  return (
    <div className="container">
      <CharacterFrame />
      <Controls 
        onShowOptions={(category) => setActiveCategory(category)}
        onReset={() => {
          // Add reset logic here
        }}
      />
      {/* Add options panels here */}
    </div>
  )
}

export default App
