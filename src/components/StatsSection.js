import React from 'react'

export default function StatsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 p-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                70%
                            </div>
                            <div className="text-gray-300">Faster Implementation</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                500+
                            </div>
                            <div className="text-gray-300">Financial Institutions</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                99.9%
                            </div>
                            <div className="text-gray-300">System Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                24/7
                            </div>
                            <div className="text-gray-300">AI-Powered Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
