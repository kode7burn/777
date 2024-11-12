import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Database, Gamepad, Brain, Palette, Briefcase, Film, Layers } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Website Development',
    description: 'Custom websites built with modern technologies and best practices'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Software Solutions',
    description: 'Scalable software solutions for business needs'
  },
  {
    icon: <Gamepad className="w-6 h-6" />,
    title: 'Game Development',
    description: 'Engaging gaming experiences across platforms'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Development',
    description: 'Intelligent solutions powered by machine learning'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Brand Development',
    description: 'Comprehensive branding and identity design'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Marketing',
    description: 'Strategic digital marketing campaigns'
  },
  {
    icon: <Film className="w-6 h-6" />,
    title: 'Motion Graphics',
    description: 'Stunning animations and visual effects'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Level Design',
    description: 'Immersive gaming environments and experiences'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-deep-brown-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="h-full"
            >
              <Link to="/services" className="block h-full">
                <div className="group h-full bg-deep-brown-200/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="relative z-10">
                    <div className="text-accent mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;