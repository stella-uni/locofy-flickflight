# Design Tokens

이 디렉토리는 Style Dictionary를 사용하여 Tokens Studio JSON을 Tailwind CSS 유틸리티 클래스로 변환합니다.

## 구조

```
tokens/
  source/          # Tokens Studio에서 내보낸 JSON 파일들
    primitives.json
    semantic/
      light.json
      dark.json
  tailwind.tokens.js  # 자동 생성된 Tailwind config (gitignore)
```

## 사용 방법

### 1. Tokens Studio JSON 파일 준비

Tokens Studio에서 내보낸 JSON 파일을 `tokens/source/` 디렉토리에 넣어주세요.

**필수 구조:**
- `primitives`: 기본 색상, spacing, borderRadius 등
- `semantic`: semantic 토큰 (background, border, content 등)

### 2. 토큰 빌드

```bash
# 토큰 빌드 (한 번만)
npm run tokens:build

# 토큰 빌드 + 감시 모드 (개발 중)
npm run tokens:watch
```

이 명령어는 다음 파일들을 생성합니다:
- `app/tokens.css` - CSS 변수 (light theme)
- `app/tokens-dark.css` - CSS 변수 (dark theme)
- `tokens/tailwind.tokens.js` - Tailwind config용 semantic 토큰

### 3. Tailwind 클래스 사용

생성된 semantic 토큰은 자동으로 Tailwind config에 포함됩니다.

**예시:**
```tsx
// Semantic 토큰 사용
<div className="bg-background-primary text-content-primary border-border-primary">
  Content
</div>

// Spacing (primitives는 Tailwind 기본과 동일)
<div className="p-4 m-2">Content</div>

// Border Radius (primitives는 Tailwind 기본과 동일)
<button className="rounded-md">Button</button>
```

## Tokens Studio JSON 구조 예시

```json
{
  "primitives": {
    "color": {
      "blue": {
        "500": { "value": "#3b82f6", "type": "color" }
      }
    },
    "spacing": {
      "4": { "value": "16px", "type": "dimension" }
    }
  },
  "semantic": {
    "background": {
      "primary": {
        "value": "#ffffff",
        "type": "color",
        "category": "color"
      }
    },
    "border": {
      "primary": {
        "value": "#d4d4d8",
        "type": "color",
        "category": "color"
      }
    },
    "content": {
      "primary": {
        "value": "#09090b",
        "type": "color",
        "category": "color"
      }
    }
  }
}
```

## 주의사항

1. **Semantic 토큰만 Tailwind에 포함**: `semantic` 폴더 안의 토큰만 Tailwind 클래스로 변환됩니다.
2. **Primitives는 Tailwind 기본 사용**: spacing, borderRadius 등은 Tailwind 기본 유틸리티와 동일하게 사용됩니다.
3. **자동 생성 파일**: `tokens/tailwind.tokens.js`는 자동 생성되므로 수정하지 마세요.

