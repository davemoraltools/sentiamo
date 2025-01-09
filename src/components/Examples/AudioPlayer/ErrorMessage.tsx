import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-2 p-2 bg-red-50 rounded-lg">
      <p className="text-sm text-red-600">{message}</p>
    </div>
  );
}