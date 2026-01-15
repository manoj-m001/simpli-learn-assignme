const exploreItems = [
  {
    title: "Skills Decay",
    description: ["every 2–3 years", "faster for technical skills"],
    icon: "/icons/skills.svg",
  },
  {
    title: "Manager Role Shift",
    description: ["orchestrating", "people + AI agents"],
    icon: "/icons/manager.svg",
  },
  {
    title: "Leaders + AI Co-Pilots",
    description: ["requires sensemaking", "and systems thinking"],
    icon: "/icons/leaders.svg",
  },
  {
    title: "Frontline Capability",
    description: ["now depends", "on digital fluency"],
    icon: "/icons/frontline.svg",
  },
  {
    title: "Core Human Capabilities",
    description: ["analytical reasoning", "and scenario planning"],
    icon: "./icons/core.svg",
  },
  {
    title: "Winning Organizations",
    description: ["predict skills", "ahead of demand"],
    icon: "./icons/winning.svg",
  },
];

export default function Explore() {
  return (
    <section className="bg-white py-20" >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-orange-500 mb-2">
          What We’ll Explore
        </h2>

        <p className="text-gray-700 mb-10">
          The critical shifts every enterprise must plan for:
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              style={{
              boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)",
              borderRadius: "0px",
            }}>
              {/* Icon */}
              <div className="mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-black font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-black leading-relaxed">
                {item.description[0]}
                <br />
                {item.description[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
