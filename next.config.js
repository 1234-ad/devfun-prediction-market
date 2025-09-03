/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dev.fun', 'pump.fun'],
  },
  env: {
    NEXT_PUBLIC_SOLANA_RPC: process.env.NEXT_PUBLIC_SOLANA_RPC || 'https://api.mainnet-beta.solana.com',
    NEXT_PUBLIC_DEVFUN_API: process.env.NEXT_PUBLIC_DEVFUN_API || 'https://api.dev.fun',
  }
}

module.exports = nextConfig