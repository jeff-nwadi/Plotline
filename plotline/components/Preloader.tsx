'use client'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Preloader() {
    const container = useRef(null)
    const [isComplete, setIsComplete] = useState(false)

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsComplete(true)
        })

        // Initial state
        tl.set('.preloader-text', { y: 100, opacity: 0 })
          .set('.preloader-bg', { y: 0 })

        // Text Animation
        tl.to('.preloader-text', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.out',
            delay: 0.2
        })
        
        // Pause
        .to({}, { duration: 0.5 })

        // Exit Animation
        .to('.preloader-text', {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.in'
        })
        .to('.preloader-bg', {
            y: '-100%',
            duration: 1.2,
            ease: 'power4.inOut'
        }, '-=0.4')

    }, { scope: container })

    if (isComplete) return null

    return (
        <div ref={container} className="fixed inset-0 z-50 pointer-events-none">
            <div className="preloader-bg absolute inset-0 bg-black flex items-center justify-center">
                <div className="overflow-hidden">
                    <h1 className="preloader-text text-white text-6xl md:text-8xl font-bold tracking-tight heading">
                        Plotline
                    </h1>
                </div>
            </div>
        </div>
    )
}
