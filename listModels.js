import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'; // load .env automatically

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
  const models = await genAI.listModels();

  // Convert to array (because it's a paged iterable)
  const modelsArray = await models.toArray();

  for (const model of modelsArray) {
    console.log(model.name, "-", model.supportedGenerationMethods);
  }
}

main().catch(console.error);
