import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, X } from 'lucide-react';
import { sendOnboardingEmail } from '../utils/emailService';

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Project Details',
    description: 'Tell us about your project requirements'
  },
  {
    id: 2,
    title: 'Services Selection',
    description: 'Choose the services you need'
  },
  {
    id: 3,
    title: 'Budget & Timeline',
    description: 'Define your budget and timeline'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

const Onboarding: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    services: [] as string[],
    budget: '',
    timeline: ''
  });

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.projectName.trim() !== '' && formData.description.trim() !== '';
      case 2:
        return formData.services.length > 0;
      case 3:
        return formData.budget !== '' && formData.timeline !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length && validateCurrentStep()) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendOnboardingEmail(formData);
      setIsSuccess(true);
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({
          projectName: '',
          description: '',
          services: [],
          budget: '',
          timeline: ''
        });
        setCurrentStep(1);
        setDirection(0);
        setIsSuccess(false);
        setIsSubmitting(false);
        onClose();
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to submit form. Please try again.');
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        projectName: '',
        description: '',
        services: [],
        budget: '',
        timeline: ''
      });
      setCurrentStep(1);
      setDirection(0);
      setIsSuccess(false);
      setSubmitError(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-primary rounded-2xl w-full max-w-2xl p-6"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Start Your Project</h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center"
            >
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full
                ${currentStep >= step.id ? 'bg-accent' : 'bg-gray-700'}
                transition-colors duration-300
              `}>
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-xs text-gray-400">{step.description}</p>
              </div>
              {step.id < steps.length && (
                <ChevronRight className="w-5 h-5 mx-4 text-gray-600" />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="relative">
          {submitError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              {submitError}
            </div>
          )}

          <AnimatePresence mode="wait" custom={direction}>
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="text-center py-12"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Project Submitted!</h3>
                <p className="text-gray-400">
                  We'll review your project details and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="space-y-6"
              >
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                        placeholder="Enter project name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                        placeholder="Describe your project"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300 mb-4">
                      Select Services
                    </label>
                    {['Website Development', 'Mobile App Development', 'Brand Development', 'Marketing'].map((service) => (
                      <label
                        key={service}
                        className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.services.includes(service)
                            ? 'border-accent bg-accent/5'
                            : 'border-white/10 hover:border-accent/50'
                        } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={(e) => {
                            if (!isSubmitting) {
                              const updatedServices = e.target.checked
                                ? [...formData.services, service]
                                : formData.services.filter(s => s !== service);
                              setFormData({ ...formData, services: updatedServices });
                            }
                          }}
                          disabled={isSubmitting}
                          className="form-checkbox h-5 w-5 text-accent rounded border-white/10"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentStep === 3 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select budget range</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-25000">$10,000 - $25,000</option>
                        <option value="25000-50000">$25,000 - $50,000</option>
                        <option value="50000+">$50,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select timeline</option>
                        <option value="1-2">1-2 months</option>
                        <option value="3-4">3-4 months</option>
                        <option value="5-6">5-6 months</option>
                        <option value="6+">6+ months</option>
                      </select>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!isSuccess && (
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                  className="text-white hover:text-accent transition-colors disabled:opacity-50"
                >
                  Back
                </button>
              )}
              <div className="ml-auto">
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isSubmitting || !validateCurrentStep()}
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Next Step <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !validateCurrentStep()}
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit <Check className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Onboarding;