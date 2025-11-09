import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { cn } from '../../../lib/utils';

export type ButtonSize = 'xs' | 'sm' | 'base' | 'l' | 'xl';
export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';
export type ButtonVariant = 'default' | 'outline' | 'plain';

export interface ButtonProps
  extends Omit<AntButtonProps, 'size' | 'type' | 'disabled' | 'variant'> {
  size?: ButtonSize;
  state?: ButtonState;
  variant?: ButtonVariant;
  disabled?: boolean;
  iconOnly?: boolean;
  icon?: React.ReactNode;
}

// Get size-specific padding (Figma: xs=24px, sm=28px, base=32px, l=36px, xl=40px)
// padding 계산: height - lineHeight = padding-top + padding-bottom
const getSizePadding = (size: ButtonSize): string => {
  switch (size) {
    case 'xs':
      return 'px-3 py-2'; // height: 24px, lineHeight: 16px, padding: 8px (4px top + 4px bottom)
    case 'sm':
      return 'px-3 py-2'; // height: 28px, lineHeight: 20px, padding: 8px (4px top + 4px bottom)
    case 'base':
      return 'px-4 py-3'; // height: 32px, lineHeight: 20px, padding: 12px (6px top + 6px bottom)
    case 'l':
      return 'px-4 py-4'; // height: 36px, lineHeight: 20px, padding: 16px (8px top + 8px bottom)
    case 'xl':
      return 'px-4 py-4'; // height: 40px, lineHeight: 24px, padding: 16px (8px top + 8px bottom)
    default:
      return 'px-4 py-3';
  }
};

// Get size-specific font size (Figma: xs=12px, sm/base/l=14px, xl=16px)
const getSizeFontSize = (size: ButtonSize): string => {
  switch (size) {
    case 'xs':
      return 'text-xs'; // 12px
    case 'sm':
    case 'base':
    case 'l':
      return 'text-sm'; // 14px
    case 'xl':
      return 'text-base'; // 16px
    default:
      return 'text-sm';
  }
};

// Get size-specific line height (Figma: xs=16px, sm/base/l=20px, xl=24px)
const getSizeLineHeight = (size: ButtonSize): string => {
  switch (size) {
    case 'xs':
      return 'leading-4'; // 16px
    case 'sm':
    case 'base':
    case 'l':
      return 'leading-5'; // 20px
    case 'xl':
      return 'leading-6'; // 24px
    default:
      return 'leading-5';
  }
};

