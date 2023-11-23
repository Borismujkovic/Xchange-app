/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  }
};

module.exports = nextTranslate(nextConfig);
