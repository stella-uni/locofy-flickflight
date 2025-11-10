import React from 'react';

// Blur data from Tailwind defaults
const blurData = {
  'Blur': {
    'blur-none': { value: '0px' },
    'blur-sm': { value: '4px' },
    'blur-base': { value: '8px' },
    'blur-lg': { value: '16px' },
    'blur-xl': { value: '24px' },
    'blur-2xl': { value: '40px' },
  },
  'Backdrop blur': {
    'backdrop-blur-none': { value: '0px' },
    'backdrop-blur-sm': { value: '4px' },
    'backdrop-blur': { value: '8px' },
    'backdrop-blur-md': { value: '12px' },
    'backdrop-blur-lg': { value: '16px' },
    'backdrop-blur-xl': { value: '24px' },
    'backdrop-blur-2xl': { value: '40px' },
    'backdrop-blur-3xl': { value: '64px' },
  },
};

const Filters = () => {
  const categories = Object.keys(blurData) as Array<keyof typeof blurData>;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      
      {categories.map((category) => {
        const filters = blurData[category];
        const filterNames = Object.keys(filters) as Array<keyof typeof filters>;
        
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
                  {filterNames.map((filterName) => {
                    const filter = filters[filterName];
                    const blurValue = filter.value;
                    const isBackdrop = filterName.startsWith('backdrop-');
                    
                    return (
                      <div
                        key={`light-${filterName}`}
                        className="flex items-center gap-4 p-4 rounded border border-border-primary hover:bg-background-background-secondary transition-colors"
                      >
                        {isBackdrop ? (
                          <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border border-border-primary">
                            {/* Background image (visible outside the inner box) */}
                            <img 
                              src="https://picsum.photos/128/128?random=1" 
                              alt="Background" 
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Inner box with backdrop-filter */}
                            <div 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-lg bg-white/30 border border-white/50"
                              style={{
                                backdropFilter: `blur(${blurValue})`,
                              }}
                            />
                          </div>
                        ) : (
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-border-primary">
                            <img 
                              src="https://picsum.photos/96/96?random=2" 
                              alt="Blur example" 
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{
                                filter: `blur(${blurValue})`,
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-content-content-primary text-sm mb-1">
                            {filterName}
                          </div>
                          <div className="text-xs text-content-content-secondary font-mono">
                            {blurValue}
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
                  {filterNames.map((filterName) => {
                    const filter = filters[filterName];
                    const blurValue = filter.value;
                    const isBackdrop = filterName.startsWith('backdrop-');
                    
                    return (
                      <div
                        key={`dark-${filterName}`}
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
                        {isBackdrop ? (
                          <div 
                            className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 border"
                            style={{ borderColor: '#52525b' }}
                          >
                            {/* Background image (visible outside the inner box) */}
                            <img 
                              src="https://picsum.photos/128/128?random=1" 
                              alt="Background" 
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Inner box with backdrop-filter */}
                            <div 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-lg bg-white/30 border border-white/50"
                              style={{
                                backdropFilter: `blur(${blurValue})`,
                              }}
                            />
                          </div>
                        ) : (
                          <div 
                            className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border"
                            style={{ borderColor: '#52525b' }}
                          >
                            <img 
                              src="https://picsum.photos/96/96?random=2" 
                              alt="Blur example" 
                              className="absolute inset-0 w-full h-full object-cover"
                              style={{
                                filter: `blur(${blurValue})`,
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div 
                            className="font-medium text-sm mb-1"
                            style={{ color: '#ffffff' }}
                          >
                            {filterName}
                          </div>
                          <div 
                            className="text-xs font-mono"
                            style={{ color: '#a1a1aa' }}
                          >
                            {blurValue}
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

export default Filters;

