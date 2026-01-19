import HeaderClient from '@/components/client/HeaderClient'

export default function Header() {
  const navLinks = [
    { name: 'होम', href: '/' },
    { name: 'हमारे बारे में', href: '/about' },
    { 
      name: 'तकनीक', 
      href: '/techniques',
      dropdown: [
        { name: 'ऊर्जा विज्ञान', href: '/urja-vigyan' },
        { name: 'अग्निहोत्र', href: '/agnihotra' },
        { name: 'वृक्षायुर्वेद कृषि', href: '/vrikshayurveda' },
        { name: 'कृषि रोग उपचार', href: '/solutions' },
      ]
    },
    { name: 'उत्पाद', href: 'https://products.tcbtjaivikkisan.com', external: true },
    { name: 'सफलता की कहानियां', href: '/testimonials' },
    { name: 'गैलरी', href: '/gallery' },
    { name: 'संपर्क', href: '/contact' },
  ]

  return <HeaderClient navLinks={navLinks} />
}