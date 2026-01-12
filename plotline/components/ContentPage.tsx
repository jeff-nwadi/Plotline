import Image from 'next/image'
import Logos from '../images/Frame 124.svg'
import TriangleUp from '../images/image 170.svg'
import TriangleDown from '../images/image 169.svg'

export const ContentPage = () => {
  return (
    <div className='py-16 px-1 md:px-36 md:-mt-96'>
      <div className='hidden md:flex'>
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
        <Image src={Logos} alt="" className='py-10' />
      </div>
     
     {/* mobile screen */}
     <div className='flex md:hidden -mt-20 relative'>    
      <Image src={TriangleDown} alt="" className='absolute -top-12 w-18 h-18' />
      <div className='px-5'>
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
      </div>
       <Image src={TriangleUp} alt="" className='absolute -bottom-12 right-0 w-18 h-18' />
     </div>
    </div>
  )
}
