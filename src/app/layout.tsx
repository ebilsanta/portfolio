"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/navbar";
import Email from '@/components/email';
import Return from '@/components/return';
import Socials from '@/components/socials';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="!scroll-smooth">
      <title>Thaddeus&apos; Portfolio</title>
      <body className={inter.className}>
        <NavBar/>
        <Email/>
        <Socials/>
        <Return/>
        {children}
      </body>
    </html>
  )
}
