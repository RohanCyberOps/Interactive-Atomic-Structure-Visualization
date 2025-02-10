import {Element, ElementCategory} from '../types/element';


export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: 'H',
    name: 'Hydrogen',
    atomicMass: 1.008,
    category: 'nonmetal',
    electronConfiguration: '1s¹',
    shells: [1],
    neutrons: 0,
    isotopes: [
      { massNumber: 1, abundance: 0.99985 },
      { massNumber: 2, abundance: 0.00015 }
    ]
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    name: 'Helium',
    atomicMass: 4.002602,
    category: 'noble-gas',
    electronConfiguration: '1s²',
    shells: [2],
    neutrons: 2,
    isotopes: [
      { massNumber: 3, abundance: 0.000137 },
      { massNumber: 4, abundance: 0.999863 }
    ]
  },
  {
    atomicNumber: 3,
    symbol: 'Li',
    name: 'Lithium',
    atomicMass: 6.94,
    category: 'alkali-metal',
    electronConfiguration: '1s² 2s¹',
    shells: [2, 1],
    neutrons: 4,
    isotopes: [
      { massNumber: 6, abundance: 0.0759 },
      { massNumber: 7, abundance: 0.9241 }
    ]
  },
  {
    atomicNumber: 4,
    symbol: 'Be',
    name: 'Beryllium',
    atomicMass: 9.0121831,
    category: 'alkaline-earth-metal',
    electronConfiguration: '1s² 2s²',
    shells: [2, 2],
    neutrons: 5,
    isotopes: [
      { massNumber: 9, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 5,
    symbol: 'B',
    name: 'Boron',
    atomicMass: 10.81,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p¹',
    shells: [2, 3],
    neutrons: 6,
    isotopes: [
      { massNumber: 10, abundance: 0.199 },
      { massNumber: 11, abundance: 0.801 }
    ]
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    name: 'Carbon',
    atomicMass: 12.011,
    category: 'nonmetal',
    electronConfiguration: '1s² 2s² 2p²',
    shells: [2, 4],
    neutrons: 6,
    isotopes: [
      { massNumber: 12, abundance: 0.9893 },
      { massNumber: 13, abundance: 0.0107 }
    ]
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    name: 'Nitrogen',
    atomicMass: 14.007,
    category: 'nonmetal',
    electronConfiguration: '1s² 2s² 2p³',
    shells: [2, 5],
    neutrons: 7,
    isotopes: [
      { massNumber: 14, abundance: 0.99636 },
      { massNumber: 15, abundance: 0.00364 }
    ]
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    name: 'Oxygen',
    atomicMass: 15.999,
    category: 'nonmetal',
    electronConfiguration: '1s² 2s² 2p⁴',
    shells: [2, 6],
    neutrons: 8,
    isotopes: [
      { massNumber: 16, abundance: 0.99757 },
      { massNumber: 17, abundance: 0.00038 },
      { massNumber: 18, abundance: 0.00205 }
    ]
  },
  {
    atomicNumber: 9,
    symbol: 'F',
    name: 'Fluorine',
    atomicMass: 18.998403163,
    category: 'halogen',
    electronConfiguration: '1s² 2s² 2p⁵',
    shells: [2, 7],
    neutrons: 10,
    isotopes: [
      { massNumber: 19, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 10,
    symbol: 'Ne',
    name: 'Neon',
    atomicMass: 20.1797,
    category: 'noble-gas',
    electronConfiguration: '1s² 2s² 2p⁶',
    shells: [2, 8],
    neutrons: 10,
    isotopes: [
      { massNumber: 20, abundance: 0.9048 },
      { massNumber: 21, abundance: 0.0027 },
      { massNumber: 22, abundance: 0.0925 }
    ]
  },
  {
    atomicNumber: 11,
    symbol: 'Na',
    name: 'Sodium',
    atomicMass: 22.98976928,
    category: 'alkali-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s¹',
    shells: [2, 8, 1],
    neutrons: 12,
    isotopes: [
      { massNumber: 23, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    name: 'Magnesium',
    atomicMass: 24.305,
    category: 'alkaline-earth-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s²',
    shells: [2, 8, 2],
    neutrons: 12,
    isotopes: [
      { massNumber: 24, abundance: 0.7899 },
      { massNumber: 25, abundance: 0.1000 },
      { massNumber: 26, abundance: 0.1101 }
    ]
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    name: 'Aluminum',
    atomicMass: 26.9815385,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p¹',
    shells: [2, 8, 3],
    neutrons: 14,
    isotopes: [
      { massNumber: 27, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    name: 'Silicon',
    atomicMass: 28.085,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p²',
    shells: [2, 8, 4],
    neutrons: 14,
    isotopes: [
      { massNumber: 28, abundance: 0.92223 },
      { massNumber: 29, abundance: 0.04685 },
      { massNumber: 30, abundance: 0.03092 }
    ]
  },
  {
    atomicNumber: 15,
    symbol: 'P',
    name: 'Phosphorus',
    atomicMass: 30.973761998,
    category: 'nonmetal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p³',
    shells: [2, 8, 5],
    neutrons: 16,
    isotopes: [
      { massNumber: 31, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    name: 'Sulfur',
    atomicMass: 32.06,
    category: 'nonmetal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁴',
    shells: [2, 8, 6],
    neutrons: 16,
    isotopes: [
      { massNumber: 32, abundance: 0.9499 },
      { massNumber: 33, abundance: 0.0075 },
      { massNumber: 34, abundance: 0.0425 }
    ]
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    name: 'Chlorine',
    atomicMass: 35.45,
    category: 'halogen',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁵',
    shells: [2, 8, 7],
    neutrons: 18,
    isotopes: [
      { massNumber: 35, abundance: 0.7576 },
      { massNumber: 37, abundance: 0.2424 }
    ]
  },
  {
    atomicNumber: 18,
    symbol: 'Ar',
    name: 'Argon',
    atomicMass: 39.948,
    category: 'noble-gas',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶',
    shells: [2, 8, 8],
    neutrons: 22,
    isotopes: [
      { massNumber: 36, abundance: 0.003336 },
      { massNumber: 38, abundance: 0.000629 },
      { massNumber: 40, abundance: 0.996035 }
    ]
  },
  {
    atomicNumber: 19,
    symbol: 'K',
    name: 'Potassium',
    atomicMass: 39.0983,
    category: 'alkali-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹',
    shells: [2, 8, 8, 1],
    neutrons: 20,
    isotopes: [
      { massNumber: 39, abundance: 0.932581 },
      { massNumber: 40, abundance: 0.000117 },
      { massNumber: 41, abundance: 0.067302 }
    ]
  },
  {
    atomicNumber: 20,
    symbol: 'Ca',
    name: 'Calcium',
    atomicMass: 40.078,
    category: 'alkaline-earth-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²',
    shells: [2, 8, 8, 2],
    neutrons: 20,
    isotopes: [
      { massNumber: 40, abundance: 0.96941 },
      { massNumber: 42, abundance: 0.00647 },
      { massNumber: 44, abundance: 0.02086 }
    ]
  },
  {
    atomicNumber: 21,
    symbol: 'Sc',
    name: 'Scandium',
    atomicMass: 44.955908,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹',
    shells: [2, 8, 9, 2],
    neutrons: 24,
    isotopes: [
      { massNumber: 45, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 22,
    symbol: 'Ti',
    name: 'Titanium',
    atomicMass: 47.867,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²',
    shells: [2, 8, 10, 2],
    neutrons: 26,
    isotopes: [
      { massNumber: 46, abundance: 0.0825 },
      { massNumber: 47, abundance: 0.0744 },
      { massNumber: 48, abundance: 0.7372 },
      { massNumber: 49, abundance: 0.0541 },
      { massNumber: 50, abundance: 0.0518 }
    ]
  },
  {
    atomicNumber: 23,
    symbol: 'V',
    name: 'Vanadium',
    atomicMass: 50.9415,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³',
    shells: [2, 8, 11, 2],
    neutrons: 28,
    isotopes: [
      { massNumber: 50, abundance: 0.0025 },
      { massNumber: 51, abundance: 0.9975 }
    ]
  },
  {
    atomicNumber: 24,
    symbol: 'Cr',
    name: 'Chromium',
    atomicMass: 51.9961,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵',
    shells: [2, 8, 13, 1],
    neutrons: 28,
    isotopes: [
      { massNumber: 50, abundance: 0.04345 },
      { massNumber: 52, abundance: 0.83789 },
      { massNumber: 53, abundance: 0.09501 },
      { massNumber: 54, abundance: 0.02365 }
    ]
  },
  {
    atomicNumber: 25,
    symbol: 'Mn',
    name: 'Manganese',
    atomicMass: 54.938044,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁵',
    shells: [2, 8, 13, 2],
    neutrons: 30,
    isotopes: [
      { massNumber: 55, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    name: 'Iron',
    atomicMass: 55.845,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶',
    shells: [2, 8, 14, 2],
    neutrons: 30,
    isotopes: [
      { massNumber: 54, abundance: 0.05845 },
      { massNumber: 56, abundance: 0.91754 },
      { massNumber: 57, abundance: 0.02119 },
      { massNumber: 58, abundance: 0.00282 }
    ]
  },
  {
    atomicNumber: 27,
    symbol: 'Co',
    name: 'Cobalt',
    atomicMass: 58.933194,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁷',
    shells: [2, 8, 15, 2],
    neutrons: 32,
    isotopes: [
      { massNumber: 59, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 28,
    symbol: 'Ni',
    name: 'Nickel',
    atomicMass: 58.6934,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁸',
    shells: [2, 8, 16, 2],
    neutrons: 31,
    isotopes: [
      { massNumber: 58, abundance: 0.68077 },
      { massNumber: 60, abundance: 0.26223 },
      { massNumber: 61, abundance: 0.011399 },
      { massNumber: 62, abundance: 0.036346 },
      { massNumber: 64, abundance: 0.009255 }
    ]
  },
  {
    atomicNumber: 29,
    symbol: 'Cu',
    name: 'Copper',
    atomicMass: 63.546,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰',
    shells: [2, 8, 18, 1],
    neutrons: 35,
    isotopes: [
      { massNumber: 63, abundance: 0.6915 },
      { massNumber: 65, abundance: 0.3085 }
    ]
  },
  {
    atomicNumber: 30,
    symbol: 'Zn',
    name: 'Zinc',
    atomicMass: 65.38,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰',
    shells: [2, 8, 18, 2],
    neutrons: 35,
    isotopes: [
      { massNumber: 64, abundance: 0.4917 },
      { massNumber: 66, abundance: 0.2773 },
      { massNumber: 67, abundance: 0.0404 },
      { massNumber: 68, abundance: 0.1845 },
      { massNumber: 70, abundance: 0.0061 }
    ]
  },
  {
    atomicNumber: 31,
    symbol: 'Ga',
    name: 'Gallium',
    atomicMass: 69.723,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p¹',
    shells: [2, 8, 18, 3],
    neutrons: 39,
    isotopes: [
      { massNumber: 69, abundance: 0.60108 },
      { massNumber: 71, abundance: 0.39892 }
    ]
  },
  {
    atomicNumber: 32,
    symbol: 'Ge',
    name: 'Germanium',
    atomicMass: 72.63,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p²',
    shells: [2, 8, 18, 4],
    neutrons: 41,
    isotopes: [
      { massNumber: 70, abundance: 0.2084 },
      { massNumber: 72, abundance: 0.2754 },
      { massNumber: 73, abundance: 0.0773 },
      { massNumber: 74, abundance: 0.3628 },
      { massNumber: 76, abundance: 0.0761 }
    ]
  },
  {
    atomicNumber: 33,
    symbol: 'As',
    name: 'Arsenic',
    atomicMass: 74.921595,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p³',
    shells: [2, 8, 18, 5],
    neutrons: 42,
    isotopes: [
      { massNumber: 75, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 34,
    symbol: 'Se',
    name: 'Selenium',
    atomicMass: 78.971,
    category: 'nonmetal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁴',
    shells: [2, 8, 18, 6],
    neutrons: 45,
    isotopes: [
      { massNumber: 74, abundance: 0.0089 },
      { massNumber: 76, abundance: 0.0937 },
      { massNumber: 77, abundance: 0.0763 },
      { massNumber: 78, abundance: 0.2377 },
      { massNumber: 80, abundance: 0.4961 },
      { massNumber: 82, abundance: 0.0873 }
    ]
  },
  {
    atomicNumber: 35,
    symbol: 'Br',
    name: 'Bromine',
    atomicMass: 79.904,
    category: 'halogen',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵',
    shells: [2, 8, 18, 7],
    neutrons: 45,
    isotopes: [
      { massNumber: 79, abundance: 0.5069 },
      { massNumber: 81, abundance: 0.4931 }
    ]
  },
  {
    atomicNumber: 36,
    symbol: 'Kr',
    name: 'Krypton',
    atomicMass: 83.798,
    category: 'noble-gas',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶',
    shells: [2, 8, 18, 8],
    neutrons: 48,
    isotopes: [
      { massNumber: 78, abundance: 0.00355 },
      { massNumber: 80, abundance: 0.02286 },
      { massNumber: 82, abundance: 0.11593 },
      { massNumber: 83, abundance: 0.11500 },
      { massNumber: 84, abundance: 0.56987 },
      { massNumber: 86, abundance: 0.17279 }
    ]
  },
  {
    atomicNumber: 37,
    symbol: 'Rb',
    name: 'Rubidium',
    atomicMass: 85.4678,
    category: 'alkali-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹',
    shells: [2, 8, 18, 8, 1],
    neutrons: 48,
    isotopes: [
      { massNumber: 85, abundance: 0.7217 },
      { massNumber: 87, abundance: 0.2783 }
    ]
  },
  {
    atomicNumber: 38,
    symbol: 'Sr',
    name: 'Strontium',
    atomicMass: 87.62,
    category: 'alkaline-earth-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s²',
    shells: [2, 8, 18, 8, 2],
    neutrons: 50,
    isotopes: [
      { massNumber: 84, abundance: 0.0056 },
      { massNumber: 86, abundance: 0.0986 },
      { massNumber: 87, abundance: 0.0700 },
      { massNumber: 88, abundance: 0.8258 }
    ]
  },
  {
    atomicNumber: 39,
    symbol: 'Y',
    name: 'Yttrium',
    atomicMass: 88.90584,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹',
    shells: [2, 8, 18, 9, 2],
    neutrons: 50,
    isotopes: [
      { massNumber: 89, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 40,
    symbol: 'Zr',
    name: 'Zirconium',
    atomicMass: 91.224,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d²',
    shells: [2, 8, 18, 10, 2],
    neutrons: 51,
    isotopes: [
      { massNumber: 90, abundance: 0.5145 },
      { massNumber: 91, abundance: 0.1122 },
      { massNumber: 92, abundance: 0.1715 },
      { massNumber: 94, abundance: 0.1738 },
      { massNumber: 96, abundance: 0.0280 }
    ]
  },
  {
    atomicNumber: 41,
    symbol: 'Nb',
    name: 'Niobium',
    atomicMass: 92.90637,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁴',
    shells: [2, 8, 18, 12, 1],
    neutrons: 52,
    isotopes: [
      { massNumber: 93, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 42,
    symbol: 'Mo',
    name: 'Molybdenum',
    atomicMass: 95.95,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁵',
    shells: [2, 8, 18, 13, 1],
    neutrons: 54,
    isotopes: [
      { massNumber: 92, abundance: 0.1484 },
      { massNumber: 94, abundance: 0.0925 },
      { massNumber: 95, abundance: 0.1592 },
      { massNumber: 96, abundance: 0.1668 },
      { massNumber: 97, abundance: 0.0955 },
      { massNumber: 98, abundance: 0.2413 },
      { massNumber: 100, abundance: 0.0963 }
    ]
  },
  {
    atomicNumber: 43,
    symbol: 'Tc',
    name: 'Technetium',
    atomicMass: 98,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d⁵',
    shells: [2, 8, 18, 13, 2],
    neutrons: 55,
    isotopes: [
      { massNumber: 98, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 44,
    symbol: 'Ru',
    name: 'Ruthenium',
    atomicMass: 101.07,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁷',
    shells: [2, 8, 18, 15, 1],
    neutrons: 57,
    isotopes: [
      { massNumber: 96, abundance: 0.0554 },
      { massNumber: 98, abundance: 0.0187 },
      { massNumber: 99, abundance: 0.1276 },
      { massNumber: 100, abundance: 0.1260 },
      { massNumber: 101, abundance: 0.1706 },
      { massNumber: 102, abundance: 0.3155 },
      { massNumber: 104, abundance: 0.1862 }
    ]
  },
  {
    atomicNumber: 45,
    symbol: 'Rh',
    name: 'Rhodium',
    atomicMass: 102.90550,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁸',
    shells: [2, 8, 18, 16, 1],
    neutrons: 58,
    isotopes: [
      { massNumber: 103, abundance: 1.0 }
    ]
  },
  {
    atomicNumber: 46,
    symbol: 'Pd',
    name: 'Palladium',
    atomicMass: 106.42,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 4d¹⁰',
    shells: [2, 8, 18, 18],
    neutrons: 60,
    isotopes: [
      { massNumber: 102, abundance: 0.0102 },
      { massNumber: 104, abundance: 0.1114 },
      { massNumber: 105, abundance: 0.2233 },
      { massNumber: 106, abundance: 0.2733 },
      { massNumber: 108, abundance: 0.2646 },
      { massNumber: 110, abundance: 0.1172 }
    ]
  },
  {
    atomicNumber: 47,
    symbol: 'Ag',
    name: 'Silver',
    atomicMass: 107.87,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰',
    shells: [2, 8, 18, 18, 1],
    neutrons: 61,
    isotopes: [
      { massNumber: 107, abundance: 51.839 },
      { massNumber: 109, abundance: 48.161 }
    ]
  },
  {
    atomicNumber: 48,
    symbol: 'Cd',
    name: 'Cadmium',
    atomicMass: 112.41,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰',
    shells: [2, 8, 18, 18, 2],
    neutrons: 64,
    isotopes: [
      { massNumber: 106, abundance: 1.25 },
      { massNumber: 108, abundance: 0.89 },
      { massNumber: 110, abundance: 12.49 },
      { massNumber: 111, abundance: 12.80 },
      { massNumber: 112, abundance: 24.13 },
      { massNumber: 113, abundance: 12.22 },
      { massNumber: 114, abundance: 28.73 },
      { massNumber: 116, abundance: 7.49 }
    ]
  },
  {
    atomicNumber: 49,
    symbol: 'In',
    name: 'Indium',
    atomicMass: 114.82,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p¹',
    shells: [2, 8, 18, 18, 3],
    neutrons: 66,
    isotopes: [
      { massNumber: 113, abundance: 4.29 },
      { massNumber: 115, abundance: 95.71 }
    ]
  },
  {
    atomicNumber: 50,
    symbol: 'Sn',
    name: 'Tin',
    atomicMass: 118.71,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p²',
    shells: [2, 8, 18, 18, 4],
    neutrons: 69,
    isotopes: [
      { massNumber: 112, abundance: 0.97 },
      { massNumber: 114, abundance: 0.65 },
      { massNumber: 115, abundance: 0.34 },
      { massNumber: 116, abundance: 14.54 },
      { massNumber: 117, abundance: 7.68 },
      { massNumber: 118, abundance: 24.22 },
      { massNumber: 119, abundance: 8.59 },
      { massNumber: 120, abundance: 32.58 },
      { massNumber: 122, abundance: 4.63 },
      { massNumber: 124, abundance: 5.79 }
    ]
  },
  {
    atomicNumber: 51,
    symbol: 'Sb',
    name: 'Antimony',
    atomicMass: 121.76,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p³',
    shells: [2, 8, 18, 18, 5],
    neutrons: 71,
    isotopes: [
      { massNumber: 121, abundance: 57.36 },
      { massNumber: 123, abundance: 42.64 }
    ]
  },
  {
    atomicNumber: 52,
    symbol: 'Te',
    name: 'Tellurium',
    atomicMass: 127.60,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁴',
    shells: [2, 8, 18, 18, 6],
    neutrons: 76,
    isotopes: [
      { massNumber: 120, abundance: 0.096 },
      { massNumber: 122, abundance: 2.603 },
      { massNumber: 123, abundance: 0.908 },
      { massNumber: 124, abundance: 4.816 },
      { massNumber: 125, abundance: 7.139 },
      { massNumber: 126, abundance: 18.95 },
      { massNumber: 128, abundance: 31.74 },
      { massNumber: 130, abundance: 34.08 }
    ]
  },
  {
    atomicNumber: 53,
    symbol: 'I',
    name: 'Iodine',
    atomicMass: 126.90,
    category: 'halogen',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁵',
    shells: [2, 8, 18, 18, 7],
    neutrons: 74,
    isotopes: [
      { massNumber: 127, abundance: 100 }
    ]
  },
  {
    atomicNumber: 54,
    symbol: 'Xe',
    name: 'Xenon',
    atomicMass: 131.29,
    category: 'noble-gas',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶',
    shells: [2, 8, 18, 18, 8],
    neutrons: 77,
    isotopes: [
      { massNumber: 124, abundance: 0.1 },
      { massNumber: 126, abundance: 0.09 },
      { massNumber: 128, abundance: 1.92 },
      { massNumber: 129, abundance: 26.44 },
      { massNumber: 130, abundance: 4.08 },
      { massNumber: 131, abundance: 21.18 },
      { massNumber: 132, abundance: 26.89 },
      { massNumber: 134, abundance: 10.44 },
      { massNumber: 136, abundance: 8.87 }
    ]
  },
  {
    atomicNumber: 55,
    symbol: 'Cs',
    name: 'Cesium',
    atomicMass: 132.91,
    category: 'alkali-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹',
    shells: [2, 8, 18, 18, 8, 1],
    neutrons: 78,
    isotopes: [
      { massNumber: 133, abundance: 100 }
    ]
  },
  {
    atomicNumber: 56,
    symbol: 'Ba',
    name: 'Barium',
    atomicMass: 137.33,
    category: 'alkaline-earth-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s²',
    shells: [2, 8, 18, 18, 8, 2],
    neutrons: 81,
    isotopes: [
      { massNumber: 130, abundance: 0.1 },
      { massNumber: 132, abundance: 0.1 },
      { massNumber: 134, abundance: 2.42 },
      { massNumber: 135, abundance: 6.59 },
      { massNumber: 136, abundance: 7.81 },
      { massNumber: 137, abundance: 11.23 },
      { massNumber: 138, abundance: 71.7 }
    ]
  },
  {
    atomicNumber: 57,
    symbol: 'La',
    name: 'Lanthanum',
    atomicMass: 138.91,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 5d¹',
    shells: [2, 8, 18, 18, 9, 2],
    neutrons: 82,
    isotopes: [
      { massNumber: 138, abundance: 99.91 },
      { massNumber: 139, abundance: 0.09 }
    ]
  },
  {
    atomicNumber: 58,
    symbol: 'Ce',
    name: 'Cerium',
    atomicMass: 140.12,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f²',
    shells: [2, 8, 18, 19, 9, 2],
    neutrons: 82,
    isotopes: [
      { massNumber: 136, abundance: 0.19 },
      { massNumber: 138, abundance: 0.25 },
      { massNumber: 140, abundance: 88.45 },
      { massNumber: 142, abundance: 11.12 }
    ]
  },
  {
    atomicNumber: 59,
    symbol: 'Pr',
    name: 'Praseodymium',
    atomicMass: 140.91,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f³',
    shells: [2, 8, 18, 21, 8, 2],
    neutrons: 82,
    isotopes: [{ massNumber: 141, abundance: 100 }]
  },
  {
    atomicNumber: 60,
    symbol: 'Nd',
    name: 'Neodymium',
    atomicMass: 144.24,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁴',
    shells: [2, 8, 18, 22, 8, 2],
    neutrons: 84,
    isotopes: [
      { massNumber: 142, abundance: 27.2 },
      { massNumber: 143, abundance: 12.2 },
      { massNumber: 144, abundance: 23.8 },
      { massNumber: 145, abundance: 8.3 },
      { massNumber: 146, abundance: 17.2 },
      { massNumber: 148, abundance: 5.7 },
      { massNumber: 150, abundance: 5.6 }
    ]
  },
  {
    atomicNumber: 61,
    symbol: 'Pm',
    name: 'Promethium',
    atomicMass: 145,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁵',
    shells: [2, 8, 18, 23, 8, 2],
    neutrons: 84,
    isotopes: [{ massNumber: 145, abundance: 100 }] // All isotopes are radioactive
  },
  {
    atomicNumber: 62,
    symbol: 'Sm',
    name: 'Samarium',
    atomicMass: 150.36,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁶',
    shells: [2, 8, 18, 24, 8, 2],
    neutrons: 88,
    isotopes: [
      { massNumber: 144, abundance: 3.1 },
      { massNumber: 147, abundance: 14.99 },
      { massNumber: 148, abundance: 11.24 },
      { massNumber: 149, abundance: 13.82 },
      { massNumber: 150, abundance: 7.38 },
      { massNumber: 152, abundance: 26.75 },
      { massNumber: 154, abundance: 22.75 }
    ]
  },
  {
    atomicNumber: 63,
    symbol: 'Eu',
    name: 'Europium',
    atomicMass: 151.96,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁷',
    shells: [2, 8, 18, 25, 8, 2],
    neutrons: 89,
    isotopes: [
      { massNumber: 151, abundance: 47.8 },
      { massNumber: 153, abundance: 52.2 }
    ]
  },
  {
    atomicNumber: 64,
    symbol: 'Gd',
    name: 'Gadolinium',
    atomicMass: 157.25,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁷ 5d¹',
    shells: [2, 8, 18, 25, 9, 2],
    neutrons: 93,
    isotopes: [
      { massNumber: 152, abundance: 0.2 },
      { massNumber: 154, abundance: 2.18 },
      { massNumber: 155, abundance: 14.8 },
      { massNumber: 156, abundance: 20.47 },
      { massNumber: 157, abundance: 15.65 },
      { massNumber: 158, abundance: 24.84 },
      { massNumber: 160, abundance: 21.86 }
    ]
  },
  {
    atomicNumber: 65,
    symbol: 'Tb',
    name: 'Terbium',
    atomicMass: 158.93,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f⁹',
    shells: [2, 8, 18, 27, 8, 2],
    neutrons: 94,
    isotopes: [{ massNumber: 159, abundance: 100 }]
  },
  {
    atomicNumber: 66,
    symbol: 'Dy',
    name: 'Dysprosium',
    atomicMass: 162.5,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁰',
    shells: [2, 8, 18, 28, 8, 2],
    neutrons: 97,
    isotopes: [
      { massNumber: 156, abundance: 0.06 },
      { massNumber: 158, abundance: 0.1 },
      { massNumber: 160, abundance: 2.34 },
      { massNumber: 161, abundance: 18.9 },
      { massNumber: 162, abundance: 25.5 },
      { massNumber: 163, abundance: 24.9 },
      { massNumber: 164, abundance: 28.2 }
    ]
  },
  {
    atomicNumber: 67,
    symbol: 'Ho',
    name: 'Holmium',
    atomicMass: 164.93,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹¹',
    shells: [2, 8, 18, 29, 8, 2],
    neutrons: 98,
    isotopes: [{ massNumber: 165, abundance: 100 }]
  },
  {
    atomicNumber: 68,
    symbol: 'Er',
    name: 'Erbium',
    atomicMass: 167.26,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹²',
    shells: [2, 8, 18, 30, 8, 2],
    neutrons: 99,
    isotopes: [
      { massNumber: 162, abundance: 0.14 },
      { massNumber: 164, abundance: 1.61 },
      { massNumber: 166, abundance: 33.6 },
      { massNumber: 167, abundance: 22.95 },
      { massNumber: 168, abundance: 26.8 },
      { massNumber: 170, abundance: 14.93 }
    ]
  },
  {
    atomicNumber: 69,
    symbol: 'Tm',
    name: 'Thulium',
    atomicMass: 168.93,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹³',
    shells: [2, 8, 18, 31, 8, 2],
    neutrons: 100,
    isotopes: [{ massNumber: 169, abundance: 100 }]
  },
  {
    atomicNumber: 70,
    symbol: 'Yb',
    name: 'Ytterbium',
    atomicMass: 173.05,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴',
    shells: [2, 8, 18, 32, 8, 2],
    neutrons: 103,
    isotopes: [
      { massNumber: 168, abundance: 0.13 },
      { massNumber: 170, abundance: 2.98 },
      { massNumber: 171, abundance: 14.13 },
      { massNumber: 172, abundance: 21.83 },
      { massNumber: 173, abundance: 16.13 },
      { massNumber: 174, abundance: 31.83 },
      { massNumber: 176, abundance: 12.76 }
    ]
  },
  {
    atomicNumber: 71,
    symbol: 'Lu',
    name: 'Lutetium',
    atomicMass: 174.97,
    category: 'lanthanide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹',
    shells: [2, 8, 18, 32, 9, 2],
    neutrons: 104,
    isotopes: [
      { massNumber: 175, abundance: 97.41 },
      { massNumber: 176, abundance: 2.59 }
    ]
  },
  {
    atomicNumber: 72,
    symbol: 'Hf',
    name: 'Hafnium',
    atomicMass: 178.49,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d²',
    shells: [2, 8, 18, 32, 10, 2],
    neutrons: 106,
    isotopes: [
      { massNumber: 176, abundance: 5.26 },
      { massNumber: 177, abundance: 18.6 },
      { massNumber: 178, abundance: 27.28 },
      { massNumber: 179, abundance: 13.62 },
      { massNumber: 180, abundance: 35.08 }
    ]
  },
  {
    atomicNumber: 73,
    symbol: 'Ta',
    name: 'Tantalum',
    atomicMass: 180.95,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d³',
    shells: [2, 8, 18, 32, 11, 2],
    neutrons: 108,
    isotopes: [
      { massNumber: 180, abundance: 0.012 },
      { massNumber: 181, abundance: 99.988 }
    ]
  },
  {
    atomicNumber: 74,
    symbol: 'W',
    name: 'Tungsten',
    atomicMass: 183.84,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁴',
    shells: [2, 8, 18, 32, 12, 2],
    neutrons: 110,
    isotopes: [
      { massNumber: 180, abundance: 0.12 },
      { massNumber: 182, abundance: 26.5 },
      { massNumber: 183, abundance: 14.3 },
      { massNumber: 184, abundance: 30.64 },
      { massNumber: 186, abundance: 28.43 }
    ]
  },
  {
    atomicNumber: 75,
    symbol: 'Re',
    name: 'Rhenium',
    atomicMass: 186.21,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁵',
    shells: [2, 8, 18, 32, 13, 2],
    neutrons: 111,
    isotopes: [
      { massNumber: 185, abundance: 37.4 },
      { massNumber: 187, abundance: 62.6 }
    ]
  },
  {
    atomicNumber: 76,
    symbol: 'Os',
    name: 'Osmium',
    atomicMass: 190.23,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁶',
    shells: [2, 8, 18, 32, 14, 2],
    neutrons: 114,
    isotopes: [
      { massNumber: 184, abundance: 0.02 },
      { massNumber: 186, abundance: 1.58 },
      { massNumber: 187, abundance: 1.6 },
      { massNumber: 188, abundance: 13.3 },
      { massNumber: 189, abundance: 16.1 },
      { massNumber: 190, abundance: 26.4 },
      { massNumber: 192, abundance: 41.0 }
    ]
  },
  {
    atomicNumber: 77,
    symbol: 'Ir',
    name: 'Iridium',
    atomicMass: 192.22,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d⁷',
    shells: [2, 8, 18, 32, 15, 2],
    neutrons: 115,
    isotopes: [
      { massNumber: 191, abundance: 37.3 },
      { massNumber: 193, abundance: 62.7 }
    ]
  },
  {
    atomicNumber: 78,
    symbol: 'Pt',
    name: 'Platinum',
    atomicMass: 195.08,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d⁹',
    shells: [2, 8, 18, 32, 17, 1],
    neutrons: 117,
    isotopes: [
      { massNumber: 190, abundance: 0.01 },
      { massNumber: 192, abundance: 0.79 },
      { massNumber: 194, abundance: 32.9 },
      { massNumber: 195, abundance: 33.8 },
      { massNumber: 196, abundance: 25.3 },
      { massNumber: 198, abundance: 7.2 }
    ]
  },
  {
    atomicNumber: 79,
    symbol: 'Au',
    name: 'Gold',
    atomicMass: 196.97,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d¹⁰',
    shells: [2, 8, 18, 32, 18, 1],
    neutrons: 118,
    isotopes: [{ massNumber: 197, abundance: 100 }]
  },
  {
    atomicNumber: 80,
    symbol: 'Hg',
    name: 'Mercury',
    atomicMass: 200.59,
    category: 'transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰',
    shells: [2, 8, 18, 32, 18, 2],
    neutrons: 121,
    isotopes: [
      { massNumber: 196, abundance: 0.15 },
      { massNumber: 198, abundance: 9.97 },
      { massNumber: 199, abundance: 16.87 },
      { massNumber: 200, abundance: 23.1 },
      { massNumber: 201, abundance: 13.18 },
      { massNumber: 202, abundance: 29.86 },
      { massNumber: 204, abundance: 6.87 }
    ]
  },
  {
    atomicNumber: 81,
    symbol: 'Tl',
    name: 'Thallium',
    atomicMass: 204.38,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p¹',
    shells: [2, 8, 18, 32, 18, 3],
    neutrons: 123,
    isotopes: [
      { massNumber: 203, abundance: 29.52 },
      { massNumber: 205, abundance: 70.48 }
    ]
  },
  {
    atomicNumber: 82,
    symbol: 'Pb',
    name: 'Lead',
    atomicMass: 207.2,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p²',
    shells: [2, 8, 18, 32, 18, 4],
    neutrons: 125,
    isotopes: [
      { massNumber: 204, abundance: 1.4 },
      { massNumber: 206, abundance: 24.1 },
      { massNumber: 207, abundance: 22.1 },
      { massNumber: 208, abundance: 52.4 }
    ]
  },
  {
    atomicNumber: 83,
    symbol: 'Bi',
    name: 'Bismuth',
    atomicMass: 208.98,
    category: 'post-transition-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p³',
    shells: [2, 8, 18, 32, 18, 5],
    neutrons: 126,
    isotopes: [{ massNumber: 209, abundance: 100 }]
  },
  {
    atomicNumber: 84,
    symbol: 'Po',
    name: 'Polonium',
    atomicMass: 209,
    category: 'metalloid',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁴',
    shells: [2, 8, 18, 32, 18, 6],
    neutrons: 125,
    isotopes: [{ massNumber: 209, abundance: 100 }]
  },
  {
    atomicNumber: 85,
    symbol: 'At',
    name: 'Astatine',
    atomicMass: 210,
    category: 'halogen',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁵',
    shells: [2, 8, 18, 32, 18, 7],
    neutrons: 125,
    isotopes: [{ massNumber: 210, abundance: 100 }]
  },
  {
    atomicNumber: 86,
    symbol: 'Rn',
    name: 'Radon',
    atomicMass: 222,
    category: 'noble-gas',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶',
    shells: [2, 8, 18, 32, 18, 8],
    neutrons: 136,
    isotopes: [{ massNumber: 222, abundance: 100 }]
  },
  {
    atomicNumber: 87,
    symbol: 'Fr',
    name: 'Francium',
    atomicMass: 223,
    category: 'alkali-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s¹',
    shells: [2, 8, 18, 32, 18, 8, 1],
    neutrons: 136,
    isotopes: [{ massNumber: 223, abundance: 100 }]
  },
  {
    atomicNumber: 88,
    symbol: 'Ra',
    name: 'Radium',
    atomicMass: 226,
    category: 'alkaline-earth-metal',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s²',
    shells: [2, 8, 18, 32, 18, 8, 2],
    neutrons: 138,
    isotopes: [{ massNumber: 226, abundance: 100 }]
  },
  {
    atomicNumber: 89,
    symbol: 'Ac',
    name: 'Actinium',
    atomicMass: 227,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d¹',
    shells: [2, 8, 18, 32, 18, 9, 2],
    neutrons: 138,
    isotopes: [{ massNumber: 227, abundance: 100 }]
  },
  {
    atomicNumber: 90,
    symbol: 'Th',
    name: 'Thorium',
    atomicMass: 232.04,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 6d²',
    shells: [2, 8, 18, 32, 18, 10, 2],
    neutrons: 142,
    isotopes: [{ massNumber: 232, abundance: 100 }]
  },
  {
    atomicNumber: 91,
    symbol: 'Pa',
    name: 'Protactinium',
    atomicMass: 231.04,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f² 6d¹',
    shells: [2, 8, 18, 32, 20, 9, 2],
    neutrons: 140,
    isotopes: [{ massNumber: 231, abundance: 100 }]
  },
  {
    atomicNumber: 92,
    symbol: 'U',
    name: 'Uranium',
    atomicMass: 238.03,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f³ 6d¹',
    shells: [2, 8, 18, 32, 21, 9, 2],
    neutrons: 146,
    isotopes: [
      { massNumber: 234, abundance: 0.0055 },
      { massNumber: 235, abundance: 0.720 },
      { massNumber: 238, abundance: 99.274 }
    ]
  },
  {
    atomicNumber: 93,
    symbol: 'Np',
    name: 'Neptunium',
    atomicMass: 237,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁴ 6d¹',
    shells: [2, 8, 18, 32, 22, 9, 2],
    neutrons: 144,
    isotopes: [{ massNumber: 237, abundance: 100 }]
  },
  {
    atomicNumber: 94,
    symbol: 'Pu',
    name: 'Plutonium',
    atomicMass: 244,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁶',
    shells: [2, 8, 18, 32, 24, 8, 2],
    neutrons: 150,
    isotopes: [{ massNumber: 244, abundance: 100 }]
  },
  {
    atomicNumber: 95,
    symbol: 'Am',
    name: 'Americium',
    atomicMass: 243,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷',
    shells: [2, 8, 18, 32, 25, 8, 2],
    neutrons: 148,
    isotopes: [{ massNumber: 243, abundance: 100 }]
  },
  {
    atomicNumber: 96,
    symbol: 'Cm',
    name: 'Curium',
    atomicMass: 247,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁷',
    shells: [2, 8, 18, 32, 25, 9, 2],
    neutrons: 151,
    isotopes: [{ massNumber: 247, abundance: 100 }]
  },
  {
    atomicNumber: 97,
    symbol: 'Bk',
    name: 'Berkelium',
    atomicMass: 247,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f⁹',
    shells: [2, 8, 18, 32, 27, 8, 2],
    neutrons: 150,
    isotopes: [{ massNumber: 247, abundance: 100 }]
  },
  {
    atomicNumber: 98,
    symbol: 'Cf',
    name: 'Californium',
    atomicMass: 251,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁰',
    shells: [2, 8, 18, 32, 28, 8, 2],
    neutrons: 153,
    isotopes: [{ massNumber: 251, abundance: 100 }]
  },
  {
    atomicNumber: 99,
    symbol: 'Es',
    name: 'Einsteinium',
    atomicMass: 252,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹¹',
    shells: [2, 8, 18, 32, 29, 8, 2],
    neutrons: 153,
    isotopes: [{ massNumber: 252, abundance: 100 }]
  },
  {
    atomicNumber: 100,
    symbol: 'Fm',
    name: 'Fermium',
    atomicMass: 257,
    category: 'actinide',
    electronConfiguration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹²',
    shells: [2, 8, 18, 32, 30, 8, 2],
    neutrons: 157,
    isotopes: [{ massNumber: 257, abundance: 100 }]
  },
  {
    atomicNumber: 101,
    symbol: 'Md',
    name: 'Mendelevium',
    atomicMass: 258,
    category: 'actinide',
    electronConfiguration: '[Rn] 5f¹³ 7s²',
    shells: [2, 8, 18, 32, 31, 8, 2],
    neutrons: 157,
    isotopes: [{ massNumber: 258, abundance: 100 }] // All isotopes are synthetic
  },
  {
    atomicNumber: 102,
    symbol: 'No',
    name: 'Nobelium',
    atomicMass: 259,
    category: 'actinide',
    electronConfiguration: '[Rn] 5f¹⁴ 7s²',
    shells: [2, 8, 18, 32, 32, 8, 2],
    neutrons: 157,
    isotopes: [{ massNumber: 259, abundance: 100 }]
  },
  {
    atomicNumber: 103,
    symbol: 'Lr',
    name: 'Lawrencium',
    atomicMass: 266,
    category: 'actinide',
    electronConfiguration: '[Rn] 5f¹⁴ 7s² 7p¹',
    shells: [2, 8, 18, 32, 32, 8, 3],
    neutrons: 159,
    isotopes: [{ massNumber: 266, abundance: 100 }]
  },
  {
    atomicNumber: 104,
    symbol: 'Rf',
    name: 'Rutherfordium',
    atomicMass: 267,
    category: 'transition-metal',
    electronConfiguration: '[Rn] 5f¹⁴ 6d² 7s²',
    shells: [2, 8, 18, 32, 32, 10, 2],
    neutrons: 163,
    isotopes: [{ massNumber: 267, abundance: 100 }]
  },
  {
    atomicNumber: 105,
    symbol: 'Db',
    name: 'Dubnium',
    atomicMass: 270,
    category: 'transition-metal',
    electronConfiguration: '[Rn] 5f¹⁴ 6d³ 7s²',
    shells: [2, 8, 18, 32, 32, 11, 2],
    neutrons: 163,
    isotopes: [{ massNumber: 270, abundance: 100 }]
  },
  {
    atomicNumber: 106,
    symbol: 'Sg',
    name: 'Seaborgium',
    atomicMass: 271,
    category: 'transition-metal',
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁴ 7s²',
    shells: [2, 8, 18, 32, 32, 12, 2],
    neutrons: 165,
    isotopes: [{ massNumber: 271, abundance: 100 }]
  },
  {
    atomicNumber: 107,
    symbol: 'Bh',
    name: 'Bohrium',
    atomicMass: 270,
    category: 'transition-metal',
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁵ 7s²',
    shells: [2, 8, 18, 32, 32, 13, 2],
    neutrons: 163,
    isotopes: [{ massNumber: 270, abundance: 100 }]
  },
  {
    atomicNumber: 108,
    symbol: 'Hs',
    name: 'Hassium',
    atomicMass: 277,
    category: 'transition-metal',
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁶ 7s²',
    shells: [2, 8, 18, 32, 32, 14, 2],
    neutrons: 169,
    isotopes: [{ massNumber: 277, abundance: 100 }]
  },
  {
    atomicNumber: 109,
    symbol: 'Mt',
    name: 'Meitnerium',
    atomicMass: 278,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁷ 7s²',
    shells: [2, 8, 18, 32, 32, 15, 2],
    neutrons: 169,
    isotopes: [{ massNumber: 278, abundance: 100 }]
  },
  {
    atomicNumber: 110,
    symbol: 'Ds',
    name: 'Darmstadtium',
    atomicMass: 281,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁸ 7s²',
    shells: [2, 8, 18, 32, 32, 16, 2],
    neutrons: 171,
    isotopes: [{ massNumber: 281, abundance: 100 }]
  },
  {
    atomicNumber: 111,
    symbol: 'Rg',
    name: 'Roentgenium',
    atomicMass: 282,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁹ 7s²',
    shells: [2, 8, 18, 32, 32, 17, 2],
    neutrons: 171,
    isotopes: [{ massNumber: 282, abundance: 100 }]
  },
  {
    atomicNumber: 112,
    symbol: 'Cn',
    name: 'Copernicium',
    atomicMass: 285,
    category: 'transition-metal',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
    shells: [2, 8, 18, 32, 32, 18, 2],
    neutrons: 173,
    isotopes: [{ massNumber: 285, abundance: 100 }]
  },
  {
    atomicNumber: 113,
    symbol: 'Nh',
    name: 'Nihonium',
    atomicMass: 286,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
    shells: [2, 8, 18, 32, 32, 18, 3],
    neutrons: 173,
    isotopes: [{ massNumber: 286, abundance: 100 }]
  },
  {
    atomicNumber: 114,
    symbol: 'Fl',
    name: 'Flerovium',
    atomicMass: 289,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
    shells: [2, 8, 18, 32, 32, 18, 4],
    neutrons: 175,
    isotopes: [{ massNumber: 289, abundance: 100 }]
  },
  {
    atomicNumber: 115,
    symbol: 'Mc',
    name: 'Moscovium',
    atomicMass: 290,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
    shells: [2, 8, 18, 32, 32, 18, 5],
    neutrons: 175,
    isotopes: [{ massNumber: 290, abundance: 100 }]
  },
  {
    atomicNumber: 116,
    symbol: 'Lv',
    name: 'Livermorium',
    atomicMass: 293,
    category: 'unknown',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
    shells: [2, 8, 18, 32, 32, 18, 6],
    neutrons: 177,
    isotopes: [{ massNumber: 293, abundance: 100 }]
  },
  {
    atomicNumber: 117,
    symbol: 'Ts',
    name: 'Tennessine',
    atomicMass: 294,
    category: 'unknown'  ,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
    shells: [2, 8, 18, 32, 32, 18, 7],
    neutrons: 177,
    isotopes: [{ massNumber: 294, abundance: 100 }]
  },
  {
    atomicNumber: 118,
    symbol: 'Og',
    name: 'Oganesson',
    atomicMass: 294,
    category: 'noble-gas',
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
    shells: [2, 8, 18, 32, 32, 18, 8],
    neutrons: 176,
    isotopes: [{ massNumber: 294, abundance: 100 }]
  }
];
