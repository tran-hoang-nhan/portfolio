import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Phone } from 'lucide-react';

export function TicketSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('ticket');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ticket" className="min-h-screen bg-gradient-to-b from-black via-gray-900/50 to-transparent py-32 px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-5xl mb-16 text-center text-red-500"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Backstage Pass
        </motion.h2>

        {/* Concert Ticket Design */}
        <motion.div
          className="relative bg-gradient-to-r from-red-600 to-red-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Ticket Perforation */}
          <div className="absolute left-1/3 top-0 bottom-0 w-px border-l-2 border-dashed border-white/30" />
          
          <div className="grid md:grid-cols-3">
            {/* Stub Section */}
            <div className="p-8 flex flex-col justify-center items-center border-r border-dashed border-white/30">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎸
              </motion.div>
              <p className="text-white/80 text-center text-sm">
                VIP ACCESS
              </p>
              <p className="text-white text-xl mt-2">
                2025
              </p>
            </div>

            {/* Main Ticket Section */}
            <div className="md:col-span-2 p-8">
              {/* 2 Column Grid Layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* LEFT COLUMN - Contact Info */}
                <div className="flex flex-col justify-between">
                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-3xl mb-2 text-white">
                      Get in Touch
                    </h3>
                    <p className="text-white/80">
                      Let's create something amazing together
                    </p>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <motion.a
                      href="mailto:tranhoangnhan10e@gmail.com"
                      className="flex items-center gap-3 text-white hover:text-red-200 transition-colors text-lg"
                      whileHover={{ x: 10 }}
                    >
                      <Mail size={24} />
                      <span>Click here</span>
                    </motion.a>
                  </div>

                  {/* Phone */}
                  <div className="mb-8">
                    <motion.a
                      href="tel:+84931373319"
                      className="flex items-center gap-3 text-white hover:text-red-200 transition-colors text-lg"
                      whileHover={{ x: 10 }}
                    >
                      <Phone size={24} />
                      <span>0931 373 319</span>
                    </motion.a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 mb-8">
                    {[
                      { icon: Github, label: 'GitHub', url: 'https://github.com/tran-hoang-nhan' },
                      { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                      { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} className="text-white" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Barcode */}
                  <div className="flex gap-1 mt-auto">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-white/80"
                        style={{
                          width: '3px',
                          height: Math.random() * 30 + 20 + 'px',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN - VIP Photo ID */}
                <motion.div
                  className="flex flex-col items-center justify-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  {/* Polaroid Photo Frame */}
                  <div className="bg-white p-3 shadow-2xl transform rotate-2">
                    {/* Photo placeholder - REPLACE THIS WITH YOUR PHOTO */}
                    <div className="w-28 h-36 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden">
                      {/* Replace the src below with your own photo */}
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=250&fit=crop"
                        alt="Your Photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Polaroid Caption */}
                    <div className="mt-2 text-center">
                      <p className="text-black text-xs uppercase tracking-wide font-semibold">Backstage</p>
                    </div>
                  </div>

                  {/* VIP Badge */}
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg font-bold">
                    ★ VIP ★
                  </div>

                  {/* Artist Name */}
                  <div className="text-white text-center">
                    <p className="text-sm uppercase tracking-wider font-semibold">YOUR NAME</p>
                    <p className="text-xs text-white/70 mt-1">Full Stack Developer</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Corner Tear Effects */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-black transform rotate-45 translate-x-4 -translate-y-4" />
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-black transform rotate-45 -translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </section>
  );
}