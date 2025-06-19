import Link from 'next/link'
import React from 'react'

export default function CallToAction() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 p-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Your Financial Services?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of financial institutions already leveraging our AI-powered solutions
                        to achieve digital transformation and financial inclusion.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href={"https://documentextraction.softidoc.co.za/#contacts"} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                            Schedule Consultation
                        </Link>
                        <Link href={"https://documentextraction.softidoc.co.za/#contacts"} className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg">
                            Request Demo
                        </Link>
                    </div>
                    <p className="text-sm text-gray-400 mt-6">
                        Custom solutions available • Enterprise support • Regulatory compliance included
                    </p>
                </div>
            </div>
        </section>
    )
}
