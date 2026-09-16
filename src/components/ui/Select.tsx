'use client';

import { ChevronDown } from 'lucide-react';
import { forwardRef, useId, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { fieldControlClass } from '@/components/ui/Input';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, required, children, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label htmlFor={selectId} className="text-sm font-medium text-navy">
            {label}
            {required ? (
              <span className="text-red" aria-hidden>
                {' '}
                *
              </span>
            ) : null}
          </label>
        ) : null}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            aria-errormessage={error ? errorId : undefined}
            aria-required={required || undefined}
            className={cn(
              fieldControlClass,
              'appearance-none pr-10',
              error && 'border-red',
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-navy"
          />
        </div>
        {error ? (
          <p id={errorId} role="alert" className="text-sm text-red">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
