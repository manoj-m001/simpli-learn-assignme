import Image from "next/image";
import RsvpForm from "./Rsvp";
export default function Footer() {
  return (
    <footer
      className="relative bg-black text-white"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Top content */}
          <p className="text-xl font-semibold mb-4" style={{paddingLeft: "18px"}} >Space is limited.</p>

        {/* RSVP Form */}
<RsvpForm
  className="flex flex-col sm:flex-row gap-4 max-w-xl mb-16 bg-grey-900/50 p-6 rounded-md"
/>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 ">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Simplilearn"
            width={140}
            height={36}
          />

          {/* Copyright */}
          <p className="text-sm text-white/80 text-center sm:text-right">
            © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
