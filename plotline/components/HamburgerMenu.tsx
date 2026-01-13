"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const menuLinks = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/" },
    { title: "Pricing", href: "/" },
    { title: "FAQs", href: "/" },
]

export default function HamburgerMenu() {
    const container = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const tl = useRef<gsap.core.Timeline>(null)

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 })

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            })
    }, { scope: container })

    useGSAP(() => {
        if (isOpen) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [isOpen])

    return (
        <div ref={container} className="block md:hidden">
            {/* Hamburger Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
            >
                <span className={`w-full h-0.5 transition-all duration-300 ${isOpen ? 'bg-white rotate-45 translate-y-2' : 'bg-black'}`}></span>
                <span className={`w-full h-0.5 transition-all duration-300 ${isOpen ? 'bg-white opacity-0' : 'bg-black'}`}></span>
                <span className={`w-full h-0.5 transition-all duration-300 ${isOpen ? 'bg-white -rotate-45 -translate-y-2' : 'bg-black'}`}></span>
            </button>

            {/* Menu Overlay */}
            <div className="fixed inset-0 w-screen h-screen bg-black z-40 menu-overlay"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}>

                <div className='flex flex-col justify-between h-full p-8 pt-24'>
                    <div className="flex flex-col gap-4">
                        {menuLinks.map((link, index) => (
                            <div key={index} className="overflow-hidden menu-link-item">
                                <div className="menu-link-item-holder relative">
                                    <Link
                                        href={link.href}
                                        className="text-white text-5xl sm:text-7xl font-bold tracking-tighter hover:text-gray-300 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-end border-t border-gray-800 pt-8">
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-gray-400 text-sm uppercase tracking-widest'>Get in touch</p>
                                <a href="mailto:hello@plotline.co" className='text-white text-lg font-medium'>hello@plotline.co</a>
                            </div>
                            <div className='flex gap-4'>
                                <a href="#" className='text-white hover:text-gray-300 transition-colors'>Twitter</a>
                                <a href="#" className='text-white hover:text-gray-300 transition-colors'>Instagram</a>
                                <a href="#" className='text-white hover:text-gray-300 transition-colors'>LinkedIn</a>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
