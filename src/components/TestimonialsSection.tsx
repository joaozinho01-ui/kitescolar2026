import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonialImages = [
  "https://i.postimg.cc/mk8ws2wH/Design-sem-nome-(1).png",
  "https://i.postimg.cc/zf8VnS5m/Design-sem-nome-(3).png",
  "https://i.postimg.cc/J0fhtjKS/Design-sem-nome.png",
  "https://i.postimg.cc/y8XNYgR2/Gemini-Generated-Image-vrx85pvrx85pvrx8-removebg-preview.png"
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Centenas de clientes satisfeitos
          </h2>
          <p className="text-xl text-gray-600">
            Veja quem já transformou sua rotina com o Kit Escolar Premium
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
            <img
              src={testimonialImages[currentIndex]}
              alt={`Depoimento ${currentIndex + 1}`}
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </div>

          {/* Left Arrow */}
          <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all duration-300" onClick={prevSlide}>
            <ChevronLeft size={30} />
          </div>

          {/* Right Arrow */}
          <div className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-all duration-300" onClick={nextSlide}>
            <ChevronRight size={30} />
          </div>

          {/* Mobile Arrows (Visible always on mobile) */}
          <div className="flex md:hidden justify-between mt-4 px-4">
            <button onClick={prevSlide} className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center py-4 top-4">
            {testimonialImages.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`text-2xl cursor-pointer mr-2 w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-indigo-600 scale-125' : 'bg-gray-300'}`}
              >
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
