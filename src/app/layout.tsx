"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <html lang="en" className="!scroll-smooth">
      <title>Thaddeus' Portfolio</title>
      <body className={inter.className}>
        <NavBar isHome={isHome}/>
        {children}
      </body>
    </html>
  )
}
