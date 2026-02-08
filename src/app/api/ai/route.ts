// import OpenAI from "openai";
// import { NextResponse } from "next/server";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY!,
// });

// const SYSTEM_PROMPT = `You are GrowthPilot AI, an expert e-commerce analytics assistant. You help online store owners understand their business performance and make data-driven decisions.

// Your capabilities:
// - Analyze sales trends and patterns
// - Identify top-performing products and categories
// - Provide insights on customer behavior and geographic performance
// - Suggest actionable strategies to improve revenue and conversions
// - Answer questions about the store's analytics data

// Guidelines:
// - Always reference specific numbers from the provided data
// - Format numbers clearly (e.g., $12,345.67 for currency, 1,234 for counts)
// - Be concise but thorough
// - Use bullet points for multiple insights
// - Highlight key takeaways
// - If asked about data not available, clearly state what information is missing
// - Provide actionable recommendations when relevant`;

// export async function POST(req: Request) {
//   try {
//     // const { question, context } = await req.json();

//     // if (!question || typeof question !== "string") {
//     //   return NextResponse.json(
//     //     { error: "Question is required" },
//     //     { status: 400 },
//     //   );
//     // }

//     if (!process.env.OPENAI_API_KEY) {
//       return NextResponse.json(
//         {
//           answer:
//             "AI Copilot is not configured. Please add your OpenAI API key to the environment variables to enable AI-powered insights.",
//         },
//         { status: 200 },
//       );
//     }

//     //     const userPrompt = `
//     // Dashboard Analytics Data:
//     // ${JSON.stringify(context, null, 2)}

//     // User Question: ${question}

//     // Please analyze the data and provide a helpful, specific answer.`;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo-16k",
//       messages: [
//         // { role: "system", content: SYSTEM_PROMPT },
//         {
//           role: "user",
//           content: "Help me to generate random strings of 10 characters",
//         },
//       ],
//       // temperature: 0.7,
//       // max_tokens: 1000,
//     });

//     const answer = completion.choices[0]?.message?.content;

//     console.log({ answer, completion });

//     if (!answer) {
//       return NextResponse.json(
//         {
//           answer:
//             "I couldn't generate a response. Please try rephrasing your question.",
//         },
//         { status: 200 },
//       );
//     }

//     return NextResponse.json({ answer });
//   } catch (error) {
//     console.error("AI API Error:", error);

//     // Handle rate limiting
//     if (error instanceof OpenAI.RateLimitError) {
//       return NextResponse.json(
//         {
//           answer:
//             "The AI service is currently busy. Please try again in a moment.",
//         },
//         { status: 200 },
//       );
//     }

//     // Handle authentication errors
//     if (error instanceof OpenAI.AuthenticationError) {
//       return NextResponse.json(
//         {
//           answer:
//             "AI service authentication failed. Please check the API configuration.",
//         },
//         { status: 200 },
//       );
//     }

//     return NextResponse.json(
//       {
//         answer:
//           "Something went wrong while processing your request. Please try again.",
//       },
//       { status: 200 },
//     );
//   }
// }

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { question, context } = await req.json();

//   if (!question || typeof question !== "string") {
//     return NextResponse.json(
//       { error: "Question is required" },
//       { status: 400 },
//     );
//   }

//   const SYSTEM_PROMPT = `You are GrowthPilot AI, an expert e-commerce analytics assistant. You help online store owners understand their business performance and make data-driven decisions.

// Your capabilities:
// - Analyze sales trends and patterns
// - Identify top-performing products and categories
// - Provide insights on customer behavior and geographic performance
// - Suggest actionable strategies to improve revenue and conversions
// - Answer questions about the store's analytics data

// Guidelines:
// - Always reference specific numbers from the provided data
// - Format numbers clearly (e.g., $12,345.67 for currency, 1,234 for counts)
// - Be concise but thorough
// - Use bullet points for multiple insights
// - Highlight key takeaways
// - If asked about data not available, clearly state what information is missing
// - Provide actionable recommendations when relevant`;

//   const prompt = `
// ${SYSTEM_PROMPT}
// Here is the dashboard data:
// ${JSON.stringify(context, null, 2)}

// User question: ${question}

// Give clear insights with numbers and bullet points.
// `;

//   try {
//     const response = await fetch(
//       "https://router.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.HF_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ inputs: prompt }),
//       },
//     );

//     console.log({ response });

//     const data = await response?.json();

//     console.log({ data });

//     const answer =
//       data?.[0]?.generated_text ||
//       "AI is warming up. Try again in a few seconds.";

//     return NextResponse.json({ answer });
//   } catch (error) {
//     console.error("Error calling AI API:", error);
//     return NextResponse.json(
//       {
//         answer:
//           "Something went wrong while processing your request. Please try again.",
//       },
//       { status: 500 },
//     );
//   }
// }

import { InferenceClient } from "@huggingface/inference";
import { NextResponse } from "next/server";

const client = new InferenceClient(process.env.HF_API_KEY);

export async function POST(req: Request) {
  try {
    const { question, context } = await req.json();

    const prompt = `
    You are GrowthPilot AI, an ecommerce analytics expert.

    Dashboard Data:
    ${JSON.stringify(context, null, 2)}

    Question: ${question}

    Give clear insights with numbers and bullet points.
    `;

    const out = await client.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
    });

    return NextResponse.json({ answer: out.choices[0].message });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ answer: "AI error" });
  }
}
