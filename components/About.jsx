export default function About() {
    const tools = [
        { name: 'vscode', icon: '/assets/vscode.png', },
        { name: 'cursor', icon: '/assets/cursor_ide.png', },
        { name: 'git', icon: '/assets/git.png', },
        { name: 'postman', icon: '/assets/postman.webp', },
    ];
    return (
        <div id="about" className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-16 sm:py-10 scroll-mt-24">
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
            <h4 className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-transparent bg-clip-text">Who Am I</h4>
            <h2 className="text-center text-4xl font-Ovo font-black mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">About Me</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">Passionate developer committed to building exceptional digital experiences.</p>

            <div className="flex w-full flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 my-12 lg:my-20">
                <div className="w-full sm:w-auto flex justify-center lg:flex-shrink-0">
                    <div className="relative w-48 sm:w-56 md:w-72 lg:w-80 h-48 sm:h-56 md:h-72 lg:h-80 flex items-center justify-center group perspective">
                        {/* Animated background particles */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.3s' }}></div>
                            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.9s' }}></div>
                        </div>

                        {/* Outer rotating frame 1 */}
                        <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 dark:from-teal-500 dark:via-emerald-500 dark:to-cyan-500 rounded-2xl bg-clip-border opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-spin_slow"></div>

                        {/* Outer rotating frame 2 */}
                        <div className="absolute inset-2 sm:inset-3 border-2 border-transparent bg-gradient-to-l from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-500 dark:via-teal-500 dark:to-emerald-500 rounded-2xl bg-clip-border opacity-30 group-hover:opacity-70 transition-opacity duration-500" style={{ animation: 'spin_slow 8s linear infinite reverse' }}></div>

                        {/* Inner static border */}
                        <div className="absolute inset-4 sm:inset-5 border-2 border-white/20 dark:border-white/15 rounded-xl"></div>

                        {/* Main content area */}
                        <div className="absolute inset-6 sm:inset-7 rounded-lg overflow-hidden">
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-emerald-500/10 dark:from-teal-500/8 dark:via-transparent dark:to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Center content */}
                            <div className="relative w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-4">
                                {/* Avatar circle with image - New unique style */}
                                <div className="relative w-28 sm:w-32 lg:w-40 h-28 sm:h-32 lg:h-40 flex items-center justify-center flex-shrink-0">
                                    {/* Outer glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-600 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Animated ring border */}
                                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 dark:from-teal-600 dark:via-emerald-600 dark:to-cyan-600 p-0.5" style={{ animation: 'spin 8s linear infinite' }}>
                                        <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center relative overflow-hidden">
                                            {/* Geometric corner patterns */}
                                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-teal-400/60 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-emerald-400/60 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Image with filters - Counter-rotation applied to stop spin */}
                                            <img
                                                src="/assets/logo2.jfif"
                                                alt="Portfolio"
                                                className="w-full h-full object-cover rounded-full scale-95 group-hover:scale-100 transition-transform duration-500 filter brightness-95 group-hover:brightness-110"
                                                style={{ animation: 'spin 8s linear infinite reverse' }}
                                            />

                                            {/* Gradient overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-transparent to-emerald-500/0 group-hover:from-teal-500/10 group-hover:via-emerald-500/5 group-hover:to-cyan-500/10 rounded-full transition-all duration-500"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider line */}
                                <div className="h-0.5 w-8 sm:w-10 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Text label */}
                                <div className="text-center">
                                    <p className="text-xs sm:text-sm font-bold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">DEVELOPER</p>
                                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-0.5">Creative Solutions</p>
                                </div>
                            </div>

                            {/* Corner dots - top left */}
                            <div className="absolute top-3 left-3 flex gap-1">
                                <div className="w-1 h-1 bg-teal-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                                <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                                <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                            </div>

                            {/* Corner dots - bottom right */}
                            <div className="absolute bottom-3 right-3 flex gap-1">
                                <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                                <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                                <div className="w-1 h-1 bg-teal-500 rounded-full opacity-60 group-hover:opacity-100"></div>
                            </div>
                        </div>

                        {/* Glowing background effect */}
                        <div className="absolute -inset-8 sm:-inset-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 dark:from-teal-600 dark:via-emerald-600 dark:to-cyan-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-20"></div>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <p className="mb-6 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed">Professional Full Stack Web Developer with 2+ years of experience building scalable, secure, and high-performance web applications. Proficient in modern frontend frameworks including React, Angular, and Vue 3, with strong command over JavaScript, TypeScript, HTML, and CSS.</p>

                    <p className="mb-6 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed">Currently working at SVM Digital Services as a Software Engineer, where I design, develop, and maintain frontend-focused web applications using React.js and Next.js. I build reusable, scalable, and responsive UI components while collaborating closely with UI/UX designers, backend engineers, and stakeholders.</p>

                    <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed">I excel at integrating third-party services, delivering user-centric solutions in Agile environments, and optimizing application performance. My goal is to create impactful web solutions that solve real-world problems efficiently.</p>

                    <h4 className="my-6 text-gray-800 font-Ovo dark:text-white/90 font-semibold">Tools I Use</h4>

                    <div className="relative w-full flex items-center justify-center mb-8">
                        {/* Circular rotating text background */}
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-4">
                            {/* Outer rotating circle with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 dark:from-teal-400/20 dark:to-emerald-400/20 rounded-full blur-xl opacity-60 animate-pulse"></div>

                            {/* Rotating border circle */}
                            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 dark:from-teal-500 dark:via-emerald-500 dark:to-cyan-500 rounded-full bg-clip-border opacity-50 animate-spin_slow"></div>

                            {/* SVG with rotating text */}
                            <svg className="absolute inset-0 w-full h-full animate-spin_slow" viewBox="0 0 200 200">
                                <defs>
                                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                    <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0d9488" />
                                        <stop offset="50%" stopColor="#059669" />
                                        <stop offset="100%" stopColor="#0891b2" />
                                    </linearGradient>
                                </defs>
                                <text fill="url(#scrollGradient)" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="700" letterSpacing="2">
                                    <textPath href="#circlePath" startOffset="0%">
                                        ✦ TECH STACK ✦ TOOLS ✦ TECHNOLOGIES ✦ TECH STACK ✦ TOOLS ✦ TECHNOLOGIES ✦
                                    </textPath>
                                </text>
                            </svg>

                            {/* Center badge */}
                            <div className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-teal-600/20 via-emerald-600/15 to-cyan-600/20 dark:from-teal-500/15 dark:via-emerald-500/12 dark:to-cyan-500/15 rounded-full border border-white/30 dark:border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">4</div>
                                    <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Tools</p>
                                </div>
                            </div>
                        </div>

                        {/* Tools flex container */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-sm">
                            {tools.map((tool) => (
                                <div key={tool.name} className="group relative w-14 sm:w-16 aspect-square cursor-pointer">
                                    {/* Grid background */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg">
                                        <svg className="w-full h-full" viewBox="0 0 100 100">
                                            <defs>
                                                <pattern id={`grid-tool-${tool.name}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5" />
                                                </pattern>
                                            </defs>
                                            <rect width="100" height="100" fill={`url(#grid-tool-${tool.name})`} />
                                        </svg>
                                    </div>

                                    {/* Rotating border */}
                                    <div className="absolute inset-0 border-2 border-teal-600/40 dark:border-teal-500/30 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 rounded-lg"></div>

                                    {/* Glassmorphic container */}
                                    <div className="absolute inset-0.5 bg-gradient-to-br from-teal-600/25 to-emerald-600/25 dark:from-teal-500/18 dark:to-emerald-500/18 backdrop-blur-lg rounded-lg border border-white/30 dark:border-white/10 overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                                        {/* Gradient background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/25 to-emerald-400/25 dark:from-teal-500/20 dark:to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Icon */}
                                        <div className="relative z-10 group-hover:scale-125 transition-transform duration-300">
                                            <img src={tool.icon} alt={tool.name} className="w-6 sm:w-8 dark:invert dark:brightness-110" />
                                        </div>
                                    </div>

                                    {/* Floating glow */}
                                    <div className="absolute -inset-2 bg-gradient-to-br from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-500 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        {tool.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ul className="hidden">
                        {tools.map((tool) => (
                            <li key={tool.name}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}