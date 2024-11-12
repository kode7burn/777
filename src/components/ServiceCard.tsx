import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
  };
  index: number;
  inView: boolean;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index, inView }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300"
    >
      <div className="text-accent mb-6">
        <Icon className="w-12 h-12" />
      </div>
      <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
      <p className="text-gray-300 mb-6">{service.description}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;