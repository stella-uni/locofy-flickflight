# Semantic Tokens 사용 가이드

Tokens Studio에서 내보낸 JSON 파일을 기반으로 자동 생성된 semantic 토큰을 사용하는 방법입니다.

## 토큰 빌드

```bash
# 토큰 빌드 (한 번만)
npm run tokens:build

# 토큰 빌드 + 감시 모드 (개발 중)
npm run tokens:watch
```

## 사용 가능한 클래스

### Background Colors
```tsx
// Primary backgrounds
<div className="bg-background-primary">...</div>
<div className="bg-background-secondary">...</div>
<div className="bg-background-tertiary">...</div>

// Inverse backgrounds
<div className="bg-background-inverse-primary">...</div>
<div className="bg-background-inverse-secondary">...</div>
<div className="bg-background-inverse-tertiary">...</div>

// Extension backgrounds
<div className="bg-background-extensions-background-blue">...</div>
<div className="bg-background-extensions-background-red">...</div>
```

### Text Colors
```tsx
// Primary text
<p className="text-content-content-primary">...</p>
<p className="text-content-content-secondary">...</p>
<p className="text-content-content-tertiary">...</p>

// Inverse text
<p className="text-content-content-inverse-primary">...</p>

// Extension text colors
<p className="text-content-extensions-content-blue">...</p>
<p className="text-content-extensions-content-red">...</p>
```

### Border Colors
```tsx
// Primary borders
<div className="border-border-border-primary">...</div>
<div className="border-border-border-secondary">...</div>

// Semantic borders
<div className="border-border-extensions-border-error">...</div>
<div className="border-border-extensions-border-success">...</div>
<div className="border-border-extensions-border-warning">...</div>
<div className="border-border-extensions-border-info">...</div>
```

### Core Colors
```tsx
<div className="bg-core-white text-core-black">...</div>
```

## 다크모드

다크모드는 자동으로 처리됩니다. `[data-theme="dark"]` 속성이 설정되면 자동으로 다크 테마 토큰이 적용됩니다.

```javascript
// 다크모드 활성화
document.documentElement.setAttribute('data-theme', 'dark');

// 라이트모드로 복귀
document.documentElement.removeAttribute('data-theme');
```

## Spacing & Border Radius

Spacing과 border radius는 Tailwind 기본값을 사용합니다 (dimensions.json과 동일).

```tsx
// Spacing (Tailwind 기본값)
<div className="p-4 m-2 gap-4">...</div>

// Border Radius (Tailwind 기본값)
<div className="rounded-md rounded-lg rounded-xl">...</div>
```

## 주의사항

1. **토큰 파일 수정 금지**: `tokens/tailwind.tokens.js`, `app/tokens.css`, `app/tokens-dark.css`는 자동 생성 파일이므로 수정하지 마세요.
2. **토큰 업데이트**: Tokens Studio에서 JSON을 업데이트한 후 `npm run tokens:build`를 실행하세요.
3. **Primitives 참조**: semantic 토큰은 primitives.json의 값을 참조합니다. primitives.json을 수정하면 semantic 토큰도 자동으로 업데이트됩니다.

