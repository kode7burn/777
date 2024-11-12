import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Smartphone,
  Database,
  Gamepad,
  Brain,
  Palette,
  Layout,
  PenTool,
  Sparkles
} from 'lucide-react';

// Split data into separate modules
import { services } from '../data/services';
import { designServices } from '../data/designServices';
import { designTools } from '../data/designTools';

// Lazy load components
const ServiceCard = lazy(() => import('../components/ServiceCard'));
const DesignServiceCard = lazy(() => import('../components/DesignServiceCard'));
const DesignToolCard = lazy(() => import('../components/DesignToolCard'));

const LoadingFallback = () => (
  <div className="animate-pulse bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 h-[400px]" />
);

const ServicesPage: React.FC = () => {
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
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Suspense fallback={<LoadingFallback />}>
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} inView={inView} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-deep-brown-400 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design <span className="text-accent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Creative solutions that bring your vision to life
            </p>
          </motion.div>

          <div className="space-y-24">
            <Suspense fallback={<LoadingFallback />}>
              {designServices.map((service, index) => (
                <DesignServiceCard key={service.title} service={service} index={index} inView={inView} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-deep-brown-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design <span className="text-accent">Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry-standard tools we use to create exceptional designs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <Suspense fallback={<LoadingFallback />}>
              {designTools.map((tool, index) => (
                <DesignToolCard key={tool.name} tool={tool} index={index} inView={inView} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;