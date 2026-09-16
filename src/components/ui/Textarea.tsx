'use client';

import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { fieldControlClass } from '@/components/ui/Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, required, rows = 4, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label htmlFor={textareaId} className="text-sm font-medium text-navy">
            {label}
            {required ? (
              <span className="text-red" aria-hidden>
                {' '}
                *
              </span>
            ) : null}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          aria-errormessage={error ? errorId : undefined}
          aria-required={required || undefined}
          className={cn(fieldControlClass, 'min-h-28 resize-y', error && 'border-red', className)}
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

Textarea.displayName = 'Textarea';

export { Textarea };
