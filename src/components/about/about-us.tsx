"use client";

import Image from "next/image";
import { Leaf, Users, Target, User, Mail, Linkedin } from "lucide-react";
import { useState } from "react";

interface AboutUIProps {
  data: any;
}

export default function AboutUI({ data }: AboutUIProps) {
  const [activeDept, setActiveDept] = useState(0);

  return (
    <main className="bg-gradient-to-b from-green-50 via-white to-green-50">

      <section className="relative py-20 md:py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">

          <div className="flex justify-center mb-8 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-16 bg-linear-to-r from-transparent via-emerald-600/50 to-emerald-600" />
              <div className="text-emerald-700">
                <Leaf className="w-8 h-8" />
              </div>
              <div className="h-[2px] w-16 bg-linear-to-l from-transparent via-emerald-600/50 to-emerald-600" />
            </div>
          </div>

          <h1 className="space-y-2">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slideUp">
              <span className="inline-block bg-linear-to-br from-emerald-800 via-green-700 to-emerald-900 bg-clip-text text-transparent">
                {data.hero.heading}
              </span>
            </div>
          </h1>

          <p
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed animate-slideUp"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            {data.hero.subtitle}
          </p>

          <div className="flex justify-center pt-6 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="w-24 h-1 bg-linear-to-r from-emerald-600/30 via-emerald-600 to-emerald-600/30 rounded-full" />
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white p-10 rounded-3xl shadow-lg border-2 border-green-100">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            {data.aboutTCBT.title}
          </h2>
          <div className="space-y-4 text-gray-700">
            {data.aboutTCBT.content.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={data.founder.image}
            alt={data.founder.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-3">
            {data.founder.name}
          </h2>
          <p className="text-green-700 font-semibold mb-4">
            {data.founder.title}
          </p>
          <div className="space-y-3 text-gray-700">
            {data.founder.description.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          उच्च प्रबंधन
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.upperManagement.map((member: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-lg border-2 border-green-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>


              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-green-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-700 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          हमारी टीम
        </h2>


        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {data.departments.map((dept: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveDept(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeDept === index
                ? "bg-green-600 text-white shadow-lg"
                : "bg-green-100 text-green-800 hover:bg-green-200"
                }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {data.departments[activeDept].members.map(
            (member: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >

                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                  <User className="w-8 h-8 text-green-700" />
                </div>


                <div className="text-center">
                  <h4 className="text-lg font-bold text-green-900">
                    {member.name}
                  </h4>
                  <p className="text-green-700 text-sm mb-4">
                    {member.designation}
                  </p>


                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition"
                    >
                      <Linkedin className="w-4 h-4 text-green-700" />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition"
                    >
                      <Mail className="w-4 h-4 text-green-700" />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      { }
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-3">
            हमारी ऑफिस संस्कृति
          </h2>
          <p className="text-green-700">
            टीमवर्क, नवाचार और सहयोग का वातावरण
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">

          { }
          <div className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
            <Image
              src={data.gallery[0]}
              alt="gallery-1"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          { }
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src={data.gallery[1]}
              alt="gallery-2"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          { }
          <div className="relative rounded-3xl overflow-hidden group">
            <Image
              src={data.gallery[2]}
              alt="gallery-3"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          { }
          <div className="relative md:col-span-2 rounded-3xl overflow-hidden group">
            <Image
              src={data.gallery[3]}
              alt="gallery-4"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>


      <section className="py-20 bg-green-100 text-center">
        <blockquote className="text-2xl font-bold text-green-900">
          "प्रकृति के साथ चलना ही भविष्य की सच्ची प्रगति है।"
        </blockquote>
      </section>
    </main>
  );
}
