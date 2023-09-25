import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend([process.env.RESEND_API_KEY]);

export async function POST(datatest) {
    console.log(datatest);
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['emprendomex@gmail.com'],
      subject: 'Hello world',
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(NextResponse.json({ error }));
    return NextResponse.json({ error });
  }
}