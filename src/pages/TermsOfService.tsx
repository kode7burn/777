import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Scale, Clock, CreditCard, Shield, AlertTriangle } from 'lucide-react';

const TermsOfService: React.FC = () => {
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
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Last updated: March 14, 2024
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Agreement to Terms</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  These Terms of Service constitute a legally binding agreement made between you and KodeLabz concerning your access to and use of our website and services.
                </p>
                <p className="text-gray-300">
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Intellectual Property Rights</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and their selection and arrangement (the "Content") are owned or controlled by us or licensed to us.
                  </p>
                  <p>
                    The Content is protected by copyright and trademark laws and various other intellectual property rights.
                  </p>
                  <p>
                    Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Service Terms</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-2">Project Delivery</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>All projects will be delivered according to agreed-upon timelines</li>
                    <li>Changes to project scope may affect delivery timeline</li>
                    <li>Regular progress updates will be provided</li>
                    <li>Final deliverables subject to client approval</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2 mt-6">Client Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Timely provision of required materials and information</li>
                    <li>Prompt feedback on deliverables</li>
                    <li>Adherence to payment schedule</li>
                    <li>Clear communication of requirements</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <CreditCard className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Payment Terms</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Payment terms are established in the project proposal or service agreement. Standard payment terms include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>50% upfront payment to commence work</li>
                    <li>Remaining balance due upon project completion</li>
                    <li>Monthly retainer fees due at the beginning of each month</li>
                    <li>Late payments subject to 1.5% monthly interest charge</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Confidentiality</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  We maintain strict confidentiality regarding all client information and project details. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Business strategies and plans</li>
                  <li>Technical specifications</li>
                  <li>Proprietary information</li>
                  <li>Client data and communications</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    In no event shall KodeLabz be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                  <p>
                    Our liability shall be limited to the amount paid for the services in question.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;