import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Music, Code, Palette, Zap, Guitar, Headphones } from 'lucide-react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [vinylRotation, setVinylRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Vinyl rotation animation
    if (isVisible) {
      const interval = setInterval(() => {
        setVinylRotation((prev) => (prev + 1) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const tracks = [
    {
      icon: <Code size={32} />,
      title: 'Track 01: Education',
      subtitle: 'Education & Learning Path',
      description: 'Studying Information Technology at Vietnam Aviation Academy from 10/2',
      skills: ['CS Degree', 'Self-taught', 'Online Courses', 'Open Source'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <Palette size={32} />,
      title: 'Track 02: Design Thinking',
      subtitle: 'Visual Aesthetics & UX Mindset',
      description: 'Strong eye for design with focus on user-centered interfaces. Combining artistic sensibility with technical execution to create experiences that are both beautiful and functional.',
      skills: ['UI Design', 'UX Research', 'Typography', 'Color Theory'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <Music size={32} />,
      title: 'Track 03: Creative Journey',
      subtitle: 'From Musician to Developer',
      description: 'My journey started with music - learning rhythm, harmony, and composition. These musical principles now influence how I structure code and design user flows with tempo and balance.',
      skills: ['Music Theory', 'Creative Process', 'Pattern Recognition', 'Harmony'],
      color: 'from-yellow-500 to-red-500',
    },
    {
      icon: <Zap size={32} />,
      title: 'Track 04: Vision & Philosophy',
      subtitle: 'Innovation & Future Goals',
      description: 'Driven by the belief that technology should inspire and empower. Always exploring emerging trends, pushing creative boundaries, and building experiences that leave lasting impressions.',
      skills: ['Innovation', 'Leadership', 'Mentorship', 'Vision'],
      color: 'from-red-600 to-pink-500',
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-32 px-8 relative overflow-hidden">
      {/* Background Pattern - Sound Waves */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-red-500"
            style={{
              top: `${i * 5}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl mb-4 relative inline-block">
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-red-600 to-orange-600 opacity-50" />
            <span className="relative bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              About the Artist
            </span>
          </h2>
          <motion.div
            className="flex justify-center gap-2 mt-4"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Vinyl Record Player (2D) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Record Player Base */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Turntable Platter */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl p-8">
                {/* Vinyl Record */}
                <motion.div
                  className="w-full h-full rounded-full relative overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle, #1a1a1a 0%, #000000 100%)',
                    rotate: vinylRotation,
                  }}
                >
                  {/* Grooves */}
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-gray-800"
                      style={{
                        top: `${5 + i * 3}%`,
                        left: `${5 + i * 3}%`,
                        right: `${5 + i * 3}%`,
                        bottom: `${5 + i * 3}%`,
                      }}
                    />
                  ))}

                  {/* Center Label */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-red-600 via-orange-600 to-red-700 flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <Guitar className="mx-auto mb-2" size={32} />
                      <p className="text-xs tracking-widest">PORTFOLIO</p>
                      <p className="text-[8px] text-gray-300">33 1/3 RPM</p>
                    </div>
                  </div>

                  {/* Vinyl Reflection */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>

              {/* Tone Arm */}
              <motion.div
                className="absolute top-1/4 -right-8 w-48 h-2 origin-left"
                style={{
                  background: 'linear-gradient(90deg, #C0C0C0 0%, #808080 100%)',
                  borderRadius: '4px',
                  rotate: -25,
                }}
                animate={{
                  rotate: isVisible ? [-25, -30, -25] : -25,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                {/* Headshell */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-sm" />
                {/* Counterweight */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full" />
              </motion.div>

              {/* Now Playing Indicator */}
              <motion.div
                className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-2 text-red-500"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Headphones size={20} />
                <span className="text-sm">NOW PLAYING</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-red-500"
                      animate={{
                        height: ['8px', '20px', '8px'],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Track List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Album Info */}
            <div className="mb-8">
              <h3 className="text-3xl mb-2 text-white">The Developer Sessions</h3>
              <p className="text-gray-400 text-lg">A compilation of skills and passion</p>
            </div>

            {/* Track Listing */}
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-gradient-to-r ${
                    activeTab === index
                      ? 'from-gray-800/90 to-gray-900/90 border-red-500'
                      : 'from-gray-800/50 to-gray-900/50 border-gray-700'
                  } border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 overflow-hidden group`}
                  onMouseEnter={() => setActiveTab(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${track.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Track Number */}
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center text-sm shadow-lg">
                    {index + 1}
                  </div>

                  <div className="ml-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`text-red-500 mt-1 ${activeTab === index ? 'scale-110' : ''} transition-transform`}>
                        {track.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl mb-1 text-white">{track.title}</h4>
                        <p className="text-sm text-orange-400 mb-2">{track.subtitle}</p>
                        
                        {/* Expandable Content */}
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={
                            activeTab === index
                              ? { height: 'auto', opacity: 1 }
                              : { height: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                            {track.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {track.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-full text-xs text-red-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Playing Animation */}
                  {activeTab === index && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-1 bg-gradient-to-t ${track.color} rounded-full`}
                          animate={{
                            height: ['10px', '30px', '10px'],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bio Quote */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-l-4 border-red-500 rounded-r-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-gray-300 italic leading-relaxed">
                "I'm a developer who believes that code, like music, should be elegant, expressive, 
                and emotionally resonant. Every project is a new composition, every bug is just 
                a note out of tune waiting to be perfected."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}