const baseConfig = {
  repo: "https://github.com/asapconet/asap-portfolio.git",
  title: "asap-portfolio",
  description: "",
  url: "asap.dev",
};

const siteConfig = {
  ...baseConfig,
  projectName: "asap-portfolio",
  copyright: `Copyright &copy; ${new Date().getFullYear()}`,
  repo: {
    url: "",
    editUrl: `${baseConfig.repo}/edit/main/data`,
    blobUrl: `${baseConfig.repo}/blob/main`,
  },
  seo: {
    title: baseConfig.title,
    titleTemplate: "",
    description: baseConfig.description,
    siteUrl: baseConfig.url,
    twitter: {
      handle: "@asapconet",
      site: baseConfig.url,
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseConfig.url,
      title: baseConfig.title,
      description: baseConfig.description,
      site_name: baseConfig.title,
      images: [
        {
          url: `${baseConfig.url}/open-graph/website.png`,
          width: 1240,
          height: 480,
        },
        {
          url: `${baseConfig.url}/open-graph/twitter.png`,
          width: 1012,
          height: 506,
        },
      ],
    },
  },
}

export default siteConfig
