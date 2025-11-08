import React, { useState } from 'react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const semantic = theme === 'light' ? semanticLight : semanticDark;

  const tokens = flattenSemantic(semantic as SemanticTokens, [], primitives);

  // Group by category
  const grouped = tokens.reduce((acc, token) => {
    const category = token.path[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(token);
    return acc;
  }, {} as Record<string, typeof tokens>);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Semantic - Colors</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme('light')}
            className={`px-4 py-2 rounded ${
              theme === 'light'
                ? 'bg-background-background-primary text-content-content-primary border border-border-primary'
                : 'bg-background-background-secondary text-content-content-secondary'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`px-4 py-2 rounded ${
              theme === 'dark'
                ? 'bg-background-background-primary text-content-content-primary border border-border-primary'
                : 'bg-background-background-secondary text-content-content-secondary'
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, categoryTokens]) => (
          <div key={category} className="border rounded-lg p-6 bg-background-background-primary border-border-primary">
            <h3 className="text-xl font-semibold mb-4 text-content-content-primary">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryTokens.map((token) => {
                const tokenName = token.path.slice(1).join(' ');
                const cssVarName = token.path.map((p) => p.charAt(0).toLowerCase() + p.slice(1)).join('-');
                
                return (
                  <div
                    key={tokenName}
                    className="flex items-center gap-3 p-3 rounded border border-border-primary hover:bg-background-background-secondary transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded border border-border-primary flex-shrink-0"
                      style={{ backgroundColor: token.value }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-content-content-primary truncate">
                        {tokenName}
                      </div>
                      <div className="text-xs text-content-content-secondary font-mono truncate">
                        {token.value}
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
        ))}
      </div>
    </div>
  );
};

export default SemanticColors;

