import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronDown, Zap } from 'lucide-react';

export function ConcertHero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTicket = () => {
    document.getElementById('ticket')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Small Label */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Zap size={16} className="text-red-500" />
              <span className="text-sm text-red-400 uppercase tracking-wider">Portfolio 2025</span>
            </motion.div>

            {/* Main Title */}
            <div>
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl mb-6 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-red-600 to-orange-600 opacity-40" />
                <span className="relative bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  TRẦN HOÀNG NHÂN
                </span>
              </motion.h1>

              {/* Animated Underline */}
              <motion.div
                className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={showContent ? { width: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-4xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Backend Developer
              <br />
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {['React', 'Node.js', 'Flutter', 'UI/UX', 'Java', 'PHP'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-sm text-gray-400 hover:border-red-500/50 hover:text-red-400 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={showContent ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={scrollToTicket}
                className="px-8 py-4 bg-transparent border-2 border-gray-700 rounded-lg text-lg hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Amplifier Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Guitar Amp */}
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 border-4 border-gray-800 shadow-2xl">
              {/* Amp Grill Texture */}
              <div className="absolute inset-8 opacity-10 rounded-2xl overflow-hidden">
                <div className="h-full w-full" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                }} />
              </div>

              {/* LED Brand Logo */}
              <div className="relative mb-6 text-center">
                <motion.div
                  className="inline-block px-6 py-3 bg-black rounded-lg border-2 border-red-500/30"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(239, 68, 68, 0.3)',
                      '0 0 40px rgba(239, 68, 68, 0.5)',
                      '0 0 20px rgba(239, 68, 68, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl text-red-500 tracking-[0.3em] uppercase">
                    Portfolio
                  </span>
                </motion.div>
              </div>

              {/* Control Panel */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 mb-6">
                {/* VU Meters */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[0, 1].map((meter) => (
                    <div key={meter} className="space-y-2">
                      <div className="text-xs text-gray-500 uppercase tracking-wider text-center">
                        Channel {meter + 1}
                      </div>
                      <div className="h-32 bg-black rounded-lg p-2 flex items-end gap-1">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              backgroundColor: i < 8 ? '#22c55e' : i < 10 ? '#facc15' : '#ef4444',
                            }}
                            animate={{
                              height: [`${20 + Math.random() * 40}%`, `${40 + Math.random() * 60}%`, `${20 + Math.random() * 40}%`],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 0.3 + Math.random() * 0.4,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: meter * 0.1 + i * 0.05,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Knobs */}
                <div className="grid grid-cols-4 gap-4">
                  {['Gain', 'Bass', 'Mid', 'Treble'].map((label, i) => (
                    <div key={label} className="text-center">
                      <motion.div
                        className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-gray-600 shadow-lg relative cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      >
                        {/* Knob indicator */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-red-500 rounded-full" />
                        {/* Center cap */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border border-gray-700" />
                      </motion.div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Power LEDs */}
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(34, 197, 94, 0.8)',
                        '0 0 20px rgba(34, 197, 94, 1)',
                        '0 0 10px rgba(34, 197, 94, 0.8)',
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs text-gray-500 uppercase">Power</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(239, 68, 68, 0.8)',
                        '0 0 20px rgba(239, 68, 68, 1)',
                        '0 0 10px rgba(239, 68, 68, 0.8)',
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                  />
                  <span className="text-xs text-gray-500 uppercase">Signal</span>
                </div>
              </div>

              {/* Corner Screws */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`absolute w-4 h-4 bg-gray-700 rounded-full border-2 border-gray-600
                    ${i === 0 ? 'top-4 left-4' : ''}
                    ${i === 1 ? 'top-4 right-4' : ''}
                    ${i === 2 ? 'bottom-4 left-4' : ''}
                    ${i === 3 ? 'bottom-4 right-4' : ''}
                  `}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-800" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm mb-2 uppercase tracking-wider">Scroll</span>
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {showContent &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
      </div>
    </section>
  );
}