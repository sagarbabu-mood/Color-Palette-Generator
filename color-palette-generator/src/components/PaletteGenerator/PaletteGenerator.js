import React from 'react';

function PaletteGenerator({ colors, generateRandomPalette, savePalette }) {

    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard`);
      };

  return (
    <div className="palette-generator">
      <button onClick={generateRandomPalette}>Generate Palette</button>
      <div className="palette">
        {colors.map((color, index) => (
          <div key={index} className="color-block" style={{ backgroundColor: color }}>
            <span onClick={() => copyToClipboard(color)}>{color}</span>
          </div>
        ))}
      </div>
      <button onClick={savePalette} disabled={!colors.length}>Save Palette</button>
      
    </div>
  );
}

export default PaletteGenerator;
