import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { askQuestion, createSession, fetchChats } from "./chatThunks";

interface Message {
  role: "user" | "assistant";
  message: string;
}

interface ChatState {
  token: string | null;
  messages: Message[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  token: null,
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSession.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("chatToken", action.payload.token);
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(askQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(askQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push(
          { role: "user", message: action.meta.arg },
          { role: "assistant", message: action.payload }
        );
      })
      .addCase(askQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = "कुछ गलत हो गया। कृपया पुनः प्रयास करें।";
      });
  },
});

export const { setToken } = chatSlice.actions;
export default chatSlice.reducer;
