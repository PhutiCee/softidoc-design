"use client"
import React, { useState, useEffect } from 'react';
import {
    Calendar,
    Clock,
    Users,
    MessageSquare,
    FileText,
    Zap,
    Shield,
    BarChart3,
    ChevronRight,
    Play,
    CheckCircle,
    Star,
    ArrowRight,
    Menu,
    X
} from 'lucide-react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function SoftiDocHomepage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Smart Scheduling",
            description: "AI-powered schedule optimization that reduces conflicts by 85% and saves managers 50% of their time."
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Real-Time Tracking",
            description: "Advanced time tracking with biometric integration and automated timesheet generation."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Team Management",
            description: "Centralized employee profiles, skills tracking, and performance analytics in one platform."
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Unified Communication",
            description: "Secure team messaging with read receipts, file sharing, and integrated video calls."
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Digital HR",
            description: "Paperless onboarding, document management, and compliance tracking with e-signatures."
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Advanced Analytics",
            description: "Real-time dashboards with predictive insights and customizable reporting."
        }
    ];

    const testimonials = [
        {
            name: "Blessing Mabunda",
            role: "Operations Manager",
            company: "TechFlow Inc",
            content: "SoftiDoc transformed our workforce management. 50% less time on scheduling, 100% more efficiency.",
            rating: 5
        },
        {
            name: "Yandhile",
            role: "HR Director",
            company: "Global Dynamics",
            content: "The AI-powered insights helped us reduce overtime costs by 30% while improving employee satisfaction.",
            rating: 5
        },
        {
            name: "Moraswi Lekgothoane",
            role: "Team Lead",
            company: "InnovateCorp",
            content: "Best workforce platform we've used. The glassmorphism UI is not just beautiful, it's incredibly intuitive.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-36 h-10 rounded-lg flex items-center justify-center">
                                {/* <Zap className="w-6 h-6 text-white" /> */}
                                <Image src={logo} height={100} width={300} alt='softidoc' />
                            </div>
                            {/* <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-gray-400 bg-clip-text text-transparent">
                                SoftiDoc
                            </span> */}
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
                            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
                            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
                            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                                Start Free Trial
                            </button>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-md border-l border-white/10 p-6">
                        <div className="mt-16 space-y-6">
                            <a href="#features" className="block text-lg hover:text-cyan-400 transition-colors">Features</a>
                            <a href="#solutions" className="block text-lg hover:text-cyan-400 transition-colors">Solutions</a>
                            <a href="#pricing" className="block text-lg hover:text-cyan-400 transition-colors">Pricing</a>
                            <a href="#contact" className="block text-lg hover:text-cyan-400 transition-colors">Contact</a>
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-sm">Trusted by 10,000+ companies worldwide</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            SoftiDoc
                            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Smart Financial Technologies
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            We offer Fintech Solutions, enabling our clients to carry out a range of operations such as Lending, Investing, Fund Transfers and Banking.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href={"https://documentextraction.softidoc.co.za/"} className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                                <span className="text-lg font-semibold">Start Free Trial</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="group flex items-center space-x-3 px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <Play className="w-5 h-5 ml-1" />
                                </div>
                                <span className="text-lg">Watch Demo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Powerful Features for
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Modern Teams
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Everything you need to manage, communicate, and optimize your workforce in one intelligent platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 p-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    10,000+
                                </div>
                                <div className="text-gray-300">Companies Trust Us</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    50%
                                </div>
                                <div className="text-gray-300">Time Saved on Scheduling</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    99.9%
                                </div>
                                <div className="text-gray-300">Uptime Guaranteed</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    24/7
                                </div>
                                <div className="text-gray-300">Expert Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Loved by Teams
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Worldwide
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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 p-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform
                            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Your Workforce?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of companies already using SoftiDoc to streamline their operations and boost productivity.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                                Start Your Free Trial
                            </button>
                            <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg">
                                Schedule a Demo
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 mt-6">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                SoftiDoc
                            </span>
                        </div>
                        <div className="flex items-center space-x-8 text-gray-400">
                            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
                            <span>© 2025 SoftiDoc. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}