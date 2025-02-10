import React from 'react';
import { Element } from '../types/element';
import { elements } from '../data/elements';

interface PeriodicTableProps {
  onElementSelect: (element: Element) => void;
  selectedElement?: Element;
}

export function PeriodicTable({ onElementSelect, selectedElement }: PeriodicTableProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'noble-gas': 'bg-purple-600 hover:bg-purple-500',
      'alkali-metal': 'bg-red-600 hover:bg-red-500',
      'alkaline-earth-metal': 'bg-orange-600 hover:bg-orange-500',
      'transition-metal': 'bg-yellow-600 hover:bg-yellow-500',
      'post-transition-metal': 'bg-green-600 hover:bg-green-500',
      'metalloid': 'bg-teal-600 hover:bg-teal-500',
      'nonmetal': 'bg-blue-600 hover:bg-blue-500',
      'halogen': 'bg-indigo-600 hover:bg-indigo-500',
      'lanthanide': 'bg-pink-600 hover:bg-pink-500',
      'actinide': 'bg-rose-600 hover:bg-rose-500'
    };
    return colors[category] || 'bg-gray-600 hover:bg-gray-500';
  };

  return (
    <div className="grid grid-cols-18 gap-1 p-4 bg-gray-900 rounded-lg">
      {elements.map((element) => (
        <button
          key={element.atomicNumber}
          onClick={() => onElementSelect(element)}
          className={`
            aspect-square p-2 rounded transition-all
            ${getCategoryColor(element.category)}
            ${selectedElement?.atomicNumber === element.atomicNumber ? 'ring-2 ring-white' : ''}
          `}
          style={{
            gridColumn: getElementColumn(element.atomicNumber),
            gridRow: getElementRow(element.atomicNumber)
          }}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-xs">{element.atomicNumber}</span>
            <span className="text-lg font-bold">{element.symbol}</span>
            <span className="text-xs truncate">{element.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

function getElementColumn(atomicNumber: number): number {
  // Implementation of periodic table layout logic
  // This is a simplified version - you'll need to add the full layout logic
  return (atomicNumber - 1) % 18 + 1;
}

function getElementRow(atomicNumber: number): number {
  // Implementation of periodic table layout logic
  // This is a simplified version - you'll need to add the full layout logic
  return Math.ceil(atomicNumber / 18);
}