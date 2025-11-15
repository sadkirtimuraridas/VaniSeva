import ServiceCard from './ServiceCard'

const services = [
  { title: 'Daily Aarti', desc: 'Morning and evening aarti and kirtan at the temple', icon: '🙏' },
  { title: 'Prasadam Distribution', desc: 'Regular prasadam for devotees and community', icon: '🍚' },
  { title: 'Bhakti Education', desc: 'Classes for children and adults', icon: '📚' },
  { title: 'Publishing', desc: 'Books, leaflets and online resources', icon: '📖' }
]

export default function Services({ showAll }){
  const list = showAll ? services : services.slice(0,3)
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-saffron-700 mb-6">Our Seva</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map(s => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  )
}
