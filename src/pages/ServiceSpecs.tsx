import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Smartphone,
  Database,
  Gamepad,
  Brain,
  Palette,
  CheckCircle2,
  Clock,
  Shield,
  HeartHandshake,
  Zap,
  MessageSquare
} from 'lucide-react';

const serviceSpecs = [
  {
    id: 'web-development',
    icon: <Code2 className="w-12 h-12" />,
    title: 'Website Development',
    description: 'End-to-end web development solutions with modern technologies and best practices.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization'
    ],
    technical: {
      frontend: ['React', 'Vue.js', 'Next.js', 'TypeScript'],
      backend: ['Node.js', 'Python', 'Java', 'PHP'],
      database: ['PostgreSQL', 'MongoDB', 'MySQL'],
      tools: ['Docker', 'Git', 'AWS/Azure']
    },
    pricing: [
      {
        tier: 'Basic',
        price: '$5,000 - $10,000',
        features: [
          'Up to 5 pages',
          'Responsive Design',
          'Basic SEO',
          'Contact Form',
          '2 Rounds of Revisions'
        ]
      },
      {
        tier: 'Professional',
        price: '$10,000 - $25,000',
        features: [
          'Up to 15 pages',
          'Advanced SEO',
          'CMS Integration',
          'Payment Gateway',
          'Custom Animations',
          'Analytics Integration'
        ]
      },
      {
        tier: 'Enterprise',
        price: 'Custom Quote',
        features: [
          'Unlimited Pages',
          'Custom Features',
          'Full E-commerce',
          'API Integration',
          'Advanced Security',
          'Load Balancing'
        ]
      }
    ],
    sla: {
      uptime: '99.9%',
      response: '< 2 hours',
      resolution: '< 24 hours',
      maintenance: 'Monthly'
    },
    support: {
      channels: ['Email', 'Phone', 'Video Call', 'Ticket System'],
      hours: '24/7 for critical issues',
      included: '30 days post-launch'
    }
  },
  {
    id: 'mobile-development',
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-Platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technical: {
      platforms: ['iOS', 'Android', 'Cross-platform'],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
      backend: ['Node.js', 'Firebase', 'AWS Mobile'],
      tools: ['Xcode', 'Android Studio', 'TestFlight']
    },
    pricing: [
      {
        tier: 'MVP',
        price: '$15,000 - $25,000',
        features: [
          'Basic Features',
          'Single Platform',
          'Standard UI/UX',
          'Basic Analytics',
          'Essential Security'
        ]
      },
      {
        tier: 'Advanced',
        price: '$25,000 - $50,000',
        features: [
          'Multiple Platforms',
          'Complex Features',
          'Custom UI/UX',
          'Advanced Analytics',
          'Push Notifications'
        ]
      },
      {
        tier: 'Enterprise',
        price: '$50,000+',
        features: [
          'Full Feature Set',
          'All Platforms',
          'Premium UI/UX',
          'Advanced Security',
          'Custom Integration'
        ]
      }
    ],
    sla: {
      uptime: '99.9%',
      response: '< 1 hour',
      resolution: '< 12 hours',
      maintenance: 'Weekly'
    },
    support: {
      channels: ['Email', 'Phone', 'Video Call', 'Dedicated Manager'],
      hours: '24/7',
      included: '90 days post-launch'
    }
  },
  // Additional services follow the same structure...
];

const ServiceSpecs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-deep-brown-100 to-deep-brown-300">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service <span className="text-accent">Specifications</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Detailed information about our services, features, and pricing
            </p>
          </motion.div>

          <div className="space-y-24">
            {serviceSpecs.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              >
                {/* Service Header */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-accent">{service.icon}</div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-300">{service.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Features & Technical */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4">Technical Stack</h3>
                      {Object.entries(service.technical).map(([category, items]) => (
                        <div key={category} className="mb-4">
                          <h4 className="text-lg font-semibold text-accent capitalize mb-2">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                              <span
                                key={item}
                                className="bg-deep-brown-300/50 px-3 py-1 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Support */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">Pricing Tiers</h3>
                      <div className="space-y-4">
                        {service.pricing.map((tier) => (
                          <div
                            key={tier.tier}
                            className="bg-deep-brown-300/50 p-4 rounded-lg"
                          >
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="text-lg font-semibold">{tier.tier}</h4>
                              <span className="text-accent">{tier.price}</span>
                            </div>
                            <ul className="space-y-2">
                              {tier.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-accent" />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">SLA</h3>
                        <div className="space-y-3">
                          {Object.entries(service.sla).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-accent" />
                              <div>
                                <span className="text-gray-400 capitalize">{key}: </span>
                                <span className="text-white">{value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-4">Support</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-accent" />
                            <div>
                              <span className="text-gray-400">Channels: </span>
                              <span className="text-white">
                                {service.support.channels.join(', ')}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-accent" />
                            <div>
                              <span className="text-gray-400">Hours: </span>
                              <span className="text-white">{service.support.hours}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-accent" />
                            <div>
                              <span className="text-gray-400">Support Included: </span>
                              <span className="text-white">{service.support.included}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSpecs;