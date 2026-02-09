import ContactForm from "@/components/contact/ContactForm";
import FloatingLeavesClient from "@/components/three/FloatingLeavesClient";

export const metadata = {
  title: "संपर्क करें - TCBT Jaivik kishan",
  description: "हमसे संपर्क करें और हमारी कृषि समाधान सेवाओं के बारे में जानें",
};

export default function Page() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-stone-50 via-emerald-50/30 to-green-50/40 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

        <div
          className="absolute top-20 -right-32 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-125 h-125 bg-amber-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-green-200/5 rounded-full blur-3xl" />
      </div>

      <FloatingLeavesClient />

      <section className="relative py-20 md:py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex justify-center mb-8 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-emerald-600/50 to-emerald-600" />
              <div className="text-emerald-700">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L7 12h10L12 2z" />
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0.4" />
                </svg>
              </div>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-emerald-600/50 to-emerald-600" />
            </div>
          </div>

          <h1 className="space-y-2">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slideUp">
              <span className="inline-block bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-900 bg-clip-text text-transparent">
                हमसे संपर्क करें
              </span>
            </div>
          </h1>

          <p
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed animate-slideUp"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            आपके प्रश्नों, सुझाव और व्यावसायिक पूछताछ के लिए हमसे संपर्क करें
          </p>

          <div className="flex justify-center pt-6 animate-fadeIn" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600/30 via-emerald-600 to-emerald-600/30 rounded-full" />
          </div>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactForm />
      </section>

      <div className="relative py-16 text-center text-stone-500 text-sm">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>प्रकृति के साथ, प्रकृति के लिए</span>
            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    </main>
  );
}
