export default function Agenda() {
  return (
    <section className="bg-[#00FFFF] py-20">
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ fontStyle: "Normal", backgroundColor: "#00FFFF" }}
      >
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-12" style={{ color: "#1D4DF4", fontFamily: "Satoshi Variable", fontStyle: "normal" }}>
          Event Agenda
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div
            className="bg-white p-8 shadow-md"
            style={{
              boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
            }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#1D4DF4" }}
            >
              Welcome & Opening
            </h3>

            <p
              className="font-semibold mb-4"
              style={{ fontStyle: "Normal", color: "black" }}
            >
              Sudipto Mitra, CRO Simplilearn
            </p>

            <p className="text-gray-800 leading-relaxed">
              Why capability-building is now a board-level issue and what's
              changing in the workforce landscape.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 shadow-md"
            style={{
              boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Keynote: <br />
              What Enterprise Leaders Are Seeing on the Ground
            </h3>

            <p
              className="font-semibold mb-4"
              style={{
                fontStyle: "Normal",
                color: "black",
                lineHeight: "24px",
              }}
            >
              Rob Lauber, Former CLO McDonald's
            </p>

            <p className="text-gray-800 leading-relaxed">
              A grounded view of how AI and AI agents are reshaping work,
              workflows, and leadership across industries.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-8 shadow-md"
            style={{
              boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Lunch & Executive Conversation
            </h3>

            <p
              className="font-semibold mb-4"
              style={{
                color: "black",
                lineHeight: "24px",
              }}
            >
              Industry Experts Invited
            </p>

            <p className="text-gray-800 leading-relaxed">
              What large enterprise talent ecosystems are learning about
              capability-building at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
