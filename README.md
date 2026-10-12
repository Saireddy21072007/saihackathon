# Pramana: proof over percentage

A college-verified, skill-first career platform. Students build a skill passport backed by
mentor-verified projects and startup internships. Startups find hire-ready students. The
placement cell sees real outcomes. CGPA is optional, hidden by default, and never used in matching.

Prototype built for GENESIS'26 (Amrita Vishwa Vidyapeetham, Coimbatore). All students, startups,
projects and numbers inside the app are fictional demo data.

## Run it

Needs Node.js 22.13 or newer (uses the built-in SQLite driver).

```bash
npm install
npm run dev
```

Open http://localhost:3000. The database is created and seeded on first run at
`~/.pramana/pramana.db` (outside the project so OneDrive does not lock it).

For the smoothest demo, use the production build instead:

```bash
npm run demo
```

### Optional: live AI

Copy `.env.local.example` to `.env.local` and set `ANTHROPIC_API_KEY`. Without a key the app
still works: the internship builder and match summaries use a rule-based fallback, and the
screen says which one produced the text.

## The 3-minute demo

A "Guided demo" bar sits at the bottom right of every app screen. Each step has **Open**
(go to the right screen as the right role) and **Do it** (complete the step automatically).
Do steps by hand to show they are real, or click Do it when short on time.

1. Mentor verifies Arjun's second project (his match score goes 78 to 93 because of this)
2. ChainNova types one sentence and gets a full internship listing
3. Placement cell approves the listing
4. Arjun sees it ranked first, opens "Why this match", applies
5. ChainNova shortlists and selects him
6. Weekly milestones and feedback (12 weeks filled in one click; logged as simulated)
7. ChainNova issues a signed certificate and marks him Full-Time Potential
8. Open the certificate, scan the QR code with a phone, then show the placement dashboard

To start over: open the step list in the demo bar and click **Reset demo**.

### QR code on a phone

Put the laptop and phone on the same network (a phone hotspot works). The QR code points at
the laptop's network address automatically. If it does not open, Windows Firewall is blocking
Node on port 3000: allow it when Windows asks, or show the verify page on the laptop.


