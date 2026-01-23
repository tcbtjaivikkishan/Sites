export interface Solution {
  id: string;
  title: string;
  icon: string;
  subtitle?: string;
  products: string[];
  image?: string;
  imageCaption: string;
  colorScheme: 'primary' | 'accent' | 'gold';
}

export interface SolutionCategory {
  categoryName: string;
  solutions: Solution[];
}

export const solutionsData: SolutionCategory[] = [
  {
    categoryName: "रोग प्रबंधन",
    solutions: [
      {
        "id": "nematode",
        "title": "नीमेटोड (कृमि)",
        "icon": "fas fa-bug",
        "subtitle": "",
        "products": ["ऊर्जा भस्म", "चूना", "निमोटो भक्षक", "राह खनिज भस्म"],
        "image": "/solutions/nematode-rog.png",
        "imageCaption": "प्रभावी कृमि नियंत्रण",
        "colorScheme": "primary"
      },
      {
        "id": "wilt",
        "title": "उकठा रोग",
        "icon": "fas fa-disease",
        "subtitle": "",
        "products": ["उर्जा भस्म", "राह रजत जल", "राह ट्राईकोभक्षक", "खनिज भस्म"],
        "image": "/solutions/uktha-rog.png",
        "imageCaption": "पौधों को स्वस्थ रखें",
        "colorScheme": "accent"
      },
      {
        "id": "fungal",
        "title": "फफूंद जनित रोग",
        "icon": "fas fa-viruses",
        "subtitle": "पाइथियम, फ्यूजेरियम, राइज़ोक्टोनिया, एन्थ्रेक्नोज, स्क्लेरोटियम",
        "products": ["ऊर्जा भस्म", "रजत जल", "राह कॉपर तरल", "फफूंद रोधी भस्म", "ट्राईको भक्षक"],
        "image": "/solutions/fungal-rog.png",
        "imageCaption": "फफूंद मुक्त फसल",
        "colorScheme": "gold"
      },
      {
        "id": "viral",
        "title": "वायरस जनित रोग",
        "icon": "fas fa-virus",
        "subtitle": "",
        "products": ["ऊर्जा भस्म", "कालमेघारिष्ट", "छाछ द्रव्य रसायन", "राह जिंक", "राह वायरो औषध", "राह स्वर्ण जल"],
        "image": "/solutions/virus-rog.png",
        "imageCaption": "वायरस मुक्त पौधे",
        "colorScheme": "primary"
      },
      {
        "id": "grub",
        "title": "जड़ लार्वा/गाभा",
        "icon": "fas fa-worm",
        "subtitle": "",
        "products": ["हुमनी गंध रसायन", "राह मेटी भक्षक", "भू-शक्ति ऊर्जा भस्म"],
        "image": "/solutions/jad-larva.png",
        "imageCaption": "स्वस्थ जड़ प्रणाली",
        "colorScheme": "accent"
      },
      {
        "id": "sucking",
        "title": "चूसक कीट",
        "icon": "fas fa-mosquito",
        "subtitle": "थ्रिप्स, माहू, तेला, चैंपा, मकड़ी, सफेद मक्खी",
        "products": ["ऊर्जा भस्म", "राह गरूणारिष्ट", "वर्टि भक्षक", "राह खनिज भस्म", "नीमबाण"],
        "image": "/solutions/chusak-keet.png",
        "imageCaption": "कीट मुक्त फसल",
        "colorScheme": "gold"
      },
      {
        "id": "caterpillar",
        "title": "इल्ली/लार्वा कीट",
        "icon": "fas fa-locust",
        "subtitle": "",
        "products": ["ऊर्जा भस्म", "हरड़ रसायन", "नीम धारा", "कीट भक्षक वीबीएम"],
        "image": "/solutions/illi-larva.png",
        "imageCaption": "फसल सुरक्षा",
        "colorScheme": "primary"
      }
    ]
  },
  {
    categoryName: "मृदा प्रबंधन",
    solutions: [
      {
        id: "alkaline",
        title: "क्षारीय भूमि",
        icon: "fas fa-water",
        subtitle: "",
        products: ["ऊर्जा भस्म", "जीवाणु जल + जंगल जीवाणु", "राह स्वाइल कंडिशनर", "पीएच बैलेंसर", "तिल की हरी खाद", "साइनो बैक्टिरिया", "जैव रसायन"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "स्वस्थ मिट्टी",
        colorScheme: "gold",
      },
      {
        id: "acidic",
        title: "अम्लीय मिट्टी",
        icon: "fas fa-flask",
        subtitle: "",
        products: ["तिल की हरी खाद", "हाई C:N रेशियो", "जीवाणु जल", "पीएच बैलेंसर", "सजीव कम्पोस्ट खाद", "साइनो बैक्टिरिया", "राह स्वाइल कंडिशन"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "संतुलित मिट्टी",
        colorScheme: "primary",
      },
      {
        id: "waterlog",
        title: "जल भराव",
        icon: "fas fa-tint",
        subtitle: "",
        products: ["सफेद मिट्टी", "तिल की हरी खाद", "जीवाणु जल", "साइनो बैक्टिरिया"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "उचित जल प्रबंधन",
        colorScheme: "accent",
      },
      {
        id: "npk",
        title: "NPK की कमी",
        icon: "fas fa-atom",
        subtitle: "",
        products: ["राह गोवर्धन खाद", "जैव रसायन", "जीवाणु जल", "राह स्वाइल कंडिशनर"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "संतुलित पोषण",
        colorScheme: "gold",
      },
      {
        id: "micronutrient",
        title: "सूक्ष्म पोषक तत्वों की कमी",
        icon: "fas fa-microscope",
        subtitle: "",
        products: ["ऊर्जा भस्म", "जैव रसायन", "तिल की हरी खाद", "जीवाणु जल", "साइनो बैक्टिरिया"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "पूर्ण पोषण",
        colorScheme: "primary",
      },
      {
        id: "sulfur",
        title: "सल्फर की कमी",
        icon: "fas fa-fire",
        subtitle: "",
        products: ["ऊर्जा भस्म", "राह सल्फर तरल", "लाल-पीले बॉटल का गौमूत्र", "राह खनिज तरल"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "स्वस्थ पौधे",
        colorScheme: "accent",
      },
      {
        id: "weakness",
        title: "पौधों में कमजोरी",
        icon: "fas fa-heartbeat",
        subtitle: "",
        products: ["राह रजत जल", "राह अमृतधारा", "राह जीवन ऊर्जा"],
        image: "/solutions/mrida-prabandhan.png",
        imageCaption: "मजबूत पौधे",
        colorScheme: "gold",
      },
    ],
  },
];

export const colorSchemes = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary",
    gradient: "from-primary/90",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent",
    gradient: "from-accent/90",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold",
    gradient: "from-gold/90",
  },
};