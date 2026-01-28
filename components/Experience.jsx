export default function Experience() {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'SVM Digital Services Pvt. Ltd.',
            period: 'August 2025 – Present | Hyderabad, India',
            description: 'Currently leading frontend development initiatives, building responsive and scalable web applications.',
            responsibilities: [
                'Design, develop, and maintain frontend-focused web applications using React.js and Next.js',
                'Build reusable, scalable, and responsive UI components using Tailwind CSS, Bootstrap, and Material UI',
                'Integrate frontend applications with RESTful APIs, ensuring efficient data flow and state management',
                'Collaborate closely with UI/UX designers, backend engineers, and stakeholders to deliver user-centric features',
                'Participate in Agile/Scrum ceremonies including sprint planning, daily stand-ups, and code reviews',
            ],
            tech: 'React.js, Next.js, TypeScript, Tailwind CSS, Material UI, RESTful APIs',
        },
        {
            title: 'Software Engineer',
            company: 'Innostes Solutions',
            period: 'October 2023 – June 2025 | Hyderabad, India',
            description: 'Developed and maintained full-stack web applications in a production environment, managing both frontend and backend systems.',
            responsibilities: [
                'Developed and maintained full-stack web applications using React.js and Node.js in production',
                'Designed and implemented RESTful APIs using Express.js, secured with JWT-based authentication',
                'Utilized AWS services (S3, EC2) for application deployment, hosting, and cloud storage solutions',
                'Worked within Agile/Scrum teams to deliver new features, optimize performance, and maintain code quality',
                'Implemented complex features and optimizations resulting in improved application performance',
            ],
            tech: 'React.js, Node.js, Express.js, JWT, AWS, MongoDB',
        },
        {
            title: 'Software Development Intern',
            company: 'Innostes Solutions',
            period: 'July 2023 – September 2023 | Hyderabad, India',
            description: 'Gained hands-on experience with full-stack development in a collaborative team environment.',
            responsibilities: [
                'Supported development of web applications using React.js and Node.js in a collaborative team',
                'Implemented JWT-based user authentication and optimized MongoDB queries for efficient data handling',
                'Gained hands-on experience with RESTful APIs, Git version control, and Agile development practices',
                'Contributed to code reviews and participated in daily team stand-ups',
                'Assisted in debugging and fixing production issues',
            ],
            tech: 'React.js, Node.js, MongoDB, JWT, Git',
        },
    ];

    return (
        <div id="experience" className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-16 sm:py-20 scroll-mt-24 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-3xl -z-10"></div>
            
            <div className="text-center mb-16">
                <h4 className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-transparent bg-clip-text">Professional Timeline</h4>
                <h2 className="text-center text-4xl font-Ovo mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-600 dark:from-teal-400 dark:via-emerald-400 dark:to-amber-300 text-transparent bg-clip-text font-black">My Experience</h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">2+ years of building scalable, high-performance web applications in dynamic tech environments.</p>
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-emerald-500 to-amber-400 hidden lg:block"></div>
                
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-12 lg:mb-16 relative group">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-6 w-16 h-16 hidden lg:flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative w-14 h-14 rounded-full bg-white dark:bg-gray-900 border-4 border-teal-500 flex items-center justify-center text-xl font-bold text-transparent bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text shadow-lg group-hover:shadow-2xl group-hover:shadow-teal-500/50 transition-all duration-300">
                                {index + 1}
                            </div>
                        </div>
                        
                        {/* Card */}
                        <div className="lg:ml-32 group relative rounded-2xl p-8 border border-gray-200 dark:border-gray-800 cursor-pointer transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-2 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl -z-10"></div>
                            
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-5 blur-3xl rounded-full transition-opacity duration-500 -mr-20 -mt-20"></div>
                            
                            <div className="relative z-10">
                                {/* Company and period */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-6 border-b border-gray-200 dark:border-gray-800 group-hover:border-teal-500/30 transition-colors duration-300">
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg font-bold text-gray-700 dark:text-gray-300 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600/10 to-emerald-600/10 rounded-full border border-teal-200 dark:border-teal-800/50 group-hover:from-teal-600/20 group-hover:to-emerald-600/20 transition-all duration-300">
                                        <span className="text-sm text-teal-700 dark:text-teal-300 font-bold">📅 {exp.period}</span>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                    {exp.description}
                                </p>
                                
                                {/* Responsibilities */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-black text-gray-800 dark:text-white mb-4 flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-white text-xs">✓</span>
                                        KEY RESPONSIBILITIES
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3 group/item">
                                                <span className="text-violet-600 dark:text-pink-500 font-bold mt-1 group-hover/item:text-pink-600 dark:group-hover/item:text-violet-400 transition-colors">▸</span>
                                                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-black text-gray-700 dark:text-gray-400 uppercase tracking-widest py-2 flex items-center">Tech Stack</span>
                                    {exp.tech.split(', ').map((tech, idx) => (
                                        <span key={idx} className="text-xs px-3 py-2 rounded-full bg-gradient-to-r from-violet-600/15 to-pink-600/15 text-gray-700 dark:text-gray-300 border border-violet-200 dark:border-violet-800/30 hover:bg-gradient-to-r hover:from-violet-600/30 hover:to-pink-600/30 transition-all duration-300 font-semibold">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
