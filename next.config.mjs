/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://plus.unsplash.com/premium_photo-1775446842961-c8ba3264b23a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
      // https://i.ibb.co.com/trx2j5Q/rashid-khan.jpg
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/trx2j5Q/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
