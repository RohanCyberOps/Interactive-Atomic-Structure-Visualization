import React, { useState } from 'react';
import { Element } from './types/element';
import { PeriodicTable } from './components/PeriodicTable';
import { ElementDetails } from './components/ElementDetails';
import { Sun, Moon } from 'lucide-react';
import { elements } from './data/elements';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedElement, setSelectedElement] = useState<Element | undefined>(elements[0]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Interactive Periodic Table
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'
            }`}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="space-y-8">
          <PeriodicTable
            onElementSelect={setSelectedElement}
            selectedElement={selectedElement}
          />
          
          {selectedElement && (
            <ElementDetails element={selectedElement} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;