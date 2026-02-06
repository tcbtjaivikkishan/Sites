// app/science/page.tsx
import { tcbtScienceData } from "@/lib/data/tcbtScienceData";
import ScienceContent from "@/components/tcbt-science/TcbtScienceRenderer";

export const metadata = {
  title: "TCBT Science - Traditional Crop Based Technology",
  description: "पंचमहाभूत आधारित प्राकृतिक कृषि ज्ञान - Traditional scientific approach to natural farming",
};

export default function SciencePage() {
  return <ScienceContent data={tcbtScienceData} />;
}