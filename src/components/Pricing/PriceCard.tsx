import React from 'react';
import { Check, Star, Heart } from 'lucide-react';

interface PriceCardProps {
  title: string;
  subtitle: string;
  originalPrice: string;
  price: string;
  discount: string;
  features: Array<{
    text: string;
    highlight?: boolean;
  }>;
  href: string;
  isMostPopular?: boolean;
  onButtonClick: (e: React.MouseEvent) => void;
}

export default function PriceCard({ 
  title, 
  subtitle,
  originalPrice,
  price,
  discount,
  features, 
  href,
  isMostPopular,
  onButtonClick
}: PriceCardProps) {
  return (
    <div className={`relative bg-white rounded-lg transition-all duration-300 ${
      isMostPopular 
        ? 'border-2 border-pink-500 shadow-xl hover:shadow-2xl md:scale-105' 
        : 'border border-gray-200 shadow-lg hover:shadow-xl'
    }`}>
      {/* Discount Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap flex items-center gap-1">
          <Heart className="w-4 h-4 fill-current" />
          ¡{discount}% San Valentín!
        </span>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
          
          {/* Price */}
          <div>
            <span className="text-gray-400 line-through text-lg">{originalPrice} €</span>
            <div className="text-4xl font-bold text-pink-500">
              {price}<span className="text-lg"> €</span>
            </div>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.highlight ? (
                <Star className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
              ) : (
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              )}
              <span className={`ml-3 ${feature.highlight ? 'text-pink-900 font-medium' : 'text-gray-600'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={onButtonClick}
          className={`w-full text-center px-6 py-3 text-white rounded-md font-medium transition-all duration-200 ${
            isMostPopular 
              ? 'bg-pink-500 hover:bg-pink-600 shadow-lg shadow-pink-500/20' 
              : 'bg-pink-500 hover:bg-pink-600'
          }`}
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
}