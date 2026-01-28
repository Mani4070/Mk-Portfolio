export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#top">
                    <img src="/assets/venture.png" alt="Manikanta Vaddi" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/venture.png" alt="Manikanta Vaddi" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto mb-4">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:manikantavaddi7777@gmail.com" className="hover:text-teal-500 dark:hover:text-emerald-400 transition">manikantavaddi7777@gmail.com</a>
                </div>

                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-sm text-gray-600 dark:text-white/70">📍 Srikakulam, AP</span>
                    <span className="text-sm text-gray-600 dark:text-white/70">📞 +91-9182761202</span>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-teal-400/30 dark:border-emerald-400/30 mx-4 sm:mx-6 md:mx-12 lg:mx-[10%] mt-12 py-3">
                <p className="text-sm text-gray-600 dark:text-white/70">© {new Date().getFullYear()} Manikanta Vaddi • All rights reserved.</p>
                <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/manikantavaddi" rel="noopener noreferrer" className="text-gray-600 dark:text-white/70 hover:text-teal-500 dark:hover:text-emerald-400 transition">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/manikanta-vaddi/" rel="noopener noreferrer" className="text-gray-600 dark:text-white/70 hover:text-teal-500 dark:hover:text-emerald-400 transition">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}