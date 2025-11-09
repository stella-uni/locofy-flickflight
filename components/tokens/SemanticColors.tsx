import React from 'react';
import semanticLight from '../../tokens/source/sementic-light.json';
import semanticDark from '../../tokens/source/sementic-dark.json';
import primitives from '../../tokens/source/primitives.json';

interface Token {
  $type: string;
  $value: string;
}

interface SemanticTokens {
  [category: string]: {
    [tokenName: string]: Token | SemanticTokens;
  };
}

// Resolve primitive references like {White}, {Zinc.950}
function resolvePrimitive(value: string, primitives: any): string {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    const ref = value.slice(1, -1);
    const parts = ref.split('.');
    
    let current: any = primitives;
    for (const part of parts) {
      if (current && current[part]) {
        if (current[part].$value) {
          current = current[part];
        } else {
          current = current[part];
        }
      } else {
        return value; // Return original if not found
      }
    }
    
    // If we found a token with $value, return it
    if (current && typeof current === 'object' && '$value' in current) {
      return current.$value;
    }
    
    return value;
  }
  return value;
}

// Flatten nested semantic tokens
function flattenSemantic(
  obj: SemanticTokens,
  prefix: string[] = [],
  primitives: any
): Array<{ path: string[]; name: string; value: string; category: string }> {
  const result: Array<{ path: string[]; name: string; value: string; category: string }> = [];

  for (const [key, value] of Object.entries(obj)) {
    const newPath = [...prefix, key];

    if (value && typeof value === 'object' && '$value' in value) {
      // Token found
      const resolvedValue = resolvePrimitive(value.$value, primitives);
      result.push({
        path: newPath,
        name: key,
        value: resolvedValue,
        category: prefix[0] || 'Other',
      });
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      // Nested object, recurse
      result.push(...flattenSemantic(value as SemanticTokens, newPath, primitives));
    }
  }

  return result;
}

const SemanticColors = () => {
  const lightTokens = flattenSemantic(semanticLight as SemanticTokens, [], primitives);
  const darkTokens = flattenSemantic(semanticDark as SemanticTokens, [], primitives);

  // Group by category for both themes
  const lightGrouped = lightTokens.reduce((acc, token) => {
    const category = token.path[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(token);
    return acc;
  }, {} as Record<string, typeof lightTokens>);

  const darkGrouped = darkTokens.reduce((acc, token) => {
    const category = token.path[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(token);
    return acc;
  }, {} as Record<string, typeof darkTokens>);

  // Get all categories
  const categories = Array.from(new Set([...Object.keys(lightGrouped), ...Object.keys(darkGrouped)]));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Semantic - Colors</h2>
        <div className="flex gap-4">
          <div className="text-sm font-medium text-content-content-primary">Light Mode</div>
          <div className="text-sm font-medium text-content-content-primary">Dark Mode</div>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((category) => {
          const lightCategoryTokens = lightGrouped[category] || [];
          const darkCategoryTokens = darkGrouped[category] || [];
          
          // Get all unique token names from both themes
          const allTokenNames = new Set([
            ...lightCategoryTokens.map(t => t.path.slice(1).join(' ')),
            ...darkCategoryTokens.map(t => t.path.slice(1).join(' '))
          ]);

          return (
            <div key={category} className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
              <h3 className="text-xl font-semibold mb-4 text-content-content-primary">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Light Mode Column */}
                <div>
                  <div className="text-sm font-semibold text-content-content-primary mb-3 pb-2 border-b border-border-primary">
                    Light Mode
                  </div>
                  <div className="space-y-3">
                    {Array.from(allTokenNames).map((tokenName) => {
                      const lightToken = lightCategoryTokens.find(
                        t => t.path.slice(1).join(' ') === tokenName
                      );
                      
                      if (!lightToken) return null;
                      
                      const cssVarName = lightToken.path.map((p) => p.charAt(0).toLowerCase() + p.slice(1)).join('-');
                      
                      return (
                        <div
                          key={`light-${tokenName}`}
                          className="flex items-center gap-3 p-3 rounded border border-border-primary hover:bg-background-background-secondary transition-colors"
                        >
                          <div
                            className="w-12 h-12 rounded-full border-2 border-border-primary flex-shrink-0"
                            style={{ backgroundColor: lightToken.value }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-content-content-primary truncate">
                              {tokenName}
                            </div>
                            <div className="text-xs text-content-content-secondary font-mono truncate">
                              {lightToken.value}
                            </div>
                            <div className="text-xs text-content-content-tertiary font-mono truncate mt-1">
                              --{cssVarName}
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
                  <div className="space-y-3">
                    {Array.from(allTokenNames).map((tokenName) => {
                      const darkToken = darkCategoryTokens.find(
                        t => t.path.slice(1).join(' ') === tokenName
                      );
                      
                      if (!darkToken) return null;
                      
                      const cssVarName = darkToken.path.map((p) => p.charAt(0).toLowerCase() + p.slice(1)).join('-');
                      
                      return (
                        <div
                          key={`dark-${tokenName}`}
                          className="flex items-center gap-3 p-3 rounded border transition-colors"
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
                            className="w-12 h-12 rounded-full border-2 flex-shrink-0"
                            style={{ 
                              backgroundColor: darkToken.value,
                              borderColor: '#52525b'
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div 
                              className="font-medium truncate"
                              style={{ color: '#ffffff' }}
                            >
                              {tokenName}
                            </div>
                            <div 
                              className="text-xs font-mono truncate"
                              style={{ color: '#a1a1aa' }}
                            >
                              {darkToken.value}
                            </div>
                            <div 
                              className="text-xs font-mono truncate mt-1"
                              style={{ color: '#71717a' }}
                            >
                              --{cssVarName}
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
    </div>
  );
};

export default SemanticColors;

