import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Target, 
  Zap, 
  Trophy,
  Shield,
  Network,
  Building2,
  Users,
  FileText,
  Server,
  ShoppingCart,
  BarChart
} from 'lucide-react';

const projects = [
  {
    title: 'Boys & Girls Club of Fontana',
    category: 'Web Development & IT Services',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Comprehensive digital transformation project including website modernization and IT infrastructure upgrade.',
    objectives: [
      'Create a modern, responsive website',
      'Implement secure member management system',
      'Upgrade network infrastructure',
      'Establish IT support protocols'
    ],
    challenges: [
      'Limited technical resources',
      'Need for seamless data migration',
      'Budget constraints',
      'Minimal system downtime requirement'
    ],
    solutions: [
      'Developed custom CMS with user-friendly interface',
      'Implemented phased migration approach',
      'Utilized cost-effective cloud solutions',
      'Executed after-hours infrastructure updates'
    ],
    results: [
      '200% increase in online engagement',
      '45% reduction in IT support tickets',
      '99.9% network uptime achievement',
      'Improved data security compliance'
    ],
    technologies: ['React', 'Node.js', 'Azure', 'Cisco'],
    architecture: {
      frontend: ['React', 'TailwindCSS', 'TypeScript'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      infrastructure: ['Azure', 'Cisco Meraki']
    },
    testimonial: {
      text: "The digital transformation has revolutionized how we operate and serve our community. The new system is both powerful and user-friendly.",
      author: "Maria Rodriguez",
      position: "Executive Director"
    },
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Diligent Security Services',
    category: 'Cyber Security & Web Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Enhanced digital security infrastructure and client service portal implementation.',
    objectives: [
      'Implement advanced security protocols',
      'Create secure client portal',
      'Develop real-time monitoring dashboard',
      'Establish incident response system'
    ],
    challenges: [
      'Complex security requirements',
      'Real-time data processing needs',
      'Multi-tenant architecture',
      'Compliance with security standards'
    ],
    solutions: [
      'Implemented zero-trust security model',
      'Developed scalable microservices architecture',
      'Created custom monitoring solution',
      'Established automated compliance checks'
    ],
    results: [
      'Zero security breaches since implementation',
      '60% faster incident response time',
      '100% compliance achievement',
      '90% client satisfaction rate'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Security Tools'],
    architecture: {
      frontend: ['React', 'Redux', 'Material-UI'],
      backend: ['Node.js', 'Express', 'PostgreSQL'],
      security: ['AWS WAF', 'CloudFlare', 'Auth0']
    },
    testimonial: {
      text: "The new security system has transformed our ability to protect and serve our clients. The dashboard provides unprecedented visibility into our operations.",
      author: "James Chen",
      position: "Security Operations Director"
    },
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: "Young's Precision Tool Grinding",
    category: 'E-commerce & IT Services',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Industry-specific e-commerce platform with integrated inventory management.',
    objectives: [
      'Build specialized e-commerce platform',
      'Implement inventory management system',
      'Automate order processing',
      'Enable real-time stock updates'
    ],
    challenges: [
      'Complex product specifications',
      'Custom pricing requirements',
      'Integration with existing systems',
      'Technical staff training needs'
    ],
    solutions: [
      'Developed custom product configuration system',
      'Created dynamic pricing engine',
      'Built robust API integration layer',
      'Implemented comprehensive training program'
    ],
    results: [
      '150% increase in online sales',
      '70% reduction in order processing time',
      '40% improvement in inventory accuracy',
      '30% decrease in operational costs'
    ],
    technologies: ['React', 'Node.js', 'Shopify', 'ERP'],
    architecture: {
      frontend: ['React', 'Next.js', 'TailwindCSS'],
      backend: ['Node.js', 'GraphQL', 'MongoDB'],
      integration: ['Shopify API', 'Custom ERP']
    },
    testimonial: {
      text: "The e-commerce platform has revolutionized our business. The automated inventory system has saved us countless hours and improved accuracy significantly.",
      author: "Robert Young",
      position: "CEO"
    },
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Riverside County HR',
    category: 'Web Design & SharePoint Development',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Modern employment portal and internal collaboration system implementation.',
    objectives: [
      'Redesign public employment portal',
      'Create internal document system',
      'Implement workflow automation',
      'Enhance user experience'
    ],
    challenges: [
      'Complex approval workflows',
      'Large document repository',
      'Strict security requirements',
      'Multiple stakeholder needs'
    ],
    solutions: [
      'Implemented intuitive UI/UX design',
      'Created custom SharePoint workflows',
      'Developed secure document management',
      'Built role-based access control'
    ],
    results: [
      '50% faster application processing',
      '80% reduction in paper usage',
      '95% user satisfaction rate',
      '40% increase in application completion'
    ],
    technologies: ['React', 'SharePoint', 'Azure AD', '.NET'],
    architecture: {
      frontend: ['React', 'SharePoint Framework', 'Fluent UI'],
      backend: ['SharePoint', '.NET', 'SQL Server'],
      security: ['Azure AD', 'OAuth 2.0']
    },
    testimonial: {
      text: "The new system has transformed our HR processes. What used to take days now takes hours, and our staff loves the intuitive interface.",
      author: "Sarah Martinez",
      position: "HR Director"
    },
    demoUrl: '#',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-black to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case <span className="text-accent">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real success stories showcasing our expertise and impact
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-accent text-sm font-semibold">{project.category}</span>
                    <h2 className="text-3xl font-bold mt-2 mb-4">{project.title}</h2>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        <Globe className="w-5 h-5" /> Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 border border-white/20 hover:border-accent text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        View Details
                      </a>
                    </div>
                  </div>

                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-xl shadow-lg"
                      />
                      <a
                        href={project.demoUrl}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                      >
                        <ExternalLink className="w-12 h-12 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                    className="w-full flex items-center justify-between text-accent hover:text-accent/80 transition-colors"
                  >
                    <span className="font-semibold">View Case Study</span>
                    {expandedProject === project.title ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {expandedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
                            <Target className="w-6 h-6 text-accent" />
                            <h3>Objectives</h3>
                          </div>
                          <ul className="space-y-2">
                            {project.objectives.map((objective) => (
                              <li key={objective} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span>{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
                            <Zap className="w-6 h-6 text-accent" />
                            <h3>Challenges & Solutions</h3>
                          </div>
                          <div className="space-y-4">
                            {project.challenges.map((challenge, i) => (
                              <div key={challenge} className="pl-4 border-l-2 border-accent">
                                <p className="font-semibold text-white">{challenge}</p>
                                <p className="text-gray-400">{project.solutions[i]}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-xl font-semibold mb-4">
                            <Trophy className="w-6 h-6 text-accent" />
                            <h3>Results & Impact</h3>
                          </div>
                          <ul className="space-y-2">
                            {project.results.map((result) => (
                              <li key={result} className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4">Technical Architecture</h3>
                          <div className="space-y-4">
                            {Object.entries(project.architecture).map(([key, values]) => (
                              <div key={key} className="bg-black/40 p-4 rounded-lg">
                                <h4 className="text-accent capitalize mb-2">{key}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {values.map((value) => (
                                    <span
                                      key={value}
                                      className="bg-white/10 px-2 py-1 rounded text-sm"
                                    >
                                      {value}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {project.testimonial && (
                          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                            <p className="text-gray-300 italic mb-4">"{project.testimonial.text}"</p>
                            <div>
                              <p className="font-semibold">{project.testimonial.author}</p>
                              <p className="text-sm text-gray-400">{project.testimonial.position}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;