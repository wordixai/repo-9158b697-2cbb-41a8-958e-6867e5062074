import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PostgresSection = () => {
  const features = [
    "Automatic backups and recovery",
    "High availability with automatic failover",
    "Performance monitoring and metrics",
    "Resource scaling (CPU, RAM, storage)",
    "24/7 support and incident response",
    "Automatic encryption of data at rest and in transit"
  ];

  return (
    <section className="relative bg-white py-24 xl:py-32">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center" 
          className="lg:order-last w-full max-w-sm mx-auto mb-6 lg:mb-0" 
          alt="Managed Postgres"
        />
        <div className="space-y-3">
          <span className="inline-flex mb-1 rounded-full px-2.5 py-0.5 font-sans text-xs tracking-wide font-extrabold text-emerald-600 bg-gradient-to-br ring-1 from-green-300/50 to-emerald-300/50 ring-emerald-500/35">
            NEW!
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-navy">
            Fly.io Managed Postgres
          </h2>
          <p className="block text-lg pb-3">
            A fully-managed database service that handles all aspects of running production PostgreSQL where we take care of:
          </p>
          <ul className="space-y-1 pb-5">
            {features.map((feature, index) => (
              <li key={index} className="flex relative items-center text-base">
                <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <a 
            href="/docs/mpg" 
            className="gap-2 btn-xl btn-purple group/btn btn-border-dark rounded-full"
          >
            Learn More
            <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
              <ArrowRight className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all" />
              <ArrowRight className="size-[0.7em]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PostgresSection;