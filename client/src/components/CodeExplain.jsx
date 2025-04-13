import { useState } from "react";
import axios from "axios";

const CodeExplain = () => {
  const [code, setCode] = useState(""); 
  const [language, setLanguage] = useState("javascript");
  const [explanation, setExplanation] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const explainCode = async () => {
    setLoading(true);
    setExplanation("Explaining...");

    const requestData = {
      code: code,
      language: language,
    };

    console.log("Sending Request:", requestData);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/explained/code`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setExplanation(res.data.explainedCode || "No explanation available.");
      console.log("Received Response:", res.data);
    } catch (err) {
      console.error(
        "Error occurred:",
        err.response ? err.response.data : err.message
      );
      setExplanation("❌ Failed to get explanation. Check your server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg lg:shadow-xl overflow-hidden">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-600">
          🧠 AI Code Explainer
        </h1>

        <label className="block mb-3 font-semibold text-gray-800">Select Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c++">C++</option>
        </select>

        <label className="block mb-3 font-semibold text-gray-800">Paste your code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-lg mb-6 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Paste your code here..."
        ></textarea>

        <button
          onClick={explainCode}
          disabled={loading || !code}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg disabled:opacity-50 transition-all ease-in-out"
        >
          {loading ? "Explaining..." : "Explain Code"}
        </button>

        {explanation && (
          <div className="mt-8 bg-gray-800 p-6 border rounded-lg whitespace-pre-line text-sm text-white">
            <h2 className="font-semibold text-xl text-blue-400 mb-4">🔍 Explanation:</h2>
            <div className="prose prose-light">{explanation}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeExplain;
