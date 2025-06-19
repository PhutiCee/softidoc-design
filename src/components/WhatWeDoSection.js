import React from 'react'
import {
    Brain,
    Database,
    Building2,
    Cloud,
    Lock,
    Users
} from 'lucide-react';

export default function WhatWeDoSection() {
    const solutions = [
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Artificial Intelligence Solutions",
            description: "Boutique AI products for financial inclusion with composite application development and complex system integration."
        },
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Digital Core Banking",
            description: "Cloud-native, AI-first banking systems that dramatically accelerate digital transformation and reduce operational costs."
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Cognitive Computing",
            description: "Real-time data analysis through cognitive systems to enhance business processes and decision making."
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud-Agnostic Platform",
            description: "Advanced cloud-native technology that helps clients go live faster with complete flexibility."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Financial Inclusion",
            description: "Digital automation that brings services to people invisible in traditional financial systems."
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "API-First Architecture",
            description: "Secure, scalable APIs that integrate seamlessly with existing banking and financial infrastructure."
        }
    ];
    return (
        <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        What We Do
                        {/* <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Do
                            </span> */}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                        Fintech solutions enhanced with AI for the Insurance, Banking and Lending Sectors
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    {solution.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                                {solution.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {solution.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
