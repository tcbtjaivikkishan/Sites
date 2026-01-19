import FooterClient from '../client/FooterClient'
import Link from 'next/link'
import { Leaf, Phone, Mail, MapPin, Youtube, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'होम', href: '/' },
    { name: 'हमारे बारे में', href: '/about' },
    { name: 'तकनीक', href: '/techniques' },
    { name: 'उत्पाद', href: 'https://products.tcbtjaivikkisan.com' },
    { name: 'गैलरी', href: '/gallery' },
    { name: 'संपर्क', href: '/contact' },
  ]

  const techniques = [
    { name: 'ऊर्जा विज्ञान', href: '/urja-vigyan' },
    { name: 'अग्निहोत्र', href: '/agnihotra' },
    { name: 'वृक्षायुर्वेद कृषि', href: '/vrikshayurveda' },
    { name: 'कृषि रोग उपचार', href: '/solutions' },
    { name: 'पंचमहाभूत सिद्धांत', href: '/panchmahabhut' },
  ]

  const contactInfo = {
    phone: '+91 98765 43210',
    email: 'info@tcbtjaivikkisan.com',
    address: 'प्राकृतिक खेती शोध संस्था, बालाघाट, मध्य प्रदेश, भारत',
  }

  const socialLinks = [
    { name: 'YouTube', href: 'https://www.youtube.com/@TarachandBelji', icon: Youtube },
    { name: 'Facebook', href: 'https://facebook.com/tcbtjaivikkisan', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/tcbtjaivikkisan', icon: Instagram },
    { name: 'Twitter', href: 'https://twitter.com/tcbtjaivikkisan', icon: Twitter },
  ]

  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white">TCBT</span>
                  <span className="text-sm text-green-300 -mt-1">जैविक किसान</span>
                </div>
              </Link>
              <p className="text-green-100 leading-relaxed text-sm">
                प्रकृति के पंचमहाभूत सिद्धांत पर आधारित, रसायन-मुक्त कृषि विज्ञान। 
                स्वस्थ मिट्टी, स्वस्थ फसल, स्वस्थ जीवन।
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-green-300 group-hover:text-white transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-green-300">त्वरित लिंक</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-green-100 hover:text-yellow-300 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:w-3 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-green-300">हमारी तकनीक</h3>
              <ul className="space-y-3">
                {techniques.map((technique) => (
                  <li key={technique.name}>
                    <Link
                      href={technique.href}
                      className="text-green-100 hover:text-yellow-300 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:w-3 transition-all" />
                      {technique.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-green-300">संपर्क करें</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-start gap-3 text-green-100 hover:text-yellow-300 transition-colors text-sm group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{contactInfo.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-3 text-green-100 hover:text-yellow-300 transition-colors text-sm group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">{contactInfo.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-green-100 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </li>
              </ul>

              {/* Newsletter */}
              <FooterClient />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-green-800/50">
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400 mb-1">2,00,000+</div>
              <div className="text-xs text-green-300">प्रशिक्षित किसान</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400 mb-1">150+</div>
              <div className="text-xs text-green-300">वृक्षायुर्वेद फार्मूले</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400 mb-1">20+</div>
              <div className="text-xs text-green-300">वर्षों का अनुभव</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-yellow-400 mb-1">50+</div>
              <div className="text-xs text-green-300">सफल उत्पाद</div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TCBT जैविक किसान. सर्वाधिकार सुरक्षित।
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-green-200 hover:text-yellow-300 transition-colors">
                गोपनीयता नीति
              </Link>
              <Link href="/terms" className="text-green-200 hover:text-yellow-300 transition-colors">
                नियम और शर्तें
              </Link>
              <Link href="/sitemap" className="text-green-200 hover:text-yellow-300 transition-colors">
                साइटमैप
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button - Will be in FooterClient */}
      </div>
    </footer>
  )
}
