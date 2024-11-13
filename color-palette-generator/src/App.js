import React, { useState, useEffect } from 'react';
import PaletteGenerator from './components/PaletteGenerator/PaletteGenerator';
import SavedPalettes from './components/SavedPalettes/SavedPalettes';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    const storedPalettes = JSON.parse(localStorage.getItem('savedPalettes')) || [];
    setSavedPalettes(storedPalettes);
  }, []);

  useEffect(() => {
    localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
  }, [savedPalettes]);

  const generateRandomPalette = () => {
    const newColors = Array.from({ length: 5 }, () =>
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    );
    setColors(newColors);
  };

  const savePalette = () => {
    const palette = { id: Date.now(), colors };
    setSavedPalettes([...savedPalettes, palette]);
  };

  const deletePalette = (id) => {
    setSavedPalettes(savedPalettes.filter((palette) => palette.id !== id));
  };

  return (
    <div className="App">
      <h1>Color Palette Generator</h1>
      <PaletteGenerator colors={colors} generateRandomPalette={generateRandomPalette} savePalette={savePalette} />
      <SavedPalettes savedPalettes={savedPalettes} deletePalette={deletePalette} />
    </div>
  );
}

export default App;

