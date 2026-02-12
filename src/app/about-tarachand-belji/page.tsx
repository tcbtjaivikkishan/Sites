// app/about-tarachand-belji/page.tsx
import AboutContent from '@/components/about/tarachand-belji';
import {
  bioData,
  timeline,
  achievements,
  visionMission,
  philosophyPoints,
  impactStats,
  credentials
} from '@/lib/data/tarachandBeljiData';

export const metadata = {
  title: 'तारचंद बेलजी - परिचय | TCBT जैविक किसान',
  description: 'तारचंद बेलजी - प्राकृतिक खेती शोध संस्था के संस्थापक। TCBT तकनीक के जनक। 15+ वर्षों का अनुभव, 20+ राज्यों में कार्यरत, 1000+ किसानों को प्रशिक्षित।',
  keywords: 'तारचंद बेलजी, TCBT, प्राकृतिक खेती, वृक्षायुर्वेद, पंचमहाभूत, बालाघाट, मध्यप्रदेश',
};

export default function AboutTarachandBeljiPage() {
  return (
    <AboutContent
      bioData={bioData}
      timeline={timeline}
      achievements={achievements}
      visionMission={visionMission}
      philosophyPoints={philosophyPoints}
      impactStats={impactStats}
      credentials={credentials}
    />
  );
}
