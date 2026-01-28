import FeatureCard from '../client/FeatureCard'

interface Feature {
  title: string
  description: string
  detail: string
  icon: string
}

export default function Features({ features }: { features: Feature[] }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            TCBT आधारित प्राकृतिक कृषि विज्ञान
          </h2>
          <p className="text-xl text-gray-600">
            सूक्ष्म ऊर्जा, पंचमहाभूत और रसायन-मुक्त प्रक्रियाओं से उपज, स्वास्थ्य और स्थिरता
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
