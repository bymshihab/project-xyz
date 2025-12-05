import './Hero.css';
import CTAButton from '../../shared/CTAButton';

const Hero = () => {
  return (
    <div className="hero-container relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        
        <div className="w-full px-6 mt-20">
          {/* Hero Section */}
          <div className="text-center font-general w-full">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight  font-light ">
              MONEY MAKING IS{" "}
              <span className="font-semibold">
                A SKILL
              </span>
            </h1>

            <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4">
              We will teach you how to <span className="font-bold">master it</span>
            </p>
          </div>

          {/* Video Player Container */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                title="vimeo-player" 
                src="https://player.vimeo.com/video/902932460?h=584fce0314" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* CTA Section */}
          <CTAButton />
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-20">
          <div className="relative">
            <button className="hero-float-button px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Ready to Change Your Life
            </button>
            <button className="hero-chat-button absolute -right-2 -top-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;
