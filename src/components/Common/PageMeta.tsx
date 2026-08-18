const SITE_URL = "https://www.csemedi.com";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
}

export const PageMeta = ({ title, description, path }: PageMetaProps) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${SITE_URL}${path}`} />
  </>
);
