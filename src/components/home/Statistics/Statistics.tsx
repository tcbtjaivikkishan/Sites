import AnimatedStats from './AnimatedStats'
import PeopleIcon from '@mui/icons-material/People'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import InventoryIcon from '@mui/icons-material/Inventory'

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
      icon: <AgricultureIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 35,
      label: 'Crops Production',
      suffix: '+',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <AccessTimeIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 20,
      label: 'Years of Experience',
      suffix: '+',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      icon: <InventoryIcon className="w-8 h-8 md:w-12 md:h-12" />,
      value: 50,
      label: 'Running Products',
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
      { }
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