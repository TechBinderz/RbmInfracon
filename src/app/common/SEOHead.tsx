import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.rbminfracon.com';
const SITE_NAME = 'RBM Infracon Limited';
const DEFAULT_OG_IMAGE = `${SITE_URL}/rmb_logo_icon.svg`;
const DEFAULT_DESCRIPTION =
  'RBM Infracon Limited – 30+ years of trusted EPC services in Engineering, Procurement, Construction, Operations & Maintenance across India and the Middle East. ISO 9001:2015 certified.';

interface SEOHeadProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}: SEOHeadProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} – ${SITE_NAME}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
