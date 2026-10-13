import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";

/**
 * The share card for pages that have no picture of their own.
 *
 * Fifty topics sharing one stock photograph tells a reader nothing about
 * which one they have been sent, so each gets a card carrying its own
 * title. Drawn rather than stored, so it can never fall out of step with
 * the page it belongs to.
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? site.name).slice(0, 110);
  const kicker = searchParams.get("kicker")?.slice(0, 40);

  // Long titles need smaller type to stay on the card.
  const fontSize = title.length > 75 ? 56 : title.length > 45 ? 68 : 82;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBF9F4",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {kicker ? (
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#E8762C",
                marginBottom: 24,
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            style={{
              fontSize,
              fontWeight: 800,
              lineHeight: 1.12,
              color: "#16281F",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 14,
              height: 56,
              borderRadius: 7,
              background: "#E8762C",
              display: "flex",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: "#16281F" }}>
              {site.name}
            </div>
            <div style={{ fontSize: 26, color: "#5B6B62" }}>
              Fun, Fitness &amp; Friendship for 60+
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
