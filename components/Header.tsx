"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      const progress = Math.min(window.scrollY / window.innerHeight, 1)
      setScrolled(scrolled)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-white text-xl font-semibold tracking-wider transition-all duration-300"
            style={{
              opacity: scrollProgress > 0.5 ? 1 : 0,
              transform: `translateX(${scrollProgress > 0.5 ? '0' : '-20px'})`
            }}
          >
            Portfolio
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#work" 
              className="text-white/90 hover:text-white transition-colors"
              style={{
                opacity: scrollProgress > 0.3 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.3 ? '0' : '-10px'})`
              }}
            >
              Work
            </Link>
            <Link 
              href="#about" 
              className="text-white/90 hover:text-white transition-colors"
              style={{
                opacity: scrollProgress > 0.4 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.4 ? '0' : '-10px'})`
              }}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-white/90 hover:text-white transition-colors"
              style={{
                opacity: scrollProgress > 0.5 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.5 ? '0' : '-10px'})`
              }}
            >
              Contact
            </Link>
          </nav>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 