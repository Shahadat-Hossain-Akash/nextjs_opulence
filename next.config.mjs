/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/v1/:path*',
            destination: 'https://django-opulence.vercel.app/v1/:path*/',
          },
        ]
      }
};

export default nextConfig;
