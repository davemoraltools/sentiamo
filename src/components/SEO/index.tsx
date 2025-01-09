import React from 'react';
import { Helmet } from 'react-helmet-async';
import SchemaOrg from './SchemaOrg';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  schemaType?: 'Organization' | 'Product' | 'Service' | 'WebSite';
}

export default function SEO({ 
  title = 'Sentiamo | Canciones Personalizadas para Momentos Únicos',
  description = 'Creamos canciones únicas y personalizadas para tus momentos especiales. Bodas, cumpleaños, aniversarios y más. ¡Haz que tus recuerdos sean inolvidables!',
  canonical = 'https://sentiamo.es',
  type = 'website',
  schemaType = 'Organization'
}: SEOProps) {
  const siteTitle = title.includes('Sentiamo') ? title : `${title} | Sentiamo`;
  
  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <SchemaOrg type={schemaType} />
    </>
  );
}