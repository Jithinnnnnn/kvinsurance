import { BodyText, SectionTitle } from "@/components/atoms/Typography";

const placeName = "K-Vaidyan Insurance Solutions";
const placeAddress = "Chenankkara Junction, Thevalakkara, Kerala 690524";
const mapEmbedUrl =
  "https://www.google.com/maps?q=K-VAIDYAN%20Solutions%2C%20Chenankkara%2C%20Junction%2C%20Thevalakkara%2C%20Kerala%20690524&output=embed";
const mapLinkUrl =
  "https://www.google.com/maps/search/?api=1&query=K-VAIDYAN+Solutions+Chenankkara+Junction+Thevalakkara+Kerala+690524";

export function MapSection() {
  return (
    <div className="content-container" aria-labelledby="location-heading">
      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <SectionTitle id="location-heading">Find us easily</SectionTitle>
          <BodyText className="mt-3">
            Visit {placeName} at {placeAddress}. Use the map to plan your route and get directions.
          </BodyText>
          <a
            href={mapLinkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-strong"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
          <iframe
            title={`${placeName} location map`}
            src={mapEmbedUrl}
            loading="lazy"
            className="h-80 w-full md:h-96"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
