module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_STRAPI_MAIN_URL],
  },
  output: "standalone",
};
