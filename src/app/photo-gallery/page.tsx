'use client'

import PhotoGallery from "@/app/photo-gallery/gallery"

export default function GalleryPage() {
  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Nuestras Instalaciones</h1>
        </div>

        <PhotoGallery />

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Te gustaria hacer un tour? Contactate con nosotros! 
          </p>
        </div>
      </div>
    </section>
  )
}
