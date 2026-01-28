export default function Work() {
    const work = [
        {
            name: 'Investment Research Platform',
            description: 'Vue 3, NestJS, TypeScript, REST APIs',
            highlights: 'Developed RESTful APIs using NestJS to parse and manage CIM documents. Built responsive UI components with Vue 3 for real-time data visualization and secure document interaction.',
            tech: ['Vue 3', 'NestJS', 'TypeScript', 'REST APIs'],
            liveDemo: false,
        },
        {
            name: 'HatchEDU – School Management Application',
            description: 'React, Node.js, MySQL, AWS Lambda',
            highlights: 'Contributed to development of a school management platform enabling child progress tracking and parenting dashboard. Implemented responsive UI components and integrated with Node.js APIs.',
            tech: ['React', 'Node.js', 'MySQL', 'AWS Lambda'],
            liveDemo: false,
        },
        {
            name: 'SmartAI Dashboard',
            description: 'React, Python, PostgreSQL, OpenAI, Stripe',
            highlights: 'Assisted in developing an internal web application using GPT-based tools for document summarization, chat, diagrams, and video analysis. Built responsive UI components with Material Design principles.',
            tech: ['React', 'Python', 'PostgreSQL', 'OpenAI', 'Stripe'],
            liveDemo: false,
        },
    ];
    
    return (
        <div id="work" className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-16 sm:py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-transparent bg-clip-text">My Portfolio</h4>
            <h2 className="text-center text-4xl font-Ovo font-black mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">Featured Projects</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">Key projects showcasing expertise in full-stack development, scalable architecture, and modern web technologies.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6 max-w-7xl mx-auto">
                {work.map((workItem, index) => (
                    <div 
                        key={workItem.name} 
                        className="group relative rounded-2xl overflow-hidden h-full"
                    >
                        {/* Rotating gradient border - outer */}
                        <style>{`
                            .rotate-border-${index} {
                                animation: rotate-border 8s linear infinite;
                                background: conic-gradient(from 0deg, #0d9488, #059669, #06b6d4, #0d9488);
                            }
                            @keyframes rotate-border {
                                from { transform: rotate(0deg); }
                                to { transform: rotate(360deg); }
                            }
                        `}</style>
                        
                        <div className={`absolute inset-0 rounded-2xl rotate-border-${index} p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                            {/* Inner content container */}
                            <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
                        </div>
                        
                        {/* Static background for non-hover state */}
                        <div className="absolute inset-0 rounded-2xl bg-gray-100 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/20 group-hover:border-transparent transition-all duration-500"></div>
                        
                        {/* Animated corner accents */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-600/50 dark:from-teal-500/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-600/50 dark:from-emerald-500/30 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-300"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col">
                            {/* Project Index */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600/60 dark:from-teal-500/40 to-emerald-600/60 dark:to-emerald-500/40 flex items-center justify-center border border-teal-500/60 dark:border-teal-400/40 text-sm font-bold text-white dark:text-teal-400">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <span className="text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">💻</span>
                            </div>
                            
                            {/* Project Name */}
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 group-hover:text-transparent group-hover:bg-clip-text transition-all">{workItem.name}</h3>
                            
                            {/* Description */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{workItem.description}</p>
                            
                            {/* Highlights */}
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed flex-1">{workItem.highlights}</p>
                            
                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {workItem.tech.map((t, idx) => (
                                    <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-teal-600/40 dark:from-teal-500/20 to-emerald-600/40 dark:to-emerald-500/20 text-gray-800 dark:text-gray-300 border border-teal-500/50 dark:border-teal-500/40 group-hover:border-teal-500/80 dark:group-hover:border-teal-400/60 transition-all backdrop-blur-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Status Badge */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-white/20">
                                {workItem.liveDemo && (
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                        Live Demo
                                    </span>
                                )}
                                {!workItem.liveDemo && (
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-300 dark:bg-white/5 text-gray-800 dark:text-gray-400 border border-gray-400 dark:border-white/20 group-hover:border-teal-500/80 group-hover:bg-gray-200 dark:group-hover:bg-white/10 transition-all">
                                        Case Study
                                    </span>
                                )}
                                <span className="text-2xl opacity-0 group-hover:opacity-100 transition duration-300 transform group-hover:translate-x-1 text-teal-600 dark:text-teal-400">→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}