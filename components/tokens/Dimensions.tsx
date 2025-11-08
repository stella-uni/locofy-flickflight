import React from 'react';

// Dimensions are same as Tailwind defaults, but we'll show them for reference
const Dimensions = () => {
  const spacing = {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
    36: '144px',
    40: '160px',
    44: '176px',
    48: '192px',
    52: '208px',
    56: '224px',
    60: '240px',
    64: '256px',
    72: '288px',
    80: '320px',
    96: '384px',
    px: '1px',
    0.5: '2px',
    1.5: '6px',
    2.5: '10px',
    3.5: '14px',
  };

  const borderRadius = {
    none: '0px',
    sm: '2px',
    DEFAULT: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Dimensions</h2>

      {/* Spacing */}
      <div className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
        <h3 className="text-xl font-semibold mb-4 text-content-content-primary">Spacing</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Object.entries(spacing).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 p-3 rounded border border-border-primary hover:bg-background-background-secondary transition-colors"
            >
              <div
                className="w-full h-8 rounded bg-background-background-tertiary border border-border-primary"
                style={{ height: value }}
              />
              <div className="text-center">
                <div className="font-medium text-content-content-primary text-sm">{key}</div>
                <div className="text-xs text-content-content-secondary font-mono">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
        <h3 className="text-xl font-semibold mb-4 text-content-content-primary">Border Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Object.entries(borderRadius).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 p-3 rounded border border-border-primary hover:bg-background-background-secondary transition-colors"
            >
              <div
                className="w-16 h-16 bg-background-background-tertiary border-2 border-border-primary"
                style={{ borderRadius: value }}
              />
              <div className="text-center">
                <div className="font-medium text-content-content-primary text-sm">{key}</div>
                <div className="text-xs text-content-content-secondary font-mono">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dimensions;

