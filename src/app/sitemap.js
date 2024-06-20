const HOST = "https://dracitlallizepeda.com/";

export default function sitemap() {
    return [
      {
        url: HOST,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${HOST}/aviso-de-privacidad`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]
  };