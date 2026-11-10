/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  experimental: {
    useTypeScriptCli: false,
  },
  // Vercel-ready — no extra config needed for deployment.
  // If you add an image domain in the future, list it here:
  // images: { domains: ["your-domain.com"] },
};

export default nextConfig;
