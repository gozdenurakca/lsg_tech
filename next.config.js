/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["trlsg.com"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

module.exports = nextConfig;
