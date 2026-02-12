import AnimatedHero from '@/components/header/HeroClient'

export default function Hero() {
  const heroImages = [
    '/Home/banner1.jpeg',
    '/Home/banner2.jpeg',
    '/Home/banner3.jpeg',
  ]

  return <AnimatedHero images={heroImages} />
}
