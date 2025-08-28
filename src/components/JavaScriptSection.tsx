import React from 'react';
import { Zap, Code, Server } from 'lucide-react';

const JavaScriptSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Boots in 250ms or Less",
      description: "Functions and apps boot and respond to web requests in 250ms or less with Fly Machines. You decide to keep them running or automatically put them to sleep."
    },
    {
      icon: Code,
      title: "Built for JavaScript Developers",
      description: "JavaScript, TypeScript, Bun, Deno—whatever your flavor, Fly Launch automatically detects your runtime and generates a VM with everything you need to run your app."
    },
    {
      icon: Server,
      title: "Real GPUs & CPUs on the Edge",
      description: "Run workloads that require GPUs or lots of CPUs, memory, and storage in over 30 regions around the world—all interconnected by a private, encrypted WireGuard network that works out of the box."
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 xl:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-sky-300 via-indigo-300 to-pink-300 blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-[100deg] from-sky-300/10 via-indigo-300/10 to-pink-300/10 [-webkit-mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]"></div>

        <div className="relative">
          <div className="flex flex-col lg:grid gap-8 lg:gap-12 xl:gap-20 items-center grid-cols-2 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center" 
              className="w-full xl:w-auto max-w-md mx-auto" 
              alt="JavaScript development"
            />
            <div className="space-y-4 relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-navy">
                Serverful JavaScript Without the Hassle of Serverless
              </h2>
              <p className="text-lg">
                Imagine if a server could boot as fast as a serverless function? That's Fly Machines—serverless 
                compute is a trade-off you no longer need to make. Graduate to a full-stack cloud to regain 
                control over your stack & hosting bill.
              </p>
            </div>
          </div>

          <ul className="grid lg:grid-cols-3 text-left gap-12">
            {benefits.map((benefit, index) => (
              <li key={index} className="group space-y-7">
                <div className="flex justify-center items-center shrink-0 bg-gradient-to-br ring-1 shadow-xl rounded-xl w-12 h-12 shadow-emerald-500/30 from-green-300/50 to-emerald-300/50 text-emerald-500 ring-emerald-500/35">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-heading text-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-base">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JavaScriptSection;