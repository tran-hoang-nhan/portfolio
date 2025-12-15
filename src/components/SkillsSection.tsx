import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Pedal {
  name: string;
  color: string;
  glowColor: string;
  skills: string[];
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePedal, setActivePedal] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pedals: Pedal[] = [
    {
      name: 'Front-end',
      color: 'bg-blue-600',
      glowColor: 'shadow-blue-500/50',
      skills: ['React', 'Flutter', 'Tailwind CSS', 'XML']
    },
    {
      name: 'Back-end',
      color: 'bg-green-600',
      glowColor: 'shadow-green-500/50',
      skills: ['Node.js', 'Java', 'PHP', 'REST APIs']
    },
    {
      name: 'DevOps',
      color: 'bg-orange-600',
      glowColor: 'shadow-orange-500/50',
      skills: ['Docker', 'CI/CD', 'Git']
    },
    {
      name: 'Database',
      color: 'bg-purple-600',
      glowColor: 'shadow-purple-500/50',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-transparent via-black/80 to-transparent py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl mb-8 text-center text-red-500"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Pedalboard
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-400 mb-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Click on each pedal to see the effects
        </motion.p>

        {/* Guitar Cable connecting pedals - Positioned above pedals but below content */}
        <div className="relative mb-16 h-24">
          <svg className="w-full h-full absolute top-0 left-0" style={{ zIndex: 1 }}>
            {/* Cable shadow */}
            <motion.path
              d="M 12% 50% C 20% 20%, 30% 80%, 38% 50% C 46% 20%, 54% 80%, 62% 50% C 70% 20%, 78% 80%, 88% 50%"
              stroke="#000000"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              opacity="0.3"
            />
            {/* Main cable - black outer */}
            <motion.path
              d="M 12% 50% C 20% 20%, 30% 80%, 38% 50% C 46% 20%, 54% 80%, 62% 50% C 70% 20%, 78% 80%, 88% 50%"
              stroke="#1a1a1a"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
            {/* Inner cable - gold */}
            <motion.path
              d="M 12% 50% C 20% 20%, 30% 80%, 38% 50% C 46% 20%, 54% 80%, 62% 50% C 70% 20%, 78% 80%, 88% 50%"
              stroke="#D4AF37"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.6 }}
            />
            
            {/* Cable connectors/jacks at each pedal position */}
            {[12, 38, 62, 88].map((x, i) => (
              <motion.g
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.2, type: 'spring', stiffness: 200 }}
              >
                {/* Jack outer casing */}
                <circle cx={`${x}%`} cy="50%" r="12" fill="#1a1a1a" />
                <circle cx={`${x}%`} cy="50%" r="10" fill="#2a2a2a" />
                {/* Jack tip */}
                <circle cx={`${x}%`} cy="50%" r="6" fill="#C0C0C0" />
                <circle cx={`${x}%`} cy="50%" r="3" fill="#808080" />
                {/* Cable strain relief */}
                <rect x={`${x - 1.5}%`} y="calc(50% + 8px)" width="3%" height="4" rx="2" fill="#1a1a1a" />
              </motion.g>
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ zIndex: 2 }}>
          {pedals.map((pedal, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Pedal */}
              <motion.div
                className={`${pedal.color} rounded-lg p-6 cursor-pointer relative overflow-hidden shadow-2xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePedal(activePedal === index ? null : index)}
                style={{
                  boxShadow: activePedal === index 
                    ? '0 0 40px rgba(239, 68, 68, 0.6), 0 10px 30px rgba(0,0,0,0.5)' 
                    : '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                {/* Input/Output Jacks on pedal */}
                <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-900 border-2 border-gray-700" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-900 border-2 border-gray-700" />

                {/* Pedal LED Light */}
                <motion.div
                  className={`absolute top-6 right-1/2 translate-x-1/2 w-4 h-4 rounded-full ${
                    activePedal === index ? 'bg-red-500' : 'bg-gray-700'
                  }`}
                  animate={
                    activePedal === index
                      ? {
                          boxShadow: [
                            '0 0 5px rgba(239, 68, 68, 0.5)',
                            '0 0 20px rgba(239, 68, 68, 1)',
                            '0 0 5px rgba(239, 68, 68, 0.5)',
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1, repeat: Infinity }}
                />

                {/* Pedal Name Label */}
                <div className="bg-white/90 rounded px-3 py-1 mb-4 mt-6">
                  <h3 className="text-xl text-black text-center uppercase tracking-wide" style={{ fontFamily: 'monospace' }}>
                    {pedal.name}
                  </h3>
                </div>

                {/* Pedal Knobs */}
                <div className="flex justify-center gap-4 mb-6">
                  {[1, 2, 3].map((knob) => (
                    <div
                      key={knob}
                      className="w-12 h-12 rounded-full bg-black border-4 border-gray-700 flex items-center justify-center relative shadow-lg"
                      style={{
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
                      }}
                    >
                      {/* Knob indicator line */}
                      <div className="w-1 h-4 bg-white rounded absolute top-1" />
                      {/* Knob grip dots */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-0.5 h-1 bg-gray-600 rounded"
                          style={{
                            transform: `rotate(${i * 45}deg) translateY(-16px)`
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Footswitch - 3D realistic design */}
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Footswitch base/housing - Rectangular */}
                    <div className="w-24 h-12 rounded-md bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 border-2 border-gray-800 relative shadow-2xl"
                      style={{
                        boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.5)',
                        transform: activePedal === index ? 'translateY(2px)' : 'translateY(0)',
                        transition: 'transform 0.1s'
                      }}
                    >
                      {/* Rubber grip pattern on top */}
                      <div className="absolute inset-1 rounded-sm overflow-hidden bg-black/40">
                        <div className="w-full h-full grid grid-rows-3 gap-0.5 p-1">
                          {[...Array(3)].map((_, row) => (
                            <div key={row} className="grid grid-cols-6 gap-0.5">
                              {[...Array(6)].map((_, col) => (
                                <div key={col} className="bg-black/40 rounded-sm" />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Side highlight - chrome edge effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-md" />
                      
                      {/* Mounting screws on corners */}
                      {[
                        { top: '2px', left: '4px' },
                        { top: '2px', right: '4px' },
                        { bottom: '2px', left: '4px' },
                        { bottom: '2px', right: '4px' }
                      ].map((pos, i) => (
                        <div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full bg-gray-600 border border-gray-900"
                          style={{
                            ...pos,
                            boxShadow: 'inset 0 0.5px 1px rgba(0,0,0,0.5)'
                          }}
                        >
                          {/* Screw slot */}
                          <div className="absolute top-1/2 left-1/2 w-1 h-0.5 bg-gray-900 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                        </div>
                      ))}

                      {/* Click indicator text */}
                      <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 uppercase tracking-wider">
                        Click
                      </div>
                    </div>
                    
                    {/* Footswitch shadow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-2 bg-black/40 rounded-full blur-sm" />
                  </div>
                </div>
              </motion.div>

              {/* Skills Display */}
              <motion.div
                className="mt-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={
                  activePedal === index
                    ? { opacity: 1, height: 'auto' }
                    : { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2">
                  {pedal.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="text-gray-300 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        activePedal === index
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}