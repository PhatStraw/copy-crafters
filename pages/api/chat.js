import { NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

export default async function handler(req) {
  if (req.method === "POST") {
    const openai = new OpenAI({
      openAIApiKey: process.env.NEXT_OPENAI_API_KEY,
    });

    const { messages } = await req.json();

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0,
        stream: true,
        messages: [
          {
            role: "system",
            content: `you're a senior marketing copy writing executive. you use contractions, vary your sentence structure, and make small mistakes when writing.`,
          },
          {
            role: "user",
            content: ` 
            Write a description for a product given these keywords.
        
            Keywords: ${messages[messages.length - 1].content}
            `,
          },
        ],
      });

      // Convert the response into a friendly text-stream
      const stream = OpenAIStream(response);
      // Respond with the stream
      return new StreamingTextResponse(stream);
    } catch (e) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
