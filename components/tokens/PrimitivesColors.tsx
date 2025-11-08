import React from 'react';
import primitives from '../../tokens/source/primitives.json';

interface ColorRamp {
  [key: string]: {
    $type: string;
    $value: string;
  };
}

interface ColorPalette {
  [colorName: string]: ColorRamp;
}

const PrimitivesColors = () => {
  const palettes = primitives as ColorPalette;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6 text-content-content-primary">Primitives - Colors</h2>
      <div className="grid grid-cols-1 gap-8">
        {Object.entries(palettes).map(([colorName, ramp]) => {
          const sortedShades = Object.entries(ramp).sort(([a], [b]) => {
            // Sort by number: 50, 100, 200, etc.
            const numA = parseInt(a) || 0;
            const numB = parseInt(b) || 0;
            return numA - numB;
          });

          return (
            <div
              key={colorName}
              className="border rounded-lg p-6 bg-background-background-primary border-border-primary"
            >
              <h3 className="text-xl font-semibold mb-4 text-content-content-primary">
                {colorName}
              </h3>
              {/* Color Ramp - Horizontal display like Figma */}
              <div className="flex rounded-lg overflow-hidden border border-border-primary mb-4 h-24">
                {sortedShades.map(([shade, token]) => {
                  const shadeNum = parseInt(shade) || 0;
                  const isDark = shadeNum >= 500;
                  return (
                    <div
                      key={shade}
                      className="flex-1 flex flex-col items-center justify-center p-2 hover:opacity-90 transition-opacity cursor-pointer group relative"
                      style={{ backgroundColor: token.$value }}
                      title={`${colorName} ${shade}: ${token.$value}`}
                    >
                      <div
                        className={`text-xs font-semibold mb-0.5 ${
                          isDark ? 'text-white' : 'text-content-content-primary'
                        }`}
                      >
                        {shade}
                      </div>
                      <div
                        className={`text-[10px] font-mono ${
                          isDark ? 'text-white/90' : 'text-content-content-secondary'
                        }`}
                      >
                        {token.$value}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Detailed list */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {sortedShades.map(([shade, token]) => (
                  <div
                    key={shade}
                    className="flex items-center gap-2 p-2 rounded hover:bg-background-background-secondary transition-colors border border-border-primary"
                  >
                    <div
                      className="w-10 h-10 rounded border border-border-primary flex-shrink-0"
                      style={{ backgroundColor: token.$value }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-content-content-primary text-sm">
                        {shade}
                      </div>
                      <div className="text-xs text-content-content-secondary font-mono truncate">
                        {token.$value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrimitivesColors;

