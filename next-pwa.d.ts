declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  export interface PWAOptions {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    scope?: string;
    sw?: string;
    buildExcludes?: string[];
    runtimeCaching?: any[];
    publicExcludes?: string[];
    fallbacks?: Record<string, string>;
    [key: string]: any;
  }

  type WithPWA = (config?: PWAOptions) => (nextConfig: NextConfig) => NextConfig;

  const withPWA: WithPWA;
  export default withPWA;
}