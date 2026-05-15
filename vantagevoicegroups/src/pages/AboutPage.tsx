import { Target, Eye, Heart, Shield, Award, TrendingUp, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const values = [
    { icon: Heart, title: 'Integrity', desc: 'We uphold the highest standards of honesty and ethical conduct.', color: 'rose' },
    { icon: Award, title: 'Excellence', desc: 'We strive for quality in every deliverable and interaction.', color: 'amber' },
    { icon: TrendingUp, title: 'Innovation', desc: 'We embrace new technologies and methodologies.', color: 'emerald' },
    { icon: Shield, title: 'Accountability', desc: 'We take responsibility for our work and its impact.', color: 'blue' },
    { icon: Target, title: 'Impact', desc: 'We focus on insights that drive meaningful change.', color: 'purple' },
  ];

  const leadership = [
    {
      name: 'Dr Ian Njeru',
      title: 'Director and Co-Founder',
      credentials: 'MBCHB, MSc, MBA',
      bio: 'A seasoned medical epidemiologist, global health security expert and data scientist with over 20 years of experience in public health, analytics, evaluation, and health systems research. Extensive expertise in public health, survey design, MEL systems, and translating complex data into policy and program insights.',
      initials: 'IN',
      expertise: ['Public Health', 'Data Science', 'Health Systems'],
    },
    {
      name: 'Titus Kolongei',
      title: 'Director and Co-Founder',
      credentials: 'BSc HIM, MPH',
      bio: 'A Monitoring & Evaluation and Health Information System Specialist with more than 20 years experience. Extensive expertise in M&E, Health Management Information Systems (HMIS), digital health platforms, disease surveillance, and multi-agency coordination—supporting Ministries of Health, WHO, UN agencies, donors, and implementing partners.',
      initials: 'TK',
      expertise: ['M&E Systems', 'Digital Health', 'HMIS'],
    },
  ];



  return (
    <div className="bg-white">
      {/* Hero Section - Enhanced with gradient and pattern */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Who We Are</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              About Vantage Voices
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We are an African evidence and decision intelligence firm turning complex data into clarity.
            </p>
          </div>
        </div>
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
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
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-deep-blue p-5 rounded-xl shadow-xl hidden md:block transform rotate-3 group-hover:rotate-0 transition">
                <p className="font-bold text-lg">Kenya-based</p>
                <p className="text-sm opacity-250">Serving all of Africa</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">
                  Vantage Voices Group Ltd
                </h2>
                <div className="w-15 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6"></div>
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
             
            </div>
          </div>
        </div>
      </section>

    


      {/* Mission & Vision - Redesigned with gradient backgrounds */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-5">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-deep-blue leading-relaxed">
                To generate credible, timely, and actionable insights for better decision-making, empowering
                organizations to navigate complexity with confidence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-5">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-deep-blue leading-relaxed">
                To be a leading African research and insights firm shaping policy, markets, and development
                through evidence-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Enhanced with better cards and animations */}
      <section className="py-20 bg-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-amber-500">The principles that guide our work and define our culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-6 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex p-3 bg-${value.color}-50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`h-7 w-7 text-${value.color}-600`} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-800">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       


      {/* Leadership - Redesigned with modern layout */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">Meet the experienced leaders driving our vision forward.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6">
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {leader.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      <p className="text-amber-400 font-semibold text-sm mt-1">{leader.title}</p>
                      <p className="text-slate-400 text-xs mt-1">{leader.credentials}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        <ChevronRight className="w-3 h-3 text-amber-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default AboutPage;