import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "B_Portfolio";
const isUserSite = repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const basePath = isGitHubPagesBuild && !isUserSite ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : "standalone",
  basePath,
  images: {
    unoptimized: isGitHubPagesBuild,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
