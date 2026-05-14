import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const InsightsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

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
    },
    {
      id: 3,
      title: 'Using Data to Strengthen Health Systems',
      excerpt: 'Leveraging routine health data for better decision-making and improved patient outcomes.',
      category: 'Health Research',
      author: 'Dr Ian Njeru',
      date: 'February 10, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'From Data to Decisions: The Future of MEL in Africa',
      excerpt: 'How monitoring, evaluation, and learning is evolving with new technologies and approaches.',
      category: 'MEL',
      author: 'Titus Kolongei',
      date: 'January 20, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Digital Transformation in African Research',
      excerpt: 'How mobile technology and AI are revolutionizing data collection across the continent.',
      category: 'Technology',
      author: 'Dr Ian Njeru',
      date: 'January 5, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
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
                    <button className="mt-3 text-orange font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-deep-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest insights and research findings delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <button className="bg-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;

