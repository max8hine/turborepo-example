module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../.."),
  },
};
