import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "@/lib/API/chat";

export const createSession = createAsyncThunk(
  "chat/session",
  async () => {
    return apiFetch("/api/session", { method: "POST" });
  }
);

export const askQuestion = createAsyncThunk(
  "chat/ask",
  async (question: string, { getState }) => {
    // @ts-ignore
    const token = getState().chat.token;

    const res = await apiFetch(
      "/api/ask",
      {
        method: "POST",
        body: JSON.stringify({ question }),
      },
      token
    );

    return res.answer;
  }
);

export const fetchChats = createAsyncThunk(
  "chat/history",
  async (_, { getState }) => {
    // @ts-ignore
    const token = getState().chat.token;

    const res = await apiFetch("/api/chats", {}, token);

    return res.map((c: any) => ({
      role: c.role,
      message: c.message,
    }));
  }
);
