import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollDirection from '@/hooks/useScrollDirection';
import { links } from "@/lib/data";

export default function NavBar(
  { isHome }: { isHome: boolean }
) {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection({initialDirection: 'down'});
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <header
      className={`flex items-center justify-between fixed top-0 z-10 w-full transition bg-rose-100 h-14 sm:h-20 bg-opacity-80 ${
        scrolledToTop
        ? '' 
        : scrollDirection === 'up'
        ? 'h-16 translate-y-0 backdrop-blur-sm'
        : scrollDirection === "down"
        ? '-translate-y-20'
        : ""
      }`}
    >
      <nav className="flex items-center justify-center lg:justify-end w-full px-8 lg:px-12">
        {isMounted && (
          <ul className="flex w-[22rem] flex-row items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-black hover:scale-105 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        )}
      </nav>
    </header>
  );
};

