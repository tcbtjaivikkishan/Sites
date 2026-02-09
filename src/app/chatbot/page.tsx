"use client";

import { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReply = {
      role: "bot" as const,
      text: "AI उत्तर यहाँ आएगा।",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <Paper className="h-[600px] flex flex-col shadow-2xl rounded-2xl overflow-hidden">

        <div className="bg-green-700 text-white p-4 text-lg font-semibold">
          🌿 TCBT AI सहायक
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[70%] ${
                msg.role === "user"
                  ? "ml-auto bg-green-600 text-white"
                  : "bg-white shadow"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="p-4 flex gap-3 border-t">
          <TextField
            fullWidth
            placeholder="प्रश्न पूछें..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="success" onClick={sendMessage}>
            भेजें
          </Button>
        </div>

      </Paper>
    </div>
  );
}
