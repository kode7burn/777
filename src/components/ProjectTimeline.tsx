import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Lightbulb,
  FileSearch,
  Pencil,
  Code2,
  TestTube,
  Rocket,
  Shield,
  Users
} from 'lucide-react';

const timelineSteps = [
  {
    icon: <Lightbulb />,
    title: 'Discovery & Planning',
    duration: '1-2 Weeks',
    description: 'Initial consultation and project scope definition',
    tasks: [
      'Requirements gathering',
      'Market research',
      'Technical feasibility analysis',
      'Project roadmap creation'
    ]
  },
  {
    icon: <FileSearch />,
    title: 'Analysis & Strategy',
    duration: '1-2 Weeks',
    description: 'Deep dive into project requirements and solution architecture',
    tasks: [
      'User journey mapping',
      'Technology stack selection',
      'Architecture planning',
      'Resource allocation'
    ]
  },
  {
    icon: <Pencil />,
    title: 'Design Phase',
    duration: '2-3 Weeks',
    description: 'UI/UX design and prototype development',
    tasks: [
      'Wireframe creation',
      'UI/UX design',
      'Interactive prototyping',
      'Design system development'
    ]
  },
  {
    icon: <Code2 />,
    title: 'Development',
    duration: '4-12 Weeks',
    description: 'Core development and feature implementation',
    tasks: [
      'Frontend development',
      'Backend implementation',
      'Database integration',
      'API development'
    ]
  },
  {
    icon: <TestTube />,
    title: 'Testing & QA',
    duration: '2-3 Weeks',
    description: 'Comprehensive testing and quality assurance',
    tasks: [
      'Unit testing',
      'Integration testing',
      'Performance testing',
      'Security testing'
    ]
  },
  {
    icon: <Rocket />,
    title: 'Deployment',
    duration: '1 Week',
    description: 'Project deployment and launch preparation',
    tasks: [
      'Environment setup',
      'Data migration',
      'Performance optimization',
      'Launch preparation'
    ]
  },
  {
    icon: <Shield />,
    title: 'Maintenance',
    duration: 'Ongoing',
    description: 'Post-launch support and maintenance',
    tasks: [
      'Bug fixes',
      'Performance monitoring',
      'Security updates',
      'Feature enhancements'
    ]
  },
  {
    icon: <Users />,
    title: 'Training & Support',
    duration: 'Ongoing',
    description: 'User training and continuous support',
    tasks: [
      'User documentation',
      'Training sessions',
      '24/7 support',
      'Regular updates'
    ]
  }
];

const ProjectTimeline: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-b from-primary/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="text-accent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our proven development process ensures successful project delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/20" />

          {/* Timeline Steps */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-accent rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg text-accent">
                        {React.cloneElement(step.icon, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <span className="text-sm text-accent">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tasks.map((task) => (
                        <li key={task} className="flex items-center gap-2 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;