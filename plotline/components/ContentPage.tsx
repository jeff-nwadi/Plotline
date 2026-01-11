import Image from 'next/image'
import Storyboard from '../images/StoryTribe Demo - Jan 2024 0-22 screenshot 1.svg'
import Logos from '../images/Frame 124.svg'

export const ContentPage = () => {
  return (
    <div className='py-16 px-36 -mt-96'>
        <Image src={Storyboard} alt="" className='' />
        <Image src={Logos} alt="" className='py-10' />
    </div>
  )
}
