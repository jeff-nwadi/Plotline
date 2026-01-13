import React from 'react'
import Image from 'next/image'
import Vector11 from '../images/Vector 11.svg'
import Arrow from '../images/arrow.svg'
import NoCreditCard from '../images/No Credit.svg'
import Avater from './Avater'

export const LandingPage = () => {
    return (
        <div className='py-16 px-0 md:px-36'>
            <div className='text-center hidden lg:flex lg:flex-col'>
                <h3 className='text-4xl font-medium mb-6 tracking-tight'>Create Stunning Visuals and Professional Stories</h3>
                <h1 className='text-7xl gap-2 mb-6 tracking-tight heading'>
                    <span>Without Ever </span>
                    <span className='text-black relative'>
                        Needing an Artist License
                        <Image src={Vector11} alt="" className='absolute bottom-[-10px] right-0' />
                    </span>
                </h1>
                <p className='text-xl font-medium tracking-tight text-center max-w-[750px] mx-auto pt-4 pb-8'>
                    Create stunning illustrations and storyboards within minutes without drawing. Quickly iterate on ideas and produce professional results without breaking your bank.
                </p>
                <div className='flex justify-center'>
                    <div className='relative w-fit'>
                        <button className=' bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                            <span className='text-3xl'>🎨</span>
                            Create Your Free Story
                        </button>
                        <Image src={Arrow} alt="" className='absolute top-3 left-[105%] w-20' />
                        <Image src={NoCreditCard} alt="" className='absolute top-16 left-[110%] w-32 whitespace-nowrap' />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center py-6'>
                    <div className='flex items-center gap-2'>
                        <Avater />
                        ⭐⭐⭐⭐
                    </div>
                    <p className='text-lg font-medium tracking-tight pt-2'>Used by 150+ Professional Users</p>
                </div>
            </div>


            {/* mobile screen */}

            <div className='text-center flex flex-col md:hidden'>
                <h3 className='text-xl font-medium mb-6 tracking-tight'>You Don’t Need to be A Pro Artist <br /> Professional Stories</h3>
                <h1 className='text-5xl gap-2 mb-6 tracking-tight heading max-w-xl m-auto'>
                    <span className='text-black '>
                       to Create Stunning Visuals
                        <Image src={Vector11} alt="" className='w-60 m-auto' />
                    </span>
                </h1>
                <p className='text-md font-medium tracking-tight text-center max-w-[500px] mx-auto pt-4 pb-8'>
                    Create stunning illustrations and storyboards within minutes without drawing. Quickly iterate on ideas and produce professional results without breaking your bank.
                </p>
                <div className='flex justify-center flex-col items-center'>
                    <button className=' bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                        <span className='text-3xl'></span>
                        Create Your Free Story
                    </button>

                    <p className='heading text-lg'>No Credit Card Required</p>
                </div>
                <div className='flex flex-col items-center justify-center py-6'>
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
            <div className='hidden md:flex lg:hidden'>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium mb-6 tracking-tight'>Create Stunning Visuals and Professional Stories</h3>
                    <h1 className='text-7xl gap-2 mb-6 tracking-tight heading'>
                        <span>Without Ever </span>
                        <span className='text-black relative'>
                            Needing an Artist License
                            <Image src={Vector11} alt="" className='absolute bottom-[-10px] right-0' />
                        </span>
                    </h1>
                    <p className='text-xl font-medium tracking-tight text-center max-w-[750px] mx-auto pt-4 pb-8'>
                        Create stunning illustrations and storyboards within minutes without drawing. Quickly iterate on ideas and produce professional results without breaking your bank.
                    </p>
                    <div className='flex justify-center flex-col items-center'>
                        <button className=' bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                            <span className='text-3xl'>🎨</span>
                            Create Your Free Story
                        </button>

                        <p className='heading text-lg'>No Credit Card Required</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-6'>
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
