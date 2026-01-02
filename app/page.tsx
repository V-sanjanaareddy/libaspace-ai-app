'use client';

import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<
    { text: string; from: "user" | "avatar" }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputText, from: "user" }]);
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:4000/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json();

      // Add avatar message
      setMessages((prev) => [...prev, { text: data.text, from: "avatar" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong.", from: "avatar" },
      ]);
    } finally {
      setIsTyping(false);
      setInputText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Libaspace AI Avatar</h1>

      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-4 flex flex-col space-y-4">
        <div className="flex-1 overflow-y-auto max-h-[400px] flex flex-col gap-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg max-w-[70%] ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900 flex items-center gap-2"
                }`}
              >
                {msg.from === "avatar" && (
                  <span className="text-2xl animate-bounce">🤖</span>
                )}
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="p-3 bg-gray-200 rounded-lg text-gray-700 flex items-center gap-2 animate-pulse">
                <span className="text-2xl">🤖</span> Avatar is thinking...
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSend}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>
      </div>

      <footer className="mt-6 text-white opacity-80 text-sm">
        Powered by Libaspace AI | Real-time avatar demo
      </footer>
    </div>
  );
}
