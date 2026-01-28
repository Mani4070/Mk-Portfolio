'use client'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'manikantavaddi7777@gmail.com',
            link: 'mailto:manikantavaddi7777@gmail.com'
        },
        {
            icon: '📞',
            label: 'Phone',
            value: '+91-9182761202',
            link: 'tel:+919182761202'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/manikantavaddi',
            link: 'https://linkedin.com'
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'github.com/manikantavaddi',
            link: 'https://github.com'
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'Srikakulam, Andhra Pradesh',
            link: '#'
        }
    ];

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setTimeout(() => {
            setResult("Message sent successfully! I'll get back to you soon.");
            event.target.reset();
            setTimeout(() => setResult(""), 3000);
        }, 1000);
        return;
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------

        formData.append("access_key", "--- enter your access key here-------");

        const res = {success:true}
        // const res = await fetch("https://api.web3forms.com/submit", {
        //     method: "POST",
        //     body: formData
        // }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    
    return (
        <div id="contact" className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] py-16 sm:py-10 scroll-mt-24 bg-gradient-to-b from-transparent via-teal-50/5 to-transparent dark:via-teal-950/5">
            <style>{`
                @keyframes float-up {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                .float-animation {
                    animation: float-up 3s ease-in-out infinite;
                }
            `}</style>
            <h4 className="text-center mb-2 text-lg font-Ovo bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-transparent bg-clip-text">Get In Touch</h4>
            <h2 className="text-center text-4xl font-Ovo font-black mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-amber-600 dark:from-teal-400 dark:via-emerald-400 dark:to-amber-300 text-transparent bg-clip-text">Let&apos;s Work Together</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">I'm open to freelance projects, full-time opportunities, and collaboration. Let's connect and discuss how we can bring your ideas to life with innovative web solutions.</p>

            {/* Contact Info Cards */}
            <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {contactInfo.map((info, index) => (
                    <a 
                        key={index}
                        href={info.link}
                        target={info.label !== 'Location' && info.label !== 'Email' && info.label !== 'Phone' ? '_blank' : undefined}
                        rel={info.label !== 'Location' && info.label !== 'Email' && info.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                        className="group relative p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/15 duration-300 hover:shadow-xl hover:shadow-teal-500/30 dark:hover:shadow-emerald-500/20 hover:-translate-y-3 transition-all overflow-hidden"
                    >
                        {/* Animated gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-transparent to-emerald-500/0 group-hover:from-teal-500/20 group-hover:via-emerald-500/15 group-hover:to-cyan-500/20 rounded-xl duration-300"></div>
                        
                        {/* Glow effect - larger and more prominent */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-300"></div>
                        
                        {/* Corner accent - top right */}
                        <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-teal-500/40 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/30"></div>
                        
                        {/* Corner accent - bottom left */}
                        <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-emerald-500/40 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100\"></div>
                        
                        <div className="relative z-10 text-center">
                            <p className="text-3xl mb-3 group-hover:scale-150 group-hover:rotate-12 transition-all duration-300 float-animation" style={{animationDelay: `${index * 0.1}s`}}>{info.icon}</p>
                            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-widest">{info.label}</p>
                            <p className="text-xs text-gray-700 dark:text-gray-400 font-medium truncate group-hover:text-teal-600 dark:group-hover:text-emerald-300 transition">{info.value}</p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto relative">
                {/* Form background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl blur-2xl -z-10 opacity-0 focus-within:opacity-100 transition-opacity duration-300"></div>
                
                <input type="hidden" name="subject" value="Manikanta - New form Submission" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 mb-8">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="flex-1 px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 outline-none border border-white/20 focus:border-teal-400 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/15 focus:shadow-lg focus:shadow-teal-500/20" 
                        required 
                        name="name" 
                    />

                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 outline-none border border-white/20 focus:border-teal-400 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/15 focus:shadow-lg focus:shadow-teal-500/20" 
                        required 
                        name="email" 
                    />
                </div>
                
                <textarea 
                    rows="6" 
                    placeholder="Enter your message" 
                    className="w-full px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0 outline-none border border-white/20 focus:border-teal-400 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-sm mb-6 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition resize-none hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/15 focus:shadow-lg focus:shadow-teal-500/20" 
                    required 
                    name="message">
                </textarea>
                
                <div className="flex flex-col items-center gap-4">
                    <button 
                        type='submit' 
                        className="py-3 px-10 flex items-center justify-between gap-2 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-emerald-500 hover:via-cyan-500 hover:to-teal-500 text-white rounded-full hover:shadow-2xl hover:shadow-teal-500/50 dark:hover:shadow-emerald-500/30 duration-300 dark:border dark:border-white/30 dark:hover:shadow-white/20 transition transform hover:scale-105 font-semibold group overflow-hidden relative"
                    >
                        <span className="relative z-10">Send Message</span>
                        <img src="/assets/right-arrow-white.png" alt="" className="w-4 relative z-10 group-hover:translate-x-2 transition-transform" />
                    </button>
                    {result && (
                        <p className={`text-sm font-medium transition-all duration-300 animate-pulse ${result.includes('successfully') ? 'text-emerald-600 dark:text-emerald-400' : 'text-teal-600 dark:text-teal-400'}`}>
                            {result}
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}