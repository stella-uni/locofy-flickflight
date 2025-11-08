# Tokens Source Directory

이 디렉토리에 Tokens Studio에서 내보낸 JSON 파일을 넣어주세요.

## 파일 구조 예시

```
tokens/
  source/
    primitives.json      # 기본 색상, spacing, borderRadius 등
    semantic/
      light.json         # Light theme semantic tokens
      dark.json          # Dark theme semantic tokens
```

## Tokens Studio JSON 구조

Tokens Studio에서 내보낸 JSON은 다음과 같은 구조를 가져야 합니다:

```json
{
  "primitives": {
    "color": {
      "blue": {
        "500": { "value": "#3b82f6" }
      }
    },
    "spacing": {
      "4": { "value": "16px" }
    }
  },
  "semantic": {
    "background": {
      "primary": {
        "value": "{primitives.color.white.500.value}",
        "type": "color"
      }
    }
  }
}
```

Style Dictionary가 이 파일들을 읽어서:
- `app/tokens.css` (CSS 변수)
- `tokens/tailwind.config.tokens.js` (Tailwind config)

를 자동으로 생성합니다.

