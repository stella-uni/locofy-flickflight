import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { cn } from '../../../lib/utils';

export type IconButtonSize = 'xs' | 'sm' | 'base' | 'l' | 'xl';
export type IconButtonState = 'default' | 'hover' | 'focus' | 'disabled';
export type IconButtonVariant = 'default' | 'outline' | 'plain';

export interface IconButtonProps
  extends Omit<
    AntButtonProps,
    'size' | 'type' | 'icon' | 'disabled' | 'children' | 'variant'
  > {
  size?: IconButtonSize;
  state?: IconButtonState;
  variant?: IconButtonVariant;
  icon?: React.ReactNode;
  disabled?: boolean;
}

// Get size-specific dimensions (Figma: xs=24px, sm=28px, base=32px, l=36px, xl=40px)
const getSizeDimensions = (
  size: IconButtonSize
): { width: string; height: string } => {
  switch (size) {
    case 'xs':
      return { width: '24px', height: '24px' };
    case 'sm':
      return { width: '28px', height: '28px' };
    case 'base':
      return { width: '32px', height: '32px' };
    case 'l':
      return { width: '36px', height: '36px' };
    case 'xl':
      return { width: '40px', height: '40px' };
    default:
      return { width: '32px', height: '32px' };
  }
};

// Get size-specific border radius (Figma: xs/sm=6px, base/l/xl=8px)
const getBorderRadius = (size: IconButtonSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'rounded-md'; // 6px
    case 'base':
    case 'l':
    case 'xl':
      return 'rounded-lg'; // 8px
    default:
      return 'rounded-lg';
  }
};

// Get state classes based on Figma data
// Light mode Default, Outline, and Plain variants
// Default variant:
// - Default: 배경 #18181b, 테두리 #3f3f46
// - Hover: 배경 #18181b + white overlay 5% (opacity: 0.05)
// - Focus: 배경 #18181b, 테두리 #3f3f46 (Default와 동일)
// - Disabled: 배경 #18181b, 테두리 #3f3f46, opacity 50%
// Outline variant:
// - Default: 배경 #ffffff, 테두리 #d4d4d8
// - Hover: 배경 #ffffff + black overlay 2.5% (opacity: 0.025)
// - Focus: 배경 #ffffff, 테두리 #d4d4d8 (Default와 동일)
// - Disabled: 배경 #ffffff, 테두리 #d4d4d8, opacity 50%
// Plain variant:
// - Default: 배경 #ffffff, 테두리 없음
// - Hover: 배경 #ffffff + black overlay 2.5% (opacity: 0.025), 테두리 없음
// - Focus: 배경 #ffffff, 테두리 없음 (Default와 동일)
// - Disabled: 배경 #ffffff, 테두리 없음, opacity 50%
const getStateClasses = (
  state: IconButtonState,
  variant: IconButtonVariant = 'default',
  disabled?: boolean
): string => {
  // Base classes for all states - Variant에 따라 다른 스타일 적용
  const getVariantBaseClasses = () => {
    const commonClasses = '!shadow-none'; // 기본 상태에서 shadow 제거

    if (variant === 'outline') {
      return cn(
        '!bg-background-background-primary',
        '!border !border-border-primary !border-solid',
        '[&_.anticon]:!text-content-content-primary',
        '[&_svg]:!text-content-content-primary',
        '[&:not(:disabled)]:!bg-background-background-primary',
        '[&:not(:disabled)]:hover:!bg-background-background-primary',
        '[&:not(:disabled)]:active:!bg-background-background-primary',
        '[&:not(:disabled)]:focus:!bg-background-background-primary',
        commonClasses
      );
    }

    if (variant === 'plain') {
      return cn(
        '!bg-background-background-primary',
        '!border-none',
        '[&_.anticon]:!text-content-content-primary',
        '[&_svg]:!text-content-content-primary',
        '[&:not(:disabled)]:!bg-background-background-primary',
        '[&:not(:disabled)]:hover:!bg-background-background-primary',
        '[&:not(:disabled)]:active:!bg-background-background-primary',
        '[&:not(:disabled)]:focus:!bg-background-background-primary',
        commonClasses
      );
    }

    // Default variant
    return cn(
      '!bg-background-background-inverse-primary',
      '!border !border-border-inverse-primary !border-solid',
      '[&_.anticon]:!text-content-content-inverse-secondary',
      '[&_svg]:!text-content-content-inverse-secondary',
      '[&:not(:disabled)]:!bg-background-background-inverse-primary',
      '[&:not(:disabled)]:hover:!bg-background-background-inverse-primary',
      '[&:not(:disabled)]:active:!bg-background-background-inverse-primary',
      '[&:not(:disabled)]:focus:!bg-background-background-inverse-primary',
      commonClasses
    );
  };

  const baseClasses = getVariantBaseClasses();

  if (disabled || state === 'disabled') {
    // Disabled 상태 - Variant에 따라 다른 스타일 적용
    const getDisabledClasses = () => {
      const commonDisabledClasses = cn(
        '!cursor-not-allowed',
        '[&:disabled]:!opacity-50',
        '[&:disabled]:!cursor-not-allowed'
      );

      if (variant === 'outline') {
        return cn(
          '!bg-background-background-primary',
          '!border !border-border-primary',
          '[&_*]:!text-content-content-secondary',
          '[&:disabled]:!bg-background-background-primary',
          '[&:disabled]:!border-border-primary',
          '[&:disabled_*]:!text-content-content-secondary',
          commonDisabledClasses
        );
      }

      if (variant === 'plain') {
        return cn(
          '!bg-background-background-primary',
          '!border-none',
          '[&_*]:!text-content-content-secondary',
          '[&:disabled]:!bg-background-background-primary',
          '[&:disabled]:!border-none',
          '[&:disabled_*]:!text-content-content-secondary',
          commonDisabledClasses
        );
      }

      // Default variant
      return cn(
        '!bg-background-background-inverse-primary',
        '!border !border-border-inverse-primary',
        '[&_*]:!text-content-content-inverse-tertiary',
        '[&:disabled]:!bg-background-background-inverse-primary',
        '[&:disabled]:!border-border-inverse-primary',
        '[&:disabled_*]:!text-content-content-inverse-tertiary',
        commonDisabledClasses
      );
    };

    return getDisabledClasses();
  }

  // Hover overlay shadow - CSS 클래스로만 처리 (인라인 스타일로는 hover 이벤트 감지 불가)
  const getHoverOverlayShadow = () => {
    return variant === 'outline' || variant === 'plain'
      ? 'hover:!shadow-[inset_0_0_0_9999px_var(--background-background-hover-overlay)]'
      : 'hover:!shadow-[inset_0_0_0_9999px_var(--background-background-inverse-hover-overlay)]';
  };

  const getHoverStateShadow = () => {
    return variant === 'outline' || variant === 'plain'
      ? '!shadow-[inset_0_0_0_9999px_var(--background-background-hover-overlay)]'
      : '!shadow-[inset_0_0_0_9999px_var(--background-background-inverse-hover-overlay)]';
  };

  switch (state) {
    case 'default':
      return cn(baseClasses, getHoverOverlayShadow());

    case 'hover':
      return cn(
        baseClasses,
        getHoverStateShadow(),
        getHoverOverlayShadow(),
        // Ant Design hover 스타일 오버라이드
        variant === 'plain'
          ? '[&:not(:disabled)]:hover:!border-none'
          : variant === 'outline'
            ? '[&:not(:disabled)]:hover:!border-border-primary'
            : '[&:not(:disabled)]:hover:!border-border-inverse-primary'
      );

    case 'focus':
      // Focus state same as default
      return cn(baseClasses, getHoverOverlayShadow());

    default:
      return baseClasses;
  }
};

