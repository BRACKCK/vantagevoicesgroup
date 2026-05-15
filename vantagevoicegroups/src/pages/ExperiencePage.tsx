import { Activity, TrendingUp, BarChart, Users, FileText, PieChart} from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const expertiseAreas = [
    { icon: Activity, title: 'Health Programs', desc: 'Large-scale health evaluations, epidemiological studies, and disease surveillance systems' },
    { icon: TrendingUp, title: 'Market Research', desc: 'Consumer insights, brand perception, market entry strategies, and product testing' },
    { icon: BarChart, title: 'MEL Systems', desc: 'Monitoring, evaluation, and learning frameworks for development programs' },
    { icon: Users, title: 'Public Opinion', desc: 'National polls, citizen perception surveys, and governance research' },
    { icon: FileText, title: 'Policy Analysis', desc: 'Evidence-based policy recommendations and impact assessments' },
    { icon: PieChart, title: 'Data Analytics', desc: 'Advanced statistical modeling and interactive dashboard development' },
  ];

  const sampleProjects = [
    {
      title: 'National Health Survey',
      category: 'Health Research',
      description: 'Conducted a comprehensive national health survey across 47 counties, reaching over 10,000 households with a team of trained enumerators.',
      icon: Activity,
    },
    {
      title: 'Election Polling Dashboard',
      category: 'Public Opinion',
      description: 'Developed a real-time election polling dashboard used by major news outlets and civil society organizations.',
      icon: PieChart,
    },
    {
      title: 'Agricultural Market Study',
      category: 'Market Research',
      description: 'Analyzed agricultural value chains to identify market opportunities for smallholder farmers across East Africa.',
      icon: TrendingUp,
    },
    {
      title: 'MEL System Design',
      category: 'Monitoring & Evaluation',
      description: 'Designed and implemented comprehensive MEL systems for a multi-country health program supported by international donors.',
      icon: BarChart,
    },
    {
      title: 'COVID-19 Response Evaluation',
      category: 'Health Research',
      description: 'Evaluated the effectiveness of COVID-19 response measures and vaccination campaigns for a national ministry of health.',
      icon: Activity,
    },
    {
      title: 'Citizen Satisfaction Survey',
      category: 'Public Opinion',
      description: 'Conducted annual citizen satisfaction surveys for multiple county governments, informing service delivery improvements.',
      icon: Users,
    },
  ];

 

  return (
    <div>
      <section className="bg-deep-blue text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Experience</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Two decades of delivering impactful research and insights across Africa.
          </p>
        </div>
      </section>


      {/* Key Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Key Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="inline-flex p-3 bg-orange/10 rounded-full mb-4">
                  <area.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title">Sample Projects</h2>
          <p className="section-subtitle">A selection of our recent work demonstrating impact across sectors</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover group">
                <div className="h-2 bg-orange"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange/10 rounded-lg">
                      <project.icon className="h-5 w-5 text-orange" />
                    </div>
                    <span className="text-xs font-bold text-orange uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm italic">
            * Project names are illustrative. Contact us for detailed case studies.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default ExperiencePage;
