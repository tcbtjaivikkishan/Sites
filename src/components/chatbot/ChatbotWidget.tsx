"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { askQuestion, createSession, fetchChats } from "@/store/slices/chat/chatThunks";
import { RootState } from "@/store";
import SendIcon from "@mui/icons-material/Send";

export default function ChatbotWidget() {
  const dispatch = useDispatch<any>();
  const { messages, loading, token } = useSelector(
    (state: RootState) => state.chat
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!token) {
      dispatch(createSession()).then(() => {
        dispatch(fetchChats());
      });
    }
  }, [token]);

  const send = () => {
    if (!input.trim()) return;
    dispatch(askQuestion(input));
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 h-[450px] bg-white rounded-2xl shadow-xl flex flex-col z-50">
      <div className="bg-green-700 text-white p-3 font-semibold">
        🌾 TCBT AI सहायक
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm max-w-[75%] ${
              m.role === "user"
                ? "ml-auto bg-green-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {m.message}
          </div>
        ))}
        {loading && <p className="text-xs text-gray-500">उत्तर आ रहा है...</p>}
      </div>

      <div className="p-2 flex gap-2 border-t">
        <input
          className="flex-1 border rounded px-2 text-sm"
          placeholder="अपना प्रश्न लिखें..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button onClick={send} className="text-green-700">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
