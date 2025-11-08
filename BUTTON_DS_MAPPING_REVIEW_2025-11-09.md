# Button DS Mapping & Implementation Review

## 프로젝트 컨텍스트

**Stack**: Next.js + React + Tailwind CSS + Ant Design + Storybook + @heroicons/react

**대상 파일**:

- `components/ui/button/Button.tsx`
- `components/ui/button/Button.stories.tsx`

**디자인 기준**: Figma Button – type(default|plain|outline), size(xs|sm|base|l|xl), state(default|hover|focus|disabled)

---

## 1) Figma ↔ 코드 매핑 표

### JSON 매핑

```json
{
  "component": "Button",
  "mapping": [
    {
      "figma_variant_name": "Default / base / Default",
      "props": {
        "type": "default",
        "size": "base",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 1",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 표준 (어두운 배경, 흰색 텍스트)"
    },
    {
      "figma_variant_name": "Default / xs / Default",
      "props": {
        "type": "default",
        "size": "xs",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 1",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 xs 사이즈"
    },
    {
      "figma_variant_name": "Default / sm / Default",
      "props": {
        "type": "default",
        "size": "sm",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 1",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 sm 사이즈"
    },
    {
      "figma_variant_name": "Default / l / Default",
      "props": {
        "type": "default",
        "size": "l",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 1",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 l 사이즈"
    },
    {
      "figma_variant_name": "Default / xl / Default",
      "props": {
        "type": "default",
        "size": "xl",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 1",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 xl 사이즈"
    },
    {
      "figma_variant_name": "Default / base / Default (Icon Only)",
      "props": {
        "type": "default",
        "size": "base",
        "state": "default",
        "iconOnly": true
      },
      "storybook_story": "LightMode - Row 1",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 아이콘만 표시"
    },
    {
      "figma_variant_name": "Outline / base / Default",
      "props": {
        "type": "outline",
        "size": "base",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 2",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Outline 버튼 표준 (투명 배경, border 있음)"
    },
    {
      "figma_variant_name": "Outline / base / Default (Primary Color)",
      "props": {
        "type": "outline",
        "size": "base",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 7",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Outline 버튼 Primary 색상 (파란색 border)"
    },
    {
      "figma_variant_name": "Plain / base / Default",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 6",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Plain 버튼 표준 (밝은 배경, border 없음)"
    },
    {
      "figma_variant_name": "Default / base / Hover",
      "props": {
        "type": "default",
        "size": "base",
        "state": "hover",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 3",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 Hover 상태 (2.5% 검은색 오버레이)"
    },
    {
      "figma_variant_name": "Default / base / Focus",
      "props": {
        "type": "default",
        "size": "base",
        "state": "focus",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 3",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 Focus 상태 (파란색 ring)"
    },
    {
      "figma_variant_name": "Default / base / Disabled",
      "props": {
        "type": "default",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 4",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Primary 버튼 Disabled 상태 (회색 배경, 회색 텍스트)"
    },
    {
      "figma_variant_name": "Plain / base / Disabled",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 5, Row 10",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Plain 버튼 Disabled 상태 (투명 배경, 회색 텍스트)"
    },
    {
      "figma_variant_name": "Outline / base / Disabled",
      "props": {
        "type": "outline",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "LightMode - Row 4 (추정)",
      "storybook_path": "UI/Button/LightMode",
      "notes": "Outline 버튼 Disabled 상태 (투명 배경, 회색 border)"
    },
    {
      "figma_variant_name": "Plain / base / Default (Dark Mode)",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "default",
        "iconOnly": false
      },
      "storybook_story": "DarkMode - Row 1, Row 2, Row 6",
      "storybook_path": "UI/Button/DarkMode",
      "notes": "Dark 모드 Plain 버튼 (어두운 배경)"
    },
    {
      "figma_variant_name": "Plain / base / Disabled (Dark Mode - Light)",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "DarkMode - Row 4",
      "storybook_path": "UI/Button/DarkMode",
      "notes": "Dark 모드 Plain 버튼 Disabled (투명도 50%)"
    },
    {
      "figma_variant_name": "Plain / base / Disabled (Dark Mode - Medium)",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "DarkMode - Row 5",
      "storybook_path": "UI/Button/DarkMode",
      "notes": "Dark 모드 Plain 버튼 Disabled (투명도 30%)"
    },
    {
      "figma_variant_name": "Plain / base / Disabled (Dark Mode - Heavy)",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "DarkMode - Row 8",
      "storybook_path": "UI/Button/DarkMode",
      "notes": "Dark 모드 Plain 버튼 Disabled (투명도 20%)"
    },
    {
      "figma_variant_name": "Plain / base / Disabled (Dark Mode - Fully)",
      "props": {
        "type": "plain",
        "size": "base",
        "state": "disabled",
        "iconOnly": false
      },
      "storybook_story": "DarkMode - Row 9",
      "storybook_path": "UI/Button/DarkMode",
      "notes": "Dark 모드 Plain 버튼 Disabled (투명도 10%)"
    }
  ]
}
```

