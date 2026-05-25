import { Target, Eye, Heart, Shield, Award, TrendingUp, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    { icon: Heart, title: 'Integrity', desc: 'We uphold ethical research practices and honesty in all our engagements.', color: 'rose' },
    { icon: Award, title: 'Excellence', desc: 'We strive for quality in every deliverable, from design to actionable insights.', color: 'amber' },
    { icon: TrendingUp, title: 'Innovation', desc: 'We embrace new technologies and methodologies for better solutions.', color: 'emerald' },
    { icon: Shield, title: 'Accountability', desc: 'We take responsibility for our work and its impact on communities.', color: 'blue' },
    { icon: Target, title: 'Impact', desc: 'We focus on insights that drive meaningful change and sustainable development.', color: 'purple' },
  ];


  const leadership = [
    {
      name: 'Dr Ian Njeru',
      title: 'Director and Co-Founder',
      credentials: 'MBCHB, MSc, MBA',
      bio: 'A seasoned medical epidemiologist, global health security expert and data scientist with over 20 years of experience in public health, analytics, evaluation, and health systems research. Extensive expertise in public health, survey design, MEL systems,strategic plans, business plans,marketing plans and translating complex data into policy and program insights.',
      initials: 'IN',
      expertise: ['Public Health', 'Survey Design', 'MEL Systems', 'Strategic Plans', 'Business Plans', 'Marketing Plans', 'Data Science', 'Health Systems'],
    },
    {
      name: 'Titus Kolongei',
      title: 'Director and Co-Founder',
      credentials: '',
      bio: 'Titus Kolongei is innovative and passionate about developing and supporting projects that drive measurable impact, strengthen systems, and improve business and operational processes. He is particularly interested in data-driven innovations, digital transformation, and practical solutions that enhance efficiency, decision-making, service delivery, and organizational performance across humanitarian, public health, and development sectors.',
      initials: 'TK',
      expertise: ['Data-Driven Innovation', 'Digital Transformation', 'Operational Excellence'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Who We Are - Full Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">Vantage Voices Group Ltd</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Vantage Voices Group Ltd is an independent research, analytics and strategy firm based in Kenya, serving clients across Africa as a trusted partner in data collection, analytics, evaluation and strategy formulation. We help organizations understand people, markets, and systems through credible and actionable insights.
              </p>
              <p>
                We specialize in generating high-quality data through rigorous scientific research approaches, evidence-based methodologies, and ethical research practices, translating complex information into actionable insights that drive informed decision-making, programme improvement, policy development, and sustainable impact.
              </p>
              <p>
                Our work is grounded in strong research design, hypothesis-driven inquiry, mixed-methods analysis, and robust quality assurance processes that ensure reliability, validity, and integrity of findings.
              </p>
              <p>
                Our expertise spans advanced data collection, statistical analysis, monitoring and evaluation, health information systems, market and social research, operational research, programme performance assessment and strategy formulation.
              </p>
              <p>
                We transform complex data into practical insights that support informed decision-making, policy and business plans development, programme improvement, innovation, and sustainable impact for governments, development partners, NGOs, humanitarian agencies, and private sector organizations across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-5">
                <Target className="h-8 w-8 text-[#F7931E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To generate credible, timely, and actionable insights for better decision-making, empowering organizations to navigate complexity with confidence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-5">
                <Eye className="h-8 w-8 text-[#F7931E]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To be a leading African research and insights firm shaping policy, markets, and development through evidence-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Values Section */}
      <section className="py-20 bg-[#0A2540]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F7931E] mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-[#F7931E] mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300">The principles that guide our work and define our culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
            <div className="w-20 h-1 bg-[#F7931E] mx-auto rounded-full mb-6"></div>
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
                      {leader.credentials && (
                        <p className="text-slate-400 text-xs mt-1">{leader.credentials}</p>
                      )}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's turn your data into decisions.</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Partner with us to transform complex information into actionable insights that drive impact.
          </p>
          <button className="bg-[#F7931E] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;