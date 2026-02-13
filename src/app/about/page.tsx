import AboutUI from "@/components/about/about-us";

export default function AboutPage() {
    const data = {
        hero: {
            heading: "हमारे बारे में",
            tagline: "प्रकृति के साथ, किसान के लिए",
            subtitle:
                "टिकाऊ कृषि, सशक्त किसान और समृद्ध भविष्य की ओर हमारा संकल्प",
        },

        aboutTCBT: {
            title: "TCBT के बारे में",
            content: [
                "TCBT (ताराचंद बेलजी तकनीक) एक प्राकृतिक कृषि आंदोलन है जिसका उद्देश्य किसानों को रासायनिक मुक्त और लाभकारी खेती की ओर प्रेरित करना है।",
                "हम पंचमहाभूतों के संतुलन के माध्यम से मिट्टी की उर्वरता और कृषि उत्पादकता को पुनर्जीवित करने का प्रयास करते हैं।",
                "TCBT केवल एक तकनीक नहीं, बल्कि एक समग्र कृषि दर्शन है जो किसान, प्रकृति और समाज के बीच संतुलन स्थापित करता है।",
            ],
        },

        founder: {
            name: "श्री ताराचंद बेलजी",
            title: "प्राकृतिक कृषि के अग्रदूत",
            description: [
                "ताराचंद बेलजी मध्यप्रदेश के बालाघाट जिले के गाँव कन्हई से हैं। इनका बचपन जंगल, पेड़-पौधों, पशु-पक्षियों और प्रकृति के बीच बिताया गया है, जिससे इन्हें प्रकृति से आत्मीयता और नैसर्गिक सोच मिली।",
                "इन्होंने अपना पूरा जीवन वृक्षायुर्वेद विज्ञान (प्राकृतिक कृषि) के अध्ययन, प्रचार और नये अनुसंधान में समर्पित कर दिया। इनका उद्देश्य - रसायन मुक्त, स्वस्थ, उच्च उत्पादकता वाली खेती विकसित करना है।",
                "इन्होंने अपने निरंतर अध्ययन, अनुसंधान और प्रयासों से प्राकृतिक सिद्धांतों के आधार पर स्वावलंबी और जैविक मूल्य आधारित खेती की पद्धति विकसित की है, जिसका लाभ आज लाखों किसान ले रहे हैं।",
            ],
            image:
                "/Tarachand-Belji/h1.jpeg",
        },

        upperManagement: [
            {
                name: "Tarachand Belji",
                role: "Founder, Director",
                image: "/Tarachand-Belji/h2.jpeg",
                linkedin: "https://linkedin.com/in/example",
            },
            {
                name: "Metali Belji",
                role: "Founder, Director",
                image: "/Our-team/Metali-mam.jpeg",
                linkedin: "https://linkedin.com/in/example2",
            },
            {
                name: "Navjyot Nashine",
                role: "Chief Executive Officer",
                image: "/Our-team/CEO.jpeg",
                linkedin: "https://linkedin.com/in/example3",
            },
        ],

        departments: [
            {
                name: "IT Department",
                members: [
                    {
                        name: "Akshay Patel",
                        designation: "Team Lead",
                        linkedin: "https://www.linkedin.com/in/akshay-patel-dev/",
                        email: "akshay.patel@tcbt.com",
                    },
                    {
                        name: "Atharve Agrawal",
                        designation: "Full Stack Engineer",
                        linkedin: "https://linkedin.com/in/atharve-agrawal",
                        email: "atharve.agrawal@tcbt.com",
                    },
                    {
                        name: "Piyush Chawla",
                        designation: "Full Stack Engineer",
                        linkedin: "https://www.linkedin.com/in/piyushchawla-webdev/",
                        email: "piyush.chawla@tcbt.com",
                    },
                    {
                        name: "Pawni Mishra",
                        designation: "Junior Developer",
                        linkedin: "https://linkedin.com/in/pawni-mishra-081216224",
                        email: "pawni.mishra@tcbt.com",
                    },
                    {
                        name: "Shivam Tiwari",
                        designation: "Technical Intern",
                        linkedin: "https://www.linkedin.com/in/shivam-tiwari-3b26902a6",
                        email: "shivam.tiwari@tcbt.com",
                    },
                ],
            },
            {
                name: "Operations Department",
                members: [
                    {
                        name: "Ritika Kirar",
                        designation: "Operations Manager",
                        linkedin: "https://linkedin.com/in/ritika-kirar",
                        email: "ritika.kirar@tcbt.com",
                    },
                    {
                        name: "Pooja Soni",
                        designation: "Operations Executive",
                        linkedin: "https://linkedin.com/in/pooja-soni",
                        email: "pooja.soni@tcbt.com",
                    },
                    {
                        name: "Manish Ji",
                        designation: "Graphic Designer",
                        linkedin: "https://linkedin.com/in/manish-ji",
                        email: "manish.ji@tcbt.com",
                    },
                    {
                        name: "Mahendra Ji",
                        designation: "Store Manager",
                        linkedin: "https://linkedin.com/in/mahendra-ji",
                        email: "mahendra.ji@tcbt.com",
                    },
                    {
                        name: "Sneha Ji",
                        designation: "Operations (Logistics Coordinator)",
                        linkedin: "https://linkedin.com/in/sneha-ji",
                        email: "sneha.ji@tcbt.com",
                    },
                ],
            },
            {
                name: "Marketing Department",
                members: [
                    {
                        name: "Ranveer Singh",
                        designation: "Customer Care (Farmer Support)",
                        linkedin: "https://linkedin.com/in/ranveer-singh",
                        email: "ranveer.singh@tcbt.com",
                    },
                    {
                        name: "Suresh Ji",
                        designation: "Customer Care (Technical Support)",
                        linkedin: "https://linkedin.com/in/suresh-ji",
                        email: "suresh.ji@tcbt.com",
                    },
                ],
            },
        ],
        gallery: [
            "/Our-team/gallery/img1.jpeg",
            "/Our-team/gallery/img2.jpeg",
            "/Our-team/gallery/img3.jpeg",
            "/Our-team/gallery/img4.jpeg",
        ],
    };

    return <AboutUI data={data} />;
}
