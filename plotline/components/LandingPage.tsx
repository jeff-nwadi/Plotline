import React from 'react'
import Image from 'next/image'
import Vector11 from '../images/Vector 11.svg'
import Arrow from '../images/arrow.svg'
import NoCreditCard from '../images/No Credit.svg'
import Avater from './Avater'

export const LandingPage = () => {
    return (
        <div className='py-16 px-36'>
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
                <div className='flex justify-center relative'>
                    <button className=' bg-linear-65 from-[#F8EB78] to-[#C0FEBE] text-black px-6 font-bold py-2 rounded-[15px] cursor-pointer flex items-center gap-2 border border-black border-b-[4px] active:border-b active:translate-y-[2px] transition-all duration-75'>
                        <span className='text-3xl'>🎨</span>
                        Create Your Free Story
                    </button>
                    <Image src={Arrow} alt="" className='absolute bottom-[-18px] right-96' />
                    <Image src={NoCreditCard} alt="" className='absolute -bottom-15 right-80' />
                </div>
                <div className='flex flex-col items-center justify-center py-6'>
                    <div className='flex items-center gap-2'>
                        <Avater />
                        <Avater />
                        ⭐⭐⭐⭐ 
                    </div>
                    <p className='text-lg font-medium tracking-tight pt-2'>Used by 150+ Professional Users</p>
                </div>
            </div>

        </div>
    )
}
