import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  Gamepad,
  Brain,
  Palette
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-brown-300 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">KodeLabz</h3>
            <p className="text-gray-400 mb-6">
              Transforming ideas into exceptional digital experiences through innovative development and creative solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@kodelabz.io" className="hover:text-accent transition-colors">
                  info@kodelabz.io
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+16265237776" className="hover:text-accent transition-colors">
                  +1 (626) 523-7776
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent" />
                <span>1111 6th Ave, Suite 550 #301211<br />San Diego, CA 92101<br />United States</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Service Specifications', path: '/service-specs' },
                { name: 'Projects', path: '/projects' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Website Development', icon: <Code2 className="w-4 h-4" /> },
                { name: 'Mobile Development', icon: <Smartphone className="w-4 h-4" /> },
                { name: 'Software Solutions', icon: <Database className="w-4 h-4" /> },
                { name: 'Game Development', icon: <Gamepad className="w-4 h-4" /> },
                { name: 'AI Development', icon: <Brain className="w-4 h-4" /> },
                { name: 'Brand Development', icon: <Palette className="w-4 h-4" /> }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to="/services" 
                    className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                  >
                    {service.icon}
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-deep-brown-200 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-4 mt-6">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
                { icon: <Instagram className="w-5 h-5" />, href: '#' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { icon: <Github className="w-5 h-5" />, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-deep-brown-200 p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} KodeLabz. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;