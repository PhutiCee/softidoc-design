import React from 'react'
import {
    Shield,
    Banknote,
    TrendingUp,
    Bot,
} from 'lucide-react';

export default function ProductSection() {
    const products = [
        {
            icon: <Bot className="w-12 h-12" />,
            title: "Pre-Built AI Components",
            description: "Ready-to-deploy AI models specifically designed for financial services, reducing development time from months to weeks.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <Banknote className="w-12 h-12" />,
            title: "Multiple Lending Methodologies",
            description: "Comprehensive lending solutions with AI-powered risk assessment, automated underwriting, and flexible loan products.",
            gradient: "from-blue-500 to-orange-500"
        },
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Full Range of Deposit Products",
            description: "Complete digital banking infrastructure with savings accounts, term deposits, and investment products.",
            gradient: "from-blue-500 to-orange-500"
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Multiple Insurance Products",
            description: "AI-enhanced insurance solutions including life, health, property, and specialty insurance products.",
            gradient: "from-blue-500 to-orange-500"
        }
    ];

    return (
        <section id="products" className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Our Products
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Include
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive AI-enhanced financial solutions designed for modern banking, insurance, and lending operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                        >
                            {/* Animated background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${product.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {product.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
