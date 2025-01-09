import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
  touched?: boolean;
}

export default function Input({ 
  label, 
  icon: Icon, 
  error, 
  touched,
  className = '',
  ...props 
}: InputProps) {
  const isValid = touched && !error;
  
  return (
    <div className="form-field">
      <label className="form-label">
        <Icon className="w-4 h-4 text-gray-500" />
        <span>{label}</span>
      </label>
      
      <input
        className={`form-input ${
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