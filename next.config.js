/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    reactStrictMode: true,
    serverRuntimeConfig: {
        API_URL: process.env.Name
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
            },
        ],
    }
};

module.exports = nextConfig
