import React from 'react';
import { ArrowRight } from 'lucide-react';

const TechSection = () => {
  const frameworks = [
    { name: "Phoenix Framework", href: "/phoenix" },
    { name: "SvelteKit", href: "/sveltekit" },
    { name: "Ruby on Rails", href: "/rails" },
    { name: "Docker", href: "/docs/getting-started/dockerfile" },
    { name: "Go", href: "/docs/getting-started/golang" },
    { name: "Rust", href: "/docs/rust" },
    { name: "Django", href: "/django" },
    { name: "Laravel", href: "/laravel" },
    { name: "NextJS", href: "/nextjs" }
  ];

  return (
    <section className="relative py-16 lg:py-24 xl:py-32 bg-navy-800 text-white bg-gradient-purple overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[length:100px_auto] -rotate-3 pointer-events-none opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22m0%2C0l100%2C100%22/%3E%3Cpath%20d%3D%22m100%2C0l-100%2C100%22/%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>

        <div className="flex flex-col lg:grid gap-8 lg:gap-12 xl:gap-20 items-center grid-cols-2">
          <div>
            <header className="drop-shadow lg:max-w-xl xl:max-w-lg xl:mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading">
                Use the Tech You Love
              </h2>
              <p className="block mt-4 mb-7 text-lg text-white/70">
                Build with your favorite framework. No Dockerfile? No problem: our CLI generates containers 
                for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel, and .NET.
              </p>
              <a 
                href="/docs/speedrun" 
                className="gap-2 btn-xl btn-translucent group/btn btn-shadow rounded-full"
              >
                Learn More
                <div className="flex items-center opacity-50 group-hover/btn:opacity-100 transition-opacity">
                  <ArrowRight className="w-0 group-hover/btn:w-2.5 h-3 translate-x-2.5 ease-out duration-200 transition-all" />
                  <ArrowRight className="size-[0.7em]" />
                </div>
              </a>
            </header>
          </div>
          
          <div className="w-full">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-5 xl:col-span-3">
              {frameworks.map((framework, index) => (
                <li key={index}>
                  <a 
                    href={framework.href} 
                    className="h-full grid place-items-center btn-2xl btn-translucent btn-shadow px-4 py-8 rounded-2xl hocus:scale-105"
                  >
                    <span className="sr-only">{framework.name}</span>
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{framework.name.slice(0, 2)}</span>
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

export default TechSection;