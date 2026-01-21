import Image from "next/image";
import { rsvp } from "../app/actions/rsvp";
import RsvpForm from "./Rsvp";
/**
 * Insights component that displays information about leadership and workforce capabilities.
 * 
 * Renders a two-column layout with:
 * - Left side: Heading, description text, and a bulleted list of key insights
 * - Right side: A chess strategy image
 * 
 * The layout is responsive, stacking on mobile and displaying side-by-side on medium screens and up.
 * Includes an embedded RSVP form for user engagement.
 * 
 * @returns {JSX.Element} A section containing the insights content and imagery
 */
export default function Insights() {
  return (
    <section className="bg-white py-20">
      <div className="font-sans max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2
            className="font-sans mb-6"
            style={{
              color: "#F5AB40",
              fontWeight: 900,
              fontSize: "40px",
              lineHeight: "54px",
            }}
          >
            Go behind the curtain with real <br />
            examples and high-scale insights
          </h2>

          <p
            className="font-sans mb-6"
            style={{
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "34px",
              color: "#000000",
            }}
          >
            You’ll walk away with:
          </p>

          <ul className="space-y-5">
            {[
              "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
              "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
              "Signals for where capability gaps may already be forming in your organization.",
              "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
              "Actionable insights you can take straight into your next exec meeting.",
            ].map((item, idx) => (
              <li key={idx} className="font-sans flex gap-4">
                <p className="font-sans text-gray-800 underline-offset-4">{item}</p>
              </li>
            ))}
          </ul>

<div className="order-2 md:order-1">
  ...
  <RsvpForm className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mt-10" />
</div>        </div>
         
        {/* RIGHT IMAGE */}
        <div className=" order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/chess.png" 
            alt="Chess strategy"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
