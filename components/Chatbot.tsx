"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setChat((prev) => [...prev, { sender: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        { sender: "bot", text: data.reply }
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." }
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-[350px] h-[500px] bg-gray-900 text-white rounded-xl shadow-2xl flex flex-col z-50">

          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold">ThreeMonkeys AI</h3>
            <p className="text-xs text-gray-400">
              Ask us about our services
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-indigo-600 ml-auto"
                    : "bg-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-800 p-2 rounded-lg text-sm w-fit">
                Typing...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-md outline-none text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 px-4 py-2 rounded-md text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
