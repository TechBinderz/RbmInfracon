import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.rbminfracon.com';
const SITE_NAME = 'RBM Infracon Limited';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
  'RBM Infracon Limited (NSE: RBMINFRA) – 30+ years of trusted EPC services in Engineering, Procurement, Construction, Operations & Maintenance across India and the Middle East. ISO 9001:2015 certified.';
const DEFAULT_ROBOTS =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

interface SEOHeadProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  robots?: string;
  structuredData?: object | object[];
}

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  robots = DEFAULT_ROBOTS,
  structuredData,
}: SEOHeadProps) => {
  const isHomePage = !path || path === '/' || path === '';
  const fullTitle = isHomePage ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = isHomePage ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  // Generate BreadcrumbList if on an inner route
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbList =
    pathSegments.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_URL}/`,
            },
            ...pathSegments.map((segment, index) => {
              const currentPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const formattedName =
                index === pathSegments.length - 1
                  ? title
                  : segment
                      .replace(/-/g, ' ')
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())
                      .trim();

              return {
                '@type': 'ListItem',
                position: index + 2,
                name: formattedName,
                item: `${SITE_URL}${currentPath}`,
              };
            }),
          ],
        }
      : null;

  const extraSchemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={`${title} – ${SITE_NAME}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title} – ${SITE_NAME}`} />

      {/* Breadcrumb Schema */}
      {breadcrumbList && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbList)}
        </script>
      )}

      {/* Page-Specific Structured Data */}
      {extraSchemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
