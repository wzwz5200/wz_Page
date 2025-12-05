import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize client securely using environment variable
const getClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key not found");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamChatResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string,
  onChunk: (text: string) => void
) => {
  try {
    const ai = getClient();
    
    // We use gemini-2.5-flash for fast, responsive terminal interactions
    const model = 'gemini-2.5-flash';

    const chatSession = ai.chats.create({
      model: model,
      history: history,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    const result = await chatSession.sendMessageStream({ message: newMessage });

    for await (const chunk of result) {
        // Access the text property directly from the chunk (GenerateContentResponse)
        const text = chunk.text;
        if (text) {
          onChunk(text);
        }
    }
  } catch (error) {
    console.error("Error streaming chat response:", error);
    onChunk("\n[SYSTEM ERROR]: Connection to neural link unstable. Please try again.");
  }
};