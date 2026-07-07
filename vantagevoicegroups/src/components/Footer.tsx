import { Link } from 'react-router-dom';
import { BarChart2, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-blue text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BarChart2 className="h-7 w-7 text-orange" />
              <span className="font-heading font-bold text-lg">
                Vantage <span className="text-orange">Voices</span> Group
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              An African evidence and decision intelligence firm transforming data into actionable insights.
            </p>
            <div className="flex space-x-3">
              {['LinkedIn', 'Twitter', 'Facebook'].map((platform) => (
                <a key={platform} href="#" title={platform}
                  className="px-3 py-1.5 bg-white/10 rounded text-xs font-medium hover:bg-orange transition">
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['What We Do', '/what-we-do'],
                ['Our Approach', '/approach'],
                ['Insights', '/insights'],
                ['Contact Us', '/contact'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 hover:text-orange transition text-sm flex items-center gap-1">
                    <span className="w-1 h-1 bg-orange rounded-full flex-shrink-0"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Market Research', 'Public Opinion Polling', 'MEL', 'Data Analytics', 'Health & Social Research'].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0"></span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-base mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange flex-shrink-0" />
                <a href="mailto:info@vantagevoicesgroup.org" className="text-gray-400 hover:text-orange transition text-sm break-all">
                  voicetrackgroup@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>+254 727 764 164</div>
                  <div>+254 721 767 750</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vantage Voices Group Ltd. All rights reserved.</p>
          <p className="text-xs italic">Tracking Voices. Delivering Insights.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
