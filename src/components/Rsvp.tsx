import { rsvp } from "../app/actions/rsvp";

export default function RsvpForm({ className = "" }) {
  return (
    <form action={rsvp} className={className}>
      <div className="font-sans flex items-center text-blue-200 bg-gray-100 border rounded-md px-4 py-3 flex-1">
        <svg
          className="w-5 h-5 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        <input
          suppressHydrationWarning
          type="email"
          name="email"
          required
          placeholder="Enter your work email to confirm your attendance"
          className="outline-none flex-1 text-sm text-black bg-transparent"
        />
      </div>

      <button
        type="submit"
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md"
        style={{ backgroundColor: "#F5AB40" }}
      >
        RSVP Now
      </button>
    </form>
  );
}
