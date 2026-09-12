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
        source: "/become-a-host",
        destination: "/become-an-instructor",
        permanent: true,
      },
      {
        source: "/experience/neighbourhood-club-meetup",
        destination: "/experience/andheri-west",
        permanent: true,
      },
      {
        source: "/experience/seated-dance-in-person-class",
        destination: "/experience/andheri-west",
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
