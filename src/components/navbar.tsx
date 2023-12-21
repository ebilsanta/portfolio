import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollDirection from '@/hooks/useScrollDirection';
import { links } from "@/lib/data";
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

export default function NavBar(
) {
  const [isMounted, setIsMounted] = useState(false);
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
      className={`flex items-center justify-between fixed top-0 z-10 w-full bg-rose-100 h-20 sm:h-20 bg-opacity-80 ${
        scrolledToTop
        ? '' 
        : scrollDirection === 'up'
        ? 'h-16 translate-y-0 backdrop-blur-sm'
        : scrollDirection === "down"
        ? '-translate-y-64'
        : ""
      }`}
    >
      <nav className="flex items-center justify-center lg:justify-end w-full px-8 lg:px-12">
        {isMounted && (
          <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-x-6 text-[0.9rem] font-medium text-lg text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-12">
          {links.map((link, index) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <Link
                className="flex w-full items-center justify-center hover:text-black hover:scale-105 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        )}
      </nav>
    </header>
  );
};

