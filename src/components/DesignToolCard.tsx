import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface DesignToolProps {
  tool: {
    icon: LucideIcon;
    name: string;
    description: string;
  };
  index: number;
  inView: boolean;
}

const DesignToolCard: React.FC<DesignToolProps> = ({ tool, index, inView }) => {
  const Icon = tool.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-deep-brown-200/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300 text-center"
    >
      <div className="text-accent mb-4 flex justify-center">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-semibold mb-2">{tool.name}</h3>
      <p className="text-sm text-gray-400">{tool.description}</p>
    </motion.div>
  );
};

export default DesignToolCard;