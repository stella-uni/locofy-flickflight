import React from 'react';
import { cn } from '../../../lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonTone = 'default' | 'success' | 'warning' | 'error' | 'info';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const variantClasses = {
  primary: 'bg-[var(--border-extensions-border-info)] text-white hover:opacity-90',
  secondary: 'bg-[var(--background-background-secondary)] text-[var(--content-content-primary)] hover:bg-[var(--background-background-tertiary)]',
  outline: 'border border-[var(--border-border-primary)] text-[var(--content-content-primary)] hover:bg-[var(--background-background-secondary)]',
  ghost: 'text-[var(--content-content-primary)] hover:bg-[var(--background-background-secondary)]',
};

const toneClasses = {
  default: '',
  success: 'bg-[var(--border-extensions-border-success)] text-white',
  warning: 'bg-[var(--border-extensions-border-warning)] text-white',
  error: 'bg-[var(--border-extensions-border-error)] text-white',
  info: 'bg-[var(--border-extensions-border-info)] text-white',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      tone = 'default',
      icon,
      iconPosition = 'left',
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-[var(--border--radius-rounded)] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const classes = cn(
      baseClasses,
      sizeClasses[size],
      tone === 'default' ? variantClasses[variant] : toneClasses[tone],
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        style={{
          borderRadius: 'var(--border--radius-rounded)',
        }}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

