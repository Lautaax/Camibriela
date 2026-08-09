import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  schemaType?: 'Organization' | 'MarketingAgency' | 'LocalBusiness' | 'WebPage';
}

export default function SEO({
  title,
  description,
  keywords = 'marketing digital, agencia de marketing, growth marketing, SEM, Google Ads, Meta Ads, redes sociales, community management, branding, Lucciano\'s, Big Six Bahía Blanca, Tampicos Bahía Blanca, ByFy app, Fiesta de la Confluencia, cobertura de recitales, Argentina',
  ogTitle,
  ogDescription,
  ogImage = 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200',
  ogUrl,
  twitterCard = 'summary_large_image',
  schemaType = 'MarketingAgency',
}: SEOProps) {
  const fullTitle = `${title} | Camila Briela Agency`;
  const resolvedOgTitle = ogTitle || fullTitle;
  const resolvedOgDesc = ogDescription || description;
  const resolvedOgUrl = ogUrl || (typeof window !== 'undefined' ? window.location.href : 'https://camilabriela.agency');

  useEffect(() => {
    // Dynamic page title update
    document.title = fullTitle;

    // Helper to set/update meta tags in document head
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('property', 'og:title', resolvedOgTitle);
    setMetaTag('property', 'og:description', resolvedOgDesc);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', resolvedOgUrl);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Camila Briela Agency');
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', resolvedOgTitle);
    setMetaTag('name', 'twitter:description', resolvedOgDesc);
    setMetaTag('name', 'twitter:image', ogImage);

    // Handle canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', resolvedOgUrl);

    // Inject Rich JSON-LD Structured Data for Search Engines & SEM
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "Camila Briela Agency",
      "alternateName": "Camila Briela Growth & Digital Marketing",
      "url": "https://camilabriela.agency",
      "logo": "https://camilabriela.agency/logo.png",
      "image": ogImage,
      "description": description,
      "telephone": "+542915207457",
      "email": "contacto@camilabriela.agency",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bahía Blanca",
        "addressRegion": "Buenos Aires",
        "addressCountry": "AR"
      },
      "areaServed": [
        "Bahía Blanca",
        "Buenos Aires",
        "Neuquén",
        "Argentina",
        "Latinoamérica"
      ],
      "knowsAbout": [
        "Growth Marketing",
        "Social Media Advertising (Meta Ads, TikTok Ads)",
        "Search Engine Marketing (Google Ads)",
        "Content Creation & Viral Reels",
        "App User Acquisition",
        "Cobertura de Recitales y Eventos Masivos"
      ],
      "sameAs": [
        "https://instagram.com/camilabriela"
      ],
      "priceRange": "$$"
    };

    let scriptTag = document.querySelector('script[id="json-ld-schema"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'json-ld-schema');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);

  }, [title, description, keywords, ogTitle, ogDescription, ogImage, resolvedOgUrl, twitterCard, fullTitle, resolvedOgTitle, resolvedOgDesc, schemaType]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={resolvedOgUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Camila Briela Agency" />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={resolvedOgUrl} />
    </>
  );
}

