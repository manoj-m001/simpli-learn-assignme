"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  action: (prev: { ok: boolean; message: string }, formData: FormData) => Promise<{ ok: boolean; message: string }>;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-amber-300 disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Submitting…" : "RSVP Now"}
    </button>
  );
}

export default function FooterEmailForm({ action }: Props) {
  const [state, formAction] = useActionState(action as any, { ok: false, message: "" });
  return (
    <form action={formAction} className="flex w-full max-w-2xl items-center gap-3">
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
          {/* envelope icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5h18v14H3V5zm1.5 1.5v.41l7.5 5.1 7.5-5.1v-.41h-15z" fill="currentColor" />
          </svg>
        </span>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your work email to confirm your attendance"
          className="w-full rounded-md bg-white/95 px-10 py-3 text-sm text-zinc-900 shadow ring-1 ring-black/10 placeholder:text-zinc-600 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        {/* Set some defaults so the server action has context */}
        <input type="hidden" name="notes" value="Footer RSVP" />
        <input type="hidden" name="name" value="" />
      </div>
      <SubmitButton />
      {state.message && (
        <p className={`ml-2 text-sm ${state.ok ? "text-green-300" : "text-white"}`}>{state.message}</p>
      )}
    </form>
  );
}