import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="hero relative flex flex-col pt-[70px] -mt-24 h-[800px] pb-[200px] lg:h-[1000px] lg:pb-[268px]">
      {/* Background Image */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2" aria-hidden="true">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1440&h=800&fit=crop&crop=center"
          className="w-[1200px] lg:w-[1750px] max-w-screen-3xl h-auto object-contain object-bottom opacity-80"
          alt=""
        />
      </div>
      
      <div className="relative container lg:max-w-4xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-start sm:items-center sm:text-center">
          <h1 className="font-heading text-3.5xl xs:text-4.5xl sm:text-5xl md:text-5.5xl lg:text-6xl xl:text-6.5xl !tracking-[-.045em] relative text-navy mb-5 -mt-4 sm:-mt-5 lg:-mt-6 xl:mt-[-26px]">
            A Public Cloud Built For <br className="hidden lg:block" /> Developers Who{' '}
            <em className="relative inline-block z-0">
              Ship
              <svg 
                className="absolute -bottom-1 left-0 w-full h-3" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,8 Q25,2 50,8 Q75,14 100,8" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  className="text-violet-400"
                />
              </svg>
            </em>
          </h1>
          
          <p className="text-base lg:text-[18px] tracking-prose mb-9 max-w-[46.875rem] mx-auto">
            <strong className="text-navy">Over 3 million apps</strong> have launched on Fly.io, 
            leveraging global Anycast load-balancing, zero-config private networking, hardware isolation, 
            instant WireGuard VPN connections, and push-button deployments scaling to thousands of instances.
          </p>

          <a 
            href="/sign-up" 
            className="gap-2 btn-xl btn-purple group/btn btn-border-dark rounded-full"
          >
            Deploy Your App in 5 minutes
            <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
              <ArrowRight className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all" />
              <ArrowRight className="size-[0.7em]" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;