import AnimatedStats from '@/components/client/AnimatedStats'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Statistics() {
  const statsData = [
    {
      icon: <PeopleIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 200000,
      label: 'Farmers Trained',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 35,
      label: 'Crops Production',
      suffix: '%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <VerifiedIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 20,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: <LocationOnIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 50,
      label: 'Product Running Successfully',
      suffix: '+',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  return (
    <section
      id="stats-section"
      className="relative py-16 md:py-24 bg-linear-to-br from-green-50 via-emerald-50 to-green-100 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <AnimatedStats stats={statsData} />
      </div>
    </section>
  )
}