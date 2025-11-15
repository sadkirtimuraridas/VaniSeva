export default function GalleryGrid({ limit = 9 }){
  const images = Array.from({length: limit}).map((_,i)=>`/gallery-${i+1}.jpg`)
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src,idx)=>(
          <div key={idx} className="rounded-lg overflow-hidden shadow-sm">
            <img src={src} alt={`gallery-${idx}`} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
