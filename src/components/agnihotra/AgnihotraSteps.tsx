import Image from "next/image";

const steps = [
  {
    src: "/Agnihotra/step1.png",
    title: "चरण 1",
    desc: "अग्निहोत्र पात्र में कंडों को व्यवस्थित करें",
  },
  {
    src: "/Agnihotra/step2.png",
    title: "चरण 2",
    desc: "घी या कपूर से अग्नि प्रज्वलित करें",
  },
  {
    src: "/Agnihotra/step3.png",
    title: "चरण 3",
    desc: "चावल और घी मिलाकर दो भाग बनाएं",
  },
  {
    src: "/Agnihotra/step4.png",
    title: "चरण 4",
    desc: "मंत्रोच्चार के साथ आहुति दें",
  },
  {
    src: "/Agnihotra/step5.png",
    title: "चरण 5",
    desc: "ध्यान लगाकर अग्नि के सामने बैठें",
  },
];

export default function AgnihotraSteps() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-light to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          अग्निहोत्र की प्रक्रिया
        </h2>

        {/* Steps Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gold/20 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative w-full">
                <Image
                  src={step.src}
                  alt={step.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center space-y-3">

                <div className="text-gold font-semibold text-lg">
                  {step.title}
                </div>

                <p className="text-gray-600">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
