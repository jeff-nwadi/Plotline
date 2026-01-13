'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Vector11 from '../images/Vector 11.svg'
import Arrow from '../images/arrow.svg'
import NoCreditCard from '../images/No Credit.svg'
import Avater from './Avater'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



export const LandingPage = () => {
    const container = useRef(null)

    useGSAP(() => {
        // Delay start to match preloader exit (approx 2.5s)
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 2.5 })

        tl.fromTo('.hero-sub',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
        )
            .fromTo('.hero-title span',
                { y: 50, opacity: 0, skewY: 7 },
                { y: 0, opacity: 1, skewY: 0, duration: 1, stagger: 0.15 },
                '-=0.6'
            )
            .fromTo('.hero-desc',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.6'
            )
            .fromTo('.hero-btn',
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
                '-=0.4'
            )
            .fromTo('.hero-stats',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.6'
            )
            .fromTo('.floating-decor',
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
                '-=0.4'
            )

        // Continuous floating animation
        gsap.to('.floating-decor', {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
                each: 0.5,
                from: 'random'
            }
        })

    }, { scope: container })

    return (
        <div ref={container} className='py-18 px-0 md:px-36 overflow-hidden'>
            <div className='text-center hidden lg:flex lg:flex-col items-center'>
                <h3 className='hero-sub opacity-0 text-4xl font-medium mb-6 tracking-tight'>You Don’t Need to be A Pro Artist</h3>
                <h1 className='hero-title text-7xl gap-2 mb-6 tracking-tight heading flex flex-col items-center'>
                    <span className='inline-block opacity-0'>Without Ever</span>
                    <span className='text-black relative w-fit inline-block opacity-0'>
                        to Create Stunning Visuals
                        <Image src={Vector11} alt="" className='absolute bottom-[-10px] right-0 w-72 whitespace-nowrap mt-2' />
                    </span>
                </h1>
                <p className='hero-desc opacity-0 text-xl font-medium tracking-tight text-center max-w-[750px] mx-auto pt-4 pb-8'>
                    Create stunning illustrations and storyboards within minutes without drawing. Quickly iterate on ideas and produce professional results without breaking your bank.
                </p>
                <div className='flex justify-center'>
                    <div className='relative w-fit'>
                        <button className='hero-btn opacity-0 bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                            Create Your Free Story
                            <ArrowRight />
                        </button>
                        <Image src={Arrow} alt="" className='floating-decor opacity-0 absolute top-0 left-[105%] w-20' />
                        <Image src={NoCreditCard} alt="" className='floating-decor opacity-0 absolute top-16 left-[110%] w-32 whitespace-nowrap' />
                    </div>
                </div>
                <div className='hero-stats opacity-0 flex flex-col items-center justify-center py-6'>
                    <div className='flex items-center gap-2'>
                        <Avater />
                        ⭐⭐⭐⭐
                    </div>
                    <p className='text-lg font-medium tracking-tight pt-2'>Used by 150+ Professional Users</p>
                </div>
            </div>


            {/* mobile screen */}

            <div className='text-center flex flex-col md:hidden items-center'>
                <h3 className='hero-sub opacity-0 text-xl font-medium mb-2 tracking-tight'>You Don’t Need to be A Pro Artist</h3>
                <h1 className='hero-title text-4xl gap-2 mb-6 tracking-tight font-bold max-w-xl m-auto flex flex-col'>
                    <span className='inline-block opacity-0'>Without Ever</span>
                    <span className='text-black inline-block relative opacity-0'>
                        to Create Stunning Visuals
                        <Image src={Vector11} alt="" className='w-44 m-auto mt-1' />
                    </span>
                </h1>
                <p className='px-5 hero-desc opacity-0 text-sm font-medium tracking-tight text-center max-w-[500px] mx-auto pt-4 pb-8'>
                    Create stunning illustrations and storyboards within minutes without drawing. Quickly iterate on ideas and produce professional results without breaking your bank.
                </p>
                <div className='flex justify-center flex-col items-center'>
                    <button className='hero-btn opacity-0 bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                        Create Your Free Story
                        <ArrowRight />
                    </button>

                    <p className='hero-btn opacity-0 text-sm mt-4'>No Credit Card Required</p>
                </div>
                <div className='hero-stats opacity-0 flex flex-col items-center justify-center py-6'>
                    <div className='flex items-center gap-2 flex-col'>
                        <Avater />
                        <div>
                            ⭐⭐⭐⭐
                        </div>
                    </div>
                    <p className='text-md font-medium tracking-tight pt-2'>Used by 150+ Professional Users</p>
                </div>
            </div>

            {/* tablet screen */}
            <div className='hidden md:flex lg:hidden justify-center'>
                <div className='text-center flex flex-col items-center'>
                    <h3 className='hero-sub opacity-0 text-2xl font-medium mb-6 tracking-tight'>You Don’t Need to be A Pro Artist</h3>
                    <h1 className='hero-title text-5xl gap-2 mb-6 tracking-tight heading flex flex-col'>
                        <span className='inline-block opacity-0'>Without Ever </span>
                        <span className='text-black relative w-fit inline-block opacity-0'>
                            to Create Stunning Visuals
                            <Image src={Vector11} alt="" className='absolute bottom-[-10px] right-30 w-60 whitespace-nowrap' />
                        </span>
                    </h1>
                    <p className='hero-desc opacity-0 text-xl font-medium tracking-tight text-center max-w-[750px] mx-auto pt-4 pb-8'>
                        Create stunning illustrations and storyboards within minutes without drawing. Quickly iterate on ideas and produce professional results without breaking your bank.
                    </p>
                    <div className='flex justify-center flex-col items-center relative'>
                        <div className='relative'>
                            <button className='hero-btn opacity-0 bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                                Create Your Free Story
                                <ArrowRight />
                            </button>
                            <Image src={Arrow} alt="" className='floating-decor opacity-0 absolute top-0 left-[110%] w-16' />
                        </div>
                        <p className='hero-btn opacity-0 heading text-lg mt-4'>No Credit Card Required</p>
                    </div>
                    <div className='hero-stats opacity-0 flex flex-col items-center justify-center py-6'>
                        <div className='flex items-center gap-2'>
                            <Avater />
                            ⭐⭐⭐⭐
                        </div>
                        <p className='text-lg font-medium tracking-tight pt-2'>Used by 150+ Professional Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