// Get size-specific dimensions for icon-only buttons (Figma: xs=24px, sm=28px, base=32px, l=36px, xl=40px)
const getSizeDimensions = (
  size: ButtonSize
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
const getBorderRadius = (size: ButtonSize): string => {
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
const getStateClasses = (
  state: ButtonState,
  variant: ButtonVariant = 'default',
  disabled?: boolean,
  iconOnly?: boolean
): string => {
  // Base classes for all states - Variant에 따라 다른 스타일 적용
  const getVariantBaseClasses = () => {
    const commonClasses = '!shadow-none'; // 기본 상태에서 shadow 제거

    if (variant === 'outline') {
      return cn(
        '!bg-background-background-primary',
        '!border !border-border-primary !border-solid',
        iconOnly
          ? '[&_.anticon]:!text-content-content-primary [&_svg]:!text-content-content-primary'
          : '!text-content-content-primary',
        '[&:not(:disabled)]:!bg-background-background-primary',
        '[&:not(:disabled)]:hover:!bg-background-background-primary',
        '[&:not(:disabled)]:active:!bg-background-background-primary',
        '[&:not(:disabled)]:focus:!bg-background-background-primary',
        commonClasses
      );
    }

    if (variant === 'plain') {
      return cn(
        iconOnly ? '!bg-background-background-primary' : '!bg-transparent',
        '!border-none',
        iconOnly
          ? '[&_.anticon]:!text-content-content-primary [&_svg]:!text-content-content-primary'
          : '!text-content-content-primary',
        iconOnly
          ? '[&:not(:disabled)]:!bg-background-background-primary'
          : '[&:not(:disabled)]:!bg-transparent',
        '[&:not(:disabled)]:hover:!bg-background-background-primary',
        iconOnly
          ? '[&:not(:disabled)]:active:!bg-background-background-primary'
          : '[&:not(:disabled)]:active:!bg-transparent',
        '[&:not(:disabled)]:focus:!bg-background-background-primary',
        commonClasses
      );
    }

    // Default variant
    return cn(
      '!bg-background-background-inverse-primary',
      '!border !border-border-inverse-primary !border-solid',
      iconOnly
        ? '[&_.anticon]:!text-content-content-inverse-secondary [&_svg]:!text-content-content-inverse-secondary'
        : '!text-content-content-inverse-primary',
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
          iconOnly
            ? '[&_*]:!text-content-content-secondary'
            : '!text-content-content-secondary',
          '[&:disabled]:!bg-background-background-primary',
          '[&:disabled]:!border-border-primary',
          iconOnly
            ? '[&:disabled_*]:!text-content-content-secondary'
            : '[&:disabled]:!text-content-content-secondary',
          commonDisabledClasses
        );
      }

      if (variant === 'plain') {
        return cn(
          iconOnly ? '!bg-background-background-primary' : '!bg-transparent',
          '!border-none',
          iconOnly
            ? '[&_*]:!text-content-content-secondary'
            : '!text-content-content-secondary',
          iconOnly
            ? '[&:disabled]:!bg-background-background-primary'
            : '[&:disabled]:!bg-transparent',
          '[&:disabled]:!border-none',
          iconOnly
            ? '[&:disabled_*]:!text-content-content-secondary'
            : '[&:disabled]:!text-content-content-secondary',
          commonDisabledClasses
        );
      }

      // Default variant
      return cn(
        '!bg-background-background-inverse-primary',
        '!border !border-border-inverse-primary',
        iconOnly
          ? '[&_*]:!text-content-content-inverse-tertiary'
          : '!text-content-content-inverse-tertiary',
        '[&:disabled]:!bg-background-background-inverse-primary',
        '[&:disabled]:!border-border-inverse-primary',
        iconOnly
          ? '[&:disabled_*]:!text-content-content-inverse-tertiary'
          : '[&:disabled]:!text-content-content-inverse-tertiary',
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

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      size = 'base',
      state = 'default',
      variant = 'default',
      className,
      disabled,
      children,
      iconOnly = false,
      icon,
      ...props
    },
    ref
  ) => {
    const paddingClass = iconOnly ? '' : getSizePadding(size);
    const borderRadiusClass = getBorderRadius(size);
    const fontSizeClass = iconOnly ? '' : getSizeFontSize(size);
    const lineHeightClass = iconOnly ? '' : getSizeLineHeight(size);
    const dimensions = iconOnly ? getSizeDimensions(size) : null;
    const stateClasses = getStateClasses(state, variant, disabled, iconOnly);
    const isDisabled = disabled || state === 'disabled';

    // iconOnly일 때는 children 제거
    const buttonChildren = iconOnly ? null : children;
    const buttonIcon = iconOnly ? icon : undefined;

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
        icon={buttonIcon}
        disabled={isDisabled}
        className={cn(
          'flex items-center justify-center transition-colors',
          iconOnly ? '!p-0 font-medium' : 'font-semibold',
          paddingClass,
          fontSizeClass,
          lineHeightClass,
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
          ...(iconOnly && dimensions
            ? {
                width: dimensions.width,
                height: dimensions.height,
                minWidth: dimensions.width,
                minHeight: dimensions.height,
                padding: '0 !important',
              }
            : {}),
          borderRadius: size === 'xs' || size === 'sm' ? '6px' : '8px',
          border:
            variant === 'plain'
              ? 'none !important'
              : variant === 'outline'
                ? '1px solid var(--border-border-primary) !important'
                : '1px solid var(--border-border-inverse-primary) !important',
          backgroundColor:
            variant === 'plain'
              ? iconOnly
                ? 'var(--background-background-primary) !important'
                : state === 'default' || state === 'disabled' || isDisabled
                  ? 'transparent !important'
                  : state === 'hover' || state === 'focus'
                    ? 'var(--background-background-primary) !important'
                    : 'transparent !important'
              : variant === 'outline'
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
              : 'var(--content-content-inverse-primary) !important',
          opacity: isDisabled ? '0.5 !important' : '1 !important',
          // state="hover"일 때만 인라인 스타일로 shadow 적용 (Storybook 표시용)
          ...(state === 'hover' && {
            boxShadow:
              variant === 'outline' || variant === 'plain'
                ? 'inset 0 0 0 9999px var(--background-background-hover-overlay) !important'
                : 'inset 0 0 0 9999px var(--background-background-inverse-hover-overlay) !important',
          }),
        }}
        {...props}
      >
        {buttonChildren}
      </AntButton>
    );
  }
);

Button.displayName = 'Button';
