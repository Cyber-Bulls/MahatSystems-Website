import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const images = [
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1800",
    alt: "Modern office workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1800",
    alt: "Team collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1800",
    alt: "Digital technology"
  },
  {
    url: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1800",
    alt: "Data visualization"
  }
]

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
