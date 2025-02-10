import React from 'react';
import { Element } from '../types/element';
import { AtomicStructure } from './AtomicStructure';

interface ElementDetailsProps {
  element: Element;
}

export function ElementDetails({ element }: ElementDetailsProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white">
      <div className="flex items-start gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">
            {element.name} ({element.symbol})
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-400">Atomic Number</p>
              <p className="text-xl">{element.atomicNumber}</p>
            </div>
            <div>
              <p className="text-gray-400">Atomic Mass</p>
              <p className="text-xl">{element.atomicMass.toFixed(3)}</p>
            </div>
            <div>
              <p className="text-gray-400">Category</p>
              <p className="text-xl capitalize">{element.category.replace('-', ' ')}</p>
            </div>
            <div>
              <p className="text-gray-400">Electron Configuration</p>
              <p className="text-xl">{element.electronConfiguration}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Isotopes</h3>
            <div className="grid grid-cols-2 gap-2">
              {element.isotopes.map((isotope) => (
                <div
                  key={isotope.massNumber}
                  className="bg-gray-700 p-2 rounded"
                >
                  <p>Mass Number: {isotope.massNumber}</p>
                  <p>Abundance: {(isotope.abundance * 100).toFixed(2)}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <AtomicStructure element={element} />
        </div>
      </div>
    </div>
  );
}