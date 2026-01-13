'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowUp, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer-container relative w-full bg-zinc-950 text-white overflow-hidden">
            {/* The "Reveal" magic: this div is sticky and stays behind-ish */}
            <div className="md:sticky md:bottom-0 w-full px-6 md:px-10 lg:px-36 py-20 bg-zinc-950">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 border-b border-zinc-800 pb-20">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-8 max-w-sm">
                        <Link href="/" className="text-4xl font-bold tracking-tighter">
                            Plotline<span className="text-[#355E3B]">.</span>
                        </Link>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Empowering creators to tell stories that matter through studio-grade visuals and AI-driven precision.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Product</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Features</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Pricing</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Storyboards</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Animation</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Company</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Careers</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Press</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Legal</h4>
                            <ul className="flex flex-col gap-4">
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Privacy</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Terms</Link></li>
                                <li><Link href="/" className="text-zinc-300 hover:text-white transition-colors">Security</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-8">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Plotline Technologies Inc. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors"
                    >
                        BACK TO TOP
                        <span className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-all">
                            <ArrowUp size={14} />
                        </span>
                    </button>
                </div>

                {/* Large Background Text */}
                <div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.02]">
                    <h2 className="text-[25vw] font-black leading-none text-white tracking-tighter">
                        PLOTLINE
                    </h2>
                </div>
            </div>
        </footer>
    )
}
