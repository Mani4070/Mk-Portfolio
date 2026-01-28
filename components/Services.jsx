export default function Services() {
    const services = [
        {
            name: 'Full-Stack Web Development',
            icon: '/assets/web-icon.png',
            description: 'End-to-end web applications with React frontend and FastAPI/Node.js backend. From UI design to database architecture.',
        },
        {
            name: 'AI Integration & Development',
            icon: '/assets/ui-icon.png',
            description: 'AI-powered applications, chatbots, RAG systems, and LangChain integrations. Build intelligent solutions with Gemini, OpenAI, and more.',
        },
        {
            name: 'API Development & Optimization',
            icon: '/assets/dev-icon.png',
            description: 'RESTful APIs, real-time systems with WebSockets, database design, and performance optimization for scalable applications.',
        },
        {
            name: 'CMS & No-Code Solutions',
            icon: '/assets/graphics-icon.png',
            description: 'WordPress and Webflow websites. Fast deployment with modern design and functionality.',
        },
        {
            name: 'Frontend Development',
            icon: '/assets/mobile-icon.png',
            description: 'Responsive, modern UIs with React, Tailwind CSS. State management, performance optimization, and seamless user experiences.',
        },
        {
            name: 'Backend Development',
            icon: '/assets/code-icon.png',
            description: 'Server-side development with FastAPI (Python) and Node.js. Database design, authentication, and API architecture.',
        },
    ];

    return (
        <div id="services" className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-24">
            <h4 className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-transparent bg-clip-text">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo font-black mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-600 dark:from-teal-400 dark:via-emerald-400 dark:to-amber-300 text-transparent bg-clip-text">Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Comprehensive development services for your next project. From concept to deployment, I deliver production-ready solutions.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service) => (
                    <div key={service.name} className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 cursor-pointer overflow-hidden hover:shadow-lg duration-500 transition-all">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
                        
                        {/* Glow effect */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            <img src={service.icon} alt="" className="w-10 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">{service.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
