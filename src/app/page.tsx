"use client";

import { useState } from "react";
import { submitEarlyAccess, submitFeedback } from "./actions";
import { Coiny } from "next/font/google";
const coiny = Coiny({ weight: "400", subsets: ["latin"] });

export default function ZonelyLanding() {
  const [accessEmail, setAccessEmail] = useState("");
  const [feedback, setFeedback] = useState({ name: "", type: "Suggestion", message: "" });
  
  const [accessLoading, setAccessLoading] = useState(false);
  const [accessSubmitted, setAccessSubmitted] = useState(false);
  const [accessError, setAccessError] = useState("");

  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");

  const handleAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAccessLoading(true);
    setAccessError("");

    const res = await submitEarlyAccess(accessEmail);
    setAccessLoading(false);

    if (res.success) {
      setAccessSubmitted(true);
      setAccessEmail("");
    } else {
      setAccessError(res.error || "Submission failed.");
    }
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackLoading(true);
    setFeedbackError("");

    const res = await submitFeedback(feedback);
    setFeedbackLoading(false);

    if (res.success) {
      setFeedbackSubmitted(true);
      setFeedback({ name: "", type: "Suggestion", message: "" });
    } else {
      setFeedbackError(res.error || "Submission failed.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto h-[100px]">
        <div className={`text-3xl tracking-wide text-blue-400 ${coiny.className}`}>Zonely<span className="text-yellow-300">.</span></div>
        <a href="#early-access" className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
          Get Early Access
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 text-center min-h-[calc(100vh-100px)] flex flex-col justify-center items-center pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
          Reclaim Your Focus.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          An empathetic, context-aware mobile application that dynamically transforms your smartphone interface based on your physical environment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <a href="#early-access" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
            Join the Free Early Access
          </a>
          <a href="#features" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition shadow-sm">
            Explore Features
          </a>
        </div>
      </header>

      {/* The Problem Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Smartphones Are Context-Blind</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Today’s mobile platforms treat every environment identically, whether you are in a lecture, a library, a gym, or at home.[cite: 1] This uniformity drives severe digital distraction, reflexive device pickups, and notification fatigue.[cite: 1] Existing solutions like rigid app time locks frequently fail because they impose prohibitive restrictions that are easily overridden.[cite: 1]
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Adaptive, Not Restrictive</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Zonely replaces rigid digital blockades with intelligent adaptation using a custom geofencing engine to automatically transition your phone to fit your surroundings.[cite: 1]
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">📍</div>
            <h3 className="text-xl font-bold mb-3">Dedicated Contextual Modes</h3>
            <p className="text-slate-600">
              Automatically switch between specialized interfaces optimized for Home, School, Library, and Gym environments without manual intervention.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">⏱️</div>
            <h3 className="text-xl font-bold mb-3">Deep Focus Tools</h3>
            <p className="text-slate-600">
              Stay engaged with integrated Pomodoro timers, interactive academic timetables, and ambient focus audio designed for uninterrupted study sessions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">🔕</div>
            <h3 className="text-xl font-bold mb-3">Automated Do Not Disturb</h3>
            <p className="text-slate-600">
              Zonely integrates native Do Not Disturb toggling that activates the moment you enter focus-critical zones like libraries or classrooms.[cite: 1]
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">🔒</div>
            <h3 className="text-xl font-bold mb-3">Absolute Privacy</h3>
            <p className="text-slate-600">
              Your data stays yours. Privacy is preserved through strictly on-device location calculations with zero raw GPS telemetry uploaded to cloud servers.[cite: 1]
            </p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Early Access Form */}
          <div id="early-access" className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/50">
            <h3 className="text-2xl font-bold mb-2">Join Early Access</h3>
            <p className="text-slate-600 mb-8">Sign up today to secure your spot in our exclusive, 100% free Early Access Program.</p>
            
            {accessSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl font-medium border border-green-200">
                You're on the list! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleAccessSubmit} className="space-y-4">
                {accessError && (
                  <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                    {accessError}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={accessEmail}
                    onChange={(e) => setAccessEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={accessLoading}
                  className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {accessLoading ? "Saving..." : "Claim My Early Access"}
                </button>
              </form>
            )}
          </div>

          {/* Feedback Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/50">
            <h3 className="text-2xl font-bold mb-2">Shape the Future</h3>
            <p className="text-slate-600 mb-8">Leave your critiques, suggestions, or questions to help us build a better app.</p>
            
            {feedbackSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl font-medium border border-green-200">
                Thank you for your feedback! It helps us improve Zonely.
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                {feedbackError && (
                  <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                    {feedbackError}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name (Optional)</label>
                    <input 
                      type="text" 
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none transition"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Type</label>
                    <select 
                      value={feedback.type}
                      onChange={(e) => setFeedback({ ...feedback, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none transition bg-white"
                    >
                      <option>Suggestion</option>
                      <option>Critique</option>
                      <option>Question</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={feedback.message}
                    onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none transition resize-none"
                    placeholder="I would love to see a feature that..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={feedbackLoading}
                  className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-slate-800 transition disabled:opacity-50"
                >
                  {feedbackLoading ? "Submitting..." : "Send Feedback"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Zonely. Built with Flutter & Supabase.[cite: 1]</p>
      </footer>
    </div>
  );
}