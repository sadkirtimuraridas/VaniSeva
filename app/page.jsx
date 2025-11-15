import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutPreview from '../components/AboutPreview'
import GalleryGrid from '../components/GalleryGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-12">
        <Services />
        <AboutPreview />
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-saffron-700 mb-4">Gallery</h2>
          <GalleryGrid limit={6} />
        </div>
      </section>
    </>
  )
}
