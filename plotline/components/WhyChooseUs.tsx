'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Sparkles, Share2, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.fromTo('.why-title', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo('.why-card', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
            '-=0.4'
        )

    }, { scope: container })

    // Features array removed in favor of direct JSX for individual rotation control


    return (
        <div ref={container} className="py-32 px-6 md:px-10 lg:px-36 bg-black text-white relative overflow-hidden">
             {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#2a4a2f]/20 to-transparent blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center mb-24 text-center max-w-4xl mx-auto">
                <h2 className="why-title heading text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                    Why Creators are<br/>
                    <span className="text-gray-400">Switching to Plotline</span>
                </h2>
                <p className="why-title text-xl text-gray-400 max-w-2xl">
                    Join thousands of directors, agencies, and creators who are saving time and budget without compromising on their vision.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                {/* Card 1: Lightning Fast Speed */}
                <div className="why-card group p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-8 hover:rotate-0 hover:z-20 md:-rotate-12 transform-gpu">
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-[#355E3B]/20 flex items-center justify-center text-[#4a7a58] group-hover:bg-[#355E3B] group-hover:text-white transition-colors duration-300">
                        <Zap size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Lightning Fast Speed</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Go from concept to storyboard in minutes, not days. Our AI accelerates your workflow instantly.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Learn more <ArrowRight size={16} />
                    </div>
                </div>

                {/* Card 2: Premium AI Quality */}
                <div className="why-card group p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-8 hover:rotate-0 hover:z-20 md:rotate-0 md:-translate-y-8 transform-gpu">
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-[#355E3B]/20 flex items-center justify-center text-[#4a7a58] group-hover:bg-[#355E3B] group-hover:text-white transition-colors duration-300">
                        <Sparkles size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Premium AI Quality</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Generate studio-grade visuals that look consistent and professional. No more wonky AI artifacts.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Learn more <ArrowRight size={16} />
                    </div>
                </div>

                {/* Card 3: Seamless Collaboration */}
                <div className="why-card group p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-8 hover:rotate-0 hover:z-20 md:rotate-12 transform-gpu">
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-[#355E3B]/20 flex items-center justify-center text-[#4a7a58] group-hover:bg-[#355E3B] group-hover:text-white transition-colors duration-300">
                        <Share2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Seamless Collaboration</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Share links, gather feedback, and iterate with your team in real-time. Built for production pipelines.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        Learn more <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}
