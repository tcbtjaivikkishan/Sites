import ElementCard from './client/ElementCard'

export default function PanchMahabhut() {
  const elements = [
    {
      icon: '🌍',
      title: 'भूमि – माता',
      description: 'बीज को उगाती है, पोषण देती है',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      icon: '🌌',
      title: 'गगन – पिता',
      description: 'फूल खिलाता है, बीज निर्माण करता है',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: '🌬️',
      title: 'वायु – प्राण',
      description: 'प्रत्येक कोशिका को जीवन देता है',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🔥',
      title: 'अग्नि – स्फूर्ति',
      description: 'कोशिकाओं को ऊर्जा और उष्मा देती है',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: '💦',
      title: 'नीर – जीवन',
      description: 'हर कोशिका का जीवन पूर्ण करता है',
      color: 'from-blue-400 to-cyan-500',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-4">
            पंचमहाभूत अर्थात पांच महाजीव (भूमि गगन वायु अग्नि नीर) जिन्होंने इस धरती में जीवन की विशाल रचना खड़ी की जिसे हम आज प्रकृति कहते हैं।
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            प्रकृति निर्माण की रचना में
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {elements.map((element, index) => (
            <ElementCard key={index} element={element} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
