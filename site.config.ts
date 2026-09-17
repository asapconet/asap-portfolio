const baseConfig = {
  repo: "https://github.com/asapconet/asap-portfolio.git",
  title: "Aaron Sunday [ASAPCONET] — Software Engineer & Technical Writer",
  description:
    "Aaron Sunday, is a software engineer and technical writer building production software, backend APIs, and Bitcoin projects with Rust.",
  url: "https://asap.dev",
};

const siteConfig = {
  ...baseConfig,

  projectName: "asap-portfolio",

  copyright: `Copyright © ${new Date().getFullYear()}`,

  repo: {
    url: baseConfig.repo,
    editUrl: `${baseConfig.repo}/edit/main/data`,
    blobUrl: `${baseConfig.repo}/blob/main`,
  },

  seo: {
    title: baseConfig.title,
    titleTemplate: "%s | Aaron Sunday — ASAPCONET",
    description: baseConfig.description,
    siteUrl: baseConfig.url,

    twitter: {
      handle: "@asapconet",
      site: "@asapconet",
      cardType: "summary_large_image",
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseConfig.url,
      title: baseConfig.title,
      description: baseConfig.description,
      site_name: "Aaron Sunday — ASAPCONET",
      images: [
        {
          url: `${baseConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Aaron Sunday — Software Engineer and Technical Writer",
        },
      ],
    },
  },
};

export default siteConfig;
