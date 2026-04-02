import React, { useState, useEffect, useRef } from "react";
import useVoiceAssistant from "../../hooks/useVoiceAssistant";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "dwe_chat_memory";

export default function ChatVoiceWidget() {
  const navigate = useNavigate();
  const chatRef = useRef(null);

  /* 🔥 LOAD MEMORY */
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : [
          {
            from: "ai",
            text: "👋 Hi! I’m your DWE Assistant. Ask me anything!",
          },
        ];
  });

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [aiTyping, setAiTyping] = useState(false);

  const { transcript, stop } = useVoiceAssistant();

  /* 🔥 SAVE MEMORY */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  /* 🔥 AUTO SCROLL */
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, aiTyping]);

  /* 🎤 VOICE */
  useEffect(() => {
    if (transcript) {
      sendMessage(transcript);
      stop();
    }
  }, [transcript]);

  /* 🔥 AI API */
  const getAIReply = async (text) => {
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      return data.reply;
    } catch {
      return "⚠️ Server error. Try again.";
    }
  };

  /* 🔥 INTENT */
  const handleIntent = async (text) => {
    const t = text.toLowerCase();

    if (t.includes("post") || t.includes("hire")) {
      navigate("/postjob");
      return "Redirecting you to Post Job ⚡";
    }

    if (t.includes("find") || t.includes("work")) {
      navigate("/findwork");
      return "Taking you to Find Work 🚀";
    }

    return await getAIReply(text);
  };

  /* 🔥 SEND */
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setAiTyping(true);

    const reply = await handleIntent(text);

    setMessages((prev) => [...prev, { from: "ai", text: reply }]);
    setAiTyping(false);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        className="fixed right-6 bottom-6 z-50 w-16 h-16 rounded-full 
        bg-gradient-to-br from-indigo-600 to-orange-500 
        text-white text-2xl shadow-xl"
      >
        🤖
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed right-6 bottom-24 z-50 w-[400px] h-[580px]
            bg-white/90 backdrop-blur-xl border border-gray-200
            rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="p-4 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <span className="font-semibold">DWE Assistant</span>
              <button onClick={() => setOpen(false)}>×</button>
            </div>

            {/* 🔥 QUICK ACTION TAGS */}
            <div className="px-4 py-3 flex gap-2 border-b bg-white">
              <button
                onClick={() => navigate("/findwork")}
                className="px-4 py-1.5 rounded-full text-sm font-medium
                bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition"
              >
                Find Work →
              </button>

              <button
                onClick={() => navigate("/postjob")}
                className="px-4 py-1.5 rounded-full text-sm font-medium
                bg-orange-100 text-orange-700 hover:bg-orange-200 transition"
              >
                Hire Worker →
              </button>
            </div>

            {/* CHAT */}
            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto p-4 space-y-3"
            >
              {messages.map((m, i) => (
                <div key={i} className={m.from === "user" ? "text-right" : ""}>
                  <div
                    className={`inline-block px-4 py-2 rounded-2xl text-sm max-w-[75%]
                    ${
                      m.from === "user"
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                        : "bg-white border shadow-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {aiTyping && (
                <div className="text-sm text-gray-500 animate-pulse">
                  Typing...
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="p-3 flex gap-2 border-t bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(input);
                }}
                className="flex-1 px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Ask anything..."
              />

              <button
                onClick={() => sendMessage(input)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:scale-105 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}