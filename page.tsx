"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import { Header } from "./components/Header"
import { motion } from "framer-motion"
import { Footer } from "./components/Footer"

const isMobile = () => {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const Scene = () => {
  const orbitControlsRef = useRef()
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsMobileDevice(isMobile())
    const canvas = document.querySelector('canvas')
    if (canvas) {
      canvas.style.cursor = 'grab'
    }
    return () => {
      if (canvas) {
        canvas.style.cursor = 'default'
      }
    }
  }, [])

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={!isHovered}
        autoRotateSpeed={isHovered ? 0 : 0.2}
        onPointerDown={() => {
          const canvas = document.querySelector('canvas')
          if (canvas) {
            canvas.style.cursor = 'grabbing'
          }
        }}
        onPointerUp={() => {
          const canvas = document.querySelector('canvas')
          if (canvas) {
            canvas.style.cursor = 'grab'
          }
        }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff0000" />

      <Environment
        files="/berlin-gate.jpg"
        background
      />
    </>
  )
}

export default function Page() {
  return (
    <>
      <div className="relative">
        <Header />
        
        {/* Hero Section */}
        <div className="h-screen w-full bg-gray-900 relative">
          <Canvas 
            camera={{ 
              position: [0, 0, 10],
              fov: 70
            }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            style={{ position: 'absolute' }}
          >
            <Scene />
          </Canvas>
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Main Title */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: 30 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ 
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1]
              }}
              className="relative"
            >
              <h1
                className="text-8xl font-bold text-white tracking-[0.15em] mb-8 relative z-10"
                style={{
                  textShadow: `
                    0 0 100px rgba(255,255,255,0.2),
                    0 0 40px rgba(255,255,255,0.2),
                    0 0 20px rgba(255,255,255,0.2),
                    0 4px 8px rgba(0,0,0,0.9)
                  `,
                }}
              >
                FARZAM
              </h1>
              {/* Enhanced glow effect */}
              <div 
                className="absolute inset-0 blur-3xl opacity-20 bg-white"
                style={{ transform: 'scale(1.5)' }}
              />
            </motion.div>

            {/* Subtitle with 3D animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.3,
                ease: [0.19, 1, 0.22, 1]
              }}
              className="relative"
            >
              <motion.p 
                className="text-2xl font-light text-white text-center max-w-2xl px-4 mb-4 tracking-wider"
                style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.9)',
                }}
              >
                UI/UX Developer & Digital Artist
              </motion.p>
            </motion.div>
            
            {/* Enhanced Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
              }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex flex-col items-center"
              >
                <motion.p 
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white text-base mb-3 font-semibold tracking-[0.3em] uppercase"
                >
                  Scroll
                </motion.p>
                <div className="relative h-12">
                  {/* Main dot with enhanced glow */}
                  <motion.div
                    className="absolute left-1/2 w-4 h-4 -translate-x-1/2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9)] z-20"
                    animate={{ 
                      y: [0, 36, 0],
                      opacity: [0.8, 1, 0.8],
                      boxShadow: [
                        '0 0 20px rgba(255,255,255,0.9)',
                        '0 0 30px rgba(255,255,255,0.9)',
                        '0 0 20px rgba(255,255,255,0.9)'
                      ]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                  {/* Enhanced glow trail */}
                  <motion.div
                    className="absolute left-1/2 w-4 h-4 -translate-x-1/2 bg-white rounded-full blur-xl z-10"
                    animate={{ 
                      y: [0, 36, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                  {/* Additional glow effects */}
                  <motion.div
                    className="absolute left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1.5 bg-white rounded-full blur-xl opacity-20"
                    animate={{ 
                      y: [0, 36, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Interaction Hint */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-4 right-4 text-white/50 text-sm font-light"
          >
            <div className="flex items-center gap-2">
              <span className="tracking-wide">Click and drag to explore</span>
              <motion.svg
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>

        {/* Portfolio Sections */}
        <div className="bg-black min-h-screen">
          <section 
            className="min-h-screen flex items-center justify-center py-20 px-8"
          >
            <div className="max-w-5xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-16 text-center">Featured Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* CryptoInfluencers Project Card */}
                <a 
                  href="https://superb-axolotl-6810db.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-[#0f1521] backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    {/* Project Preview */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1521]/60 z-10 
                      group-hover:opacity-0 transition-opacity duration-300"/>
                    <img 
                      src="/crypto-preview.png" 
                      alt="CryptoInfluencers Website Preview"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0f1521]/90 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6"
                    >
                      <p className="text-lg font-medium mb-2">CryptoInfluencers</p>
                      <p className="text-sm text-gray-300 text-center mb-4">
                        Explore insights from leading voices in the cryptocurrency space. A modern platform built with React and Next.js.
                      </p>
                      <span className="text-sm text-white/70 flex items-center gap-2 hover:text-white transition-colors">
                        Visit Site
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">CryptoInfluencers</h3>
                    <p className="text-gray-400">
                      A modern platform for discovering and exploring cryptocurrency influencers and their insights
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">React</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Tailwind CSS</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Dark UI</span>
                    </div>
                  </div>
                </a>

                {/* TradingView Project Card */}
                <a 
                  href="https://www.tradingview.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl bg-[#131722] backdrop-blur-sm hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    {/* Project Preview */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131722]/60 z-10 
                      group-hover:opacity-0 transition-opacity duration-300"/>
                    <img 
                      src="/trading-preview.png"
                      alt="TradingView Website Preview"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#131722]/90 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6"
                    >
                      <p className="text-lg font-medium mb-2">TradingView Clone</p>
                      <p className="text-sm text-gray-300 text-center mb-4">
                        A modern recreation of TradingView's interface with real-time market data and advanced charting capabilities
                      </p>
                      <span className="text-sm text-white/70 flex items-center gap-2 hover:text-white transition-colors">
                        Visit Site
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">TradingView Clone</h3>
                    <p className="text-gray-400">
                      Advanced financial platform with real-time market data visualization and analysis tools
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">React</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">TypeScript</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">WebGL</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Real-time Data</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section 
            className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900"
          >
            <div className="max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate developer focused on creating immersive digital experiences.
                With expertise in web development and 3D graphics, I bring creative visions to life.
              </p>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}

