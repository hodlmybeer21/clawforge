'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [idea, setIdea] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setWaitlistStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, idea: idea || 'Not specified' })
      })
      if (res.ok) {
        setWaitlistStatus('success')
        setEmail('')
        setIdea('')
      } else {
        setWaitlistStatus('error')
      }
    } catch {
      setWaitlistStatus('error')
    }
  }

  const examples = [
    { emoji: '🤖', title: 'AI SaaS Tools', desc: 'Content bots, data scrapers, automation platforms — built and deployed live' },
    { emoji: '🛒', title: 'E-commerce Brands', desc: 'Dropshipping stores, print-on-demand brands, digital product shops' },
    { emoji: '📱', title: 'Creator Businesses', desc: 'Patreon alternatives, membership sites, digital courses, communities' },
    { emoji: '📊', title: 'Data Products', desc: 'Dashboards, APIs, research tools, trading bots, analytics platforms' },
    { emoji: '🎨', title: 'Content Brands', desc: 'Automated TikTok/YouTube channels, newsletters, meme pages, merch stores' },
    { emoji: '🌐', title: 'Web3 Ventures', desc: 'DAO tools, NFT projects, token ecosystems, on-chain applications' },
  ]

  const steps = [
    { n: '01', title: 'Drop your idea', desc: 'Tell ClawForge what you want to build. Be specific or vague — it figures out the rest.' },
    { n: '02', title: 'Research fires', desc: 'ClawForge scrapes competitors, analyzes markets, finds gaps, and builds a business plan.' },
    { n: '03', title: 'Build begins', desc: 'Full stack writes itself — frontend, backend, bots, smart contracts, APIs. Deployed to the cloud.' },
    { n: '04', title: 'Ops run 24/7', desc: 'Marketing, customer support, content, transactions — everything runs while you sleep.' },
    { n: '05', title: 'Wake up to revenue', desc: 'Nightly P&L report hits your phone. Real money, on-chain proof, in your pocket.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
            <span>🦞</span>
            <span>Autonomous startup factory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Drop an idea.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 glow-purple">Wake up to a business.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            ClawForge is an autonomous AI agent that researches, builds, deploys, and runs your business 24/7 — while you sleep. Powered by OpenClaw + MiniMax Max.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-8">
            <a href="#waitlist" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all text-center">
              Start building now
            </a>
            <a href="#how" className="px-8 py-4 border border-purple-500/40 hover:border-purple-500 rounded-xl font-semibold transition-all text-center text-purple-300">
              See how it works
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            First 100 users get lifetime 50% off • Already launched 0 businesses overnight
          </p>
        </div>
      </section>

      {/* What it builds */}
      <section id="built" className="py-20 px-4 sm:px-6 border-t border-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3 text-center">What it builds</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">Anything. Seriously.</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {examples.map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white/5 border border-purple-500/10 rounded-xl p-5 hover:border-purple-500/30 transition-all">
                <span className="text-3xl mb-3 block">{emoji}</span>
                <h4 className="font-bold text-base mb-2">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mono text-purple-400 text-xs sm:text-sm">
              Every business ClawForge builds posts "built by ClawForge in X minutes" — with receipts.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-4 sm:px-6 bg-purple-900/10 border-t border-purple-500/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3 text-center">How it works</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center">From idea to revenue in 5 steps</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="relative bg-white/5 border border-purple-500/15 rounded-xl p-6">
                <div className="mono text-4xl font-bold text-purple-500/40 mb-4">{n}</div>
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 border-t border-purple-500/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3 text-center">Pricing</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Pick your chaos level</h3>
          <p className="text-gray-400 text-center mb-12 text-sm sm:text-base">All plans include autonomous build + deploy + 24/7 ops.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-lg mb-1">Starter</h4>
              <div className="text-3xl font-black mb-1">$29<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <p className="text-gray-500 text-xs mb-6">For founders who want one business running.</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-8">
                <li>✅ 1 concurrent forge</li>
                <li>✅ 50 AI actions/day</li>
                <li>✅ 1 deployed business</li>
                <li>✅ Nightly P&L report</li>
                <li>❌ Rev share</li>
                <li>❌ Custom domains</li>
              </ul>
              <a href="#waitlist" className="block text-center px-4 py-3 border border-purple-500/40 rounded-xl hover:bg-purple-500/10 transition-colors text-purple-300 text-sm font-medium">
                Join waitlist
              </a>
            </div>

            <div className="bg-purple-600/10 border border-purple-500/40 rounded-2xl p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">POPULAR</div>
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-bold text-lg mb-1">Pro</h4>
              <div className="text-3xl font-black mb-1">$79<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <p className="text-gray-500 text-xs mb-6">For operators who want serious leverage.</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-8">
                <li>✅ 3 concurrent forges</li>
                <li>✅ 200 AI actions/day</li>
                <li>✅ 5 deployed businesses</li>
                <li>✅ Nightly P&L report</li>
                <li>✅ 10% rev share (you keep 90%)</li>
                <li>✅ Custom domains</li>
                <li>✅ Priority build queue</li>
              </ul>
              <a href="#waitlist" className="block text-center px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors text-white text-sm font-bold">
                Join waitlist
              </a>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
              <div className="text-3xl mb-2">💀</div>
              <h4 className="font-bold text-lg mb-1">Chaos</h4>
              <div className="text-3xl font-black mb-1">$199<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <p className="text-gray-500 text-xs mb-6">For builders who want maximum chaos.</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-8">
                <li>✅ Unlimited forges</li>
                <li>✅ Unlimited AI actions</li>
                <li>✅ Unlimited businesses</li>
                <li>✅ Nightly P&L + on-chain proofs</li>
                <li>✅ 0% rev share — it's yours</li>
                <li>✅ Custom domains + white-label</li>
                <li>✅ "Controlled chaos" mode: AI randomly pivots business, trolls competitors, starts meme wars</li>
                <li>✅ Priority compute + dedicated agent workers</li>
              </ul>
              <a href="#waitlist" className="block text-center px-4 py-3 border border-cyan-500/40 rounded-xl hover:bg-cyan-500/10 transition-colors text-cyan-300 text-sm font-medium">
                Join waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 bg-purple-900/10 border-t border-purple-500/10">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-4xl mb-4 block">🦞</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Get early access</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
            First 100 users get lifetime 50% off. Describe your dream business — we'll prioritize builders with real ideas.
          </p>

          {waitlistStatus === 'success' ? (
            <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <span className="text-2xl">🚀</span>
              <p className="text-purple-300 font-semibold mt-2">You're on the list.</p>
              <p className="text-gray-400 text-sm mt-1">We'll be in touch soon. Get ready to build.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="px-4 py-3.5 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <textarea
                value={idea}
                onChange={e => setIdea(e.target.value)}
                placeholder="What business do you want ClawForge to build? (optional)"
                rows={3}
                className="px-4 py-3.5 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={waitlistStatus === 'loading'}
                className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-bold rounded-xl transition-colors"
              >
                {waitlistStatus === 'loading' ? '...' : 'Claim my spot →'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}