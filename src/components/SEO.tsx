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
}

export default function SEO({
  title,
  description,
  keywords = 'marketing, agency, digital, camila briela, growth, social media, content strategy, branding',
  ogTitle,
  ogDescription,
  ogImage = 'https://camilabriela.agency/og-image.jpg',
  ogUrl,
  twitterCard = 'summary_large_image',
}: SEOProps) {
  const fullTitle = `${title} | Camila Briela Agency`;
  const resolvedOgTitle = ogTitle || fullTitle;
  const resolvedOgDesc = ogDescription || description;
  const resolvedOgUrl = ogUrl || typeof window !== 'undefined' ? window.location.href : 'https://camilabriela.agency';

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
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, resolvedOgUrl, twitterCard, fullTitle, resolvedOgTitle, resolvedOgDesc]);

  // React 19 natively supports rendering title & meta tags directly inside component rendering tree (auto hoisting)
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
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={resolvedOgUrl} />
    </>
  );
}
