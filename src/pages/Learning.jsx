import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const SUBJECTS = [
  "JavaScript",
  "React",
  "Python",
  "HTML/CSS",
  "Machine Learning",
];

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    if (!topic || !userRequest.trim()) return;

    const currentRequest = userRequest.trim();
    setUserRequest("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: currentRequest }]);

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:

{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intellegence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline.
2. "answer" must always contain three labeled sections in plain text:

EXPLANATION:
Step-by-step breakdown with simple language.

EXAMPLE:
A practical working example.

SUMMARY:
What, When, Where, Why, How.

FORMATTING RULES:
- Don't use markdown, HTML, or any formatting tags.
- Plain text only.
- Clear headings.
- Line breaks.
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      if (!response?.text) throw new Error("Empty response");

      const cleaned = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const data = JSON.parse(cleaned);
      const answer = Array.isArray(data) ? data[0]?.answer : data?.answer;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: answer || "No response." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] flex flex-col bg-zinc-950">
        {/* SUBJECT PICKER */}
        <div className="p-6 border-b border-zinc-800">
          <div className="flex flex-wrap gap-3">
            {SUBJECTS.map((subj) => (
              <button
                key={subj}
                onClick={() => setTopic(subj)}
                className={`px-4 py-2 rounded-xl text-sm border transition-all ${
                  topic === subj
                    ? "bg-red-600 border-red-500 text-white"
                    : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-red-500/60"
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* CHAT */}
        <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto">
          {messages.length === 0 && !topic && (
            <div className="text-zinc-500 text-sm">
              Select a subject to begin.
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-5 py-4 text-sm border ${
                  msg.role === "user"
                    ? "bg-zinc-800 border-zinc-700 text-zinc-100"
                    : "bg-zinc-900 border-zinc-800 text-zinc-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-5 py-4 rounded-2xl text-sm w-fit">
              Thinking...
            </div>
          )}
        </div>

        {/* INPUT */}
        <div className="sticky bottom-0 bg-zinc-950 border-t border-zinc-800 p-4">
          <div className="max-w-4xl mx-auto flex items-end gap-3">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleRequest();
                }
              }}
              placeholder={topic ? `Ask ${topic}...` : "Select a subject first"}
              disabled={!topic}
              rows={1}
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-red-500 outline-none resize-none disabled:opacity-50"
            />

            <button
              onClick={handleRequest}
              disabled={!topic || isLoading}
              className="h-[52px] px-6 rounded-2xl bg-zinc-800 text-zinc-100 text-xs font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;