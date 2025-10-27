import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const withPWAFn = withPWA({
  dest: 'public',
  // Do not register the service worker in development to avoid dev-sw requests
  register: !isDev,
  skipWaiting: true,
  // Fully disable PWA in development so no SW or precache is attempted
  disable: isDev,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Helps Next resolve workspace root correctly and quiet related warnings
  outputFileTracingRoot: __dirname,
};

export default withPWAFn(nextConfig);
