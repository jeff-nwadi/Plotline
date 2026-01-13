'use client'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
    {
        question: "What exactly is Plotline?",
        answer: "Plotline is a professional storyboarding and visual storytelling platform that uses proprietary AI to help creators, directors, and agencies turn scripts into high-quality visuals instantly, without needing professional drawing skills."
    },
    {
        question: "Do I need to be an artist to use it?",
        answer: "Absolutely not. Plotline is designed for everyone. Whether you're a director with a vision or a business owner needing a pitch deck, our AI handles the artistic execution while you maintain creative control."
    },
    {
        question: "How does the AI character consistency work?",
        answer: "Our advanced models allow you to define a character once and maintain their appearance, clothing, and features across multiple frames and scenes, ensuring a cohesive visual narrative."
    },
    {
        question: "Can I export my projects for production?",
        answer: "Yes. You can export your storyboards in high-resolution PDF, PNG, or even as presentation-ready slides. We also support integration with common production software."
    },
    {
        question: "Is there a free trial available?",
        answer: "We offer a 'Free Forever' tier that lets you create your first story at no cost. For professional features like character training and high-res exports, we have flexible subscription plans."
    }
]

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out'
            })
            gsap.to(iconRef.current, {
                rotate: 45,
                duration: 0.4,
                ease: 'back.out(1.7)'
            })
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            })
            gsap.to(iconRef.current, {
                rotate: 0,
                duration: 0.4,
                ease: 'power3.in'
            })
        }
    }, [isOpen])

    return (
        <div className="faq-item border-b border-gray-100 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left group"
            >
                <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#355E3B] transition-colors duration-300">
                    {faq.question}
                </h3>
                <div
                    ref={iconRef}
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#355E3B] group-hover:text-white transition-all duration-300"
                >
                    <Plus size={20} />
                </div>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden h-0 opacity-0"
            >
                <p className="text-gray-500 text-lg leading-relaxed pt-4 max-w-3xl">
                    {faq.answer}
                </p>
            </div>
        </div>
    )
}

export default function FAQSection() {
    const container = useRef(null)

    useGSAP(() => {
        gsap.from('.faq-header', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })

        gsap.from('.faq-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        })
    }, { scope: container })

    return (
        <section ref={container} className="py-24 px-6 md:px-10 lg:px-36 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="faq-header mb-16">
                    <h4 className="text-[#355E3B] font-bold mb-4 tracking-wide uppercase text-sm">Common Questions</h4>
                    <h2 className="heading text-5xl md:text-7xl font-bold tracking-tight">FAQ<span className="text-gray-300">s</span></h2>
                </div>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>

                <div className="mt-20 p-10 rounded-[40px] bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-8 faq-item">
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Still have questions?</h3>
                        <p className="text-gray-500 text-lg">We’re here to help you get started with Plotline.</p>
                    </div>
                    <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    )
}
