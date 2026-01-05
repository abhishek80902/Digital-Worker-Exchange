// src/pages/ChatPage.jsx
import React, { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ChatPage() {
  const { id } = useParams();
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { from: "them", text: "Hello! How can I help you?" },
  ]);

  function sendMsg() {
    if (!msg.trim()) return;
    setMessages([...messages, { from: "me", text: msg }]);
    setMsg("");
  }

  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20 max-w-xl mx-auto">

      <Link to={-1} className="flex items-center gap-2 text-slate-600 mb-4">
        <ArrowLeft /> Back
      </Link>

      <h1 className="text-xl font-bold">Chat with Worker #{id}</h1>

      {/* CHAT BOX */}
      <div className="mt-6 bg-slate-50 h-[60vh] rounded-xl p-4 overflow-y-auto border">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-3 p-3 rounded-xl max-w-[70%] ${
              m.from === "me"
                ? "ml-auto bg-purple-600 text-white"
                : "bg-white border"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex mt-4 gap-3">
        <input
          className="flex-1 p-3 rounded-xl border"
          placeholder="Type a message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button
          onClick={sendMsg}
          className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-purple-600 to-orange-500 text-white"
        >
          <Send size={22} />
        </button>
      </div>
    </div>
  );
}
