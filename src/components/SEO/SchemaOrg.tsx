import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type?: 'Organization' | 'Product' | 'Service' | 'WebSite';
  name?: string;
  description?: string;
  url?: string;
}

export default function SchemaOrg({
  type = 'Organization',
  name = 'Sentiamo',
  description = 'Creamos canciones personalizadas y únicas para tus momentos especiales.',
  url = 'https://sentiamo.es'
}: SchemaOrgProps) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
  };

  const schemas = [
    // Servicio
    {
      ...baseSchema,
      '@type': 'Service',
      provider: {
        '@type': 'Organization',
        name: 'Sentiamo'
      },
      areaServed: 'ES',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Canciones Personalizadas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Nota del Corazón',
              description: 'El detalle perfecto para emocionar'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Armonía del Alma',
              description: 'La canción que cuenta tu historia'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Recuerdo Eterno',
              description: 'El recuerdo más especial para toda la vida'
            }
          }
        ]
      }
    }
  ];

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}