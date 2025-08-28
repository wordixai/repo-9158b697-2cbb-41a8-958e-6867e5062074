import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Pricing", href: "/pricing" },
        { name: "Jobs", href: "/jobs" }
      ]
    },
    {
      title: "Articles",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Phoenix Files", href: "/phoenix-files" },
        { name: "Laravel Bytes", href: "/laravel-bytes" },
        { name: "Ruby Dispatch", href: "/ruby-dispatch" },
        { name: "Django Beats", href: "/django-beats" },
        { name: "JavaScript Journal", href: "/javascript-journal" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Docs", href: "/docs" },
        { name: "Customers", href: "/customers" },
        { name: "Support", href: "/docs/support" },
        { name: "Support Metrics", href: "/support" },
        { name: "Status", href: "https://status.flyio.net" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "GitHub", href: "https://github.com/superfly" },
        { name: "Twitter", href: "https://twitter.com/flydotio" },
        { name: "Community", href: "https://community.fly.io" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Security", href: "/security" },
        { name: "Privacy policy", href: "/legal/privacy-policy" },
        { name: "Terms of service", href: "/legal/terms-of-service" },
        { name: "Acceptable Use Policy", href: "/legal/acceptable-use-policy" }
      ]
    }
  ];

  return (
    <footer className="relative text-sm text-navy-400 leading-6 pb-8 pt-12 lg:pt-20 text-medium bg-navy-950 bg-gradient-to-br from-gray-900/50 via-navy-900/50 to-navy-950/50" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20 grid md:grid-cols-[auto_1fr] items-start gap-10 md:gap-16">
        <a href="/" className="justify-self-start" aria-label="Fly">
          <div className="w-8 h-8 bg-violet-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
        </a>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-10 items-start lg:justify-items-center">
          {footerSections.map((section) => (
            <dl key={section.title}>
              <dt className="font-bold uppercase tracking-wider text-xs text-white mb-3">
                {section.title}
              </dt>
              <dd className="font-medium flex flex-col items-start space-y-1">
                {section.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-violet-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </dd>
            </dl>
          ))}
        </div>
      </div>
      
      <p className="text-xs text-center mb-0">
        Copyright © 2025 Fly.io
      </p>
    </footer>
  );
};

export default Footer;