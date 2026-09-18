export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://asap-portfolio-alpha.vercel.app/#profile",

    mainEntity: {
      "@type": "Person",
      "@id": "https://asap-portfolio-alpha.vercel.app/#aaron-sunday",

      name: "Aaron Sunday",

      alternateName: "ASAPCONET",

      url: "https://asap-portfolio-alpha.vercel.app",

      description:
        "Aaron Sunday, also known as ASAPCONET, is a software engineer and technical writer.",

      image: "https://asap-portfolio-alpha.vercel.app/about-image.jpg",

      jobTitle: "Software Engineer",

      sameAs: [
        "https://github.com/asapconet",
        "https://twitter.com/asapconet",
        "https://linkedin.com/in/aaron-sunday-the-buffer",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
