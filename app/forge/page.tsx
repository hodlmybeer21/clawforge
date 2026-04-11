'use client'

import { useState } from 'react'

export default function ForgePage() {
  const [selectedTier, setSelectedTier] = useState<'starter' | 'pro' | 'chaos' | null>(null)

  const sampleForges = [
    {
      id: 'forge-001',
      idea: 'AI-powered email autoresponder that learns your voice and writes replies for you',
      status: 'building',
      progress: 67,
      step: 'Deploying Next.js frontend to Vercel',
      created: '2 hours ago',
      tier: 'pro',
    },
    {
      id: 'forge-002',
      idea: 'Meme coin trading bot on Solana that auto-posts alpha to Twitter',
      status: 'research',
      progress: 23,
      step: 'Scraping competitor accounts on X',
      created: '18 minutes ago',
      tier: 'chaos',
    },
  ]

  const statusColors = {
    research: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    building: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    live: 'text-green-400 bg-green-400/10 border-green-400/20',
    paused: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
  }

  const statusLabels = {
    research: '🔍 Researching',
    building: '⚙️ Building',
    live: '🚀 Live',
    paused: '⏸ Paused',
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-purple-500/20 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="font-bold text-lg">Claw<span className="text-purple-400">Forge</span></span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">3 active forges</span>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-colors">
              + New Forge
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Active forges */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6">Your Active Forges</h2>
          <div className="space-y-4">
            {sampleForges.map((forge) => (
              <div key={forge.id} className="bg-white/5 border border-purple-500/15 rounded-xl p-5 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${statusColors[forge.status as keyof typeof statusColors]}`}>
                        {statusLabels[forge.status as keyof typeof statusLabels]}
                      </span>
                      <span className="text-xs text-gray-500">{forge.created}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        forge.tier === 'chaos' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
                        forge.tier === 'pro' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' :
                        'bg-gray-500/10 text-gray-400 border border-gray-500/30'
                      }`}>
                        {forge.tier.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 leading-snug">{forge.idea}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs border border-purple-500/30 rounded-lg hover:bg-purple-500/10 text-purple-300 transition-colors">
                      View
                    </button>
                    <button className="px-3 py-1.5 text-xs border border-gray-500/30 rounded-lg hover:bg-gray-500/10 text-gray-400 transition-colors">
                      Pause
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-2">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${forge.progress}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">{forge.step} — {forge.progress}%</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick stats */}
        <section className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/5 border border-purple-500/15 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-purple-400 mb-1">2</div>
            <div className="text-gray-400 text-sm">Active Forges</div>
          </div>
          <div className="bg-white/5 border border-purple-500/15 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-green-400 mb-1">$0</div>
            <div className="text-gray-400 text-sm">Revenue (24h)</div>
          </div>
          <div className="bg-white/5 border border-purple-500/15 rounded-xl p-5 text-center">
            <div className="text-3xl font-black text-cyan-400 mb-1">0</div>
            <div className="text-gray-400 text-sm">Businesses Launched</div>
          </div>
        </section>

        {/* New Forge CTA */}
        <section className="bg-purple-900/10 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Start your next forge</h3>
              <p className="text-gray-400 text-sm">Describe your business idea and ClawForge will research, build, and launch it — 24/7.</p>
            </div>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-bold transition-colors whitespace-nowrap">
              Launch a Forge →
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}