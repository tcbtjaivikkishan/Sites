"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sparkles,
  Flame,
  Leaf,
  Heart,
  ListChecks,
  ArrowRight,
  Zap,
  TreeDeciduous,
  Shield
} from 'lucide-react';

const PanchMahabhut = () => {
  const techniques = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'ऊर्जा विज्ञान',
      desc: 'यही सूक्ष्म ऊर्जा खेती की शक्ति और उत्पादन को निर्धारित करती है। TCBT तकनीक इस ऊर्जा स्तर को बढ़ाकर फसल को अधिक सक्षम बनाती है।',
      link: '/urja-vigyan',
      gradient: 'from-yellow-400 to-orange-100',
      bgGradient: 'from-yellow-50 to-orange-50',
      iconBg: 'bg-gradient-to-br from-yellow-100 to-orange-100',
      borderColor: 'hover:border-yellow-400',
      glowColor: 'hover:shadow-yellow-200',
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: 'अग्निहोत्र',
      desc: 'प्रकृति की 96% सूक्ष्म ऊर्जा खेती को प्रभावित करती है। TCBT ने 15 साल के शोध से रसायन-मुक्त खेती में अधिक उत्पादन पाया।',
      link: '/agnihotra',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'bg-gradient-to-br from-orange-100 to-red-100',
      borderColor: 'hover:border-orange-400',
      glowColor: 'hover:shadow-orange-200',
    },
    {
      icon: <TreeDeciduous className="w-12 h-12" />,
      title: 'वृक्षायुर्वेद कृषि',
      desc: 'तत्वों को शुद्ध व सजीव करके खेती अत्यंत उपजाऊ और स्वस्थ बनती है। रासायनिक खेती तत्वों को दूषित करती है।',
      link: '/vrikshayurveda',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-gradient-to-br from-green-100 to-emerald-100',
      borderColor: 'hover:border-green-400',
      glowColor: 'hover:shadow-green-200',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'कृषि रोग उपचार',
      desc: 'रसायन-मुक्त प्रक्रियाएँ मिट्टी, पौधे और पर्यावरण को फिर से स्वस्थ बनाती हैं। इससे फसल जल्दी ठीक होती है और उत्पादन भी स्थिर रहता है।।',
      link: '/solutions',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-gradient-to-br from-blue-100 to-indigo-100',
      borderColor: 'hover:border-blue-400',
      glowColor: 'hover:shadow-blue-200',
    },
    {
      icon: <ListChecks className="w-12 h-12" />,
      title: 'चरणबद्ध प्रक्रिया',
      desc: 'यही सूक्ष्म ऊर्जा खेती की शक्ति और उत्पादन को निर्धारित करती है। TCBT तकनीक इस ऊर्जा स्तर को बढ़ाकर फसल को अधिक सक्षम बनाती है।',
      link: '/charanbaddh-prakriya',
      gradient: 'from-gray-500 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-50',
      iconBg: 'bg-gradient-to-br from-gray-100 to-gray-100',
      borderColor: 'hover:border-gray-400',
      glowColor: 'hover:shadow-gray-200',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      { }
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        { }
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">प्राकृतिक कृषि की नई दिशा</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            TCBT आधारित{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              प्राकृतिक कृषि विज्ञान
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            सूक्ष्म ऊर्जा, पंचमहाभूत और रसायन-मुक्त प्रक्रियाओं से उपज, स्वास्थ्य और स्थिरता
          </p>
        </div>

        { }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 border-2 border-gray-200 ${technique.borderColor} ${technique.glowColor} hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm`}
            >
              { }
              <div className={`absolute inset-0 bg-gradient-to-br ${technique.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <CardHeader className="relative z-10">
                { }
                <div className={`${technique.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {technique.icon}
                </div>

                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                  {technique.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  {technique.desc}
                </CardDescription>

                <Button
                  asChild
                  className={`w-1/2 mx-auto bg-gradient-to-r ${technique.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0 group/btn`}
                >
                  <Link href={technique.link} className="flex items-center justify-center gap-2">
                    <span className="font-semibold">और जानें</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>

              </CardContent>

              { }
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                <Leaf className="w-full h-full text-green-600 transform rotate-45" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default PanchMahabhut;