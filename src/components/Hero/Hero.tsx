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
              {/* Video Placeholder */}
              <div className="hero-video-bg relative w-full h-full flex items-center justify-center">
                {/* Play Button */}
                <button className="hero-play-button flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 group">
                  <svg className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>

                {/* Video Controls Overlay */}
                <div className="hero-video-controls absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="hero-control-button text-sm">05:13</span>
                      <div className="hero-progress-bg w-full rounded-full h-1 max-w-md">
                        <div className="hero-progress-bar h-1 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="hero-control-button transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 12.414l-4.95 2.475A1 1 0 019 14.025V9.975a1 1 0 011.586-.864l4.95 2.475a1 1 0 010 1.728z" />
                        </svg>
                      </button>
                      <button className="hero-control-button transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
