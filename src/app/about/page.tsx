import React, { useState } from 'react';
import { Zap, Users, Briefcase, Settings, Brain, Shield, DollarSign, BarChart3, Clock, CheckCircle2, MessageSquare, FileText, Search, Video, Calendar, TrendingUp } from 'lucide-react';

export default function MiroBoard() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      {/* Zoom Controls */}
      <div className="fixed top-6 right-6 bg-white rounded-lg shadow-lg p-2 flex gap-2 z-50">
        <button 
          onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
        >
          −
        </button>
        <span className="px-3 py-1 text-sm font-medium">{Math.round(zoom * 100)}%</span>
        <button 
          onClick={() => setZoom(Math.min(1.5, zoom + 0.1))}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
        >
          +
        </button>
      </div>

      {/* Main Board */}
      <div 
        className="mx-auto transition-transform duration-300"
        style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-3">
            🚀 Flexible Remote Hiring Platform
          </h1>
          <p className="text-xl text-gray-600 font-medium">UX Roadmap & Feature Architecture</p>
        </div>

        {/* User Journey Timeline */}
        <div className="mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg mb-8 shadow-lg">
            👥 User Journey
          </div>
          
          <div className="flex items-center justify-center gap-8 mb-12">
            {[
              { num: 1, label: 'Sign Up', color: 'bg-blue-500', icon: '🎯' },
              { num: 2, label: 'Profile Setup', color: 'bg-purple-500', icon: '👤' },
              { num: 3, label: 'Match & Connect', color: 'bg-pink-500', icon: '🤝' },
              { num: 4, label: 'Collaborate', color: 'bg-orange-500', icon: '⚙️' },
              { num: 5, label: 'Get Paid', color: 'bg-green-500', icon: '💰' },
            ].map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center text-white shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-gray-800">{step.num}</div>
                    <div className="text-sm font-semibold text-gray-600">{step.label}</div>
                  </div>
                </div>
                {idx < 4 && (
                  <div className="text-4xl text-gray-300 font-light">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Employee Module */}
        <div className="mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-bold text-lg mb-8 shadow-lg">
            👨‍💼 Employee Module
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StickyNote color="yellow" icon={<Search className="w-6 h-6" />} title="Job Feed">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Search & filter jobs globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Job title & descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Pricing (hourly/project)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Required skill sets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Location & timezone info</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-0.5">▸</span>
                  <span>Verified employer badges</span>
                </li>
              </ul>
            </StickyNote>

            <StickyNote color="blue" icon={<Users className="w-6 h-6" />} title="Profile Creation">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>Resume upload & AI parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>Portfolio showcase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>Video introduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>Availability calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>Rate settings & pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">▸</span>
                  <span>Social links (LinkedIn, GitHub)</span>
                </li>
              </ul>
            </StickyNote>

            <StickyNote color="green" icon={<MessageSquare className="w-6 h-6" />} title="Communication">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span>"I'm Interested" quick action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span>Built-in chat system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span>Call scheduling tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span>Real-time notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span>Interview coordination</span>
                </li>
              </ul>
            </StickyNote>
          </div>
        </div>

        {/* Employer Module */}
        <div className="mb-20">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold text-lg mb-8 shadow-lg">
            🏢 Employer Module
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LargeCard color="purple" icon={<Search className="w-8 h-8" />} title="Talent Discovery">
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>AI-powered recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Advanced filters & search</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Skill-based matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Price range filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Timezone compatibility check</span>
                </li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">AI Match</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">Smart Filter</span>
              </div>
            </LargeCard>

            <LargeCard color="blue" icon={<FileText className="w-8 h-8" />} title="Job Posting">
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Project details & scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Budget & pricing setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Duration & milestones</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Required skills tagging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>AI-generated descriptions</span>
                </li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">AI Writer</span>
              </div>
            </LargeCard>

            <LargeCard color="green" icon={<Briefcase className="w-8 h-8" />} title="Hiring Process">
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>View intro videos & portfolios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Review candidate profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Terms & agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Token money deposit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Contract finalization</span>
                </li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Secure</span>
              </div>
            </LargeCard>
          </div>
        </div>

        {/* Work Module */}
        <div className="mb-20">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg mb-8 shadow-lg">
            ⚙️ Work & Collaboration Module
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StickyNote color="purple" icon={<BarChart3 className="w-6 h-6" />} title="Project Management">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">▸</span>
                  <span>Project list dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">▸</span>
                  <span>Milestone tracking system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">▸</span>
                  <span>Real-time status updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">▸</span>
                  <span>Task assignments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">▸</span>
                  <span>Deadline management</span>
                </li>
              </ul>
            </StickyNote>

            <StickyNote color="pink" icon={<Clock className="w-6 h-6" />} title="Time Tracking">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-0.5">▸</span>
                  <span>Time log per milestone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-0.5">▸</span>
                  <span>Automatic hours calculation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-0.5">▸</span>
                  <span>Price calculation engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-0.5">▸</span>
                  <span>Activity & productivity reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-0.5">▸</span>
                  <span>Invoice generation</span>
                </li>
              </ul>
            </StickyNote>

            <StickyNote color="orange" icon={<CheckCircle2 className="w-6 h-6" />} title="Milestone Approval">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">▸</span>
                  <span>Status: Not Started / In Progress / Complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">▸</span>
                  <span>Employer review & approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">▸</span>
                  <span>Automatic payment triggers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">▸</span>
                  <span>Feedback & rating system</span>
                </li>
              </ul>
            </StickyNote>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Admin Module */}
          <div>
            <div className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-bold text-lg mb-8 shadow-lg">
              🛡️ Admin Module
            </div>
            
            <div className="space-y-6">
              <LargeCard color="indigo" icon={<Shield className="w-8 h-8" />} title="Verification & KYC">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Profile & identity verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Document validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Payment method verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>AI fraud detection</span>
                  </li>
                </ul>
              </LargeCard>

              <LargeCard color="emerald" icon={<DollarSign className="w-8 h-8" />} title="Payment Management">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Escrow fund management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Auto-release after 5 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Refund & dispute processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-currency support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>10-15% commission tracking</span>
                  </li>
                </ul>
              </LargeCard>

              <LargeCard color="cyan" icon={<TrendingUp className="w-8 h-8" />} title="Analytics Dashboard">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Total hires & revenue metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Country-wise analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>User growth tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span>Dispute management system</span>
                  </li>
                </ul>
              </LargeCard>
            </div>
          </div>

          {/* AI & Tech Stack */}
          <div>
            <div className="inline-block bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-lg font-bold text-lg mb-8 shadow-lg">
              🤖 AI-Powered Features
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-orange-200 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-4 rounded-xl">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Intelligence Layer</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-bold text-orange-900 mb-2">🎯 Smart Matching</div>
                  <div className="text-sm text-orange-700">AI recommends best-fit candidates</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="font-bold text-pink-900 mb-2">📄 Resume Parser</div>
                  <div className="text-sm text-pink-700">Auto-fill from CVs</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-bold text-purple-900 mb-2">💬 AI Chatbot</div>
                  <div className="text-sm text-purple-700">24/7 support</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-bold text-blue-900 mb-2">🛡️ Fraud Detection</div>
                  <div className="text-sm text-blue-700">Spam & sentiment analysis</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-bold text-green-900 mb-2">✍️ Cover Letters</div>
                  <div className="text-sm text-green-700">Auto-generated</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="font-bold text-yellow-900 mb-2">❓ Interview Gen</div>
                  <div className="text-sm text-yellow-700">Question suggestions</div>
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">OpenAI GPT-4</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">ML Models</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">NLP</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 shadow-xl text-white mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Key Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Onboarding Time</span>
                  <span className="text-2xl font-bold text-green-400">&lt; 2 min</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Auto-Payment Release</span>
                  <span className="text-2xl font-bold text-blue-400">5 days</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                  <span className="text-gray-300">Commission Rate</span>
                  <span className="text-2xl font-bold text-purple-400">10-15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Support</span>
                  <span className="text-2xl font-bold text-orange-400">24/7</span>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Security & Compliance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Data Privacy</span>
                  <span className="font-bold text-blue-100">GDPR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">US Compliance</span>
                  <span className="font-bold text-blue-100">CCPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Encryption</span>
                  <span className="font-bold text-blue-100">AES-256</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Protocol</span>
                  <span className="font-bold text-blue-100">TLS 1.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <div className="inline-block bg-gradient-to-