### 매핑 요약 표

| Figma Variant             | Props                        | Storybook 위치         | 코드 위치                    |
| ------------------------- | ---------------------------- | ---------------------- | ---------------------------- |
| Default / base / Default  | `type="default" size="base"` | LightMode Row 1        | Button.tsx:70-75             |
| Outline / base / Default  | `type="outline" size="base"` | LightMode Row 2        | Button.tsx:80-84             |
| Plain / base / Default    | `type="plain" size="base"`   | LightMode Row 6        | Button.tsx:76-79             |
| Default / base / Hover    | `type="default"` (hover)     | LightMode Row 3        | Button.tsx:75 (hover:shadow) |
| Default / base / Focus    | `type="default"` (focus)     | LightMode Row 3        | Button.tsx:75 (focus:ring)   |
| Default / base / Disabled | `type="default" disabled`    | LightMode Row 4        | Button.tsx:56-58             |
| Plain / base / Disabled   | `type="plain" disabled`      | LightMode Row 5, 10    | Button.tsx:59-61             |
| Outline / base / Disabled | `type="outline" disabled`    | LightMode Row 4 (추정) | Button.tsx:62-64             |

---

## 2) 디자인 토큰 사용 현황

### 색상/라운드/타이포 토큰 표

| Token Key (Tokens Studio)    | CSS Variable                              | Tailwind/Class 사용처                                                                                              | 역할 (Role)                                 | 적용 코드 위치                                      |
| ---------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- | --------------------------------------------------- |
| `background.inverse.primary` | `--background-background-inverse-primary` | `bg-background-background-inverse-primary`                                                                         | Primary 버튼 배경 (어두운 색)               | Button.tsx:75                                       |
| `background.secondary`       | `--background-background-secondary`       | `bg-background-background-secondary`                                                                               | Plain 버튼 배경 (밝은 색)                   | Button.tsx:79                                       |
| `background.tertiary`        | `--background-background-tertiary`        | `bg-background-background-tertiary`                                                                                | Disabled Primary 배경                       | Button.tsx:58                                       |
| `content.inverse.primary`    | `--content-content-inverse-primary`       | `text-content-content-inverse-primary`                                                                             | Primary 버튼 텍스트 (흰색)                  | Button.tsx:75                                       |
| `content.primary`            | `--content-content-primary`               | `text-content-content-primary`                                                                                     | Plain/Outline 버튼 텍스트 (어두운 색)       | Button.tsx:79, 84                                   |
| `content.tertiary`           | `--content-content-tertiary`              | `text-content-content-tertiary`                                                                                    | Disabled 버튼 텍스트                        | Button.tsx:58, 61, 64                               |
| `border.extensions.info`     | `--border-extensions-border-info`         | `ring-border-extensions-border-info`, `border-border-extensions-border-info`, `text-border-extensions-border-info` | Focus ring 및 Primary outline 색상 (파란색) | Button.tsx:75, 79, 84<br>Button.stories.tsx:142-149 |
| `border.primary`             | `--border-border-primary`                 | `border-border-primary`                                                                                            | Outline 버튼 border 색상                    | Button.tsx:84                                       |
| `border.radius`              | **없음 (하드코딩)**                       | `rounded-md` (6px), `rounded-lg` (8px)                                                                             | Border radius (사이즈별)                    | Button.tsx:91-103, 157                              |

