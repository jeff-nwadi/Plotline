import Image from 'next/image'
import Logos from '../images/Frame 124.svg'

export const ContentPage = () => {
  return (
    <div className='py-16 px-1 md:px-36 md:-mt-96'>
      <div className='hidden md:flex'>
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
        <Image src={Logos} alt="" className='py-10' />
      </div>
     
     {/* mobile screen */}
     <div className='flex md:hidden -mt-20'>
      
        <video src="/storytribe-demo.mp4" loop autoPlay muted className='w-full h-auto rounded-4xl' />
     </div>
    </div>
  )
}
