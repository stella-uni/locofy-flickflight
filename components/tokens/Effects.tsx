import React from 'react';

// Convert shadow object to CSS box-shadow string
function shadowToCSS(shadow: any): string {
  if (Array.isArray(shadow)) {
    return shadow.map(s => shadowToCSS(s)).join(', ');
  }
  
  if (shadow.type === 'dropShadow') {
    return `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
  }
  
  if (shadow.type === 'innerShadow') {
    return `inset ${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
  }
  
  return '';
}

// Shadow data from Figma
const shadowData = {
  'Drop Shadow': {
    'shadow-sm': {
      value: {
        color: '#0000000d',
        type: 'dropShadow',
        x: 0,
        y: 1,
        blur: 2,
        spread: 0,
      },
    },
    'shadow-base': {
      value: [
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 1,
          blur: 2,
          spread: -1,
        },
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 1,
          blur: 3,
          spread: 0,
        },
      ],
    },
    'shadow-md': {
      value: [
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 2,
          blur: 4,
          spread: -2,
        },
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 4,
          blur: 6,
          spread: -1,
        },
      ],
    },
    'shadow-lg': {
      value: [
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 4,
          blur: 6,
          spread: -4,
        },
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 10,
          blur: 15,
          spread: -3,
        },
      ],
    },
    'shadow-xl': {
      value: [
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 8,
          blur: 10,
          spread: -6,
        },
        {
          color: '#0000001a',
          type: 'dropShadow',
          x: 0,
          y: 20,
          blur: 25,
          spread: -5,
        },
      ],
    },
    'shadow-2xl': {
      value: {
        color: '#00000040',
        type: 'dropShadow',
        x: 0,
        y: 25,
        blur: 50,
        spread: -12,
      },
    },
  },
  'Inner Shadow': {
    'shadow-sm': {
      value: {
        color: '#ffffff26',
        type: 'innerShadow',
        x: 0,
        y: 2,
        blur: 0,
        spread: 0,
      },
    },
  },
};

const Effects = () => {
  const categories = Object.keys(shadowData) as Array<keyof typeof shadowData>;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Effects</h2>
      
      {categories.map((category) => {
        const shadows = shadowData[category];
        const shadowNames = Object.keys(shadows) as Array<keyof typeof shadows>;
        
        return (
          <div key={category} className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
            <h3 className="text-xl font-semibold mb-4 text-content-content-primary">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Light Mode Column */}
              <div>
                <div className="text-sm font-semibold text-content-content-primary mb-3 pb-2 border-b border-border-primary">
                  Light Mode
                </div>
                <div className="space-y-4">
                  {shadowNames.map((shadowName) => {
                    const shadow = shadows[shadowName];
                    const shadowValue = shadow.value;
                    const isInnerShadow = category === 'Inner Shadow';
                    
                    // Light mode: Inner Shadow는 어두운 색상 사용
                    let lightModeShadow = shadowValue;
                    if (isInnerShadow && typeof shadowValue === 'object' && shadowValue.type === 'innerShadow') {
                      lightModeShadow = {
                        ...shadowValue,
                        color: '#0000001a', // 어두운 그림자
                      };
                    }
                    
                    const boxShadow = shadowToCSS(lightModeShadow);
                    
                    return (
                      <div
                        key={`light-${shadowName}`}
                        className="flex items-center gap-4 p-4 rounded border border-border-primary hover:bg-background-background-secondary transition-colors"
                      >
                        <div
                          className="w-24 h-24 rounded-lg bg-background-background-primary border border-border-primary flex-shrink-0"
                          style={{ boxShadow }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-content-content-primary text-sm mb-1">
                            {shadowName}
                          </div>
                          <div className="text-xs text-content-content-secondary font-mono break-all">
                            {boxShadow}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dark Mode Column */}
              <div 
                data-theme="dark" 
                className="rounded-lg p-4"
                style={{ 
                  backgroundColor: '#18181b',
                  color: '#ffffff'
                }}
              >
                <div 
                  className="text-sm font-semibold mb-3 pb-2 border-b"
                  style={{ 
                    color: '#ffffff',
                    borderColor: '#52525b'
                  }}
                >
                  Dark Mode
                </div>
                <div className="space-y-4">
                  {shadowNames.map((shadowName) => {
                    const shadow = shadows[shadowName];
                    const shadowValue = shadow.value;
                    const isInnerShadow = category === 'Inner Shadow';
                    
                    // Dark mode: Inner Shadow는 밝은 색상 사용 (원래 값)
                    const darkModeShadow = shadowValue;
                    const boxShadow = shadowToCSS(darkModeShadow);
                    
                    return (
                      <div
                        key={`dark-${shadowName}`}
                        className="flex items-center gap-4 p-4 rounded border transition-colors"
                        style={{
                          borderColor: '#52525b',
                          backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#27272a';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <div
                          className="w-24 h-24 rounded-lg border flex-shrink-0"
                          style={{ 
                            boxShadow,
                            backgroundColor: '#27272a',
                            borderColor: '#52525b'
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div 
                            className="font-medium text-sm mb-1"
                            style={{ color: '#ffffff' }}
                          >
                            {shadowName}
                          </div>
                          <div 
                            className="text-xs font-mono break-all"
                            style={{ color: '#a1a1aa' }}
                          >
                            {boxShadow}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Effects;

