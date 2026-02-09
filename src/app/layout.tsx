import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "../store/ReduxProvider";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/lib/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TCBT JAIVIK KISHAN",
  description: "प्राकृतिक खेती के लिए TCBT तकनीक",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className={`${inter.variable} ${devanagari.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <ReduxProvider>
              <Header />
              {children}
              <Footer />
              <ChatbotWidget />
            </ReduxProvider>

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