### Border Radius 상세

| 사이즈            | 값  | Tailwind 클래스 | CSS 변수 | 출처         | 코드 위치             |
| ----------------- | --- | --------------- | -------- | ------------ | --------------------- |
| `xs`, `sm`        | 6px | `rounded-md`    | 없음     | **하드코딩** | Button.tsx:94-95, 157 |
| `base`, `l`, `xl` | 8px | `rounded-lg`    | 없음     | **하드코딩** | Button.tsx:97-99, 157 |

**참고**: Border radius는 토큰이 아닌 하드코딩된 값입니다. Figma 디자인에 따라 사이즈별로 6px 또는 8px로 고정되어 있습니다.

### Hover Overlay 토큰

| Token Key           | CSS Variable | Tailwind/Class 사용처                                 | 역할                         | 적용 코드 위치        |
| ------------------- | ------------ | ----------------------------------------------------- | ---------------------------- | --------------------- |
| **없음 (하드코딩)** | 없음         | `hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.025)]` | Hover 오버레이 (2.5% 검은색) | Button.tsx:75, 79, 84 |

**참고**: Hover overlay는 CSS 변수 대신 인라인 Tailwind arbitrary value로 구현되어 있습니다. `--background-background-hover-overlay` 토큰이 존재하지만 사용되지 않습니다.

### Typography 토큰

| Token Key           | CSS Variable | Tailwind/Class 사용처 | 역할             | 적용 코드 위치 |
| ------------------- | ------------ | --------------------- | ---------------- | -------------- |
| **없음 (하드코딩)** | 없음         | `font-medium`         | 버튼 텍스트 굵기 | Button.tsx:167 |

**참고**: Typography 토큰은 사용되지 않으며, `font-medium`이 하드코딩되어 있습니다.

---

## 3) Storybook Light/Dark 처리 구조

### 현재 구현 방식

#### Decorator 사용 여부

- **Global Decorator**: `.storybook/preview.tsx`에서 `ConfigProvider`로 Ant Design 테마 설정
- **스토리별 Decorator**: 없음 (각 스토리에서 직접 `data-theme` 속성 사용)

#### 스토리 분리 방식

- **완전 분리**: `LightMode`와 `DarkMode`를 별도 스토리로 구현
- **단일 스토리 내 컨트롤 전환**: 없음

#### 현재 구조

```typescript
// .storybook/preview.tsx
decorators: [
  (Story) => (
    <ConfigProvider theme={{ token: { ... } }}>
      <Story />
    </ConfigProvider>
  ),
]

// Button.stories.tsx
export const LightMode: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      {/* Light mode content */}
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="p-8 bg-background-background-inverse-primary min-h-screen" data-theme="dark">
      {/* Dark mode content */}
    </div>
  ),
};
```

### 현재 방식의 장단점

#### 장점

- ✅ 명확한 시각적 분리 (Light/Dark를 별도 스토리로 확인 가능)
- ✅ Figma 디자인 그리드 구조를 그대로 반영 (10 rows × 8 columns vs 9 rows × 10 columns)
- ✅ 각 모드별 모든 배리에이션을 한 번에 확인 가능

#### 단점

- ❌ 스토리 중복 (Light/Dark가 거의 동일한 구조)
- ❌ 테마 전환 기능 없음 (스토리 간 수동 이동 필요)
- ❌ `data-theme="dark"` 속성을 각 스토리에서 직접 관리
- ❌ Decorator 기반 테마 전환이 없어 확장성 낮음

### 권장 구조 (Decorator 기반 전환)

#### 개선안 1: Theme Decorator 추가

