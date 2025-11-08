import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { cn } from '../../../lib/utils';

export interface SelectProps extends AntSelectProps {
  className?: string;
}

export const Select = React.forwardRef<any, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <AntSelect
        ref={ref}
        className={cn(
          'rounded-[var(--border--radius-rounded)]',
          'border-[var(--border-border-primary)]',
          'bg-[var(--background-background-primary)]',
          'text-[var(--content-content-primary)]',
          className
        )}
        style={{
          borderRadius: 'var(--border--radius-rounded)',
        }}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

