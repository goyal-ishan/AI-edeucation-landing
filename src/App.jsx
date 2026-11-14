import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Bot,
  Rocket,
  Users,
  Calendar,
  Clock,
  Award,
  ChevronDown,
  X,
  Download,
  Terminal,
  Zap,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

const TRACKS = {
  students: {
    badge: 'For College Students & Fresh Graduates',
    headline: 'Graduate with a live portfolio of AI agents & automations—not just theory.',
    subtext:
      'Build 4 real-world capstone projects in 4 weekends using Cursor, n8n, and LLM APIs to stand out in product, tech, and growth internships.',
    outcomes: [
      'Ship 4 deployed GitHub & live web projects for your resume',
      'Automate research, outreach, and data workflows without heavy coding',
      '1-on-1 portfolio & LinkedIn positioning review before placement season',
    ],
  },
  professionals: {
    badge: 'For Young Professionals (0–5 Yrs Exp)',
    headline: 'Automate 10+ hours of repetitive weekly work and become the AI builder on your team.',
    subtext:
      'Learn practical AI workflows, internal tool building, and no-code automation tailored for operations, marketing, product, and analyst roles.',
    outcomes: [
      'Build custom internal copilots & SOP knowledge bases in days',
      'Connect Slack, Sheets, CRM, and LLMs using n8n & Make',
      'Lead AI adoption initiatives at work with measurable ROI',
    ],
  },
};

const CURRICULUM = [
  {
    week: 'Week 01',
    title: 'Applied LLMs, Structured Prompting & Rapid Prototyping',
    project: 'Capstone 1: Custom Domain Research & Writing Copilot',
    tools: ['Claude', 'ChatGPT', 'Cursor'],
    points: [
      'System prompt architecture, JSON structured outputs, and hallucination guardrails',
      'Turning raw ideas into working web apps and landing pages in hours using AI IDEs',
    ],
  },
  {
    week: 'Week 02',
    title: 'No-Code AI Workflows & Business Automation',
    project: 'Capstone 2: Automated Lead-Capture & Content Pipeline',
    tools: ['n8n', 'Make.com', 'Google Sheets'],
    points: [
      'Webhooks, API triggers, conditional routing, and automated CRM/email sequences',
      'Building zero-touch social content and reporting engines',
    ],
  },
  {
    week: 'Week 03',
    title: 'AI Agents, RAG Knowledge Bases & Tool Calling',
    project: 'Capstone 3: Custom SOP & Document Q&A Assistant',
    tools: ['Vector DBs', 'OpenAI API', 'Lovable'],
    points: [
      'Connecting LLMs to private PDFs, Notion docs, and live databases',
      'Multi-step agentic workflows with human-in-the-loop approval',
    ],
  },
  {
    week: 'Week 04',
    title: 'Deployment, Evaluation & Career/Portfolio Launch',
    project: 'Capstone 4: Live Demo Day & Deployed Capstone Product',
    tools: ['Vercel', 'GitHub', 'Notion'],
    points: [
      'Cost optimization, latency tuning, and shipping public prototypes',
      'Live founder feedback session + verified completion certificate',
    ],
  },
];

const FAQS = [
  {
    q: 'Do I need prior coding experience to join?',
    a: 'No. We start with visual workflow builders (n8n, Make) and AI-assisted builders (Lovable, Cursor). If you can use spreadsheets and write clear instructions, you can build every project.',
  },
  {
    q: 'How are the sessions structured around college or work hours?',
    a: 'All live build workshops happen on Saturdays and Sundays (2 hours/day), supported by bite-sized weekday async labs and a dedicated Discord/WhatsApp mentor channel.',
  },
  {
    q: 'What happens after I submit my registration or syllabus request?',
    a: 'You immediately receive the 2026 AI Stack Starter Kit & detailed syllabus via email/WhatsApp, followed by a quick 10-minute counsellor fit check if you apply for the live cohort.',
  },
];

