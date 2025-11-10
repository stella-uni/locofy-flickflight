import React from 'react';

// Font weight mapping
const fontWeightMap: Record<string, string> = {
  'Medium': '500',
  'Semi Bold': '600',
  'Bold': '700',
  'Regular': '400',
  'Extra Bold': '800',
};

// Resolve reference like {fontSize.0} -> 12
function resolveReference(ref: string, data: any): any {
  if (!ref.startsWith('{') || !ref.endsWith('}')) {
    return ref;
  }
  
  const path = ref.slice(1, -1).split('.');
  let current: any = data;
  
  for (const key of path) {
    if (current && current[key]) {
      if (current[key].value !== undefined) {
        current = current[key].value;
      } else {
        current = current[key];
      }
    } else {
      return ref;
    }
  }
  
  return current;
}

// Parse typography token
function parseTypography(token: any, data: any) {
  const value = token.value || token;
  
  const fontSize = resolveReference(value.fontSize, data);
  const lineHeight = resolveReference(value.lineHeight, data);
  const fontWeight = resolveReference(value.fontWeight, data);
  const letterSpacing = resolveReference(value.letterSpacing, data);
  const fontFamily = resolveReference(value.fontFamily, data);
  
  return {
    fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    lineHeight: typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight,
    fontWeight: fontWeightMap[fontWeight as string] || fontWeight,
    letterSpacing: letterSpacing,
    fontFamily: fontFamily?.replace('Inter', 'Roboto') || 'Roboto',
  };
}

// Convert px to rem
function pxToRem(px: string): string {
  const num = parseFloat(px);
  if (isNaN(num)) return px;
  const rem = num / 16;
  return rem % 1 === 0 ? `${rem}rem` : `${rem.toFixed(3)}rem`;
}

// Get Tailwind class for font size
function getTailwindClass(size: string): string {
  const num = parseFloat(size);
  if (isNaN(num)) return '';
  
  const sizeMap: Record<number, string> = {
    12: 'text-xs',
    14: 'text-sm',
    16: 'text-base',
    18: 'text-lg',
    20: 'text-xl',
    24: 'text-2xl',
    30: 'text-3xl',
    36: 'text-4xl',
    48: 'text-5xl',
    60: 'text-6xl',
    72: 'text-7xl',
    96: 'text-8xl',
    128: 'text-9xl',
  };
  
  return sizeMap[Math.round(num)] || '';
}

const Typography = () => {
  // Load typography JSON (we'll need to import it or fetch it)
  // For now, let's create a component that will work with the JSON structure
  
  const typographyData = {
    Display: {
      'Extra Large': { fontSize: 128, lineHeight: 128, fontWeight: 'Extra Bold', letterSpacing: '-4%' },
      'Large': { fontSize: 96, lineHeight: 96, fontWeight: 'Extra Bold', letterSpacing: '-2.5%' },
      'Medium': { fontSize: 72, lineHeight: 72, fontWeight: 'Extra Bold', letterSpacing: '-2.5%' },
      'Small': { fontSize: 60, lineHeight: 60, fontWeight: 'Extra Bold', letterSpacing: '-2.5%' },
      'Tiny': { fontSize: 48, lineHeight: 48, fontWeight: 'Extra Bold', letterSpacing: '-2.5%' },
    },
    Heading: {
      'Large': { fontSize: 36, lineHeight: 40, fontWeight: 'Bold', letterSpacing: '-2.5%' },
      'Medium': { fontSize: 30, lineHeight: 36, fontWeight: 'Bold', letterSpacing: '-2.5%' },
      'Small': { fontSize: 24, lineHeight: 32, fontWeight: 'Bold', letterSpacing: '-2.5%' },
      'Tiny': { fontSize: 20, lineHeight: 28, fontWeight: 'Bold', letterSpacing: '-2.5%' },
    },
    Label: {
      'Large': { fontSize: 18, lineHeight: 28, fontWeight: 'Medium', letterSpacing: '0%' },
      'Base': { fontSize: 16, lineHeight: 24, fontWeight: 'Medium', letterSpacing: '0%' },
      'Small': { fontSize: 14, lineHeight: 20, fontWeight: 'Medium', letterSpacing: '0%' },
      'Tiny': { fontSize: 12, lineHeight: 16, fontWeight: 'Medium', letterSpacing: '0%' },
    },
    Paragraph: {
      'Large': { fontSize: 18, lineHeight: 28, fontWeight: 'Regular', letterSpacing: '0%' },
      'Base': { fontSize: 16, lineHeight: 24, fontWeight: 'Regular', letterSpacing: '0%' },
      'Small': { fontSize: 14, lineHeight: 20, fontWeight: 'Regular', letterSpacing: '0%' },
      'Tiny': { fontSize: 12, lineHeight: 16, fontWeight: 'Regular', letterSpacing: '0%' },
    },
  };

  const categories = Object.keys(typographyData) as Array<keyof typeof typographyData>;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Typography</h2>
      
      {categories.map((category) => {
        const styles = typographyData[category];
        const styleNames = Object.keys(styles) as Array<keyof typeof styles>;
        
        return (
          <div key={category} className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
            <h3 className="text-xl font-semibold mb-4 text-content-content-primary">{category}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border-primary">
                    <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Size</th>
                    <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Properties</th>
                    <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Tailwind</th>
                    <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Font Size (rem)</th>
                    <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Line Height (rem)</th>
                  </tr>
                </thead>
                <tbody>
                  {styleNames.map((styleName) => {
                    const style = styles[styleName];
                    const fontSizePx = `${style.fontSize}px`;
                    const lineHeightPx = `${style.lineHeight}px`;
                    const fontSizeRem = pxToRem(fontSizePx);
                    const lineHeightRem = pxToRem(lineHeightPx);
                    const tailwindClass = getTailwindClass(fontSizePx);
                    
                    return (
                      <React.Fragment key={styleName}>
                        <tr className="border-b border-border-secondary hover:bg-background-background-secondary transition-colors">
                          <td className="py-3 px-4 font-medium text-content-content-primary text-sm">
                            {styleName}
                          </td>
                          <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                            {fontSizePx} - {lineHeightPx} {style.fontWeight} {style.letterSpacing}
                          </td>
                          <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                            {tailwindClass || '-'}
                          </td>
                          <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                            {fontSizeRem}
                          </td>
                          <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                            {lineHeightRem}
                          </td>
                        </tr>
                        <tr className="border-b border-border-secondary">
                          <td colSpan={5} className="py-4 px-4">
                            <div 
                              className="text-content-content-primary"
                              style={{
                                fontSize: fontSizePx,
                                lineHeight: lineHeightPx,
                                fontWeight: fontWeightMap[style.fontWeight] || style.fontWeight,
                                letterSpacing: style.letterSpacing,
                                fontFamily: 'Inter, sans-serif',
                              }}
                            >
                              The quick brown fox jumps over the lazy dog
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Typography;

