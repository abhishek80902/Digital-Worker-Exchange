// src/pages/Chat.jsx
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, Send, Mic, Dot } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import MOCK_WORKERS from "../utils/mockWorkers";

const Chat = () => {
  const { id } = useParams();

  const worker =
    MOCK_WORKERS.find((w) => w.id === id) || {
      name: "Worker",
      trade: "Skilled Professional",
      avatar: "/images/avatar1.jpg",
    };

  const [messages, setMessages] = useState([
    {
      from: "worker",
      text: "Hello! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = { from: "me", text: input.trim() };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    /* OPTIONAL: mock worker reply */
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "worker",
          text: "Sure! Please share more details about the job.",
        },
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-slate-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-50">
        <Link to={-1}>
          <ArrowLeft size={24} className="text-slate-700" />
        </Link>

        <img
          src={worker.avatar}
          alt="avatar"
          className="w-11 h-11 rounded-full object-cover border border-slate-200"
        />

        <div>
          <h2 className="font-semibold text-slate-900 text-sm">
            {worker.name}
          </h2>
          <p className="text-xs text-emerald-600 flex items-center gap-1">
            <Dot className="text-emerald-500" size={30} /> Online
          </p>
        </div>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            {msg.from === "worker" && (
              <img
                src={worker.avatar}
                className="w-8 h-8 rounded-full mr-2"
                alt="worker"
              />
            )}

            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-md text-sm ${
                msg.from === "me"
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-br-none"
                  : "bg-white border border-slate-200 text-slate-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT BAR */}
      <div className="p-4 bg-white border-t border-slate-200 flex items-center gap-3 sticky bottom-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 bg-slate-100 rounded-xl outline-none border border-slate-200 text-sm"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button className="p-3 bg-slate-100 rounded-xl">
          <Mic size={22} className="text-slate-700" />
        </button>

        <button
          onClick={sendMessage}
          className="p-3 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl shadow text-white"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
