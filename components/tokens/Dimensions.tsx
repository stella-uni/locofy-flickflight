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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Key</th>
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">rem</th>
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">px</th>
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Visual</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(spacing)
                .sort(([a], [b]) => {
                  // 숫자 우선 정렬, 그 다음 소수점, 마지막으로 문자열
                  const numA = parseFloat(a);
                  const numB = parseFloat(b);
                  if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
                  if (a === 'px') return -1;
                  if (b === 'px') return 1;
                  return a.localeCompare(b);
                })
                .map(([key, value]) => {
                  const pxValue = parseFloat(value);
                  const remValue = pxValue / 16;
                  let remString = '0rem';
                  if (pxValue === 0) {
                    remString = '0rem';
                  } else if (remValue % 1 === 0) {
                    remString = `${remValue}rem`;
                  } else {
                    // 소수점 3자리까지 표시하되, 불필요한 0 제거
                    const formatted = remValue.toFixed(3);
                    remString = `${parseFloat(formatted)}rem`;
                  }
                  
                  return (
                    <tr
                      key={key}
                      className="border-b border-border-secondary hover:bg-background-background-secondary transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-content-content-primary font-mono text-sm">
                        {key}
                      </td>
                      <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                        {remString}
                      </td>
                      <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                        {value}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-4 bg-blue-500 rounded border border-blue-600"
                            style={{ width: `${Math.min(pxValue, 384)}px`, minWidth: '2px' }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Border Radius */}
      <div className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
        <h3 className="text-xl font-semibold mb-4 text-content-content-primary">Border Radius</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Key</th>
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">rem</th>
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">px</th>
                <th className="text-left py-3 px-4 font-semibold text-content-content-primary">Visual</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(borderRadius)
                .sort(([, a], [, b]) => {
                  // px 값 기준으로 정렬 (full는 마지막에)
                  if (a === '9999px') return 1;
                  if (b === '9999px') return -1;
                  return parseFloat(a) - parseFloat(b);
                })
                .map(([key, value]) => {
                  const pxValue = parseFloat(value);
                  const remValue = pxValue / 16;
                  let remString = '0rem';
                  if (pxValue === 0) {
                    remString = '0rem';
                  } else if (value === '9999px') {
                    remString = 'full';
                  } else if (remValue % 1 === 0) {
                    remString = `${remValue}rem`;
                  } else {
                    const formatted = remValue.toFixed(3);
                    remString = `${parseFloat(formatted)}rem`;
                  }
                  
                  return (
                    <tr
                      key={key}
                      className="border-b border-border-secondary hover:bg-background-background-secondary transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-content-content-primary font-mono text-sm">
                        {key}
                      </td>
                      <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                        {remString}
                      </td>
                      <td className="py-3 px-4 text-content-content-secondary font-mono text-sm">
                        {value}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-16 h-16 bg-blue-500 border-2 border-blue-600 flex-shrink-0"
                            style={{ borderRadius: value }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dimensions;

