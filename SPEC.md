# ClawForge — Spec Document
*Created: 2026-04-11 | Status: MVP LIVE*

## What is ClawForge?
**"Drop an idea. Wake up to a live business."**
An autonomous AI startup factory powered by OpenClaw + MiniMax Max. ClawForge takes a business idea → researches → builds → deploys → operates 24/7 without human intervention.

**Live URL:** https://clawforge-pink.vercel.app (aliased to clawforge.ai once DNS propagates)

---

## Product Architecture

### Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Landing page + waitlist signup | ✅ Live |
| `/pricing` | Pricing tiers (Starter/Pro/Chaos) | ✅ Live |
| `/forge` | Subscriber dashboard — view active builds | ✅ Live |
| `/api/waitlist` | Waitlist signup handler | ✅ Live |

### Tech Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind v4
- **Deploy:** Vercel (auto-deploy on push to main)
- **AI:** OpenClaw orchestration + MiniMax Max plan (15K requests/5hr window)
- **Database:** `/tmp/clawforge-waitlist.csv` (MVP) → upgrade to Supabase/Neon
- **Payment:** Stripe (planned — not wired yet)

### Design
- Dark theme with purple primary (#a855f7) + cyan accent (#22d3ee)
- Space Mono for code/numbers, Inter for body
- Glow effects on key text
- Custom purple scrollbar

---

## Pricing Tiers

| Tier | Price | Concurrency | AI Actions | Deploys | Rev Share | Notes |
|------|-------|-------------|------------|---------|-----------|-------|
| Starter | $29/mo | 1 forge | 50/day | 1 | None | Email support |
| Pro | $79/mo | 3 forges | 200/day | 5 | 10% (you keep 90%) | Custom domains, priority queue, Slack |
| Chaos | $199/mo | Unlimited | Unlimited | Unlimited | 0% — all yours | White-label, "controlled chaos" mode, dedicated workers |

---

## Forging Pipeline (5 Phases)

```
Phase 1: Research    → Scrape competitors, analyze market, find gaps
Phase 2: Plan        → Tech stack, features, MVP scope, deploy targets
Phase 3: Build      → Scaffold project, write code, implement features
Phase 4: Deploy      → Push to GitHub, deploy to Vercel/Railway/Render
Phase 5: Ops         → Nightly P&L report, monitoring, automation
```

---

## Forge Status Flow
```
idle → research → planning → building → deploying → live
                                           ↓
                                       paused / failed
```

---

## What's Wired
- ✅ Landing page (responsive, mobile-first)
- ✅ How it works section (5 steps)
- ✅ What it builds section (6 categories)
- ✅ Pricing page with 3 tiers
- ✅ Waitlist signup (saves to `/tmp/clawforge-waitlist.csv`)
- ✅ Forge dashboard page (stub — needs real auth + backend)
- ✅ `forge-run.js` — skeleton orchestrator script

---

## What's Missing (MVP+)

### Critical
- [ ] User auth (subscribe to access /forge dashboard)
- [ ] Stripe payment flow (checkout → subscribe → webhook → activate)
- [ ] Real forge orchestration (spawn OpenClaw subagents per user idea)
- [ ] Actual build pipeline (currently stubbed)

### Important
- [ ] Per-user data isolation (each subscriber's forge has own workspace)
- [ ] Real-time progress updates (forge dashboard refreshes with real status)
- [ ] Email notifications (forge complete, P&L daily summary)
- [ ] Custom domain support (users can point their own domain)

### Nice to Have
- [ ] "Built by ClawForge" badge / share card for each business
- [ ] AgentVerse mode (all user agents trade services with each other)
- [ ] "Digital ghost" legacy mode (user uploads life → AI runs it forever)

---

## Business Model

### Revenue
- **Subscription** — $29/$79/$199 per month per user
- **Rev share** — ClawForge takes 10% of revenue from businesses built (Pro only)
- **White-label** — Chaos tier includes full white-label for agencies

### Unit Economics
- **Cost per user** — ~$0 (we're running OpenClaw anyway, MiniMax Max is fixed cost)
- **Margins** — Extremely high. Marginal cost per additional subscriber is ~$0.
- **Breakeven** — Just cover the subscription costs (3 Pro users = $237/mo covers a MiniMax Max tier)

### Viral Loop
Every successful forge posts "Built by ClawForge in X minutes" on X with receipts → free marketing → more signups

---

## Competition
- **Buildable** — No-code AI builder, limited autonomy
- **Mindsay** — Customer service bots, no business building
- **Durable** — Single-page AI website builder, limited scope
- **26n** — AI business builder, unclear on autonomy level

**Differentiation:** Full-stack autonomy. ClawForge doesn't just make a landing page — it researches, builds, deploys, and operates a complete business 24/7 with no human intervention after the initial idea drop.

---

## Open Questions
1. Legal liability on financial products (trading bots, crypto)?
2. What's the right onboarding flow — credit card first or idea submission first?
3. Should we limit business types or allow anything?
4. Multi-tenant isolation — Docker pods per user or shared pool?

---

## Repository
https://github.com/hodlmybeer21/clawforge