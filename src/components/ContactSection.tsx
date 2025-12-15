import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, User, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email (replace with your actual email service)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-transparent to-black py-16 px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Contact Form - Mixing Console Design */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {/* Console Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl text-white mb-4">Drop Your Mix</h2>
            <p className="text-gray-400 text-lg">Send me a message through the mixing console</p>
          </div>

          {/* Mixing Console */}
          <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border-4 border-gray-700 shadow-2xl">
            {/* Console LED Strip */}
            <div className="absolute top-4 left-4 right-4 flex gap-2 justify-center">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: i < 4 ? '#22c55e' : i < 8 ? '#eab308' : '#ef4444'
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Channel 1 - Name */}
                <div className="relative">
                  <div className="bg-gray-950 rounded-lg p-6 border-2 border-gray-700 shadow-inner">
                    {/* Channel Label */}
                    <div className="flex items-center gap-2 mb-4">
                      <User size={18} className="text-red-500" />
                      <label className="text-xs uppercase tracking-wider text-gray-400">
                        Channel 1 - Name
                      </label>
                    </div>
                    
                    {/* Fader Track */}
                    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-600">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-black/50 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                        required
                      />
                      
                      {/* VU Meter */}
                      <div className="mt-3 flex gap-1 h-2">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-sm ${
                              formData.name.length > i * 3
                                ? i < 7 ? 'bg-green-500' : i < 9 ? 'bg-yellow-500' : 'bg-red-500'
                                : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Channel 2 - Email */}
                <div className="relative">
                  <div className="bg-gray-950 rounded-lg p-6 border-2 border-gray-700 shadow-inner">
                    {/* Channel Label */}
                    <div className="flex items-center gap-2 mb-4">
                      <Mail size={18} className="text-red-500" />
                      <label className="text-xs uppercase tracking-wider text-gray-400">
                        Channel 2 - Email
                      </label>
                    </div>
                    
                    {/* Fader Track */}
                    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-600">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-black/50 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                        required
                      />
                      
                      {/* VU Meter */}
                      <div className="mt-3 flex gap-1 h-2">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-sm ${
                              formData.email.length > i * 3
                                ? i < 7 ? 'bg-green-500' : i < 9 ? 'bg-yellow-500' : 'bg-red-500'
                                : 'bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Channel 3 - Message (Full Width) */}
              <div className="relative">
                <div className="bg-gray-950 rounded-lg p-6 border-2 border-gray-700 shadow-inner">
                  {/* Channel Label */}
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} className="text-red-500" />
                    <label className="text-xs uppercase tracking-wider text-gray-400">
                      Channel 3 - Message
                    </label>
                  </div>
                  
                  {/* Fader Track */}
                  <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-600">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Drop your message here..."
                      rows={5}
                      className="w-full bg-black/50 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500 resize-none"
                      required
                    />
                    
                    {/* VU Meter */}
                    <div className="mt-3 flex gap-1 h-2">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm ${
                            formData.message.length > i * 10
                              ? i < 14 ? 'bg-green-500' : i < 18 ? 'bg-yellow-500' : 'bg-red-500'
                              : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Master Section - Submit Button */}
              <div className="flex flex-col items-center gap-4 pt-6 border-t-2 border-gray-700">
                <div className="text-xs uppercase tracking-wider text-gray-500">Master Output</div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`px-12 py-4 rounded-lg font-bold uppercase tracking-wider text-lg ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600'
                  } shadow-lg transition-all duration-300`}>
                    <div className="flex items-center gap-3">
                      <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Mix'}</span>
                    </div>
                  </div>
                  
                  {/* Button LEDs */}
                  {!isSubmitting && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Message sent successfully! Rock on! 🤘</span>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    className="flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>Failed to send. Please try again.</span>
                  </motion.div>
                )}
              </div>
            </form>

            {/* Console Screws */}
            {[
              { top: '8px', left: '8px' },
              { top: '8px', right: '8px' },
              { bottom: '8px', left: '8px' },
              { bottom: '8px', right: '8px' }
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border border-gray-900"
                style={pos}
              >
                <div className="absolute top-1/2 left-1/2 w-2 h-0.5 bg-gray-900 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p>© 2025 Your Name. Crafted with code and chords.</p>
        </motion.div>
      </div>
    </section>
  );
}