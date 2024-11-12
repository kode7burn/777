import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface DesignServiceProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    image: string;
  };
  index: number;
  inView: boolean;
}

const DesignServiceCard: React.FC<DesignServiceProps> = ({ service, index, inView }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-12 items-center`}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="text-accent mb-6">
          <Icon className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-300 text-lg mb-8">{service.description}</p>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-4">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Tools & Technologies</h4>
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
        </div>
      </div>
    </motion.div>
  );
};

export default DesignServiceCard;