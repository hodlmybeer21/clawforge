'use client'

import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-purple-500/20 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🦞</span>
          <span className="font-bold text-lg tracking-tight">
            Claw<span className="text-purple-400">Forge</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#how" className="hover:text-purple-400 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          <a href="#built" className="hover:text-purple-400 transition-colors">Built by ClawForge</a>
          <a href="#waitlist" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors">
            Get early access
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <div className="w-5 h-0.5 bg-white mb-1.5" />
          <div className="w-5 h-0.5 bg-white mb-1.5" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-purple-500/20 bg-black/95 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-300">
          <a href="#how" onClick={() => setOpen(false)} className="hover:text-purple-400 py-1">How it works</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-purple-400 py-1">Pricing</a>
          <a href="#built" onClick={() => setOpen(false)} className="hover:text-purple-400 py-1">Built by ClawForge</a>
          <a href="#waitlist" onClick={() => setOpen(false)} className="px-4 py-2.5 bg-purple-600 rounded-lg text-white text-center mt-1">
            Get early access
          </a>
        </div>
      )}
    </nav>
  )
}