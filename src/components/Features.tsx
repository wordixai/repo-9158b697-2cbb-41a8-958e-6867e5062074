import React from 'react';
import { Globe, Zap, Cpu, Database } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Get Right in Your Users' Faces",
      description: "Deploy in 35 regions, from Sydney to São Paulo, for sub-100ms response times and native-app feel no matter where your users are.",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Fork Off VMs Like They're Processes",
      description: "Fly Machines start fast enough to handle HTTP requests, run only when you need them, and scale into tens of thousands of instances.",
      color: "blue"
    },
    {
      icon: Cpu,
      title: "Ship GPU-Boosted Models",
      description: "From LLMs to inferencing, hardware acceleration with the same developer experience as a simple CRUD app.",
      color: "orange"
    },
    {
      icon: Database,
      title: "Built for Distributed Systems",
      description: "Clustered databases like Cockroach, globally-distributed Postgres, and modern RPC systems like Elixir FLAME, no Terraform required.",
      color: "amber"
    }
  ];

  const colorClasses = {
    emerald: "shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35",
    blue: "shadow-blue-500/30 from-sky-300/50 to-blue-300/50 text-blue-500 ring-blue-500/30",
    orange: "shadow-orange-500/30 from-orange-200/50 to-orange-500/40 text-orange-500 ring-orange-500/35",
    amber: "shadow-amber-500/30 from-yellow-200/75 to-orange-200/75 text-amber-500 ring-amber-400/60"
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-sky-300 via-indigo-300 to-pink-300 blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-[100deg] from-sky-300/10 via-indigo-300/10 to-pink-300/10 [-webkit-mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]"></div>
      
      <div className="relative container mx-auto py-24 xl:py-32 px-4 sm:px-6 lg:px-8 grid gap-20 items-center">
        <div className="lg:grid grid-cols-2 gap-x-8 xl:gap-x-16 items-start">
          <div className="relative lg:max-w-xl space-y-4 lg:pb-20">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-navy">
              Public Cloud Infrastructure. Modern Platform Endorphins.
            </h2>
            <p className="text-lg">
              The most flexible and powerful compute platform on any public cloud. Fly Machines are 
              hardware-virtualized containers, running on our own hardware, that launch instantly and 
              run exactly as long as you want them to — for a single HTTP request, or for weeks of uptime.
            </p>
            <div className="hidden lg:block w-full h-px absolute bottom-0 bg-gradient-to-r from-navy-400 via-navy-400/[0.35] via-10% to-transparent">
              <svg viewBox="0 0 6 3" width="6" height="3" className="-mt-px fill-navy-400">
                <path d="M2.594 2.525A1.501 1.501 0 112.635.519c.274.295.665.479 1.098.479H6v1.004H3.733a1.5 1.5 0 00-1.108.489l-.017.02-.013.015-.001-.001z"></path>
              </svg>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=400&h=300&fit=crop&crop=center" 
            className="w-full max-w-sm -mb-12 mx-auto relative lg:-mt-4" 
            alt="Global infrastructure"
          />
        </div>

        <ul className="grid lg:grid-cols-2 gap-y-16 gap-x-8 xl:gap-x-16">
          {features.map((feature, index) => (
            <li key={index} className="group w-full relative grid grid-cols-[auto_1fr] items-start gap-8 text-left">
              <div className={`flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-lg md:text-1.5xl text-navy">
                  {feature.title}
                </h2>
                <p className="mt-4 text-base">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;