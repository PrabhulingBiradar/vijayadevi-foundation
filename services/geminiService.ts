import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AspectRatio } from '../types';

// Initialize the client
// API Key is assumed to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createChatSession = () => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are a helpful, knowledgeable, and concise AI assistant.',
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  return chat.sendMessageStream({ message });
};

export const analyzeImage = async (base64Image: string, prompt: string) => {
  // Remove header if present (e.g., "data:image/jpeg;base64,")
  const data = base64Image.split(',')[1] || base64Image;
  const mimeType = base64Image.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)?.[1] || 'image/jpeg';

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: {
      parts: [
        {
          inlineData: {
            data,
            mimeType,
          },
        },
        {
          text: prompt || "Describe this image in detail.",
        },
      ],
    },
  });
  
  return response.text;
};

export const generateImage = async (prompt: string, aspectRatio: AspectRatio = '1:1') => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
        },
      },
    });

    // Iterate to find the image part
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          // Although the model returns raw data, we can assume png for gemini generated images usually, 
          // but let's check mimeType if provided.
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    throw error;
  }
};