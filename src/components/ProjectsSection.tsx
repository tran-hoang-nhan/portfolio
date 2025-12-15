import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ExternalLink, Github, X, Info } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  techLogos: string[]; // Tech stack for plaque display
  color: string;
  videoUrl: string;
  features: string[];
  duration: string;
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      title: 'GENZ Helmet Shop Web',
      description: 'A full-stack e-commerce web application for selling helmets online featuring AI Chatbot Assistant using Grok API',
      tags: ['ReactJS', 'Express.js', 'JavaScript', 'MongoDB', 'Grok API', 'Docker'],
      techLogos: ['ReactJS', 'MongoDB', 'Docker'],
      color: 'from-purple-600 to-pink-600',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      features: ['Real-time inventory updates', 'Payment gateway integration', 'User authentication'],
      duration: '9/2025 - 12/2025'
    },
    {
      title: 'Music Player App',
      description: 'A cross-platform music player with playlist management, smart recommendations, and visualizations',
      tags: ['Flutter', 'Dart', 'Firebase', 'Jamendo API', 'AudioPlayer'],
      techLogos: ['Flutter', 'Dart', 'Firebase'],
      color: 'from-blue-600 to-cyan-600',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      features: ['3D models', 'Interactive animations', 'Responsive design'],
      duration: '9/2025 - 12/2025'
    },
    {
      title: 'Workout & Fitness App',
      description: 'A mobile app for tracking workouts, nutrition, and progress with social sharing features',
      tags: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL'],
      techLogos: ['Flutter', 'Supabase', 'PostgreSQL'],
      color: 'from-orange-600 to-red-600',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      features: ['Workout tracking', 'Nutrition plans', 'Social features'],
      duration: 'Ongoing'
    },
    {
      title: 'Blog Music App',
      description: 'An Android App for blogging about music, artists and album reviews (score albums by Pitchfork)',
      tags: ['Java', 'PHP', 'Laragon', 'MySQL', 'XML'],
      techLogos: ['Java', 'XML','PHP', 'MySQL'],
      color: 'from-green-600 to-teal-600',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      features: ['Real-time collaboration', 'Task prioritization', 'User roles'],
      duration: '4/2025 - 7/2025'
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-transparent via-gray-900/50 to-transparent py-24 px-8 relative overflow-hidden">
      {/* Animated Background Gradient Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl mb-6 text-center relative inline-block w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-red-600 to-orange-600 opacity-50" />
          <span className="relative bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Platinum Albums
          </span>
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-20 text-xl"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Award-winning projects • Click to flip and explore
        </motion.p>

        {/* Project Grid - Larger cards in 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Glass Frame Container - Fixed height */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-4 border-gray-700 shadow-2xl h-[720px] flex flex-col">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
                
                {/* Vinyl Record - Fixed size */}
                <motion.div
                  className="relative w-80 h-80 mx-auto cursor-pointer mb-6 shrink-0"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Front of Vinyl - Platinum/Silver Record */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Black Outer Rim */}
                    <div className="w-full h-full bg-black rounded-full p-3 shadow-2xl">
                      {/* Platinum/Silver Record with metallic gradient */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full relative">
                        {/* Grooves - circular lines */}
                        {Array.from({ length: 35 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full border border-gray-400/40"
                            style={{
                              top: `${8 + i * 2.4}%`,
                              left: `${8 + i * 2.4}%`,
                              right: `${8 + i * 2.4}%`,
                              bottom: `${8 + i * 2.4}%`,
                            }}
                          />
                        ))}
                        
                        {/* Holographic reflection effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(135deg, rgba(147,197,253,0.3) 0%, transparent 30%, rgba(196,181,253,0.3) 60%, transparent 100%)',
                          }}
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        
                        {/* Center Label - Black with project info */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-full flex items-center justify-center p-3 shadow-2xl border-2 border-gray-700">
                          <div className="text-center">
                            <div className="w-12 h-12 border-4 border-red-500 rounded-full mx-auto mb-2" />
                            <p className="text-gray-400 text-[10px] uppercase tracking-widest">Platinum</p>
                          </div>
                        </div>
                        
                        {/* Center Hole */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full shadow-inner" style={{ zIndex: 1 }} />
                      </div>
                    </div>
                  </div>

                  {/* Back of Vinyl - Track listing */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 overflow-hidden flex items-center justify-center p-6"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="text-center">
                      <p className="text-white text-sm mb-3 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-xs text-red-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Metallic Plaque Below Vinyl */}
                <div className="bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-100 p-6 rounded-lg border-2 border-amber-300 shadow-xl relative overflow-hidden">
                  {/* Brushed metal texture effect */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
                  }} />
                  
                  <div className="relative z-10">
                    {/* Title on plaque */}
                    <h3 className="text-center text-gray-900 text-lg mb-2 uppercase tracking-wider">
                      {project.title}
                    </h3>
                    
                    {/* Decorative line */}
                    <div className="w-24 h-0.5 bg-gray-700 mx-auto mb-4" />
                    
                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                      {project.techLogos.map((tech, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm shadow-md border border-gray-700"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    {/* Duration */}
                    <p className="text-center text-gray-700 text-sm italic">
                      Duration: {project.duration}
                    </p>
                  </div>
                  
                  {/* Corner screws decoration */}
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`absolute w-3 h-3 bg-gray-600 rounded-full border border-gray-700 shadow-inner
                        ${i === 0 ? 'top-2 left-2' : ''}
                        ${i === 1 ? 'top-2 right-2' : ''}
                        ${i === 2 ? 'bottom-2 left-2' : ''}
                        ${i === 3 ? 'bottom-2 right-2' : ''}
                      `}
                    />
                  ))}
                </div>

                {/* Details Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Info size={18} />
                  <span className="text-lg">View Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-4 border-red-500 overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, rotateY: -20 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.8, rotateY: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <X size={24} />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Concert Stage Header */}
                  <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 pr-20 border-b-4 border-red-900">
                    <div className="flex items-start gap-6 mb-3">
                      <h3 className="text-4xl flex-1">{selectedProject.title}</h3>
                      <div className="flex flex-col items-end gap-1 bg-black/30 px-4 py-2 rounded-lg border border-white/20 shrink-0">
                        <div className="text-sm uppercase tracking-wider text-white/60">Duration</div>
                        <div className="text-xl text-yellow-400">{selectedProject.duration}</div>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg">{selectedProject.description}</p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left Column - Video Demo */}
                    <div className="space-y-6">
                      <div className="relative aspect-video bg-black rounded-lg overflow-hidden border-2 border-gray-700 shadow-xl">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={selectedProject.videoUrl} type="video/mp4" />
                        </video>
                        <div className="absolute top-3 right-3 bg-red-500 px-4 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg">
                          Live Demo
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg transition-all text-lg shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </motion.button>
                        <motion.button
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all text-lg shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          Source Code
                        </motion.button>
                      </div>
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="flex flex-col gap-6">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-lg uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
                          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              className="px-4 py-2 bg-red-500/20 border-2 border-red-500/50 rounded-lg text-base text-red-400"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex-1">
                        <h4 className="text-lg uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
                          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-gray-300 text-base"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                            >
                              <span className="text-red-500 mt-1 text-xl">▸</span>
                              <span className="leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}