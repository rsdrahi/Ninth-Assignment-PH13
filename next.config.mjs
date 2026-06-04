/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**images.unsplash.com',
        port: '',
        search: '',
       },
       {
        protocol: 'https',
        hostname: '**upload.wikimedia.org',
        port: '',
        search: '',
       },
       {
         protocol: 'https',
        hostname: '**lh3.googleusercontent.com',
        port: '',
        search: '',
       },
    ],
  },
  experimental: {
serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
},
};


export default nextConfig;
