import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormFields {
  name: string;
  email: string;
  company: string;
  role: string;
  headache: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  headache?: string;
}

export default function AuditModal({ isOpen, onClose }: Props) {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    company: '',
    role: '',
    headache: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
      setFields({ name: '', email: '', company: '', role: '', headache: '' });
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!fields.name.trim()) e.name = 'Name is required.';
    if (!fields.email.trim()) e.email = 'Email is required.';
    else if (!fields.email.includes('@')) e.email = 'Enter a valid email address.';
    if (!fields.company.trim()) e.company = 'Company is required.';
    if (!fields.role) e.role = 'Please select your role.';
    if (!fields.headache.trim()) e.headache = 'Please describe your biggest challenge.';
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function set(field: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields(prev => ({ ...prev, [field]: e.target.value }));
      setErrors(prev => ({ ...prev, [field]: undefined }));
    };
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#111111] border border-white/10 rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 id="modal-title" className="text-2xl font-semibold text-white mb-1">
                    Let's find your automation opportunities.
                  </h2>
                  <p className="text-gray-400 text-sm mb-8">
                    Tell us a little about your situation. This takes under 2 minutes.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="modal-name">
                        Full Name
                      </label>
                      <input
                        ref={firstInputRef}
                        id="modal-name"
                        type="text"
                        value={fields.name}
                        onChange={set('name')}
                        placeholder="Jane Smith"
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors outline-none focus:border-teal-400 ${errors.name ? 'border-red-500/60' : 'border-white/10'}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="modal-email">
                        Business Email
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        value={fields.email}
                        onChange={set('email')}
                        placeholder="jane@company.com"
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors outline-none focus:border-teal-400 ${errors.email ? 'border-red-500/60' : 'border-white/10'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="modal-company">
                        Company / Organization
                      </label>
                      <input
                        id="modal-company"
                        type="text"
                        value={fields.company}
                        onChange={set('company')}
                        placeholder="Acme Corp"
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors outline-none focus:border-teal-400 ${errors.company ? 'border-red-500/60' : 'border-white/10'}`}
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1.5">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="modal-role">
                        What best describes your role?
                      </label>
                      <select
                        id="modal-role"
                        value={fields.role}
                        onChange={set('role')}
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-sm transition-colors outline-none focus:border-teal-400 appearance-none cursor-pointer ${errors.role ? 'border-red-500/60' : 'border-white/10'} ${fields.role ? 'text-white' : 'text-gray-600'}`}
                      >
                        <option value="" disabled>Select your role...</option>
                        <option value="founder">Founder / CEO</option>
                        <option value="ops">Operations Lead</option>
                        <option value="manager">Department Manager</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.role && <p className="text-red-400 text-xs mt-1.5">{errors.role}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="modal-headache">
                        What's your biggest operational headache right now?
                      </label>
                      <textarea
                        id="modal-headache"
                        value={fields.headache}
                        onChange={set('headache')}
                        rows={3}
                        placeholder="e.g., our onboarding process is entirely manual and takes 3 hours per client"
                        className={`w-full bg-[#1a1a1a] border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm transition-colors outline-none focus:border-teal-400 resize-none ${errors.headache ? 'border-red-500/60' : 'border-white/10'}`}
                      />
                      {errors.headache && <p className="text-red-400 text-xs mt-1.5">{errors.headache}</p>}
                      
                      <div className="flex items-center justify-between mt-1.5 text-xs text-gray-500">
                        <div>
                          {fields.headache.length >= 20 ? (
                            <span className="text-emerald-400 font-medium flex items-center gap-1">
                              <span>✓</span> Good detail level
                            </span>
                          ) : (
                            <span>Describe in a few words (min 20 chars)</span>
                          )}
                        </div>
                        <div className={fields.headache.length >= 20 ? 'text-emerald-400 font-medium' : ''}>
                          {fields.headache.length} characters
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full relative overflow-hidden bg-teal-400/10 hover:bg-teal-400/20 text-teal-300 font-semibold py-3.5 rounded-lg transition-all duration-300 text-sm mt-2 border border-teal-400/30 hover:border-teal-400/60 shadow-[0_0_20px_rgba(79,158,143,0.1)] hover:shadow-[0_0_30px_rgba(79,158,143,0.2)] backdrop-blur-md"
                    >
                      Submit Audit Request
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-400/10 border border-teal-400/30 flex items-center justify-center mx-auto mb-5">
                    <span className="text-teal-400 text-xl">✓</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">Request received.</h2>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                    We'll be in touch within 1 business day to schedule your intro call. No sales pitch — just a conversation.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
