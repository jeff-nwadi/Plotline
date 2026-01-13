'use client'
import Image from 'next/image'
import Logos from '../images/Frame 124.svg'
import TriangleUp from '../images/image 170.svg'
import TriangleDown from '../images/image 169.svg'
import line1 from '../images/Frame 6.svg'
import line2 from '../images/Frame 7.svg'


export const ContentPage = () => {
    return (
    <div className='py-16 px-1 md:px-0 md:-mt-66 lg:px-36'>
      <div className='hidden lg:flex lg:flex-col lg:items-center'>
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
        <Image src={Logos} alt="" className='py-10' />
      </div>
     
     {/* mobile screen */}
     <div className='flex md:hidden lg:hidden -mt-20 relative'>
      <div>
        <Image src={line2} alt="" className='absolute -top-23 w-18 h-18' />
      </div> 
      <Image src={TriangleDown} alt="" className='absolute -top-12 w-18 h-18' />
      <div className='px-5'>
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
      </div>
     
       <Image src={TriangleUp} alt="" className='absolute -bottom-12 right-0 w-18 h-18' /> 
        <div>
           <Image src={line1} alt="" className='absolute -bottom-23 right-0 w-18 h-18' />
        </div>
     </div>

      {/* tablet screen */}
     <div className='hidden md:flex lg:hidden relative mt-30'>
      <div>
        <Image src={line2} alt="" className='absolute -top-23 w-18 h-18' />
      </div> 
      <Image src={TriangleDown} alt="" className='absolute -top-12 w-18 h-18' />
      <div className='px-5'>
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
      </div>
     
       <Image src={TriangleUp} alt="" className='absolute -bottom-12 right-0 w-18 h-18' /> 
        <div>
           <Image src={line1} alt="" className='absolute -bottom-23 right-0 w-18 h-18' />
        </div>
     </div>
    </div>
  )
}
