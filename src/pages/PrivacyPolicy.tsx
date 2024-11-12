import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, Database, Server, Globe } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
              Privacy <span className="text-accent">Policy</span>
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
                  <Shield className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Introduction</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  At KodeLabz, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-300">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Database className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Name and contact information</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company information</li>
                    <li>Payment information</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2 mt-6">Usage Data</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Pages visited</li>
                    <li>Time and date of visits</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <p>To provide and maintain our services</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <p>To notify you about changes to our services</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <p>To provide customer support</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <p>To gather analysis or valuable information to improve our services</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <p>To monitor the usage of our services</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <p>To detect, prevent and address technical issues</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Lock className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">International Data Transfers</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                </p>
                <p className="text-gray-300">
                  If you are located outside United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-deep-brown-200/40 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Server className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>By email: info@kodelabz.io</li>
                  <li>By phone: +1 (626) 523-7776</li>
                  <li>By mail: 1111 6th Ave, Suite 550 #301211, San Diego, CA 92101</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;