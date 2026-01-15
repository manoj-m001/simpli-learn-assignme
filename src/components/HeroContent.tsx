import RsvpForm from "./Rsvp";
export default function HeroContent() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Email Form */}
        <RsvpForm className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl" />
        {/* Paragraphs */}
        <p className="mb-6 text-2xl"style={{color: "#000000", fontStyle: "normal",}}>
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are collapsing and reforming. Frontline
          and mid-level managers will soon lead teams of people and intelligent
          agents.
        </p>

        <p className=" mb-10 text-2xl"  style={{
            fontStyle: "normal",
            color: "#000000",
        }}>
          But even the most advanced enterprises are asking the same question:



        </p>

        {/* Bold Question */}
        <h3 className="mb-10 text-4xl font-extrabold" style={{
            fontStyle: "normal",
            color: "#000000",
            textAlign: "center",
        }}>
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h3>

        {/* Closing */}
        <p className="mb-10 text-2xl" style={{
            fontStyle: "normal",
            color: "#000000",
        }} >
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
}
