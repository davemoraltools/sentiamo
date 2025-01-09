import React from 'react';

export default function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)'
        }}
      />
      <div className="absolute inset-0 bg-black/75" /> {/* Increased opacity for better contrast */}
    </div>
  );
}