export const IconButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  IconButtonProps
>(
  (
    {
      size = 'base',
      state = 'default',
      variant = 'default',
      icon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const dimensions = getSizeDimensions(size);
    const borderRadiusClass = getBorderRadius(size);
    const stateClasses = getStateClasses(state, variant, disabled);
    const isDisabled = disabled || state === 'disabled';

    // Remove children from props to ensure icon-only button
    const { children: _, ...restProps } = props as any;

    return (
      <AntButton
        ref={ref}
        type="primary"
        size={
          size === 'xs' || size === 'sm'
            ? 'small'
            : size === 'l' || size === 'xl'
              ? 'large'
              : 'middle'
        }
        icon={icon}
        disabled={isDisabled}
        className={cn(
          'flex items-center justify-center !p-0 font-medium transition-colors',
          // Ant Design 기본 스타일 오버라이드
          '[&:not(:disabled)]:active:!shadow-none',
          '[&:not(:disabled)]:focus:!shadow-none',
          '[&:not(:disabled)]:focus-visible:!shadow-none',
          '[&:disabled]:!shadow-none',
          '[&:not(:disabled)]:!text-inherit',
          '[&:not(:disabled)]:hover:!text-inherit',
          '[&:not(:disabled)]:active:!text-inherit',
          '[&:not(:disabled)]:focus:!text-inherit',
          borderRadiusClass,
          stateClasses,
          className
        )}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          minWidth: dimensions.width,
          minHeight: dimensions.height,
          padding: '0 !important',
          borderRadius: size === 'xs' || size === 'sm' ? '6px' : '8px',
          border:
            variant === 'plain'
              ? 'none !important'
              : variant === 'outline'
                ? '1px solid var(--border-border-primary) !important'
                : '1px solid var(--border-border-inverse-primary) !important',
          backgroundColor:
            variant === 'outline' || variant === 'plain'
              ? 'var(--background-background-primary) !important'
              : 'var(--background-background-inverse-primary) !important',
          borderColor:
            variant === 'plain'
              ? 'transparent !important'
              : variant === 'outline'
                ? 'var(--border-border-primary) !important'
                : 'var(--border-border-inverse-primary) !important',
          color: isDisabled
            ? variant === 'outline' || variant === 'plain'
              ? 'var(--content-content-secondary) !important'
              : 'var(--content-content-inverse-tertiary) !important'
            : variant === 'outline' || variant === 'plain'
              ? 'var(--content-content-primary) !important'
              : 'var(--content-content-inverse-secondary) !important',
          opacity: isDisabled ? '0.5 !important' : '1 !important',
          // state="hover"일 때만 인라인 스타일로 shadow 적용 (Storybook 표시용)
          ...(state === 'hover' && {
            boxShadow:
              variant === 'outline' || variant === 'plain'
                ? 'inset 0 0 0 9999px var(--background-background-hover-overlay) !important'
                : 'inset 0 0 0 9999px var(--background-background-inverse-hover-overlay) !important',
          }),
        }}
        {...restProps}
      />
    );
  }
);

IconButton.displayName = 'IconButton';
