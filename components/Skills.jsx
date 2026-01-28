export default function Skills() {
    const IconLang = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 6v2m0 0v2m0-6l4-4m0 0l2-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m0 0H5m2 0h4m0 0l4-4" />
        </svg>
    );
    
    const IconFront = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    );

    const IconBack = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5a2 2 0 01-2 2M5 12a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2m0 0V9a2 2 0 00-2-2M5 12V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );

    const IconDB = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7m0 0c0 2.21-3.582 4-8 4s-8-1.79-8-4m0 0c0-2.21 3.582-4 8-4s8 1.79 8 4m0 6c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
    );

    const IconState = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    );

    const IconDevOps = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const IconTools = () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
    );

    const skills = [
        {
            name: 'Languages',
            icon: IconLang,
            description: 'JavaScript (ES6+), TypeScript, Python, HTML5, CSS3',
            level: 'Expert',
            color: 'from-teal-400 to-cyan-500'
        },
        {
            name: 'Frontend',
            icon: IconFront,
            description: 'React.js, Angular, Vue 3, Next.js, Bootstrap, Tailwind CSS, Material UI',
            level: 'Expert',
            color: 'from-emerald-400 to-teal-500'
        },
        {
            name: 'Backend',
            icon: IconBack,
            description: 'Node.js, Express.js, NestJS, Python, FastAPI, RESTful APIs, JWT',
            level: 'Expert',
            color: 'from-cyan-400 to-blue-500'
        },
        {
            name: 'Databases',
            icon: IconDB,
            description: 'MongoDB, PostgreSQL, MySQL, SQLite, Data Modeling',
            level: 'Intermediate',
            color: 'from-teal-500 to-emerald-600'
        },
        {
            name: 'State Management',
            icon: IconState,
            description: 'React Hooks, Context API, Redux, Zustand, React Query',
            level: 'Expert',
            color: 'from-amber-400 to-yellow-500'
        },
        {
            name: 'Cloud & DevOps',
            icon: IconDevOps,
            description: 'AWS (S3, EC2, Lambda), Git/GitHub, Docker, CI/CD',
            level: 'Intermediate',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            name: 'Tools & Practices',
            icon: IconTools,
            description: 'Agile/Scrum, Git, Responsive Design, Testing, Documentation',
            level: 'Expert',
            color: 'from-teal-400 to-amber-400'
        },
    ];

    return (
        <div id="skills" className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-16 sm:py-20 scroll-mt-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-3xl -z-10"></div>
            
            <div className="text-center mb-16">
                <h4 className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-transparent bg-clip-text">Skills & Expertise</h4>
                <h2 className="text-center text-4xl font-Ovo mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-600 dark:from-teal-400 dark:via-emerald-400 dark:to-amber-300 text-transparent bg-clip-text font-black">My Skills & Tech Stack</h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">Master of modern web technologies crafted through real-world projects and continuous learning.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                        <div key={skill.name} className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
                            {/* Glassmorphic background */}
                            <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10"></div>
                            
                            {/* Gradient accent */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                            
                            {/* Glow effect */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 blur-2xl rounded-full transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10 p-6">
                                {/* Icon */}
                                <div className="mb-4">
                                    <div className={`text-teal-500 transition-all duration-400 group-hover:scale-125 group-hover:text-emerald-500 w-8 h-8`}>
                                        <IconComponent />
                                    </div>
                                </div>
                                
                                {/* Skill Name */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                                    {skill.name}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                    {skill.description}
                                </p>
                                
                                {/* Hover accent line */}
                                <div className="mt-4 w-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-12 transition-all duration-300"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
