"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Photo {
  id: number
  src: string
  alt: string
  title?: string
}

interface PhotoGalleryProps {
  photos?: Photo[]
  className?: string
}

const defaultPhotos: Photo[] = [
  {
    id: 1,
    src: "/vecteezy_multilayered-flowerbeds-in-garden_1971420.jpg",
    alt: "Beautiful garden area with residents enjoying outdoor activities",
    title: "Garden Activities",
  },
  {
    id: 2,
    src: "/vecteezy_multilayered-flowerbeds-in-garden_1971420.jpg",
    alt: "Comfortable dining room with residents sharing meals",
    title: "Dining Together",
  },
  {
    id: 3,
    src: "/vecteezy_multilayered-flowerbeds-in-garden_1971420.jpg",
    alt: "Spacious common area for social activities and entertainment",
    title: "Community Space",
  },
  {
    id: 4,
    src: "/vecteezy_multilayered-flowerbeds-in-garden_1971420.jpg",
    alt: "Well-appointed private room with comfortable furnishings",
    title: "Private Rooms",
  },
  {
    id: 5,
    src: "/vecteezy_multilayered-flowerbeds-in-garden_1971420.jpg",
    alt: "Physical therapy and wellness activities",
    title: "Wellness Programs",
  },
]

export default function PhotoGallery({ photos = defaultPhotos, className = "" }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!photos.length) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No photos available</p>
      </div>
    )
  }

  const currentPhoto = photos[currentIndex]

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Main Image Display */}
          <div className="relative aspect-[3/2] bg-muted">
            <Image
              src={currentPhoto.src || "/placeholder.svg"}
              alt={currentPhoto.alt}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />

            {/* Navigation Arrows - Desktop */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="secondary"
                size="icon"
                className="ml-4 bg-white/80 hover:bg-white/90 backdrop-blur-sm"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="secondary"
                size="icon"
                className="mr-4 bg-white/80 hover:bg-white/90 backdrop-blur-sm"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Image Title */}
          {currentPhoto.title && (
            <div className="p-4 bg-background border-b">
              <h3 className="text-lg font-semibold text-center">{currentPhoto.title}</h3>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="p-6 space-y-4">
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 sm:hidden">
              <Button variant="outline" onClick={goToPrevious} className="flex-1 bg-transparent" size={undefined}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button variant="outline" onClick={goToNext} className="flex-1 bg-transparent" size={undefined}>
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Navigation - Desktop */}
            <div className="hidden md:flex justify-center gap-2 overflow-x-auto pb-2">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-muted hover:border-muted-foreground/50"
                  }`}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
