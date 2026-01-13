'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Star } from 'lucide-react'
import Feature1 from '../images/feature1.png'
import Feature2 from '../images/feature2.png'
import Feature3 from '../images/feature3.png'

gsap.registerPlugin(ScrollTrigger)

export default function FeatureSection() {
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

        // Animate cards
        tl.from('.feature-card-1', {
            x: -100,
            opacity: 0,
            rotation: -15,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.feature-card-2', {
            y: 100,
            opacity: 0,
            rotation: 5,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.feature-card-3', {
            x: 100,
            opacity: 0,
            rotation: 15,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')

        // Animate text
        .from('.feature-text', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.5')

        // Floating animation for cards
        gsap.to('.feature-card-1', {
            y: -10,
            rotation: -10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })
        gsap.to('.feature-card-2', {
            y: -12,
            rotation: 6,
            duration: 4,
            delay: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })
        gsap.to('.feature-card-3', {
            y: -10,
            rotation: 10,
            duration: 3.5,
            delay: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })

    }, { scope: container })

    return (
        <div ref={container} className="py-24 px-6 md:px-10 lg:px-36 bg-white overflow-hidden">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="heading text-5xl md:text-7xl font-bold tracking-tight text-black leading-[1.1]">
                    Your stories deserve<br />
                    <span className="text-gray-400">To be Seen.</span><br />
                    <span className="text-black">Visualized Instantly.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Visuals - Tilted Cards */}
                <div className="relative h-[450px] w-full flex items-center justify-center">
                    <div className="feature-card-1 absolute left-[5%] top-12 w-[200px] md:w-[260px] transform -rotate-12 z-10 drop-shadow-2xl">
                        <Image src={Feature1} alt="Feature 1" className="rounded-2xl border-4 border-white" />
                    </div>
                    <div className="feature-card-2 absolute left-[30%] md:left-[35%] top-2 w-[220px] md:w-[280px] transform rotate-6 z-20 drop-shadow-2xl">
                        <Image src={Feature2} alt="Feature 2" className="rounded-2xl border-4 border-white" />
                    </div>
                    <div className="feature-card-3 absolute right-[5%] bottom-12 w-[200px] md:w-[260px] transform rotate-12 z-10 drop-shadow-2xl">
                        <Image src={Feature3} alt="Feature 3" className="rounded-2xl border-4 border-white" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="lg:pl-10 space-y-8">
                    <p className="feature-text text-xl md:text-2xl font-medium text-black leading-relaxed">
                        Turn your ideas into professional storyboards in minutes. No drawing skills needed—just your imagination and our powerful tools.
                    </p>
                    <p className="feature-text text-lg text-gray-600">
                        Accelerate your pre-production workflow with drag-and-drop simplicity. Iterate faster, pitch better, and bring your vision to life without the bottleneck of hiring artists early on.
                    </p>
                    
                    <div className="feature-text flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">
                        <button className="bg-black text-white cursor-pointer px-8 py-3 rounded-[15px] font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg">
                            Start Creating
                            <ArrowUpRight size={20} />
                        </button>
                        
                        <div className="flex items-center gap-2">
                            <div className="flex text-black">
                                {[1, 2, 3, 4].map((i) => (
                                    <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                                ))}
                                <Star size={20} fill="currentColor" strokeWidth={0} className="opacity-50" />
                            </div>
                            <span className="text-sm font-semibold text-black underline decoration-1 underline-offset-4">Trusted by 3000+ Creators</span>
                        </div>
                    </div>
                    
                    {/* Hand drawn decor hint */}
                     <div className="feature-text relative h-20 w-fit ml-auto mt-10">
                        <p className="font-handwriting text-black text-xl -rotate-12 absolute right-10 top-0">
                            Why creators <br/> love it
                        </p>
                         {/* Simple SVG arrow if needed, but text gives enough vibe for now */}
                         <svg className="absolute right-0 top-10 w-16 h-16 text-black" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                             <path d="M80 10 C 60 40, 40 20, 20 80 M 20 80 L 35 70 M 20 80 L 30 65" />
                         </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
