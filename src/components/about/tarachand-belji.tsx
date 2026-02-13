"use client";

import { 
  Award, 
  Users, 
  BookOpen, 
  Leaf, 
  Globe, 
  Heart,
  Sprout,
  TrendingUp,
  Target,
  Eye,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";

interface BioData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  tagline: string;
  photoUrl: string;
  introduction: string[];
  journey: string[];
  tcbtDevelopment: string[];
}

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  highlight: boolean;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface VisionMission {
  vision: {
    title: string;
    subtitle: string;
    points: string[];
  };
  mission: {
    title: string;
    subtitle: string;
    points: string[];
  };
}

interface PhilosophyPoint {
  id: string;
  title: string;
  description: string;
}

interface ImpactStat {
  label: string;
  value: string;
}

interface Credentials {
  organization: string;
  role: string;
  designation: string;
}

interface AboutContentProps {
  bioData: BioData;
  timeline: TimelineEvent[];
  achievements: Achievement[];
  visionMission: VisionMission;
  philosophyPoints: PhilosophyPoint[];
  impactStats: ImpactStat[];
  credentials: Credentials;
}

const iconMap: Record<string, any> = {
  award: Award,
  users: Users,
  book: BookOpen,
  leaf: Leaf,
  globe: Globe,
};

export default function AboutContent({
  bioData,
  timeline,
  achievements,
  visionMission,
  philosophyPoints,
  impactStats,
  credentials
}: AboutContentProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-stone-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
      </div>

      {/* Hero Section with Photo and Introduction */}
      <section className="relative px-6 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left: Photo Card */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-linear-to-br from-green-600 to-emerald-700">
                  {/* Photo */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={bioData.photoUrl}
                      alt={bioData.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay with text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{bioData.name}</h3>
                      <p className="text-sm text-white/90 mb-2">{bioData.tagline}</p>
                      <div className="space-y-1 text-xs text-white/80">
                        <p className="font-medium">{bioData.title}</p>
                        <p>{bioData.subtitle}</p>
                        <div className="pt-2 border-t border-white/30 mt-2">
                          <p className="font-medium">{credentials.organization}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-400/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="md:col-span-3 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-800 text-white text-sm font-medium shadow-lg">
                <Sprout className="w-4 h-4" />
                प्राकृतिक कृषि के अग्रदूत
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-3 leading-tight">
                  {bioData.name}
                </h1>
                <p className="text-xl md:text-2xl text-green-700 font-semibold mb-2">
                  {bioData.title}
                </p>
                <p className="text-lg text-green-600 font-medium mb-2">
                  {bioData.subtitle}
                </p>
                <p className="text-base text-stone-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {bioData.location}
                </p>
              </div>

              {/* Introduction - Expanded to fill space */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-green-100 flex-grow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-green-900">परिचय</h2>
                </div>
                <div className="space-y-4">
                  {bioData.introduction.map((para, idx) => (
                    <p key={idx} className="text-base text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row - Below both columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-green-100 to-emerald-100 rounded-2xl p-4 border-2 border-green-200 text-center"
              >
                <div className="text-3xl font-bold text-green-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-green-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey and TCBT Development - Full Width Sections */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Journey */}
          <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl shadow-lg p-6 md:p-8 border-2 border-blue-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-sky-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">शोध यात्रा</h2>
            </div>
            <ul className="space-y-3">
              {bioData.journey.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TCBT Development */}
          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-6 md:p-8 border-2 border-amber-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-amber-900">TCBT का विकास</h2>
            </div>
            <ul className="space-y-3">
              {bioData.tcbtDevelopment.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
            यात्रा के मील के पत्थर
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-green-400 to-emerald-500 rounded-full mx-auto" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-green-400 to-green-300 -translate-x-1/2" />

          {timeline.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={event.id}
                className={`relative md:w-[calc(50%-2rem)] mb-10 ${
                  isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div
                  className={`hidden md:block absolute top-6 ${
                    isEven ? "-right-[1.125rem]" : "-left-[1.125rem]"
                  } w-8 h-8 rounded-full ${
                    event.highlight 
                      ? "bg-linear-to-br from-amber-400 to-orange-500 border-4 border-white shadow-lg" 
                      : "bg-green-500 border-4 border-white shadow-lg"
                  } z-10 flex items-center justify-center`}
                >
                  {event.highlight && <Award className="w-4 h-4 text-white" />}
                </div>

                <div
                  className={`bg-white rounded-xl p-5 shadow-md border-2 ${
                    event.highlight ? "border-amber-300" : "border-green-200"
                  } hover:shadow-lg transition-shadow`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full mb-3 text-sm ${
                    event.highlight 
                      ? "bg-linear-to-r from-amber-100 to-orange-100 text-orange-700" 
                      : "bg-green-100 text-green-700"
                  } font-bold`}>
                    {event.year}
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Philosophy Points */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
            हमारे मूल सिद्धांत
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {philosophyPoints.map((point) => (
            <div
              key={point.id}
              className="bg-linear-to-br from-white to-green-50 rounded-xl p-6 shadow-md border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                <div>
                  <h3 className="text-lg font-bold text-green-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-sky-600 flex items-center justify-center shadow-lg">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  {visionMission.vision.title}
                </h2>
                <p className="text-sm text-blue-700 font-medium">
                  {visionMission.vision.subtitle}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {visionMission.vision.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-green-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-900">
                  {visionMission.mission.title}
                </h2>
                <p className="text-sm text-green-700 font-medium">
                  {visionMission.mission.subtitle}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {visionMission.mission.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
            प्रमुख उपलब्धियां
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon];
            return (
              <div
                key={achievement.id}
                className="bg-white rounded-xl p-6 shadow-md border-2 border-green-100 hover:border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-transparent to-green-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-green-200">
            <Leaf className="w-14 h-14 text-green-600 mx-auto mb-5" />
            <blockquote className="text-xl md:text-2xl font-bold text-green-900 mb-5 leading-relaxed">
              "प्रकृति के साथ, किसान के लिए - यही है हमारा संकल्प"
            </blockquote>
            <div className="space-y-1 text-green-700">
              <p className="text-lg font-bold">{bioData.name}</p>
              <p className="text-base">{bioData.title}</p>
              <p className="text-sm">{credentials.organization}</p>
              <p className="text-sm font-medium mt-2">{credentials.designation}</p>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
