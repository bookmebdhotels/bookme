const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bookme.com.bd',
        port: '',
        pathname: '/admin/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bookme.com.bd',
        port: '',
        pathname: '/admin/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freecvbd.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '54.151.188.70',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
