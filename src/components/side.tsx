"use client";

import { useEffect, useState } from 'react';

interface SideProps {
  children: React.ReactNode;
  orientation: string;
}

export default function Side({ children, orientation } : SideProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
      window.removeEventListener("scroll", listenToScroll); 
  }, [])

  const listenToScroll = () => {
    let heightToAppear = 490;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToAppear) {  
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }  
  };

  return (
    isVisible && 
    <div className={`hidden sm:inline fixed bottom-24 ${orientation === 'left' ? 'left-0 rotate-270 -translate-x-36' : 'right-0 rotate-90 translate-x-36'}`}>
      {children}
    </div>
  )
}
