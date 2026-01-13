'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

// Import assets
import Blog1 from './assets/images/blog-1.png'
import Blog2 from './assets/images/blog-2.png'
import Blog3 from './assets/images/blog-3.png'
import BlogBanner from './assets/images/blog-banner.png'

gsap.registerPlugin(ScrollTrigger)

export default function BlogSection() {
    const container = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from('.blog-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.blog-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.sub-banner', {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')

    }, { scope: container })

    const posts = [
        {
            image: Blog1,
            date: "Dec 26, 2025",
            tag: "Product Updates",
            title: "Updates to AI Credits on StoryTribe 🚀",
            excerpt: "We're updating how AI credits work on StoryTribe. We've moved from daily limits to flexible monthly credits.",
            color: "bg-orange-100 text-orange-700"
        },
        {
            image: Blog2,
            date: "Dec 8, 2025",
            tag: "Product Updates",
            title: "Big year-end updates: AI image prompting and more",
            excerpt: "We're wrapping the year with three new features...and one huge milestone: StoryTribe just crossed 400,000 users! 🎉",
            color: "bg-purple-100 text-purple-700"
        },
        {
            image: Blog3,
            date: "Dec 5, 2025",
            tag: "Community",
            title: "StoryTribe Update: Oct 2025",
            excerpt: "Discover StoryTribe's October 2025 update: alignment tools, movable annotations, 200+ templates, new poses.",
            color: "bg-blue-100 text-blue-700"
        }
    ]

    return (
        <div ref={container} className="py-24 px-6 md:px-10 lg:px-36 bg-white text-black overflow-hidden">
            
            {/* Header */}
            <div className="flex flex-col items-center mb-16 text-center blog-header">
                <h4 className="text-[#355E3B] font-bold mb-4 tracking-wide uppercase text-sm">News & Blog</h4>
                <h2 className="heading text-5xl font-bold tracking-tight mb-6">Read our stories</h2>
                <a href="#" className="group flex items-center gap-1 font-medium border-b border-black pb-0.5 hover:gap-2 transition-all">
                    View all <ArrowRight size={16} />
                </a>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {posts.map((post, index) => (
                    <div key={index} className="blog-card group cursor-pointer">
                        <div className="overflow-hidden rounded-[24px] mb-6 border border-gray-100 shadow-sm relative aspect-4/3">
                            <Image 
                                src={post.image} 
                                alt={post.title} 
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex items-center gap-3 text-sm mb-3">
                            <span className="text-gray-500 font-medium">{post.date}</span>
                            <span className={`px-2 py-0.5 rounded-full font-bold text-xs ${post.color}`}>
                                {post.tag}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:underline underline-offset-4 decoration-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {post.excerpt}
                        </p>
                    </div>
                ))}
            </div>

            {/* Subscription Banner */}
            <div className="sub-banner rounded-[40px] border border-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-white relative overflow-hidden">
                 <div className="flex-1 z-10">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 heading">Get exclusive updates</h2>
                     <p className="text-gray-600 mb-8 max-w-md text-lg">
                         Be the first to hear from Plotline Team about our progress and exciting opportunities to collaborate.
                     </p>
                     <div className="flex gap-4 w-full max-w-md flex-col md:flex-row">
                         <input 
                            type="email" 
                            placeholder="E-mail address" 
                            className="flex-1 px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-black transition-colors"
                         />
                         <button className="bg-black text-white px-8 py-3 rounded-xl font-bold whitespace-nowrap hover:bg-zinc-800 transition-colors">
                             Keep me updated
                         </button>
                     </div>
                 </div>
                 <div className="flex-1 w-full flex justify-end relative h-full min-h-[300px] md:min-h-[auto]">
                     <Image src={BlogBanner} alt="Community" className="object-contain w-full max-w-[400px]" />
                 </div>
            </div>

        </div>
    )
}
