import Image from "next/image";
import SectionUI from "@/components/Krishi-Taiyari/KrishiTaiyariClient";
import MaterialTable from "@/components/Krishi-Taiyari/MaterialTable";

const KrishiTaiyari = () => {
  return (
    <div className="w-full bg-gradient-to-b from-green-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-extrabold text-center text-green-900 mb-16">
          TCBT वृक्षायुर्वेद कृषि तैयारी
        </h1>

        <div className="grid gap-12">
          <SectionUI title="हाई C:N रेशियो घोल">
            <div className="overflow-x-auto rounded-2xl border border-green-200 shadow-lg">
              <MaterialTable
                data={[
                  { name: "पानी", quantity: "100 लीटर" },
                  { name: "देशी गाय का गोबर", quantity: "30 किलो" },
                  { name: "गोवर्धन खनिज खाद", quantity: "2 किलो" },
                  { name: "आयरन ऑक्साइड", quantity: "2 किलो" },
                  { name: "कैल्शियम सल्फर खनिज", quantity: "2 किलो" },
                  { name: "रॉक फास्फेट", quantity: "2 किलो" },
                  { name: "गौ-मूत्र", quantity: "1 लीटर" },
                  { name: "जंगल जीवाणु", quantity: "500 ml" },
                  { name: "मीठा जैव रसायन", quantity: "1 लीटर" },
                  { name: "अन्न द्रव्य रसायन", quantity: "2 लीटर" },
                  { name: "नत्रजन तरल", quantity: "100 एमएल" },
                  { name: "राह कार्बन चार्जर", quantity: "10 ग्राम" },
                  { name: "राह भूमिराजा", quantity: "100 ग्राम" },
                ]}
              />

            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">
                बनाने कि विधि और उपयोग
              </h3>
              <p>
                उक्त सबको घोलकर जालीदार कपड़े से ढ़क्कर 11 दिन तक रखें तत्पश्चात सिंचाई के पानी में मिलाकर
                फसलों की जड़ों में जमीन पर जाने दें। और 20 लीटर उक्त हाई C:N रेशियो घोल को छानकर 200
                लीटर पानी में मिलाकर फसलों पर स्प्रे करें।
              </p>
              <span className="text-blue-700">
                ज्यादा मात्रा में बनाना है तो उक्त सामाग्रियाें को उसी अनुपात में बढ़ाएं।
              </span>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">लाभ</h3>
              <p>
                इस घोल को जमीन में डालने से मिट्टी में कार्बन, नाईट्रोजन की मात्रा 14:1 की दर से बढती
                है, फसलों की जड़ों का तेजी से विकास होता है। सिंचाई के जल में मिलाकर इस घोल को चलाने से
                अगली सिंचाई की अवधि बढ़ जाती है। पौधों की पत्तियां हरी कच्च हो जाती है और पत्तियों की चौड़ाई
                भी बढ़ जाती है। मिट्टी में जीवाणुओं की मात्रा में बहुत वृद्धि होने लगती है।
              </p>
            </div>
          </SectionUI>

          <SectionUI title="जैव रसायन">
            <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="overflow-x-auto rounded-2xl border border-green-200 shadow-lg">
                <MaterialTable
                  data={[
                    { name: "जल", quantity: "150 लीटर" },
                    { name: "फल", quantity: "50 किलो" },
                    { name: "गुड़", quantity: "16 किलो" },
                  ]}
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">विशेष</h3>
                <p>
                  मीठा जैव रसायन बनाने के लिए केवल मीठे फल लें। ऐसे ही खट्टा जैव रसायन
                  बनाने के खट्टे फल, कड़वा जैव रसायन के लिए केवल कड़वे फल ही लेना है।
                </p>
                <h3 className="font-semibold text-lg mb-2">बनाने की विधि</h3>
                <p>
                  पहले पानी में गुड़ डालकर घोल लें, फिर फलो को काटकर घोल में
                  डाल दें। ड्र म को एयरटाइट बन्द कर दें, ड्र म के ऊपर बनाने का दिनांक लिख दें या पर्ची
                  चिपका दें। ड्र म में गैस बने तो इतना ही ढक्कन खोलें की गैस निकल जाये (पहले सप्ताह
                  विशेष ध्यान रखें) । 90 दिन में जैव रसायन तैयार हो जाता है।यदि इसे 21 दिन में बनाना
                  है तो फलों को पानी के बजाए जीवाण जल में ु मिलाएं , इसकी उपयोग अवधि 2 माह है।
                  90 दिन में बनने वाले जैव रसायन की उपयोग अवधि 3 साल है। बसर्त इसे छांव में रखें।
                </p>
              </div>
            </div>

            <h3 className="font-semibold text-lg mt-6 mb-2">उपयोग विधि</h3>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                मिट्टी को मुलायम बनाने के लिए और फसलों के विकास हेतु हर बार सिचं ाई के
                समय 200 लीटर जीवाण जल में 10 लीटर जैव रसायन मिलाकर खेत में चलाएं ।
              </li>
              <li>जीवाण बढने के लिए जीवाण घोल में 1% की दर से मिलाएं ।</li>
              <li>
                फसलों के विकास के लिए 5 ml प्रति लीटर पानी की दर से मिलाकर छिड़काव
                करें एवं फलदार पेड़ पौधों में 1% की दर से छिड़काव करें।
              </li>
              <li>
                समय से पहले फूल लाने के लिए एवं फल को झड़ने से रोकने के लिए
                खट्टा जैव रसायन 2 ml प्रति लीटर पानी की दर से छिड़काव करें
                (फलदार पेड़ पौधों में मात्रा 1% रखें)।
              </li>
              <li>
                कीट आने के पूर्व या अमावस्या के पूर्व कड़वा जैव रसायन का फसलों पर 2 ml
                प्रति लीटर पानी में मिलाकर स्प करें।
              </li>
            </ul>
          </SectionUI>

          <SectionUI title="फसल घुट्टी">
            <MaterialTable
              data={[
                { name: "पानी", quantity: "100 लीटर" },
                { name: "सरसों/तिल की खली", quantity: "10 किलो" },
                { name: "समुद्री खड़ा नमक", quantity: "5 किलो" },
                { name: "बिना बुझा चूना", quantity: "2.5 किलो" },
                { name: "मीठा जैव रसायन", quantity: "10 लीटर" },
              ]}
            />

            <h3 className="font-semibold text-lg mb-2">बनाने की विधि</h3>
            <p className="text-gray-700">
              सबसे पहले 100 लीटर पानी में 10 किलो खली मिलाएं , खली को 10 मिनट
              तक फू लने दें और फिर इसमें 2 किलो बिना बुझा चूना मिलाएं और खली
              और चूना को घुलने दें फिर इसमें 5 किलो नमक मिलाएं, 8 से 10 घंटे में
              यह घोल तैयार हो जाता है, इस घोल का पीएच अधिक (छारिय) हो जाता है
              इसके छार को कम करने के लिए 10 लीटर मीठा जैव रसायन मिलाएं । और
              सिचं ाई जल के साथ मिलाकर जमीन में जड़ों के आसपास जाने दें।
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-2">लाभ</h3>
              <p className="text-gray-700">
                खली से फास्फोरस, पोटाश, नाइट्रोजन, सल्फर जैसे तत्व एवं चूना से
                कै ल्शियम और नमक से सोडियम पोटेशियम जैसे मिनरल्स प्राप्त होते हैं,
                जिसके कारण फसल में तुरंत चमक और ग्रोथ दिखनी शुरू हो जाती है।
              </p>
              <span className="text-blue-700">प्रयोग अवधि समय सीमा - 1 सप्ताह</span>
            </div>
          </SectionUI>

          <SectionUI title="अन्न द्रव्य रसायन">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <Image
                  src="/krishi-taiyari/img.png"
                  alt="अन्न द्रव्य रसायन"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">बनाने की विधि</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    2 िकलो चावल को पकाकर उसमें 500 ग्राम गुड़ िमलाकर मटके में
                    भरकर मटके के मुंह को मिट्‌टी के ही ढक्कन से बंद करके किसी मीठे
                    फलदार पेड़ के नीचे आधा गढ़ा कर 7 दिन रखें।
                  </li>
                  <li>
                    फिर मटके से चावल निकालकर 5 लीटर पानी डालकर पेस्ट बना लें,
                    फिर इस पेस्ट को 200 लीटर पानी व 2 किलो गुड़ के घोल में डालकर 4
                    दिन रखें। तत्पश्चात फसलों की जड़ों में डालें।
                  </li>
                  <li>हर पूर्णिमा के आसपास जमीन में सिचं ाई जल के साथ जाने दें।</li>
                </ul>

                <h3 className="font-semibold text-lg mt-4 mb-2">लाभ</h3>
                <p>
                  इससे फसलों में सफे द जड़ बहुत तेजी से बढ़ती है। के ला, पपीता और
                  सब्जी वर्गीय फसलों की जड़़ बहुत तेजी से बढ़ती है।
                </p>
                <span className="text-blue-700">
                  प्रयोग अवधि समय सीमा - 1 माह
                </span>
              </div>
            </div>
          </SectionUI>
        </div>
      </div>
    </div>
  );
};

export default KrishiTaiyari;
