import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.insightout.kr',
      lastModified: new Date(),
    },
  ];
}
