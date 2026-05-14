import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, BarChart, Database, Heart,
  Shield, Globe, Lightbulb, ArrowRight, CheckCircle,
  Target, Award, ChevronRight, Zap, Phone, Mail,
  MapPin, Clock
} from 'lucide-react';

const HomePage: React.FC = () => {

  const whyChoose = [
    { icon: Shield, title: 'Evidence-driven methodologies', desc: 'Data-backed approaches you can trust', color: 'blue' },
    { icon: Globe, title: 'Strong African context expertise', desc: 'Deep understanding of local markets', color: 'emerald' },
    { icon: BarChart, title: 'Advanced analytics & modeling', desc: 'Cutting-edge analytical techniques', color: 'purple' },
    { icon: Lightbulb, title: 'Actionable insights', desc: 'Clear recommendations for decision-making', color: 'amber' },
  ];

  const clients = [
    { category: 'Governments', icon: '🏛️', desc: 'Policy & Strategy' },
    { category: 'NGOs & Development Partners', icon: '🌍', desc: 'Impact Programs' },
    { category: 'Private Sector', icon: '💼', desc: 'Market Intelligence' },
    { category: 'Research Institutions', icon: '🔬', desc: 'Academic Partners' },
  ];

  const services = [
    { icon: TrendingUp, title: 'Market Research & Insights', desc: 'Consumer insights, segmentation, brand studies', gradient: 'from-rose-500 to-orange-500' },
    { icon: Users, title: 'Opinion Polls', desc: 'Citizen surveys, election polling, social research', gradient: 'from-blue-500 to-cyan-500' },
    { icon: BarChart, title: 'Monitoring, Evaluation & Learning', desc: 'Baseline, midline, endline surveys, impact evaluations', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Database, title: 'Data Analytics', desc: 'Statistical modeling, dashboard development', gradient: 'from-purple-500 to-indigo-500' },
    { icon: Heart, title: 'Health & Social Research', desc: 'Epidemiological studies, implementation research', gradient: 'from-pink-500 to-rose-500' },
  ];

  const stats = [
    { value: '20+', label: 'Years Experience', icon: Award, trend: '+150%' },
    { value: '15+', label: 'Countries', icon: Globe, trend: 'Across Africa' },
    { value: '200+', label: 'Projects', icon: Target, trend: 'Successfully' },
    { value: '50+', label: 'Clients', icon: Users, trend: 'Trusted Partners' },
  ];

  const testimonials = [
    { quote: "Vantage Voices delivered exceptional insights that transformed our strategy. Their team is professional, timely, and deeply knowledgeable.", name: "Sarah Mwangi", title: "Program Director, UNDP" },
    { quote: "The most reliable research partner we've worked with in East Africa. Data quality and analytical rigor are unmatched.", name: "Dr. James Omondi", title: "Chief Economist, Ministry of Health" },
  ];

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HERO: Modern gradient with overlay ── */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-20 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              {/* Logo Area */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Vantage Voices Group</div>
                  <div className="text-amber-400 text-xs">Since 2004</div>
                </div>
              </div>

              {/* Tagline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Tracking Voices.
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Delivering Insights.</span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mt-6 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                Vantage Voices Group Ltd is a trusted partner in data collection, analytics, and evaluation.
                We help organizations understand people, markets, and systems through credible, actionable insights.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Get in Touch
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
                <Link to="/what-we-do" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                  View Our Services
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-slate-400 text-sm">Trusted by 50+ organizations</div>
              </div>
            </div>

            {/* RIGHT COLUMN - Why Choose Us + Clients */}
            <div className="space-y-6">
              {/* Why Choose Us Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Why Choose Us
                </h2>
                <div className="grid gap-4">
                  {whyChoose.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group cursor-pointer">
                      <div className={`p-2 bg-${item.color}-500/20 rounded-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-4 w-4 text-amber-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-white">{item.title}</p>
                        <p className="text-slate-300 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clients Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-5">We Work With</h2>
                <div className="grid grid-cols-2 gap-3">
                  {clients.map((client, i) => (
                    <div key={i} className="group flex items-center gap-3 bg-white/5 rounded-xl px-3 py-3 hover:bg-white/10 transition-all cursor-pointer">
                      <span className="text-2xl group-hover:scale-110 transition">{client.icon}</span>
                      <div>
                        <span className="text-white font-medium text-sm">{client.category}</span>
                        <p className="text-slate-400 text-xs">{client.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                  <div className="text-emerald-400 text-xs mt-1">{s.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">Comprehensive research and analytics solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/what-we-do"
                className="group relative overflow-hidden bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Tagline */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['ACCURATE DATA', 'ACTIONABLE INSIGHTS', 'BETTER DECISIONS', 'IMPACTFUL RESULTS'].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-center group">
                  <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition" />
                  <span className="text-slate-600 text-xs font-semibold tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working on data analysis"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-5 rounded-xl shadow-xl hidden md:block transform rotate-3 group-hover:rotate-0 transition">
                <p className="font-bold text-lg">Kenya-based</p>
                <p className="text-sm opacity-90">Serving all of Africa</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
                  Vantage Voices Group Ltd
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6"></div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                An independent research and analytics firm based in Kenya, serving clients across Africa.
                We specialize in generating high-quality data and translating it into insights that drive impact.
              </p>
              <ul className="space-y-3">
                {[
                  'Governments & Ministries - Policy Support',
                  'International NGOs & Donors - Program Evaluation',
                  'Private Sector companies - Market Intelligence'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all duration-300 group">
                Learn more about us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION (New) ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="text-amber-500 text-4xl mb-4">"</div>
                <p className="text-slate-600 leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonial.name}</p>
                    <p className="text-slate-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Data into Decisions?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Let's collaborate to unlock insights that drive meaningful impact for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get in Touch
                <Phone className="w-4 h-4" />
              </Link>
              <Link to="/what-we-do" className="inline-flex items-center gap-2 border border-white/30 text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300">
                Explore Services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;