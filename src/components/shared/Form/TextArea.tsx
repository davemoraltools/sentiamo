import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
  touched?: boolean;
}

export default function TextArea({ 
  label, 
  icon: Icon, 
  error, 
  touched,
  className = '',
  ...props 
}: TextAreaProps) {
  const isValid = touched && !error;
  
  return (
    <div className="form-field">
      <label className="form-label">
        <Icon className="w-4 h-4 text-gray-500" />
        <span>{label}</span>
      </label>
      
      <textarea
        className={`form-textarea ${
          error ? 'form-input-error' : 
          isValid ? 'form-input-valid' : ''
        } ${className}`}
        {...props}
      />
      
      {error && touched && (
        <p className="form-error">{error}</p>
      )}
    </div>
  );
}