```typescript
// .storybook/preview.tsx
import { Decorator } from '@storybook/react';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';

  return (
    <div data-theme={theme}>
      <ConfigProvider theme={{ token: { ... } }}>
        <Story />
      </ConfigProvider>
    </div>
  );
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};
```

#### 개선안 2: 단일 스토리 + 컨트롤 전환

```typescript
// Button.stories.tsx
export const AllVariations: Story = {
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme mode',
    },
  },
  render: (args) => {
    const theme = args.theme || 'light';
    const isDark = theme === 'dark';

    return (
      <div
        className={isDark ? 'bg-background-background-inverse-primary' : 'bg-background-background-primary'}
        data-theme={theme}
      >
        {/* All variations */}
      </div>
    );
  },
};
```

#### 개선안 3: 하이브리드 (현재 구조 유지 + Decorator 추가)

```typescript
// Button.stories.tsx
const ButtonGrid = ({ theme }: { theme: 'light' | 'dark' }) => {
  const isDark = theme === 'dark';
  // ... 공통 그리드 로직
};

export const LightMode: Story = {
  render: () => <ButtonGrid theme="light" />,
};

export const DarkMode: Story = {
  render: () => <ButtonGrid theme="dark" />,
};

export const Interactive: Story = {
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark'] },
  },
  render: (args) => <ButtonGrid theme={args.theme || 'light'} />,
};
```

---

## 4) Button 코드 스타일 규칙 (확장 가이드)

### Props 네이밍 규칙

| Prop 이름  | 타입                                    | 필수 여부 | 설명                                  | 확장 시 재사용                            |
| ---------- | --------------------------------------- | --------- | ------------------------------------- | ----------------------------------------- |
| `type`     | `'default' \| 'plain' \| 'outline'`     | 선택      | 버튼 타입 (Primary/Secondary/Outline) | ✅ Input/Select에도 적용 가능             |
| `size`     | `'xs' \| 'sm' \| 'base' \| 'l' \| 'xl'` | 선택      | 버튼 사이즈                           | ✅ Input/Select에도 적용 가능             |
| `icon`     | `React.ReactNode`                       | 선택      | 아이콘 요소                           | ✅ Input (prefix/suffix), Select (prefix) |
| `iconOnly` | `boolean`                               | 선택      | 아이콘만 표시 여부                    | ❌ Input/Select에는 불필요                |
| `disabled` | `boolean`                               | 선택      | 비활성화 여부                         | ✅ Input/Select에도 적용 가능             |
| `children` | `React.ReactNode`                       | 선택      | 버튼 텍스트/내용                      | ✅ Input (label), Select (placeholder)    |

### 클래스 결합 전략

#### 1. 유틸리티 함수 패턴

```typescript
// Button.tsx 패턴
const getTypeClasses = (type: ButtonType, disabled?: boolean): string => {
  if (disabled) {
    /* disabled styles */
  }
  switch (type /* type-specific styles */) {
  }
};

const getBorderRadius = (size: ButtonSize): string => {
  switch (size /* size-specific radius */) {
  }
};

// 확장 시 재사용 가능한 패턴
type ComponentType = 'default' | 'plain' | 'outline';
type ComponentSize = 'xs' | 'sm' | 'base' | 'l' | 'xl';

const getComponentClasses = (
  type: ComponentType,
  size: ComponentSize,
  disabled?: boolean
): string => {
  // 공통 로직
};
```

#### 2. 조건부 클래스 결합

```typescript
// Button.tsx:166-174
className={cn(
  'font-medium transition-colors focus:outline-none', // 기본 스타일
  borderRadiusClass,                                    // 사이즈별 radius
  typeClasses,                                          // 타입별 스타일
  iconOnlyClasses,                                      // 아이콘 전용 스타일
  iconOnly && 'flex items-center justify-center',     // 조건부 스타일
  !disabled && 'hover:transition-all',                 // 조건부 스타일
  className                                             // 외부 오버라이드
)}
```

**확장 가이드**:

- 기본 스타일 → 타입별 스타일 → 사이즈별 스타일 → 조건부 스타일 → 외부 오버라이드 순서 유지
- `cn()` 유틸리티 사용 (clsx + tailwind-merge)

