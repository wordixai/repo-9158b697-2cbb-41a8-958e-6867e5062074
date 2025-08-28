import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const EnterpriseSection = () => {
  const features = [
    "Single Sign-On",
    "Guaranteed Support Response Times",
    "SOC2 Type 2 Attested",
    "Memory-safe Rust and Go stack",
    "CI/CD Integration"
  ];

  const companies = [
    { name: "Supabase", href: "https://supabase.com/" },
    { name: "Tailscale", href: "https://tailscale.com/" },
    { name: "Tigris", href: "https://tigrisdata.com/" },
    { name: "Upstash", href: "https://upstash.com/" },
    { name: "Turso", href: "https://turso.tech/" },
    { name: "Mailgun", href: "https://mailgun.com/" },
    { name: "Fanatics", href: "https://fanatics.com/" },
    { name: "SavvyCal", href: "https://savvycal.com/" },
    { name: "Acast", href: "https://acast.com/" },
    { name: "Glide", href: "https://glideapps.com/" }
  ];

  return (
    <section className="relative py-16 lg:py-24 xl:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid gap-8 lg:gap-12 xl:gap-20 items-center grid-cols-2">
          <div className="lg:order-last">
            <header className="space-y-3 lg:max-w-xl xl:max-w-lg xl:mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-navy">
                Enterprise-Ready
              </h2>
              <p className="block text-lg pb-3">
                Apps running on Fly Machines are KVM hardware-isolated, built on a memory-safe stack and running directly on our own metal.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/enterprise" 
                  className="gap-2 btn-xl btn-purple group/btn btn-border-dark flex-1 sm:flex-none rounded-full"
                >
                  Enterprise Features
                  <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
                    <ArrowRight className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all" />
                    <ArrowRight className="size-[0.7em]" />
                  </div>
                </a>
                <a 
                  href="/security" 
                  className="gap-2 btn-xl group/btn flex-1 sm:flex-none rounded-full border border-gray-300 hover:border-violet-500 hover:text-violet-600"
                >
                  Fly.io Security
                  <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
                    <ArrowRight className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all" />
                    <ArrowRight className="size-[0.7em]" />
                  </div>
                </a>
              </div>
            </header>
          </div>
          
          <div className="w-full lg:w-auto">
            <ul className="relative text-lg text-navy font-[450] py-10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-100"></div>
              {features.map((feature, index) => (
                <li key={index} className="flex relative items-center py-3 pl-4 xs:pl-12 sm:pl-20 pr-7">
                  <Check className="absolute left-4 xs:left-8 sm:left-12 w-5 h-5 text-emerald-500" />
                  {feature}
                  <ArrowRight className="ml-auto w-4 h-4 text-violet-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container overflow-hidden mx-auto relative pt-24">
          <h2 className="font-bold text-violet-700 text-sm uppercase tracking-wider text-center mb-6">
            Trusted by teams at
          </h2>
          <div className="[--scroll-speed:60s] [--gap:2rem] group relative flex overflow-hidden select-none gap-[var(--gap)] [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_calc(var(--gap)*2),rgb(0,0,0)_calc(100%-var(--gap)*2),rgba(0,0,0,0)_100%)]">
            <ul className="shrink-0 flex items-center justify-around gap-[var(--gap)] min-w-full animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {companies.map((company, index) => (
                <li key={index} className="flex items-center justify-center gap-8">
                  <a 
                    href={company.href} 
                    className="flex-none relative p-4 lg:px-6 before:content-[''] before:absolute before:inset-0 before:z-[-1] before:scale-90 before:rounded-full hocus:before:scale-100 before:transition-all hocus:before:bg-violet-50" 
                    target="_blank" 
                    rel="noopener"
                  >
                    <span className="sr-only">{company.name}</span>
                    <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">{company.name.slice(0, 3)}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <ul aria-hidden="true" className="shrink-0 flex items-center justify-around gap-[var(--gap)] min-w-full animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {companies.map((company, index) => (
                <li key={index} className="flex items-center justify-center gap-8">
                  <a 
                    href={company.href} 
                    className="flex-none relative p-4 lg:px-6 before:content-[''] before:absolute before:inset-0 before:z-[-1] before:scale-90 before:rounded-full hocus:before:scale-100 before:transition-all hocus:before:bg-violet-50" 
                    target="_blank" 
                    rel="noopener"
                  >
                    <span className="sr-only">{company.name}</span>
                    <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs font-semibold text-gray-600">{company.name.slice(0, 3)}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;