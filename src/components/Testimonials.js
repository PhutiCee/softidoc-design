import { Star } from 'lucide-react';
import React from 'react'

export default function Testimonials() {
    const testimonials = [
        {
            name: "Phuti Sekwadi",
            role: "CTO",
            company: "Metro Bank",
            content: "SoftiDoc's AI components reduced our digital transformation timeline by 70%. The pre-built solutions are game-changing.",
            rating: 5
        },
        {
            name: "Blessing Mabunda",
            role: "Head of Innovation",
            company: "First Insurance Group",
            content: "Their cognitive computing platform helped us achieve financial inclusion goals while reducing operational costs significantly.",
            rating: 5
        },
        {
            name: "Moraswi Lekgothoane",
            role: "VP of Technology",
            company: "Capital Lending Solutions",
            content: "The cloud-native architecture and AI-powered risk assessment transformed our lending operations completely.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Trusted by Financial
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Leaders Worldwide
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <div className="font-semibold text-white">{testimonial.name}</div>
                                <div className="text-cyan-400">{testimonial.role}</div>
                                <div className="text-gray-400 text-sm">{testimonial.company}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
