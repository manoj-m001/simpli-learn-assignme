import Image from "next/image";
import { IconCalendar ,IconMapPin} from '@tabler/icons-react';
export default function Hero() {
  return (
    <section
      className="relative bg-black text-white"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay (for contrast) */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.svg"
            alt="Simplilearn"
            width={160}
            height={40}
          />
        </div>

        {/* Invite row */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-cyan-400 text-black text-sm font-semibold px-4 py-1 rounded-md" style={{
              fontFamily: "Satoshi Variable",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "34px",
              color: "#000000",
            }}>
            Invite-Only
          </span>
          <span className="text-sm text-cyan-200" style={{
              fontFamily: "Satoshi Variable",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "34px",
              color: "#00FFFF",
            }}>
            An Executive Roundtable · Lunch
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl  max-w-3xl" style={{
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "46px",
              lineHeight: "62px",
              color: "#F5AB40",
            }}>
          The Skills That Matter Next:
          <br />
          Preparing Your Workforce
          <br />
          & Leaders for the AI Era
        </h1>

        {/* Meta */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-lg"> <IconCalendar stroke={2} /></span>
            <span className="font-bold" style={{
              fontFamily: "Satoshi Variable",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "34px",
              color: "#FFFFFF",
            }}>
              February 20, 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg"><IconMapPin stroke={2} /></span>
            <span className="font-bold" style={{
              fontFamily: "Satoshi Variable",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "25px", lineHeight: "34px", color: "white" }}>
              Chamberlain’s Steak & Fish House, Dallas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
