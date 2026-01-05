// src/components/layout/ChatVoiceWidget.jsx
import React, { useState, useEffect } from "react";
import useVoiceAssistant from "../../hooks/useVoiceAssistant";
import { AnimatePresence, motion } from "framer-motion";

export default function ChatVoiceWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "👋 Hi! I can help you find work, post a job, or explore DWE features. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [aiTyping, setAiTyping] = useState(false);

  const { listening, transcript, error, start, stop } = useVoiceAssistant();

  /** Handle sending message */
  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    triggerAIResponse(text);
  };

  /** AI auto-response logic (mock for now) */
  const triggerAIResponse = (userText) => {
    setAiTyping(true);

    setTimeout(() => {
      // Simple smart mock reply
      let reply = "I'm here to help!";

      if (userText.toLowerCase().includes("work")) reply = "To find work, go to the *Find Work* page and search by skill or location.";
      if (userText.toLowerCase().includes("post")) reply = "You can post a job from the *Post Job* page. AI will match workers instantly!";
      if (userText.toLowerCase().includes("hire")) reply = "You can hire a worker by opening their profile and clicking *Hire Now*.";

      setMessages((prev) => [...prev, { from: "ai", text: reply }]);
      setAiTyping(false);
    }, 900);
  };

  /** Voice input handler */
  useEffect(() => {
    if (transcript) {
      sendMessage(transcript);
      stop();
    }
  }, [transcript]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        className="fixed right-6 bottom-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 shadow-2xl flex items-center justify-center text-white text-3xl"
      >
        💬
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed right-6 bottom-24 z-50 w-[420px] max-w-[95vw] h-[550px]
              bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-200 bg-white/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-xl text-white shadow">
                  🤖
                </div>
                <div>
                  <p className="font-semibold text-slate-900">DWE Assistant</p>
                  <p className="text-xs text-emerald-600">Online</p>
                </div>
              </div>

              <button onClick={() => setOpen(false)} className="text-slate-500 text-xl">
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/60">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-4 py-2 rounded-xl max-w-[80%] shadow
                      ${
                        m.from === "user"
                          ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white"
                          : "bg-white border border-slate-200 text-slate-800"
                      }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {aiTyping && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow">
                    <span className="animate-pulse">•••</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here…"
                className="flex-1 px-4 py-2 bg-slate-100 rounded-xl outline-none text-sm"
              />

              {/* Voice */}
              <button
                onClick={() => (listening ? stop() : start())}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                  listening ? "bg-rose-500" : "bg-slate-900"
                }`}
              >
                🎤
              </button>

              {/* Send */}
              <button
                onClick={() => sendMessage(input)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
