import Hero from '@/components/server/hero'
import Statistics from '@/components/server/Statistics'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SpaIcon from '@mui/icons-material/Spa'
import HealingIcon from '@mui/icons-material/Healing'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />

      {/* Panchmahabhut Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4">प्रकृति पंच भूतानि</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              भारतीय परंपरा और आधुनिक विज्ञान का संगम
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              प्रकृति 5 महाभूतों (महाजीवों) से बनी है। इन पंच महाभूतों को खेती की मिट्टी बीज पानी में पूर्ण और संतुलित कर दिया जाए तो अपने आप होने लगेगी। यह प्रकृति की <strong>स्वयंपोषी, स्वयंविकासी और स्वयंपूर्ण व्यवस्था</strong> है।
            </p>
          </div>

          {/* Panchmahabhut Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '🌍', title: 'भूमि – माता', desc: 'बीज को उगाती है, पोषण देती है', color: 'from-amber-500 to-yellow-600' },
              { icon: '🌌', title: 'गगन – पिता', desc: 'फूल खिलाता है, बीज निर्माण करता है', color: 'from-blue-500 to-indigo-600' },
              { icon: '🌬️', title: 'वायु – प्राण', desc: 'प्रत्येक कोशिका को जीवन देता है', color: 'from-cyan-500 to-blue-600' },
              { icon: '🔥', title: 'अग्नि – स्फूर्ति', desc: 'कोशिकाओं को ऊर्जा और उष्मा देती है', color: 'from-orange-500 to-red-600' },
              { icon: '💦', title: 'नीर – जीवन', desc: 'हर कोशिका का जीवन पूर्ण करता है', color: 'from-blue-400 to-cyan-500' },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-400">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-center text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              TCBT आधारित प्राकृतिक कृषि विज्ञान
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              सूक्ष्म ऊर्जा, पंचमहाभूत और रसायन-मुक्त प्रक्रियाओं से उपज, स्वास्थ्य और स्थिरता
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <EmojiObjectsIcon className="w-12 h-12" />,
                title: 'ऊर्जा विज्ञान',
                desc: 'यही सूक्ष्म ऊर्जा खेती की शक्ति और उत्पादन को निर्धारित करती है। TCBT तकनीक इस ऊर्जा स्तर को बढ़ाकर फसल को अधिक सक्षम बनाती है।',
                link: '/urja-vigyan',
                color: 'text-yellow-600',
                bgColor: 'bg-yellow-100',
              },
              {
                icon: <WhatshotIcon className="w-12 h-12" />,
                title: 'अग्निहोत्र',
                desc: 'प्रकृति की 96% सूक्ष्म ऊर्जा खेती को प्रभावित करती है। TCBT ने 15 साल के शोध से रसायन-मुक्त खेती में अधिक उत्पादन पाया।',
                link: '/agnihotra',
                color: 'text-orange-600',
                bgColor: 'bg-orange-100',
              },
              {
                icon: <SpaIcon className="w-12 h-12" />,
                title: 'वृक्षायुर्वेद कृषि',
                desc: 'तत्वों को शुद्ध व सजीव करके खेती अत्यंत उपजाऊ और स्वस्थ बनती है। रासायनिक खेती तत्वों को दूषित करती है।',
                link: '/vrikshayurveda',
                color: 'text-green-600',
                bgColor: 'bg-green-100',
              },
              {
                icon: <HealingIcon className="w-12 h-12" />,
                title: 'कृषि रोग उपचार',
                desc: 'रसायन-मुक्त प्रक्रियाएँ मिट्टी, पौधे और पर्यावरण को फिर से स्वस्थ बनाती हैं। इससे फसल जल्दी ठीक होती है।',
                link: '/solutions',
                color: 'text-blue-600',
                bgColor: 'bg-blue-100',
              },
            ].map((technique, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-500">
                <CardHeader>
                  <div className={`${technique.bgColor} ${technique.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {technique.icon}
                  </div>
                  <CardTitle className="text-2xl">{technique.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{technique.desc}</CardDescription>
                  <Button asChild variant="outline" className="group/btn">
                    <Link href={technique.link}>
                      Learn More
                      <ArrowForwardIcon className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <Badge className="mb-4">HOW IT WORKS</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              TCBT प्राकृतिक खेती – 4 चरणों में
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              खेत की वर्तमान स्थिति से शुरू करते हुए, चरणबद्ध तरीके से TCBT तकनीक अपनाई जाती है
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'मिट्टी और फसल का आकलन',
                desc: 'खेत की मिट्टी, फसल, जल उपलब्धता और पिछले रसायन उपयोग का संक्षिप्त विश्लेषण किया जाता है।',
              },
              {
                step: '2',
                title: 'मिट्टी और बीज का उपचार',
                desc: 'पंचमहाभूत सिद्धांत के अनुसार मिट्टी, बीज और जल का जैविक उपचार किया जाता है।',
              },
              {
                step: '3',
                title: 'फसल वृद्धि और रोग प्रबंधन',
                desc: 'फसल के विकास चरण के अनुसार TCBT घोल, पर्णीय स्प्रे और जीवामृत जैसी विधियाँ अपनाई जाती हैं।',
              },
              {
                step: '4',
                title: 'कटाई, विश्लेषण और अगला सीजन',
                desc: 'फसल कटाई के बाद उत्पादन, गुणवत्ता और लागत का आकलन किया जाता है।',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-6xl font-black opacity-20 mb-4">
                    चरण {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowForwardIcon className="text-green-300 w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              🗣️ हमारे किसान क्या कहते हैं
            </h2>
            <p className="text-lg text-gray-600">सफल किसानों की सच्ची कहानियां</p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-green-200 shadow-2xl">
            <CardHeader>
              <div className="flex items-start gap-4">
                <FormatQuoteIcon className="text-green-600 w-12 h-12" />
                <div>
                  <CardTitle className="text-2xl mb-2">
                    💰 8 माह की अवधि में प्रति एकड़ 23 टन अदरक का उत्पादन
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 mb-6 italic">
                "TCBT की जैविक तकनीक से मेरी अदरक की फसल में अद्भुत वृद्धि हुई। रासायनिक खाद के बिना भी उत्पादन दोगुना हो गया!"
              </p>
              <div className="flex items-center gap-3 text-green-700 font-semibold">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-xl">
                  B
                </div>
                <div>
                  <p className="font-bold">– श्री बाला साहेब माने</p>
                  <p className="text-sm text-gray-600">कृष्णगाँव, तह. गोरेगांव जिला सतारा, महाराष्ट्र</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/testimonials">
                View All Success Stories
                <ArrowForwardIcon className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              जैविक खेती का प्रभाव और सफलता
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              ताराचंद बेलजी ने 2009 में प्राकृतिक खेती शोध संस्था बालाघाट की स्थापना की और किसानों के साथ मिलकर जैविक/प्राकृतिक खेती के मूलभूत सिद्धांतों को खोज निकाला तथा वृक्षायुर्वेद के 150 सूक्तों (फार्मूलो) को सिद्ध किए।
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'सूक्त/फार्मूला', desc: 'वृक्षायुर्वेद आधारित' },
              { value: '2009', label: 'स्थापना वर्ष', desc: 'शोध संस्था' },
              { value: '2+', label: 'लाखों', desc: 'लाभान्वित किसान' },
              { value: '100%', label: 'ऑर्गेनिक', desc: 'रसायन-मुक्त खेती' },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-xl font-bold mb-1">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}