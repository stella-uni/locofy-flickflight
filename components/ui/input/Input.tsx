import React from 'react';
import { Input as AntInput, InputProps as AntInputProps, InputRef } from 'antd';
import { cn } from '../../../lib/utils';

export interface InputProps extends AntInputProps {
  className?: string;
}

export const Input = React.forwardRef<InputRef, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <AntInput
        ref={ref}
        className={cn(
          'rounded-[var(--border--radius-rounded)]',
          'border-[var(--border-border-primary)]',
          'bg-[var(--background-background-primary)]',
          'text-[var(--content-content-primary)]',
          'placeholder:text-[var(--content-content-tertiary)]',
          'focus:border-[var(--border-extensions-border-info)]',
          className
        )}
        style={{
          borderRadius: 'var(--border--radius-rounded)',
          borderColor: 'var(--border-border-primary)',
          backgroundColor: 'var(--background-background-primary)',
          color: 'var(--content-content-primary)',
        }}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

