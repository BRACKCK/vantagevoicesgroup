import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, BarChart, Database, Heart,
  Shield, Globe, Lightbulb,
   ChevronRight, Zap, Phone
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
                  
                </div>
              </div>

              {/* Tagline */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Tracking Voices.
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 to-amber-100 bg-clip-text text-transparent">Delivering Insights.</span>
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

       
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="py-24 bg-gradient-to-b from-amber-500 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <div className="w-30 h-1 bg-gradient-to-r from-deep-blue to500 to-orange-500 mx-auto rounded-full mb-6"></div>
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