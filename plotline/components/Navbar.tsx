"use client"
import { CircleUserRound, Hamburger, Menu } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    const showUnderline = isActive || isHovered;

    return (
        <Link
            href={href}
            className="relative py-1 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={`relative z-10 font-medium transition-colors duration-200 ${isActive ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                {children}
            </span>
            <AnimatePresence>
                {showUnderline && (
                    <motion.div
                        initial={isActive ? { opacity: 1, y: 0, scaleX: 1 } : { opacity: 0, y: 5, scaleX: 0 }}
                        animate={{ opacity: 1, y: 0, scaleX: 1 }}
                        exit={{ opacity: 0, y: 5, scaleX: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-0 right-0 bottom-[-4px] flex justify-center pointer-events-none"
                    >
                        <svg width="43" height="5" viewBox="0 0 43 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[46px]">
                            <motion.path
                                d="M1.00024 2.88444C2.54192 2.03901 4.48937 0.753785 6.35654 1.04104C6.9924 1.13887 7.7938 1.37115 8.28689 1.80623C8.6531 2.12935 8.63932 2.75436 9.08686 2.98879C10.9332 3.95593 13.3344 1.98013 15.2257 1.98013C16.716 1.98013 16.8597 3.28493 17.9908 3.61485C19.8484 4.15663 22.3498 2.60663 24.1993 2.32794C25.4581 2.13825 25.9843 2.97328 27.1904 3.12791C28.5851 3.30672 30.1005 3.2538 31.5033 3.12791C34.9056 2.82257 38.3051 3.28315 41.6942 2.88444"
                                stroke="#090909"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={isActive ? { pathLength: 1 } : { pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.4, delay: isActive ? 0 : 0.1 }}
                            />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </Link>
    );
};

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='py-5 px-1 md:px-36'>
            <div className='md:flex justify-between items-center hidden '>
                <div>
                    <h1 className='heading text-2xl'>Plotline</h1>
                </div>
                <ul className='flex gap-8 items-center'>
                    <NavLink href="/" isActive={pathname === "/"}>Home</NavLink>
                    <NavLink href="/features" isActive={pathname === "/features"}>Features</NavLink>
                    <NavLink href="/pricing" isActive={pathname === "/pricing"}>Pricing</NavLink>
                    <NavLink href="/faq" isActive={pathname === "/faq"}>FQAs</NavLink>
                </ul>
                <div className='flex gap-5'>
                    <motion.button 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className='bg-white text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[3px] hover:border-b-4'>
                        <CircleUserRound size={25} />
                        Login/Sign Up 
                    </motion.button>
                </div>
            </div>

            {/* mobile screen */}
            <div className='md:hidden flex justify-between items-center'>
                <div>
                    <h1 className='heading text-3xl'>Plotline</h1>
                </div>
                <div className='flex gap-1 items-center'>
                    <motion.button 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className='bg-white text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[3px] hover:border-b-4'>
                        <CircleUserRound size={25} />
                        Login/Sign Up 
                    </motion.button>
                    <div>
                        <Menu size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}
