import { redirect } from 'next/navigation'

export default function PricingPage() {
  const tiers = [
    {
      name: 'starter',
      emoji: '🎯',
      title: 'Starter',
      price: 29,
      description: 'For founders who want one business running.',
      features: [
        '1 concurrent forge',
        '50 AI actions/day',
        '1 deployed business',
        'Nightly P&L report',
        'Email support',
      ],
      stripePriceId: 'price_starter_monthly',
      cta: 'Start Starter',
    },
    {
      name: 'pro',
      emoji: '🚀',
      title: 'Pro',
      price: 79,
      description: 'For operators who want serious leverage.',
      popular: true,
      features: [
        '3 concurrent forges',
        '200 AI actions/day',
        '5 deployed businesses',
        'Nightly P&L report',
        '10% rev share — you keep 90%',
        'Custom domains',
        'Priority build queue',
        'Slack support',
      ],
      stripePriceId: 'price_pro_monthly',
      cta: 'Start Pro',
    },
    {
      name: 'chaos',
      emoji: '💀',
      title: 'Chaos',
      price: 199,
      description: 'For builders who want maximum chaos.',
      features: [
        'Unlimited forges',
        'Unlimited AI actions',
        'Unlimited businesses',
        'Nightly P&L + on-chain proofs',
        '0% rev share — everything is yours',
        'Custom domains + white-label',
        '"Controlled chaos" mode',
        'Dedicated agent workers',
        'Priority compute',
      ],
      stripePriceId: 'price_chaos_monthly',
      cta: 'Start Chaos',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-purple-500/20 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🦞</span>
            <span className="font-bold text-lg">Claw<span className="text-purple-400">Forge</span></span>
          </a>
          <a href="/#waitlist" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium transition-colors">
            Get early access
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-black mb-4">Pick your chaos level</h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            All plans include the full build stack — research, code, deploy, and 24/7 ops.
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white/5 border rounded-2xl p-6 ${
                tier.popular
                  ? 'border-purple-500/40 bg-purple-600/5'
                  : 'border-purple-500/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="text-3xl mb-3">{tier.emoji}</div>
              <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black">${tier.price}</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-gray-500 text-xs mb-6">{tier.description}</p>

              <ul className="space-y-2.5 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`/api/payment/checkout?plan=${tier.name}`}
                className={`block text-center px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                  tier.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'border border-purple-500/40 hover:bg-purple-500/10 text-purple-300'
                }`}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Questions? Email us at <span className="text-purple-400">hello@clawforge.ai</span>
          </p>
        </div>
      </div>
    </div>
  )
}