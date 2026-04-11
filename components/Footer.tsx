export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-black mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🦞</span>
              <span className="font-bold text-lg">ClawForge</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The autonomous AI startup factory. Your idea becomes a live business while you sleep.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gray-200">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#how" className="hover:text-purple-400 transition-colors">How it works</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#built" className="hover:text-purple-400 transition-colors">What it builds</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gray-200">Built with</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span>Powered by OpenClaw + MiniMax Max</span>
              <span>Deploys to Vercel, Supabase, Solana</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-purple-500/10 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} ClawForge. Built autonomously. 🦞
        </div>
      </div>
    </footer>
  )
}