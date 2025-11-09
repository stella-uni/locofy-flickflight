# Button 컴포넌트 작업 문서

## 개요
Figma 디자인을 기반으로 Button 컴포넌트를 구현했습니다. 텍스트 버튼과 아이콘 버튼을 하나의 컴포넌트로 통합하여 `iconOnly` prop으로 구분합니다.

## 파일 구조
- `components/ui/button/Button.tsx`: 메인 Button 컴포넌트
- `components/ui/button/Button.stories.tsx`: Storybook 스토리 파일
- `app/tokens.css`: Light mode CSS 변수
- `app/tokens-dark.css`: Dark mode CSS 변수

## 주요 기능

### 1. Props 인터페이스
```typescript
export interface ButtonProps extends Omit<AntButtonProps, 'size' | 'type' | 'disabled' | 'variant'> {
  size?: ButtonSize;           // 'xs' | 'sm' | 'base' | 'l' | 'xl'
  state?: ButtonState;          // 'default' | 'hover' | 'focus' | 'disabled'
  variant?: ButtonVariant;     // 'default' | 'outline' | 'plain'
  disabled?: boolean;
  iconOnly?: boolean;          // true: 아이콘 버튼, false: 텍스트 버튼
  icon?: React.ReactNode;      // iconOnly=true일 때 사용
}
```

### 2. 사이즈 시스템

#### 텍스트 버튼 (iconOnly=false)
- **xs**: height 24px, fontSize 12px, lineHeight 16px, padding px-3 py-2
- **sm**: height 28px, fontSize 14px, lineHeight 20px, padding px-3 py-2
- **base**: height 32px, fontSize 14px, lineHeight 20px, padding px-4 py-3
- **l**: height 36px, fontSize 14px, lineHeight 20px, padding px-4 py-4
- **xl**: height 40px, fontSize 16px, lineHeight 24px, padding px-4 py-4

#### 아이콘 버튼 (iconOnly=true)
- **xs**: 24px × 24px, padding 0
- **sm**: 28px × 28px, padding 0
- **base**: 32px × 32px, padding 0
- **l**: 36px × 36px, padding 0
- **xl**: 40px × 40px, padding 0

#### Border Radius
- **xs, sm**: 6px (`rounded-md`)
- **base, l, xl**: 8px (`rounded-lg`)

### 3. Variant 시스템

