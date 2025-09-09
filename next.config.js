/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
