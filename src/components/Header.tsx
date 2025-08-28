import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Security', href: '/security' },
    { name: 'Infra Log', href: '/infra-log' },
    { name: 'Docs', href: '/docs' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const articleLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Phoenix Files', href: '/phoenix-files' },
    { name: 'Laravel Bytes', href: '/laravel-bytes' },
    { name: 'Ruby Dispatch', href: '/ruby-dispatch' },
    { name: 'Django Beats', href: '/django-beats' },
    { name: 'JavaScript Journal', href: '/javascript-journal' },
  ];

  return (
    <header className="navbar relative z-[500] container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-24 text-navy font-medium text-sm">
      {/* Logo */}
      <nav aria-label="Logo menu" className="relative z-[60] flex">
        <a href="/" aria-label="The Fly.io logo">
          <div className="w-8 h-8 bg-violet-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="ml-auto xl:hidden relative z-[60] rounded-full bg-transparent transition-colors flex-none flex items-center justify-center w-8 h-8 -mx-2"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop navigation */}
      <nav aria-label="Main menu" className="pointer-events-auto hidden lg:flex xl:w-full items-center justify-end">
        {/* Center navigation */}
        <div className="hidden xl:flex items-center absolute left-1/2 -translate-x-1/2 rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
          {/* Articles dropdown */}
          <div className="group relative px-3 py-2.5 cursor-pointer">
            <span className="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
            <span className="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
              <span className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full"></span>
            </span>
            <span className="transition-colors group-hover:text-violet-600">Articles</span>
            
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-2xl p-2 shadow-lg border w-44">
                <div className="rounded-tl w-3 h-3 absolute -top-1.5 left-1/2 -ml-1.5 rotate-45 bg-white"></div>
                {articleLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm transition-colors hover:text-violet-600 hover:bg-violet-100 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main navigation links */}
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-violet-600"
            >
              {link.name}
              <span className="absolute inset-x-1 h-px bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% transition duration-300 -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
              <span className="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                <span className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-violet-500/20 to-transparent blur rounded-t-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="ml-5 flex-none flex items-center rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
          <a
            href="/sign-in"
            className="flex-none group relative text-base sm:text-sm -ml-2 my-1 inline-flex items-center bg-clip-padding rounded-l-[20px] rounded-r-[8px] border h-8 pl-3 pr-[10px] bg-white/40 border-white/90 shadow hover:text-violet-600 hover:bg-violet-50/40 transition-colors duration-300"
          >
            Sign In
            <span className="absolute left-4 right-1 -bottom-0.5 h-px bg-gradient-to-r from-violet-500/0 via-violet-400 to-violet-500/0 transition duration-300 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></span>
          </a>
          <a
            href="/sign-up"
            className="flex-none group relative text-base sm:text-sm ml-1 -mr-2 my-1 h-8 pr-3 btn-xs btn-purple btn-border-dark border-none rounded-r-[20px] rounded-l-[8px]"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`xl:hidden fixed inset-0 bg-gray-500/25 backdrop-blur-sm transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 z-40 pointer-events-auto' : 'opacity-0 z-[-1] pointer-events-none'
      }`}></div>

      {/* Mobile menu */}
      <nav
        className={`xl:hidden fixed left-0 top-0 bottom-0 z-50 w-full overflow-hidden sm:max-w-sm md:max-w-[25rem] bg-white shadow-lg transition duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-24 px-4 pb-6 overflow-y-auto max-h-full">
          {articleLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-sm py-1.5 transition-colors text-navy-950 hover:text-violet-600"
            >
              {link.name}
            </a>
          ))}
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-sm py-1.5 transition-colors text-navy-950 hover:text-violet-600"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="/sign-in"
            className="lg:hidden button mt-8 max-w-52 border border-gray-300 shadow-sm text-violet-600 hover:border-violet-500/40 hover:bg-violet-200 hover:text-violet-600 transition-all block text-center py-2 px-4 rounded-lg"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="lg:hidden button mt-3 max-w-52 bg-violet-600 hover:bg-violet-600 text-white transition-all block text-center py-2 px-4 rounded-lg"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;