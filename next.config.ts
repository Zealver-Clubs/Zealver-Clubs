import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Permanent redirects for pages that have been renamed after publishing.
   * A recipe's slug follows its title, so retitling one changes its URL; this
   * keeps the old address working for anyone who already has the link.
   */
  async redirects() {
    return [
      {
        source: "/experience/neighbourhood-club-meetup",
        destination: "/experience/seated-dance-in-person-class",
        permanent: true,
      },
      {
        source: "/knowledge-hub/recipes/walnut-and-orange-salad",
        destination: "/knowledge-hub/recipes/orange-cucumber-and-walnut-salad",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