#### 3. Size/Type별 분기 함수 구조

```typescript
// Button.tsx 패턴
const getAntButtonType = (type: ButtonType): AntButtonProps['type'] => {
  switch (type) {
    case 'default':
      return 'primary';
    case 'plain':
      return 'default';
    case 'outline':
      return 'default';
    default:
      return 'primary';
  }
};

// 확장 시 재사용 가능한 패턴
const mapComponentType = <T extends string>(
  type: T,
  mapping: Record<T, any>
): any => {
  return mapping[type] || mapping.default;
};
```

### Ant Design 래핑 원칙

#### 1. 스타일 오버라이드 vs className

```typescript
// Button.tsx:159-178
<AntButton
  type={antButtonType}        // Ant Design prop 매핑
  size={antButtonSize}        // Ant Design prop 매핑
  className={cn(...)}          // Tailwind 클래스 오버라이드
  style={{ borderRadius }}     // 인라인 스타일 (필요 시)
  {...props}                  // 나머지 Ant Design props 전달
/>
```

**원칙**:

- ✅ `className`으로 Tailwind 클래스 오버라이드
- ✅ `style`은 동적 값 (border-radius)만 사용
- ✅ Ant Design 기본 스타일은 `corePlugins: { preflight: false }`로 비활성화

#### 2. Icon 처리

```typescript
// Button.tsx:146-154
const buttonIcon = iconOnly && icon ? icon : undefined;  // Ant Design icon prop
const buttonContent = iconOnly ? null : children;

const hasIcon = !iconOnly && icon;
const iconElement = hasIcon ? (
  <span className="mr-2 inline-flex items-center">{icon}</span>
) : null;
```

**원칙**:

- ✅ Icon-only: Ant Design `icon` prop 사용
- ✅ Icon + Text: 별도 `span`으로 렌더링 (spacing 제어)
- ✅ `@heroicons/react` 사용

#### 3. Aria/Role

```typescript
// Button.tsx:123-125
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>;
```

**원칙**:

- ✅ `forwardRef`로 ref 전달 (접근성)
- ✅ Ant Design이 기본 aria 속성 제공
- ✅ 추가 aria 속성은 `{...props}`로 전달 가능

### 테스트/Storybook 표준

#### 1. Controls 설정

```typescript
// Button.stories.tsx:13-32
argTypes: {
  type: {
    control: 'select',
    options: ['default', 'plain', 'outline'],
    description: 'Button type: default (Primary), plain (Secondary/Ghost), outline',
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'base', 'l', 'xl'],
    description: 'Button size: xs, sm, base, l, xl',
  },
  // ...
}
```

**확장 가이드**:

- ✅ 모든 주요 prop에 `control` 및 `description` 제공
- ✅ `options`는 타입 정의와 일치

#### 2. Args 설정

```typescript
// Button.stories.tsx:370-378
export const Default: Story = {
  args: {
    children: 'Button',
    type: 'default',
    size: 'base',
    iconOnly: false,
    disabled: false,
  },
};
```

**확장 가이드**:

- ✅ 기본 스토리에 모든 prop의 기본값 제공
- ✅ 실제 사용 예시와 일치하는 값 사용

#### 3. Play Function

**현재 상태**: Play function 없음

**확장 가이드**:

```typescript
import { userEvent, within } from '@storybook/test';

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    // Assertions
  },
};
```

---

## 5) 다크모드 처리 메커니즘

### Tailwind dark: 프리픽스 사용 여부

**현재 상태**: ❌ `dark:` 프리픽스 사용하지 않음

**대신 사용하는 방식**:

- CSS 변수 테마 스위칭 (`[data-theme="dark"]` 선택자)
- Storybook에서 `data-theme="dark"` 속성으로 수동 전환

### CSS 변수 테마 스위칭 방식

#### 1. 루트 레벨 변수 정의

