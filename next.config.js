/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Capture anything starting with /app/
        source: "/app/:path*",
        // Send it to the static file in public/app/index.html
        destination: "/app/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
