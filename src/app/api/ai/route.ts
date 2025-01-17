import { NextResponse } from 'next/server';
import { chatSession } from '../../../../ai';

export async function POST(request: Request) {
  const prompt = await request.json();

  try {
    const result = await chatSession.sendMessage(prompt);

    const aiTxt = result.response.text();
    return NextResponse.json({ result: aiTxt });
  } catch (e) {
    console.error(e);

    return NextResponse.json({ error: e });
  }
}