```css
/* app/tokens.css */
:root {
  --background-background-inverse-primary: #18181b; /* Light mode */
  --content-content-inverse-primary: #ffffff;
}

/* app/tokens-dark.css */
[data-theme='dark'] {
  --background-background-inverse-primary: #52525b; /* Dark mode */
  --content-content-inverse-primary: #ffffff;
}
```

#### 2. 테마 스위칭 메커니즘

```typescript
// Button.stories.tsx:205
<div className="..." data-theme="dark">
  {/* Dark mode content */}
</div>
```

**동작 방식**:

1. `data-theme="dark"` 속성이 있는 요소의 하위에서 `[data-theme="dark"]` 선택자로 CSS 변수 오버라이드
2. Tailwind 클래스는 CSS 변수를 참조 (`bg-background-background-inverse-primary` → `var(--background-background-inverse-primary)`)
3. 테마 전환 시 CSS 변수만 변경되면 자동으로 스타일 업데이트

### 상태별 다크모드 대비/명도 적합성 평가

#### 1. Default 상태

| 타입      | Light 모드                                       | Dark 모드                                        | 대비 비율            | 평가    |
| --------- | ------------------------------------------------ | ------------------------------------------------ | -------------------- | ------- |
| `default` | 배경: `#18181b`, 텍스트: `#ffffff`               | 배경: `#52525b`, 텍스트: `#ffffff`               | ✅ 4.5:1 (WCAG AA)   | ✅ 적합 |
| `plain`   | 배경: `#fafafa`, 텍스트: `#09090b`               | 배경: `#27272a`, 텍스트: `#ffffff`               | ✅ 12.6:1 (WCAG AAA) | ✅ 적합 |
| `outline` | 배경: 투명, 텍스트: `#09090b`, border: `#d4d4d8` | 배경: 투명, 텍스트: `#ffffff`, border: `#52525b` | ✅ 12.6:1 (WCAG AAA) | ✅ 적합 |

#### 2. Hover 상태

| 타입      | Light 모드                                 | Dark 모드 | 평가                                          |
| --------- | ------------------------------------------ | --------- | --------------------------------------------- |
| 모든 타입 | 2.5% 검은색 오버레이 (`rgba(0,0,0,0.025)`) | 동일      | ⚠️ Dark 모드에서 오버레이 효과가 약할 수 있음 |

**개선 권고**: Dark 모드에서 흰색 오버레이 사용 고려

```typescript
// 현재
hover: shadow - [inset_0_0_0_9999px_rgba(0, 0, 0, 0.025)];

// 개선안
hover: shadow - [inset_0_0_0_9999px_rgba(0, 0, 0, 0.025)];
dark: hover: shadow - [inset_0_0_0_9999px_rgba(255, 255, 255, 0.05)];
```

#### 3. Focus 상태

| 타입      | Light 모드              | Dark 모드 | 평가                                     |
| --------- | ----------------------- | --------- | ---------------------------------------- |
| 모든 타입 | 파란색 ring (`#3b82f6`) | 동일      | ✅ 적합 (파란색은 모든 배경에서 잘 보임) |

#### 4. Disabled 상태

| 타입      | Light 모드                         | Dark 모드                          | 대비 비율               | 평가         |
| --------- | ---------------------------------- | ---------------------------------- | ----------------------- | ------------ |
| `default` | 배경: `#f4f4f5`, 텍스트: `#a1a1aa` | 배경: `#3f3f46`, 텍스트: `#a1a1aa` | ⚠️ 2.1:1 (WCAG AA 미달) | ⚠️ 개선 필요 |
| `plain`   | 배경: 투명, 텍스트: `#a1a1aa`      | 배경: 투명, 텍스트: `#a1a1aa`      | ⚠️ 배경에 따라 다름     | ⚠️ 개선 필요 |

**개선 권고**: Disabled 상태 대비 비율 향상

```typescript
// 현재
text-content-content-tertiary // #a1a1aa

// 개선안
text-content-content-tertiary dark:text-content-content-secondary // Dark 모드에서 더 진한 회색
```

### 개선 권고 3가지

