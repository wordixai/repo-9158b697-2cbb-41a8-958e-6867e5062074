import React from 'react';
import { ArrowRight } from 'lucide-react';

const PhoenixSection = () => {
  return (
    <section className="relative bg-white overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-7 items-center gap-x-8 gap-y-4 px-10 md:px-14 xl:px-20 py-0 rounded-3xl card bg-navy-950 bg-gradient-to-br from-violet-950/50 via-navy-950/50 to-black/50 ring-1 ring-violet-400/50 ring-inset border border-navy-950">
          <div className="lg:order-last lg:col-span-3 lg:-mr-9 -mb-6 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=300&fit=crop&crop=center" 
              alt="Phoenix illustration" 
              width="400" 
              className="w-full max-w-lg lg:max-w-max mx-auto"
            />
          </div>
          <div className="space-y-4 py-6 md:py-10 lg:py-12 xl:py-20 lg:col-span-4">
            <span className="inline-flex rounded-full px-2.5 py-0.5 font-sans text-xs tracking-wide font-extrabold text-white bg-gradient-to-br ring-1 from-orange-400 to-orange-600 ring-orange-400">
              NEW!
            </span>
            <h2 className="text-2xl md:text-3xl font-heading text-white -mt-1">
              Introducing Phoenix.new<br />The Remote AI Runtime for Phoenix
            </h2>
            <p className="block text-lg text-white/80 pb-3">
              Describe your app, and watch it take shape. Prototype quickly, experiment freely, and share instantly.
            </p>
            <a 
              href="/phoenix-new" 
              className="gap-2 btn-xl btn-purple group/btn w-full sm:w-auto btn-border-light rounded-full"
            >
              Learn More
              <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
                <ArrowRight className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all" />
                <ArrowRight className="size-[0.7em]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoenixSection;