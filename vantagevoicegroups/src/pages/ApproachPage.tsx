import { Target, PenTool, Database, BarChart, FileText, Smartphone, LineChart, MapPin, Activity, Zap } from 'lucide-react';


const ApproachPage: React.FC = () => {
  const steps = [
    { 
      icon: Target, 
      title: 'Understand the Problem', 
      desc: 'We work closely with clients to define objectives and research questions, ensuring full alignment before design begins.',
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500'
    },
    { 
      icon: PenTool, 
      title: 'Design the Study', 
      desc: 'We develop robust methodologies using quantitative and qualitative approaches tailored to your context.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Database, 
      title: 'Collect High-Quality Data', 
      desc: 'Using digital tools for accuracy, efficiency, and real-time monitoring of data collection progress.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      icon: BarChart, 
      title: 'Analyze & Interpret', 
      desc: 'Advanced analytics to uncover meaningful patterns, correlations, and actionable insights.',
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-500'
    },
    { 
      icon: FileText, 
      title: 'Deliver Actionable Insights', 
      desc: 'Clear reporting, interactive dashboards, and concrete recommendations that inform decisions.',
      color: 'rose',
      gradient: 'from-rose-500 to-pink-500'
    },
  ];

  const tools = [
    { icon: Smartphone, name: 'Digital Data Collection', tools: 'ODK, Kobo, SurveyCTO', desc: 'Mobile-first data collection with real-time validation' },
    { icon: Activity, name: 'Health Information Systems', tools: 'DHIS2 analytics', desc: 'Comprehensive health data management and reporting' },
    { icon: LineChart, name: 'Statistical Analysis', tools: 'R, STATA, Python, SPSS', desc: 'Advanced modeling and predictive analytics' },
    { icon: MapPin, name: 'Spatial Analysis', tools: 'ArcGIS, QGIS', desc: 'Geospatial mapping and location intelligence' },
  ];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">Our Methodology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            Our Approach
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A rigorous, client-centered methodology that consistently delivers high-quality, 
            actionable insights for better decision-making.
          </p>
        </div>
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Process Steps - Enhanced Timeline */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Deliver Excellence</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">
              A proven 5-step framework that ensures quality, transparency, and impact at every stage
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 rounded-full"></div>
            
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center group">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {idx + 1}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.gradient} bg-opacity-10 mb-4 group-hover:scale-105 transition-transform`}>
                    <step.icon className={`h-8 w-8 text-${step.color}-500`} />
                  </div>
                  
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className={`h-5 w-5 text-${step.color}-500`} />
                      <h3 className="font-bold text-slate-800">{step.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Capabilities - Enhanced */}
      <section className="py-14 md:py-20 bg-amber-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Tech Stack
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tools & Capabilities</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">
              Leveraging industry-leading technologies to deliver precise, reliable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <tool.icon className="h-7 w-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">{tool.name}</h3>
                <p className="text-amber-600 text-sm font-medium mb-2">{tool.tools}</p>
                <p className="text-slate-500 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default ApproachPage;