1. **Hover 오버레이 다크모드 최적화**
   - Dark 모드에서 흰색 오버레이 사용 (`rgba(255,255,255,0.05)`)
   - 또는 CSS 변수 토큰 활용 (`--background-background-inverse-hover-overlay`)

2. **Disabled 상태 대비 비율 향상**
   - Dark 모드에서 Disabled 텍스트를 더 진한 회색으로 변경
   - 또는 Disabled 배경을 더 밝게 조정

3. **Tailwind dark: 프리픽스 도입 검토**
   - 현재는 CSS 변수만으로 처리하지만, `dark:` 프리픽스를 추가하면 더 명시적
   - 다만 CSS 변수 방식이 더 유연하고 토큰 기반 접근에 적합

---

## Action Items

- [ ] **Figma 노드 ID 매핑**: 실제 Figma 파일에서 노드 ID를 추출하여 JSON 매핑에 추가
- [ ] **Border Radius 토큰화**: 6px/8px 값을 디자인 토큰으로 이동 (현재 하드코딩)
- [ ] **Hover Overlay 토큰 활용**: `--background-background-hover-overlay` 토큰 사용 검토
- [ ] **Storybook Theme Decorator**: Global theme switcher 추가 (현재 스토리 분리 방식 개선)
- [ ] **Disabled 상태 대비 비율 개선**: Dark 모드에서 Disabled 텍스트 대비 비율 향상

---

## 보너스: 확장 가이드

### 1. Button.stories.tsx의 Light/Dark 전환을 Decorator로 모듈화한 샘플

```typescript
// .storybook/decorators/withTheme.tsx
import { Decorator } from '@storybook/react';
import { ConfigProvider } from 'antd';

export const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';
  const isDark = theme === 'dark';

  return (
    <div data-theme={theme}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'var(--border-extensions-border-info)',
            colorText: isDark
              ? 'var(--content-content-primary)'
              : 'var(--content-content-primary)',
            // ... 기타 토큰
          },
        }}
      >
        <Story />
      </ConfigProvider>
    </div>
  );
};

// .storybook/preview.tsx
import { withTheme } from './decorators/withTheme';

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
      },
    },
  },
};
```

### 2. Input/Select로 확장 시 재사용할 공통 유틸 함수 시그니처

```typescript
// lib/component-utils.ts
type ComponentType = 'default' | 'plain' | 'outline';
type ComponentSize = 'xs' | 'sm' | 'base' | 'l' | 'xl';

interface ComponentStyleOptions {
  type: ComponentType;
  size: ComponentSize;
  disabled?: boolean;
  variant?: 'default' | 'primary' | 'error' | 'warning' | 'success';
}

export const getComponentClasses = (options: ComponentStyleOptions): string => {
  const { type, size, disabled, variant = 'default' } = options;

  const baseClasses = 'font-medium transition-colors focus:outline-none';
  const typeClasses = getTypeClasses(type, disabled, variant);
  const sizeClasses = getSizeClasses(size);
  const borderRadiusClass = getBorderRadius(size);

  return cn(baseClasses, typeClasses, sizeClasses, borderRadiusClass);
};

const getTypeClasses = (
  type: ComponentType,
  disabled?: boolean,
  variant?: string
): string => {
  // Button/Input/Select 공통 로직
};

const getSizeClasses = (size: ComponentSize): string => {
  // 사이즈별 padding, height 등
};

const getBorderRadius = (size: ComponentSize): string => {
  // 사이즈별 border-radius (6px/8px)
};
```

**사용 예시**:

```typescript
// components/ui/input/Input.tsx
import { getComponentClasses } from '../../../lib/component-utils';

export const Input = ({ type = 'default', size = 'base', disabled, ...props }) => {
  const classes = getComponentClasses({ type, size, disabled });

  return <AntInput className={cn(classes, 'input-specific-classes')} {...props} />;
};
```

---

**문서 작성일**: 2025-11-09  
**분석 대상**: Button 컴포넌트 (`components/ui/button/Button.tsx`, `components/ui/button/Button.stories.tsx`)
