import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { cn } from '../../../lib/utils';

// Figma 구조에 맞춘 타입 정의
export type ButtonType = 'default' | 'plain' | 'outline'; // Figma: Default, Plain, Outline
export type ButtonSize = 'xs' | 'sm' | 'base' | 'l' | 'xl'; // Figma: xs, sm, base, l, xl
export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled'; // Figma: Default, Hover, Focus, Disabled

export interface ButtonProps
  extends Omit<AntButtonProps, 'size' | 'type' | 'icon' | 'disabled'> {
  type?: ButtonType; // 'default' (Primary), 'plain' (Secondary), 'outline'
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

// Map our type to Ant Design button types
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

// Map our size to Ant Design button sizes
const getAntButtonSize = (size: ButtonSize): AntButtonProps['size'] => {
  switch (size) {
    case 'xs':
      return 'small';
    case 'sm':
      return 'small';
    case 'base':
      return 'middle';
    case 'l':
      return 'large';
    case 'xl':
      return 'large';
    default:
      return 'middle';
  }
};

// Get custom classes based on type
const getTypeClasses = (type: ButtonType, disabled?: boolean): string => {
  if (disabled) {
    switch (type) {
      case 'default':
        // Disabled primary button - light grey background, dark grey text
        return 'bg-background-background-tertiary text-content-content-tertiary border-0 cursor-not-allowed';
      case 'plain':
        // Disabled ghost button - white background, light grey text, no border
        return 'bg-transparent text-content-content-tertiary border-0 cursor-not-allowed';
      case 'outline':
        // Disabled outline button - transparent background, light grey text and border
        return 'bg-transparent text-content-content-tertiary border border-border-primary cursor-not-allowed';
      default:
        return '';
    }
  }

  switch (type) {
    case 'default':
      // Primary button - dark background (Light: #18181b, Dark: #18181b)
      // Hover: adds black overlay with 2.5% opacity (Figma: opacity: 0.025)
      // Focus: blue outline
      return 'bg-background-background-inverse-primary hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.025)] focus:ring-2 focus:ring-border-extensions-border-info focus:ring-offset-2 active:bg-background-background-inverse-primary/90 text-content-content-inverse-primary border-0';
    case 'plain':
      // Secondary/Ghost button - light background (Light: #fafafa, Dark: #27272a)
      // Hover: adds black overlay with 2.5% opacity
      return 'bg-background-background-secondary hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.025)] focus:ring-2 focus:ring-border-extensions-border-info focus:ring-offset-2 active:bg-background-background-tertiary text-content-content-primary border-0';
    case 'outline':
      // Outline button - transparent background with border
      // Hover: adds black overlay with 2.5% opacity
      // Focus: blue outline
      return 'bg-transparent hover:shadow-[inset_0_0_0_9999px_rgba(0,0,0,0.025)] focus:ring-2 focus:ring-border-extensions-border-info focus:ring-offset-2 active:bg-background-background-tertiary text-content-content-primary border border-border-primary hover:border-border-primary';
    default:
      return '';
  }
};

// Get size-specific border radius (Figma: xl/l/base = 8px, sm/xs = 6px)
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

// Get size-specific padding for icon-only buttons
const getIconOnlySize = (size: ButtonSize): string => {
  switch (size) {
    case 'xs':
      return 'w-6 h-6 p-0';
    case 'sm':
      return 'w-7 h-7 p-0';
    case 'base':
      return 'w-8 h-8 p-0';
    case 'l':
      return 'w-9 h-9 p-0';
    case 'xl':
      return 'w-10 h-10 p-0';
    default:
      return 'w-8 h-8 p-0';
  }
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      type = 'default',
      size = 'base',
      icon,
      iconOnly = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const antButtonType = getAntButtonType(type);
    const antButtonSize = getAntButtonSize(size);
    const typeClasses = getTypeClasses(type, disabled);
    const iconOnlyClasses = iconOnly ? getIconOnlySize(size) : '';
    const borderRadiusClass = getBorderRadius(size);

    // For icon-only buttons, use Ant Design's icon prop
    const buttonIcon = iconOnly && icon ? icon : undefined;
    const buttonContent = iconOnly ? null : children;

    // For buttons with icon and text, render icon separately
    const hasIcon = !iconOnly && icon;
    const iconElement = hasIcon ? (
      <span className="mr-2 inline-flex items-center">{icon}</span>
    ) : null;

    // Get border radius value for inline style
    const borderRadiusValue = size === 'xs' || size === 'sm' ? '6px' : '8px';

    return (
      <AntButton
        ref={ref}
        type={antButtonType}
        size={antButtonSize}
        icon={buttonIcon}
        disabled={disabled}
        className={cn(
          'font-medium transition-colors focus:outline-none',
          borderRadiusClass,
          typeClasses,
          iconOnlyClasses,
          iconOnly && 'flex items-center justify-center',
          !disabled && 'hover:transition-all',
          className
        )}
        style={{
          borderRadius: borderRadiusValue,
        }}
        {...props}
      >
        {iconElement}
        {buttonContent}
      </AntButton>
    );
  }
);

Button.displayName = 'Button';
