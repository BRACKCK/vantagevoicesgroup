import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Clock, ExternalLink } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  sources?: { label: string; url: string }[];
}

const InsightsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Role of Public Opinion Data in Policy Making in Africa',
      excerpt: 'How citizen feedback is shaping more responsive and effective governance across the continent.',
      category: 'Public Opinion',
      author: 'Dr Ian Njeru',
      date: 'March 15, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      sources: [
        {
          label: 'Democracy in Africa – 25 years of public opinion in Africa',
          url: 'https://democracyinafrica.org/what-do-we-know-about-the-public-opinion-in-africa-after-25-years/',
        },
        {
          label: 'Mo Ibrahim Foundation – Public Opinions on Governance in Africa (Feb 2025)',
          url: 'https://mo.ibrahim.foundation/sites/default/files/2025-02/public-opinions-on-governance-in-africa.pdf',
        },
        {
          label: 'MSW Management Journal – Influencing Change: Public Opinion in South African Policy (2026)',
          url: 'https://mswmanagementj.com/home/article/view/899',
        },
      ],
    },
    {
      id: 2,
      title: 'Why Market Research is Critical for Business Growth in Emerging Markets',
      excerpt: 'Understanding local consumer behavior is the key to successful market entry and expansion.',
      category: 'Market Research',
      author: 'Titus Kolongei',
      date: 'February 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      sources: [
        {
          label: 'IOA – 4 Reasons Why Primary Market Research is Essential in Africa',
          url: 'https://www.inonafrica.com/2023/07/07/4-reasons-why-it-is-so-important-for-businesses-interested-in-africa-to-conduct-primary-market-research/',
        },
        {
          label: 'IOA – How Market Research in Africa Can Help Companies Expand Globally',
          url: 'https://www.inonafrica.com/2023/11/20/how-market-research-in-africa-can-help-companies-expand-globally/',
        },
        {
          label: 'Fieldwork Africa – 6 Powerful Reasons to Conduct Market Research in Africa Now (2026)',
          url: 'https://fieldworkafrica.com/insights/6-powerful-reasons-to-conduct-market-research-in-africa-now',
        },
        {
          label: 'Kadence – The Allure and Challenges of Emerging Markets',
          url: 'https://kadence.com/knowledge/the-allure-and-challenges-of-emerging-markets-2/',
        },
      ],
    },
    {
      id: 3,
      title: 'Data & Competitive Intelligence: Frameworks for Strategic Edge',
      excerpt: "Leveraging Porter's Five Forces alongside modern data tools to map competitive landscapes and sharpen strategy.",
      category: 'Market Research',
      author: 'Dr Ian Njeru',
      date: 'February 10, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      sources: [
        {
          label: "Number Analytics – Harnessing Porter's Five Forces for Gaining Strategic Edge",
          url: 'https://www.numberanalytics.com/blog/porters-five-forces-strategy',
        },
        {
          label: "Business News Daily – Analyzing the Competition with Porter's Five Forces",
          url: 'https://www.businessnewsdaily.com/5446-porters-five-forces.html',
        },
        {
          label: "Wiley – Using Porter's Five Forces Analysis to Drive Strategy (2024)",
          url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/joe.22250',
        },
        {
          label: "MTLC – Revising Porter's Five Forces in the Age of AI (2025)",
          url: 'https://www.mtlc.co/revising-porters-five-forces-analysis-in-the-age-of-ai/',
        },
      ],
    },
    {
      id: 4,
      title: 'From Data to Decisions: The Future of MEL in Africa',
      excerpt: 'How monitoring, evaluation, and learning is evolving with new technologies and adaptive management approaches.',
      category: 'MEL',
      author: 'Titus Kolongei',
      date: 'January 20, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      sources: [
        {
          label: 'Indepth Research Institute – From Data to Decisions: Is Africa Truly Using Health Data? (Apr 2026)',
          url: 'https://indepthresearch.org/blog/from-data-to-decisions-is-africa-truly-using-health-data-to-strengthen-health-security/',
        },
        {
          label: 'Impact Africa Consulting – Trends in MEL: Adaptive Management (Apr 2026)',
          url: 'https://www.impactingafrica.com/trends-in-mel-from-reporting-function-to-a-central-component-of-adaptive-management-and-strategic-learning/',
        },
        {
          label: 'SGCI Africa – MEL Framework for STI in Africa (2025)',
          url: 'https://sgciafrica.org/resource/monitoring-evaluation-and-learning-mel-framework-for-sti-in-africa/',
        },
      ],
    },
    {
      id: 5,
      title: 'Data-Driven Market Research & Trend Analysis',
      excerpt: 'Predictive analytics, machine learning, and real-time market intelligence are reshaping how organisations read shifting markets.',
      category: 'Technology',
      author: 'Dr Ian Njeru',
      date: 'January 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      sources: [
        {
          label: 'Number Analytics – 7 Data-Driven Strategies in Market Research for 2024',
          url: 'https://www.numberanalytics.com/blog/7-data-driven-strategies-market-research-2024',
        },
        {
          label: 'Greenbook – The Role of Data Analytics in Shaping Market Trends (Dec 2024)',
          url: 'https://www.greenbook.org/insights/data-science/the-role-of-data-analytics-in-shaping-market-trends',
        },
        {
          label: 'Confluent – Data-Driven Business Agility: Adapting to Market Changes in Real Time',
          url: 'https://www.confluent.io/blog/data-driven-business-agility/',
        },
      ],
    },
    {
      id: 6,
      title: 'Measuring Social Impact: Beyond the Numbers',
      excerpt: 'Qualitative approaches to understanding the real-world effects of development programs.',
      category: 'MEL',
      author: 'Titus Kolongei',
      date: 'December 12, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const categories = ['All', 'Public Opinion', 'Market Research', 'Health Research', 'MEL', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <section className="bg-deep-blue text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Latest thinking, research findings, and industry perspectives from our team.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    activeCategory === category
                      ? 'bg-orange text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover group flex flex-col">
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-orange uppercase tracking-wide bg-orange/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs ml-auto">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-deep-blue mb-2 line-clamp-2 group-hover:text-orange transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Read More / Sources toggle */}
                    {post.sources && post.sources.length > 0 ? (
                      <div className="mt-3">
                        <button
                          onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
                          className="text-orange font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {expandedId === post.id ? 'Hide Sources' : 'Read More'}
                          <ArrowRight className={`h-4 w-4 transition-transform ${expandedId === post.id ? 'rotate-90' : ''}`} />
                        </button>

                        {expandedId === post.id && (
                          <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-100">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Further Reading</p>
                            <ul className="space-y-2">
                              {post.sources.map((src, i) => (
                                <li key={i}>
                                  <a
                                    href={src.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-2 text-xs text-deep-blue hover:text-orange transition group/link"
                                  >
                                    <ExternalLink className="h-3 w-3 mt-0.5 flex-shrink-0 text-orange group-hover/link:scale-110 transition-transform" />
                                    <span className="leading-relaxed">{src.label}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <button className="mt-3 text-orange font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;