export default function App() {
  const [audience, setAudience] = useState('students');
  const [openFaq, setOpenFaq] = useState(0);

  // Lead capture modals: 'enroll' | 'syllabus' | 'enquiry' | null
  const [modalMode, setModalMode] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Student',
    goal: '',
  });
  const [submissionReceipt, setSubmissionReceipt] = useState(null);

  const openLeadModal = (mode) => {
    setSubmissionReceipt(null);
    setModalMode(mode);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setSubmissionReceipt({
      mode: modalMode,
      name: formState.name || 'Builder',
      email: formState.email,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
  };

  const currentTrack = TRACKS[audience];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">
              Build<span className="text-indigo-600">AI</span> Lab
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#outcomes" className="hover:text-indigo-600 transition">
              Outcomes
            </a>
            <a href="#curriculum" className="hover:text-indigo-600 transition">
              4-Week Syllabus
            </a>
            <a href="#journey" className="hover:text-indigo-600 transition">
              How It Works
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => openLeadModal('syllabus')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700 transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              Free Syllabus
            </button>
            <button
              onClick={() => openLeadModal('enroll')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-14 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.22),_transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Next Live Weekend Cohort Starts Nov 28 • Limited to 40 Builders
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Master Practical AI Workflows &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              Ship Real Products in 4 Weeks.
            </span>
          </h1>

          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A hands-on, project-first AI & digital skills accelerator for students and young professionals. Stop watching passive tutorials—build working agents, automations, and web apps every weekend.
          </p>

          {/* Dual High-Intent + Low-Friction CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => openLeadModal('enroll')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition cursor-pointer"
            >
              Reserve Your Cohort Seat
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openLeadModal('syllabus')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm sm:text-base transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-300" />
              Get Free Syllabus & AI Tool Kit
            </button>
          </div>

          {/* Tool Stack Strip */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
              Tools & Ecosystems You Will Build With
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {['ChatGPT & Claude', 'n8n Automations', 'Make.com', 'Cursor AI', 'Lovable', 'Vercel & APIs'].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-200"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Audience Track Switcher */}
      <section id="outcomes" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Tailored Learning Paths
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900">
              Built for where you are in your career
            </h2>

            {/* Toggle Pills */}
            <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/60">
              <button
                onClick={() => setAudience('students')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  audience === 'students'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Students & Grads
              </button>
              <button
                onClick={() => setAudience('professionals')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  audience === 'professionals'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Young Professionals
              </button>
            </div>
          </div>

          {/* Dynamic Track Card */}
          <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                {currentTrack.badge}
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentTrack.headline}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentTrack.subtext}
              </p>

              <ul className="mt-5 space-y-3">
                {currentTrack.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openLeadModal('enroll')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition cursor-pointer"
                >
                  Apply for This Track
                </button>
                <button
                  onClick={() => openLeadModal('enquiry')}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition cursor-pointer"
                >
                  Talk to a Program Mentor
                </button>
              </div>
            </div>

            {/* Key Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                <Rocket className="w-6 h-6 text-indigo-600 mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">4 Live</div>
                <div className="text-xs text-slate-600 mt-0.5">Deployed Capstone Apps</div>
              </div>
              <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100">
                <Clock className="w-6 h-6 text-cyan-700 mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">4 Hrs/Wk</div>
                <div className="text-xs text-slate-600 mt-0.5">Weekend Live Build Labs</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <Users className="w-6 h-6 text-emerald-600 mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">1:15</div>
                <div className="text-xs text-slate-600 mt-0.5">Mentor-to-Builder Ratio</div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                <Award className="w-6 h-6 text-amber-600 mb-2" />
                <div className="text-2xl font-extrabold text-slate-900">Verified</div>
                <div className="text-xs text-slate-600 mt-0.5">Portfolio & Certificate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Practical Curriculum */}
      <section id="curriculum" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Hands-On Roadmap
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold text-slate-900">
              What you will build week by week
            </h2>
          </div>
          <button
            onClick={() => openLeadModal('syllabus')}
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Full PDF Brochure
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CURRICULUM.map((mod) => (
            <div
              key={mod.week}
              className="rounded-2xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-md transition flex flex-col justify-between bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs font-bold">
                    {mod.week}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">{mod.title}</h3>

                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {mod.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Bot className="w-4 h-4 shrink-0" />
                <span>{mod.project}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration & Automated Lead-Capture Journey Visualization */}
      <section id="journey" className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Frictionless Onboarding
            </span>
            <h2 className="mt-1 text-2xl sm:text-4xl font-extrabold">
              How enrollment works in 3 simple steps
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300">
              Start with zero commitment—explore the free starter kit first or apply directly for a cohort seat.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 font-extrabold flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-lg">Instant Lead Magnet Delivery</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Drop your email to unlock the 4-week syllabus & Notion AI Prompt Vault instantly—automated via webhook to your inbox & WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 font-extrabold flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-lg">2-Minute Application & Fit Check</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Share your current background and learning goals so we place you in the right peer pod (Student or Working Professional).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 font-extrabold flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-lg">Seat Confirmation & Pre-Work</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Complete enrollment to receive calendar invites, Discord community access, and your tool setup checklist before Day 1.
              </p>
            </div>
          </div>

          {/* Inline Lead Capture Strip */}
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold">
                Ready to build your first AI workflow this weekend?
              </h3>
              <p className="mt-1 text-indigo-100 text-sm">
                Early-bird scholarship pricing (₹2,999 instead of ₹5,999) closes Sunday at 11:59 PM.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => openLeadModal('enroll')}
                className="px-6 py-3 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-sm shadow-sm transition cursor-pointer"
              >
                Enroll Now — ₹2,999
              </button>
              <button
                onClick={() => openLeadModal('enquiry')}
                className="px-5 py-3 rounded-xl bg-indigo-800/60 hover:bg-indigo-800 text-white border border-indigo-400/30 font-semibold text-sm transition cursor-pointer"
              >
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-14 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8 px-4 sm:px-6 text-xs text-slate-500 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <Terminal className="w-4 h-4 text-indigo-600" />
            <span>BuildAI Lab — Practical AI & Digital Skills Cohort</span>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => openLeadModal('syllabus')}
              className="hover:text-indigo-600 font-medium cursor-pointer"
            >
              Download Syllabus
            </button>
            <button
              onClick={() => openLeadModal('enquiry')}
              className="hover:text-indigo-600 font-medium cursor-pointer"
            >
              Book 1:1 Enquiry
            </button>
            <button
              onClick={() => openLeadModal('enroll')}
              className="hover:text-indigo-600 font-medium cursor-pointer"
            >
              Cohort Registration
            </button>
          </div>
        </div>
      </footer>

      {/* Multi-Mode Lead Capture & Registration Modal */}
      {modalMode && (
        <div className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              onClick={() => setModalMode(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submissionReceipt ? (
              <div className="text-center py-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {submissionReceipt.mode === 'syllabus'
                    ? 'Syllabus & AI Kit Sent!'
                    : submissionReceipt.mode === 'enquiry'
                    ? 'Callback Request Logged!'
                    : 'Application Received!'}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Check <strong>{submissionReceipt.email}</strong> for instant access links and next steps.
                </p>

                {/* Simulated Automation Webhook Log (Demonstrates Funnel Architecture) */}
                <div className="mt-5 p-3.5 rounded-2xl bg-slate-900 text-left text-[11px] font-mono text-slate-300 space-y-1">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5" />
                    Automated Lead Pipeline Triggered ({submissionReceipt.timestamp})
                  </div>
                  <div>1. Webhook → n8n Lead Router [200 OK]</div>
                  <div>2. CRM & Google Sheets row synced ({formState.role})</div>
                  <div>3. Automated Welcome Email + WhatsApp PDF queued</div>
                </div>

                <button
                  onClick={() => setModalMode(null)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm cursor-pointer"
                >
                  Back to Page
                </button>
              </div>
            ) : (
              <>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {modalMode === 'syllabus' ? (
                    <>
                      <Download className="w-3.5 h-3.5" /> Free Starter Kit
                    </>
                  ) : modalMode === 'enquiry' ? (
                    <>
                      <MessageSquare className="w-3.5 h-3.5" /> 1:1 Counsellor Call
                    </>
                  ) : (
                    <>
                      <Calendar className="w-3.5 h-3.5" /> Nov 28 Cohort Registration
                    </>
                  )}
                </span>

                <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                  {modalMode === 'syllabus'
                    ? 'Get the 4-Week Syllabus & Prompt Vault'
                    : modalMode === 'enquiry'
                    ? 'Have questions? Request a quick callback'
                    : 'Reserve your seat in BuildAI Lab'}
                </h3>

                <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Ishan Goyal"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  {modalMode !== 'syllabus' && (
                    <>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            WhatsApp Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Current Profile
                          </label>
                          <select
                            value={formState.role}
                            onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-indigo-500"
                          >
                            <option>Student</option>
                            <option>Fresh Graduate</option>
                            <option>Working Professional</option>
                            <option>Founder / Freelancer</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          What do you want to build first? (Optional)
                        </label>
                        <input
                          type="text"
                          value={formState.goal}
                          onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                          placeholder="e.g., Automated content workflow or AI support agent"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition cursor-pointer"
                  >
                    {modalMode === 'syllabus'
                      ? 'Send Me the Free PDF & Kit'
                      : modalMode === 'enquiry'
                      ? 'Schedule My Callback'
                      : 'Complete Cohort Application'}
                  </button>

                  <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    Zero spam. Instant automated delivery.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}