import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { cn } from '../../../lib/utils';

export interface ButtonProps extends Omit<AntButtonProps, 'size' | 'type'> {
  type?: 'default' | 'plain' | 'outline';
  size?: 'xs' | 'sm' | 'base' | 'l' | 'xl';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { type = 'default', size = 'base', icon, className, disabled, ...props },
    ref
  ) => {
    return (
      <AntButton
        ref={ref}
        type={type === 'default' ? 'primary' : 'default'}
        size={
          size === 'xs' || size === 'sm'
            ? 'small'
            : size === 'l' || size === 'xl'
              ? 'large'
              : 'middle'
        }
        icon={icon}
        disabled={disabled}
        className={cn(className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
