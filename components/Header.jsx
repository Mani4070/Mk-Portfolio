export default function Header() {
    return (
        <div id="top" className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 mt-10 md:mt-0 relative overflow-hidden">
            {/* Glassmorphic animated background - New Teal-Emerald-Gold theme */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/25 dark:bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 left-10 w-72 h-72 bg-emerald-500/25 dark:bg-emerald-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-500/20 dark:bg-amber-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>

            {/* Modern MK Logo with Glassmorphism */}
            <div className="relative w-40 h-40 flex items-center justify-center mb-4 group" style={{ marginTop: "10px" }}>
                {/* Grid background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="grid-logo" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="url(#gridGradientLogo)" strokeWidth="0.5" />
                            </pattern>
                            <linearGradient id="gridGradientLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#0d9488" />
                                <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                        </defs>
                        <rect width="100" height="100" fill="url(#grid-logo)" />
                    </svg>
                </div>

                {/* Outer rotating hexagon */}
                <div className="absolute inset-0 border-2 border-teal-600/30 dark:border-teal-500/20 transform -rotate-30 group-hover:rotate-0 transition-transform duration-700"></div>

                {/* Inner rotating hexagon */}
                <div className="absolute inset-3 border-2 border-emerald-600/30 dark:border-emerald-500/20 transform rotate-30 group-hover:rotate-0 transition-transform duration-700"></div>

                {/* Main container with glassmorphism */}
                <div className="relative bg-gradient-to-br from-teal-600/25 via-emerald-600/20 to-cyan-600/20 dark:from-teal-500/18 dark:via-emerald-500/15 dark:to-cyan-500/15 backdrop-blur-xl rounded-3xl p-1 shadow-2xl border border-white/30 dark:border-white/10 w-40 h-52 transform group-hover:shadow-3xl transition-all duration-300" style={{marginTop:"30px",marginBottom:"20px"}}>
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/50 via-gray-100/40 to-white/50 dark:from-gray-900/50 dark:via-gray-800/40 dark:to-gray-900/50 flex items-center justify-center relative overflow-hidden border border-white/40 dark:border-white/10">
                        {/* Gradient mesh background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 via-transparent to-emerald-400/30 dark:from-teal-500/20 dark:via-transparent dark:to-emerald-500/20"></div>

                        {/* Logo image filling the card width */}
                        <img
                            src="/assets/logo1.jfif"
                            alt="MK Logo"
                            className="relative z-10 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 filter brightness-110 dark:brightness-100"
                        />
                    </div>
                </div>

                {/* Floating orbs */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-500 blur-xl opacity-30 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 dark:from-cyan-400 dark:to-teal-500 blur-xl opacity-30 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-teal-50/50 dark:bg-white/5 backdrop-blur-xl border border-teal-600/40 dark:border-teal-400/30 shadow-lg">
                <div className="relative flex h-3 w-3">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600 dark:bg-teal-500"></span>
                </div>
                <span className="text-sm font-bold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 text-transparent bg-clip-text">Currently Building at SVM Digital Services</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-Ovo font-bold text-gray-800 dark:text-white flex items-center justify-center gap-3">
                Hey, I&apos;m Manikanta Vaddi
                <span className="text-3xl animate-bounce">👨‍💻</span>
            </h3>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-600 dark:from-teal-400 dark:via-emerald-400 dark:to-amber-300 text-transparent bg-clip-text">Code. Create. Impact.</span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                Full Stack Developer crafting elegant solutions with React, Next.js, Node.js & modern web tech. Turning ideas into scalable, high-performance applications that matter.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 text-sm text-gray-600 dark:text-gray-400 font-semibold">
                <span className="flex items-center gap-2"><span className="text-xl">📍</span> Srikakulam, AP</span>
                <span className="hidden sm:block text-gray-400">•</span>
                <span className="flex items-center gap-2"><span className="text-xl">📞</span> +91-9182761202</span>
                <span className="hidden sm:block text-gray-400">•</span>
                <a href="mailto:manikantavaddi7777@gmail.com" className="flex items-center gap-2 hover:text-teal-500 dark:hover:text-teal-400 transition duration-300 cursor-pointer"><span className="text-xl">✉️</span> Contact</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <a href="#contact" className="group relative px-8 py-4 font-bold text-white rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-2">Start a Conversation <span className="text-xl">→</span></span>
                </a>

                <a href="https://github.com/Mani4070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 text-gray-800 dark:text-white font-bold transition-all duration-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 flex items-center gap-2">
                    View on GitHub <span className="text-xl">🐙</span>
                </a>
            </div>
        </div>
    )
}