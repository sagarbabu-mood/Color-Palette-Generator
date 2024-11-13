import React from 'react';

function SavedPalettes({ savedPalettes, deletePalette }) {
  return (
    <div className="saved-palettes">
      <h2>Saved Palettes</h2>
      {savedPalettes.length === 0 ? (
        <p>No saved palettes</p>
      ) : (
        savedPalettes.map((palette) => (
          <div key={palette.id} className="saved-palette">
            <div className="colors">
              {palette.colors.map((color, index) => (
                <div key={index} className="color-block" style={{ backgroundColor: color }}>
                  <span>{color}</span>
                </div>
              ))}
            </div>
            <button onClick={() => deletePalette(palette.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedPalettes;
