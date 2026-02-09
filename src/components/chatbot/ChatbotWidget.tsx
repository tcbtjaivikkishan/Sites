"use client";

import { useState } from "react";
import { IconButton, TextField, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // TODO: Replace with real API call
    const botReply = {
      role: "bot" as const,
      text: "यह एक डेमो उत्तर है। जल्द ही AI से जोड़ा जाएगा।",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <IconButton
        onClick={() => setOpen(!open)}
        className="!fixed bottom-6 right-6 !bg-green-600 hover:!bg-green-700 !text-white shadow-xl z-50"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </IconButton>

      {/* Chat Window */}
      {open && (
        <Paper className="fixed bottom-20 right-6 w-80 h-[450px] flex flex-col shadow-2xl rounded-2xl overflow-hidden z-50">

          <div className="bg-green-600 text-white p-3 font-semibold">
            TCBT सहायक
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.role === "user"
                    ? "ml-auto bg-green-600 text-white"
                    : "bg-white shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 flex gap-2 border-t">
            <TextField
              size="small"
              fullWidth
              placeholder="अपना प्रश्न लिखें..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <IconButton onClick={sendMessage} color="success">
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      )}
    </>
  );
}