#### Default Variant
- **Light Mode**:
  - Background: `--background-background-inverse-primary` (#18181b)
  - Border: `--border-border-inverse-primary` (#3f3f46)
  - Text/Icon: `--content-content-inverse-primary` (텍스트) / `--content-content-inverse-secondary` (아이콘)
  - Hover: 배경 + white overlay 5% (`--background-background-inverse-hover-overlay`)
  - Disabled: opacity 50%, 텍스트 `--content-content-inverse-tertiary`

- **Dark Mode**:
  - Background: `--background-background-inverse-primary` (#52525b)
  - Border: `--border-border-inverse-primary` (#3f3f46)
  - Text/Icon: `--content-content-inverse-primary` (텍스트) / `--content-content-inverse-secondary` (아이콘)
  - Hover: 배경 + black overlay 2.5% (`--background-background-inverse-hover-overlay`)
  - Disabled: opacity 50%, 텍스트 `--content-content-inverse-tertiary`

#### Outline Variant
- **Light Mode**:
  - Background: `--background-background-primary` (#ffffff)
  - Border: `--border-border-primary` (#d4d4d8)
  - Text/Icon: `--content-content-primary` (#09090b)
  - Hover: 배경 + black overlay 2.5% (`--background-background-hover-overlay`)
  - Disabled: opacity 50%, 텍스트 `--content-content-secondary`

- **Dark Mode**:
  - Background: `--background-background-primary` (#18181b)
  - Border: `--border-border-primary` (#52525b)
  - Text/Icon: `--content-content-primary` (#ffffff)
  - Hover: 배경 + white overlay 5% (`--background-background-hover-overlay`)
  - Disabled: opacity 50%, 텍스트 `--content-content-secondary`

#### Plain Variant
- **Light Mode**:
  - Background: 
    - iconOnly=true: `--background-background-primary` (#ffffff) (모든 상태)
    - iconOnly=false: transparent (default, disabled), `--background-background-primary` (hover, focus)
  - Border: none
  - Text/Icon: `--content-content-primary` (#09090b)
  - Hover: 배경 + black overlay 2.5% (`--background-background-hover-overlay`)
  - Disabled: opacity 50%, 텍스트 `--content-content-secondary`

- **Dark Mode**:
  - Background: 
    - iconOnly=true: `--background-background-primary` (#18181b) (모든 상태)
    - iconOnly=false: transparent (default, disabled), `--background-background-primary` (hover, focus)
  - Border: none
  - Text/Icon: `--content-content-primary` (#ffffff)
  - Hover: 배경 + white overlay 5% (`--background-background-hover-overlay`)
  - Disabled: opacity 50%, 텍스트 `--content-content-secondary`

### 4. State 시스템

#### Default State
- 기본 스타일 적용
- Hover 이벤트 시 overlay shadow 적용 (CSS 클래스로 처리)

#### Hover State
- `state="hover"` prop으로 고정 표시 (Storybook용)
- Overlay shadow 인라인 스타일로 적용
- 실제 hover 이벤트는 CSS 클래스로 처리

#### Focus State
- Default와 동일한 스타일
- Focus ring 제거 (Ant Design 기본 스타일 오버라이드)

#### Disabled State
- Opacity 50%
- Cursor: not-allowed
- Variant에 따라 다른 텍스트 색상 적용

### 5. Hover Overlay Shadow 처리

Hover 시 배경색 변화는 `inset box-shadow`를 사용하여 구현:
- CSS 클래스: `hover:!shadow-[inset_0_0_0_9999px_var(--background-background-hover-overlay)]`
- 인라인 스타일 (state="hover"일 때): `boxShadow: 'inset 0 0 0 9999px var(--background-background-hover-overlay) !important'`

이 방식은 배경색을 변경하지 않고 overlay 효과를 주기 위해 사용됩니다.

### 6. Ant Design 스타일 오버라이드

Ant Design의 기본 스타일을 피그마 디자인에 맞게 오버라이드하기 위해:
- Tailwind 클래스에 `!important` 사용 (`!bg-*`, `!border-*`, `!text-*` 등)
- 인라인 스타일에 `!important` 사용
- Ant Design의 기본 shadow 제거: `!shadow-none`
- Ant Design의 hover/focus/active 스타일 오버라이드

**중요**: `!important`를 많이 사용하는 이유는 Ant Design이 높은 specificity로 스타일을 적용하기 때문입니다. 인라인 스타일만으로는 hover 이벤트를 감지할 수 없어 CSS 클래스도 함께 사용해야 합니다.

### 7. IconOnly vs Text Button 차이점

#### IconOnly (iconOnly=true)
- 고정 크기 (width × height)
- Padding: 0
- 아이콘 색상: `[&_.anticon]`, `[&_svg]` 선택자 사용
- Plain variant: 배경 항상 primary (transparent 아님)

#### Text Button (iconOnly=false)
- 가변 크기 (텍스트에 따라)
- Padding: 사이즈별로 다름
- 텍스트 색상: `!text-*` 클래스 사용
- Plain variant: default/disabled는 transparent, hover/focus는 primary

### 8. CSS 변수 (Semantic Tokens)

모든 색상 값은 하드코딩하지 않고 CSS 변수(semantic tokens)를 사용:

**Light Mode** (`tokens.css`):
- `--background-background-primary`: #ffffff
- `--background-background-inverse-primary`: #18181b
- `--background-background-hover-overlay`: #00000008 (2.5% black overlay)
- `--background-background-inverse-hover-overlay`: #ffffff0d (5% white overlay)
- `--border-border-primary`: #d4d4d8
- `--border-border-inverse-primary`: #3f3f46
- `--content-content-primary`: #09090b
- `--content-content-inverse-primary`: #ffffff
- `--content-content-inverse-secondary`: #a1a1aa
- `--content-content-inverse-tertiary`: #71717a

**Dark Mode** (`tokens-dark.css`):
- `--background-background-primary`: #18181b
- `--background-background-inverse-primary`: #52525b
- `--background-background-hover-overlay`: #ffffff0d (5% white overlay)
- `--background-background-inverse-hover-overlay`: rgba(0, 0, 0, 0.025) (2.5% black overlay)
- `--border-border-primary`: #52525b
- `--border-border-inverse-primary`: #3f3f46
- `--content-content-primary`: #ffffff
- `--content-content-inverse-primary`: #ffffff
- `--content-content-inverse-secondary`: #d4d4d8
- `--content-content-inverse-tertiary`: #a1a1aa

### 9. Storybook 구조

- **Default**: 기본 텍스트 버튼 (controls 포함)
- **IconOnly**: 기본 아이콘 버튼 (controls 포함)
- **AllVariations**: 모든 variant, size, state 조합 (텍스트 버튼)
- **DarkMode**: 다크 모드 variation (텍스트 버튼)
- **IconOnlyVariations**: 모든 variant, size, state 조합 (아이콘 버튼)
- **IconOnlyDarkMode**: 다크 모드 variation (아이콘 버튼)

## 핵심 로직

### getStateClasses 함수
- variant, state, disabled, iconOnly에 따라 적절한 Tailwind 클래스 반환
- iconOnly에 따라 아이콘 색상 선택자(`[&_.anticon]`, `[&_svg]`) 또는 텍스트 색상 클래스(`!text-*`) 적용
- Plain variant의 배경색 처리 (iconOnly에 따라 다름)

### 인라인 스타일 처리
- Ant Design 스타일 오버라이드를 위해 인라인 스타일에 `!important` 사용
- iconOnly일 때: 고정 크기(width, height, minWidth, minHeight) 적용
- state="hover"일 때: overlay shadow 인라인 스타일로 적용

## 주의사항

1. **!important 사용**: Ant Design과의 충돌을 방지하기 위해 필수적입니다. 제거하면 hover 기능이 작동하지 않습니다.

2. **Plain Variant 배경색**: iconOnly 여부에 따라 다르게 처리됩니다.
   - iconOnly=true: 항상 primary 배경
   - iconOnly=false: default/disabled는 transparent, hover/focus는 primary

3. **Hover Overlay**: CSS 클래스와 인라인 스타일을 모두 사용합니다.
   - CSS 클래스: 실제 hover 이벤트 감지용
   - 인라인 스타일: Storybook에서 state="hover" 고정 표시용

4. **Dark Mode**: `data-theme="dark"` 속성을 부모 요소에 추가해야 합니다.

## 사용 예시

```typescript
// 텍스트 버튼
<Button variant="default" size="base" state="default">
  Button text
</Button>

// 아이콘 버튼
<Button 
  iconOnly={true} 
  icon={<PlusIcon className="w-4 h-4" />} 
  variant="default" 
  size="base" 
  state="default"
/>

// Disabled 버튼
<Button variant="outline" size="l" disabled>
  Button text
</Button>

// Hover 상태 고정 (Storybook용)
<Button variant="plain" size="sm" state="hover">
  Button text
</Button>
```

## 피그마 디자인 원칙

1. **디자인 우선**: 피그마 디자인이 Ant Design 기본 스타일보다 우선합니다.
2. **Semantic Tokens**: 모든 색상 값은 CSS 변수로 관리합니다.
3. **정확한 반영**: 피그마의 모든 상태, 사이즈, variant를 정확히 반영합니다.

