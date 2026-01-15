"use server";

import Airtable from "airtable";
import { redirect } from "next/navigation";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY!,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function rsvp(formData: FormData) {

    const email = formData.get("email") as string;

    if (!email) {
      throw new Error("Email is required");
    }

    await base("attendee").create([
      {
        fields: { Email: email },
      },
    ]);
    redirect("/thank-you");
  } 

