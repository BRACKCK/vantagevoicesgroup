import React, { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp, Users, BarChart, Database, Heart, CheckCircle2, Zap, Briefcase, ClipboardCheck, LineChart, Microscope } from 'lucide-react';


interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  color: string;
  gradient: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, details, color, gradient, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorMap: Record<string, { light: string; medium: string; dark: string; bg: string }> = {
    orange: { light: 'amber', medium: 'orange', dark: 'orange-600', bg: 'bg-amber-50' },
    blue: { light: 'blue', medium: 'blue', dark: 'blue-600', bg: 'bg-blue-50' },
    green: { light: 'emerald', medium: 'green', dark: 'green-600', bg: 'bg-emerald-50' },
    purple: { light: 'purple', medium: 'purple', dark: 'purple-600', bg: 'bg-purple-50' },
    red: { light: 'rose', medium: 'red', dark: 'red-600', bg: 'bg-rose-50' },
  };

  const colors = colorMap[color] || colorMap.orange;

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl ${isExpanded ? 'scale-[1.01]' : 'hover:-translate-y-1'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Border Effect */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />
      
      <button
        className="w-full text-left focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-5 flex-1">
              {/* Icon with animated background */}
              <div className={`relative ${colors.bg} p-4 rounded-2xl flex-shrink-0 transition-all duration-300 group-hover:shadow-md group-hover:scale-105`}>
                <Icon className={`h-7 w-7 text-${colors.medium}-500`} />
                {/* Decorative dot */}
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-${colors.medium}-400 animate-pulse`} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition">
                  {title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            
            {/* Expand/Collapse Indicator */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? `bg-${colors.medium}-500 text-white shadow-lg` : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
              {isExpanded
                ? <ChevronUp className="h-5 w-5" />
                : <ChevronDown className="h-5 w-5" />}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`border-t ${colors.bg} p-6 md:p-8`}>
          <div className="flex items-center gap-2 mb-5">
            <ClipboardCheck className={`h-5 w-5 text-${colors.medium}-500`} />
            <p className={`text-sm font-semibold text-${colors.medium}-700 uppercase tracking-wide`}>
              Our Services Include:
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-center text-slate-700 text-sm group/item">
                <CheckCircle2 className={`h-4 w-4 text-${colors.medium}-500 mr-3 flex-shrink-0 transition-transform group-hover/item:scale-110`} />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const WhatWeDoPage: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Market Research & Consumer Insights',
      description: 'Understanding markets, consumers, and competitive landscapes for strategic advantage',
      color: 'orange',
      gradient: 'from-amber-500 to-orange-500',
      details: [
        'Market research and consumer insights',
        'Market intelligence and trends analysis',
        'Customer perception and satisfaction surveys',
        'Brand perception studies',
        'Market entry analysis',
        'Product testing and validation',
        'Business process assessements and improvement',
        'Business plans',
        'Market and innovation strageies',
        
      ],
    },
    {
      icon: Users,
      title: 'Public Opinion Polling',
      description: 'Capturing the authentic voice of citizens and stakeholders',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      details: [
        'Citizen perception surveys',
        'Election polling and forecasting',
        'Social and governance research',
        'Rapid opinion tracking',
        'Stakeholder mapping and engagement',
        'Focus group discussions',
      ],
    },
    {
      icon: BarChart,
      title: 'Monitoring, Evaluation & Learning (MEL)',
      description: 'Measuring impact and driving continuous improvement across programs',
      color: 'green',
      gradient: 'from-emerald-500 to-teal-500',
      details: [
        'Baseline, midline, endline surveys',
        'Impact evaluations (RCT, quasi-experimental)',
        'Performance monitoring systems',
        'Learning frameworks',
        'Data analysis and evidence generation',
        'Operational and implementation research',
        'Strategic insights for programme and business growth',
        'Marketing and Evaluaion plans',
     

      ],
    },
    {
      icon: Database,
      title: 'Data Analytics & Visualization',
      description: 'Turning complex data into clear, actionable business intelligence',
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500',
      details: [
        'Statistical modeling (R, STATA, Python)',
        'Interactive dashboard development',
        'Data quality assessments',
        'Evidence synthesis and meta-analysis',
        'Predictive analytics',
        'GIS & spatial analysis',
      ],
    },
    {
      icon: Heart,
      title: 'Health & Social Research',
      description: 'Evidence-based insights for better health and social outcomes',
      color: 'red',
      gradient: 'from-rose-500 to-red-500',
      details: [
        'Epidemiological studies',
        'Routine health data analysis (DHIS2)',
        'Implementation research',
        'Behavioral insights and social determinants',
        'Health systems strengthening',
        'Disease surveillance support',
      ],
    },
  ];

  const approachSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding your unique needs and objectives', icon: Microscope },
    { step: '02', title: 'Design', desc: 'Crafting tailored research methodologies', icon: Briefcase },
    { step: '03', title: 'Execution', desc: 'Rigorous data collection and analysis', icon: LineChart },
    { step: '04', title: 'Delivery', desc: 'Actionable insights and strategic recommendations', icon: ClipboardCheck },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Modern Gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            What We Do
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive research and analytics services designed to transform data into actionable intelligence.
            <span className="block text-amber-400 text-base mt-2">Click any service to explore what's included ↓</span>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">
              We offer end-to-end research and analytics solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - New */}
      <section className="py-24 bg-gradient-to-b from-amber-500 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">
              A systematic, client-focused approach that ensures quality at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="group text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-amber-500 font-bold text-sm mb-2">{step.step}</div>
                <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default WhatWeDoPage;