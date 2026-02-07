import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const analyzeProductImage = async (base64Image: string): Promise<{
  productName: string;
  estimatedPrice: number;
  category: string;
} | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: base64Image
            }
          },
          {
            text: 'Identify the product in this image. Estimate its price in USD as a number. Suggest a spending category (e.g., Electronics, Clothing, Food). Return strictly valid JSON: { "productName": string, "estimatedPrice": number, "category": string }'
          }
        ]
      },
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Error analyzing product:", error);
    return null;
  }
};

export const getImpulseAdvice = async (product: string, price: number, hourlyRate: number) => {
    const ai = getAiClient();
    if (!ai) return "Take a moment to think about it.";

    const hours = (price / hourlyRate).toFixed(1);
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `The user wants to buy ${product} for $${price}. They earn $${hourlyRate}/hr, so this costs them ${hours} hours of work. Give a short, calm, 1-sentence reflection prompt to help them decide if they really need it now. Do not be preachy.`
        });
        return response.text || "Is this purchase worth the time you traded for it?";
    } catch (e) {
        return "Is this purchase worth the time you traded for it?";
    }
}
