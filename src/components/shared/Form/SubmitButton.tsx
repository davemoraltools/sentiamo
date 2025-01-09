import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({ 
  loading, 
  children,
  className = '',
  ...props 
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`form-submit ${loading ? 'opacity-75 cursor-wait' : ''} ${className}`}
      disabled={loading}
      {...props}
    >
      <Send className={`w-5 h-5 mr-2 ${loading ? 'animate-pulse' : ''}`} />
      {children}
    </button>
  );
}