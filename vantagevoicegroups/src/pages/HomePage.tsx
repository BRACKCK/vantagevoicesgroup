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
    {/* ── HERO SECTION ── */}
<section className="relative bg-white overflow-hidden">
  {/* Background Effects - Subtle gray pattern instead of dark */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-white" />
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
  </div>

  {/* Main Grid - 55:45 ratio */}
  <div className="relative grid lg:grid-cols-[55%_45%]">
    
    {/* LEFT SIDE IMAGE */}
    <div className="relative h-[32vh] sm:h-[40vh] lg:h-[90vh] max-h-[800px]">
      <img
        src="/llog2.jpeg"
        alt="Vantage Voices Group"
        className="w-full h-full object-cover"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/5" />

    </div>

    {/* GOLDEN DIVIDING LINE (desktop) */}
    <div className="absolute left-[55%] top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-400 hidden lg:block" />

    {/* RIGHT SIDE CONTENT */}
    <div className="flex items-center justify-center px-5 py-8 sm:py-10 lg:py-16 lg:px-12">
      <div className="w-full max-w-xl space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Tracking Voices.
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-600 bg-clip-text text-transparent">
              Delivering Insights.
            </span>
          </h1>

          <p className="mt-3 text-slate-600 text-lg leading-relaxed">
            Vantage Voices Group Ltd helps organizations understand people,
            markets, and systems through credible data, analytics,
            and evidence-driven insights.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-amber-50/80 backdrop-blur-md border border-amber-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-7 h-5 text-amber-600" />
            Why Choose Us
          </h2>

          <div className="space-y-4">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 group"
              >
                <div className="p-1.5 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition shrink-0">
                  <item.icon className="h-3.5 w-3.5 text-amber-600" />
                </div>

                <div>
                  <p className="text-slate-800 font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {item.desc}
                  </p>
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
      <section className="py-14 md:py-20 bg-gradient-to-b from-amber-500 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
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

      {/* Clients Section */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-3">{client.icon}</div>
                <p className="font-semibold text-deep-blue">{client.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Ready to Transform Your Data into Decisions?
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-6 md:mb-8">
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