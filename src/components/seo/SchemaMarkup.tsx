import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type?: 'LocalBusiness' | 'Service' | 'Organization' | 'Review';
  data?: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type = 'LocalBusiness', data }) => {
  const getSchemaData = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type
    };

    switch (type) {
      case 'LocalBusiness':
        return {
          ...baseSchema,
          "@type": "LocalBusiness",
          "name": "EcowaveUS",
          "description": "Premier heat pump, solar panel, and EV charger installation services in Beverly, MA and North Shore Massachusetts. Mass Save certified with expert clean energy solutions.",
          "url": "https://www.ecowaveus.com",
          "telephone": "978-500-4081",
          "email": "info@ecowaveus.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Beverly, MA",
            "addressLocality": "Beverly",
            "addressRegion": "MA",
            "postalCode": "01915",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "42.5584",
            "longitude": "-70.8800"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Beverly",
              "containedInPlace": {
                "@type": "State",
                "name": "Massachusetts"
              }
            },
            {
              "@type": "City", 
              "name": "Salem",
              "containedInPlace": {
                "@type": "State",
                "name": "Massachusetts"
              }
            },
            {
              "@type": "City",
              "name": "Gloucester", 
              "containedInPlace": {
                "@type": "State",
                "name": "Massachusetts"
              }
            },
            {
              "@type": "City",
              "name": "Manchester-by-the-Sea",
              "containedInPlace": {
                "@type": "State", 
                "name": "Massachusetts"
              }
            }
          ],
          "serviceType": [
            "Heat Pump Installation",
            "Solar Panel Installation", 
            "EV Charger Installation",
            "Energy Storage Systems",
            "Clean Energy Solutions"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Clean Energy Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Heat Pump Installation",
                  "description": "Professional heat pump installation with Mass Save rebates in Beverly, MA"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Solar Panel Installation",
                  "description": "Complete solar panel systems for residential and commercial properties"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "EV Charger Installation",
                  "description": "Level 2 home and commercial EV charging station installation"
                }
              }
            ]
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Financing"],
          "currenciesAccepted": "USD",
          "logo": "https://www.ecowaveus.com/images/logo.webp",
          "image": "https://www.ecowaveus.com/images/heat-pumps.webp",
          "sameAs": [
            "https://www.facebook.com/ecowaveus",
            "https://www.linkedin.com/company/ecowaveus"
          ],
          ...data
        };

      case 'Service':
        return {
          ...baseSchema,
          "@type": "Service",
          "name": data?.name || "Heat Pump Installation",
          "description": data?.description || "Professional heat pump installation services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "EcowaveUS",
            "telephone": "978-500-4081"
          },
          "areaServed": {
            "@type": "City",
            "name": "Beverly",
            "containedInPlace": {
              "@type": "State", 
              "name": "Massachusetts"
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data?.name || "Heat Pump Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "price": data?.price || "Contact for pricing",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            ]
          },
          ...data
        };

      case 'Organization':
        return {
          ...baseSchema,
          "@type": "Organization",
          "name": "EcowaveUS",
          "url": "https://www.ecowaveus.com",
          "logo": "https://www.ecowaveus.com/images/logo.webp",
          "description": "Leading clean energy solutions provider in Beverly, MA specializing in heat pumps, solar panels, and EV chargers.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "978-500-4081",
            "contactType": "customer service",
            "areaServed": "MA",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress", 
            "addressLocality": "Beverly",
            "addressRegion": "MA",
            "addressCountry": "US"
          },
          ...data
        };

      case 'Review':
        return {
          ...baseSchema,
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "EcowaveUS"
          },
          "author": {
            "@type": "Person",
            "name": data?.author || "Customer"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data?.rating || 5,
            "bestRating": 5
          },
          "reviewBody": data?.reviewText || "Excellent service and professional installation.",
          ...data
        };

      default:
        return baseSchema;
    }
  };

  const schemaData = getSchemaData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
