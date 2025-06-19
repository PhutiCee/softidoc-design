import { ArrowRight, Banknote, Building2, Play, Shield, Smartphone } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
    const industries = [
        { name: "Banking", icon: <Building2 className="w-6 h-6" /> },
        { name: "Insurance", icon: <Shield className="w-6 h-6" /> },
        { name: "Lending", icon: <Banknote className="w-6 h-6" /> },
        { name: "Fintech", icon: <Smartphone className="w-6 h-6" /> }
    ];
    return (
        <section id="home" className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto border-b-2 border-white/10 pb-10">
                <div className="text-center">
                    <div className="inline-flex items-center px-3 md:px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 -ml-4 md:ml-0 mb-8">
                        <div className="flex items-center md:space-x-2">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex items-center text-cyan-400">
                                    {industry.icon}
                                    <span className="ml-1 text-sm">{industry.name}</span>
                                    {index < industries.length - 1 && <span className="mx-1 md:mx-2 text-white/40">•</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-blue-400">
                        Softi<span className='text-white'>Doc</span>
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-400 bg-clip-text text-transparent">
                            Fintech Solutions
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Enhanced with AI for Insurance, Banking and Lending Sectors
                    </p>

                    <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        We offer comprehensive Fintech Solutions, enabling clients to carry out lending, investing,
                        fund transfers and banking operations with cutting-edge artificial intelligence integration.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                            <span className="text-lg font-semibold">Explore Solutions</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="group flex items-center space-x-3 px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <Play className="w-5 h-5 ml-1" />
                            </div>
                            <span className="text-lg">Watch Demo</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
