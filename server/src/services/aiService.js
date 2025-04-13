const { GoogleGenerativeAI }=require("@google/generative-ai");
const dotenv=require("dotenv");
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getExplaination = async (code, language) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  
      const prompt = `
       Act like a senior developer and explain this ${language} code in detail:
  \n\n${code}
  
  Return the output with clear sections like:
  <strong>Introduction</strong>, <strong>Key Concepts</strong>, <strong>Code Structure</strong>, <strong>Explanation of Each Line</strong>, and <strong>Conclusion</strong>.
  Make shorter as much as you can.
   `;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
  
      const explanation = await response.text();
  
      return explanation;
    } catch (error) {
      console.error("Error from Gemini API:", error);
      throw new Error("Failed to generate code explanation.");
    }
  };
  


module.exports={getExplaination};