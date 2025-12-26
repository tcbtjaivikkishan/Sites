import HeroClient from './client/HeroClient'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Hero() {
  const heroImages = [
    "/Home/banner1.jpeg",
    "/Home/banner2.jpeg",
    "/Home/banner3.jpeg",
  ]

  const statsData = [
    {
      icon: <PeopleIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 200000,
      label: 'Farmers Trained',
      color: 'text-green-600',
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 35,
      label: 'Crops Production',
      suffix: '%',
      color: 'text-blue-600',
    },
    {
      icon: <VerifiedIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 20,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-orange-600',
    },
    {
      icon: <LocationOnIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 50,
      label: 'Product Running Successfully',
      suffix: '+',
      color: 'text-purple-600',
    },
  ]

  return <HeroClient images={heroImages} stats={statsData} />
}
