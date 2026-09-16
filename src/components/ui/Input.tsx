'use client';

import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const fieldControlClass =
  'w-full rounded-lg border border-navy/20 bg-white px-3 py-2.5 text-dark-gray transition-shadow duration-200 placeholder:text-dark-gray/50 focus-visible:border-red focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-red disabled:cursor-not-allowed disabled:bg-gray disabled:opacity-70';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, required, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium text-navy">
            {label}
            {required ? (
              <span className="text-red" aria-hidden>
                {' '}
                *
              </span>
            ) : null}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          aria-errormessage={error ? errorId : undefined}
          aria-required={required || undefined}
          className={cn(fieldControlClass, error && 'border-red', className)}
          {...props}
        />
        {error ? (
          <p id={errorId} role="alert" className="text-sm text-red">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, fieldControlClass };
