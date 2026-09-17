export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://asap.dev/#profile",

    mainEntity: {
      "@type": "Person",
      "@id": "https://asap.dev/#aaron-sunday",

      name: "Aaron Sunday",

      alternateName: "ASAPCONET",

      url: "https://asap.dev",

      description:
        "Aaron Sunday, also known as ASAPCONET, is a software engineer and technical writer.",

      image: "https://asap.dev/about-image.jpg",

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
