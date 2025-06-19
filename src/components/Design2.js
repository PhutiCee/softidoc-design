"use client"
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import WhatWeDoSection from './WhatWeDoSection';
import StatsSection from './StatsSection';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

export default function SoftiDocHomepage2() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
            {/* Animated Background with Financial Theme */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div> */}
                {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div> */}
                {/* <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div> */}

                {/* Floating geometric shapes */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-purple-400/20 rounded-full animate-ping-slow"></div>
            </div>

            {/* Navigation */}
            {/* <Navbar /> */}

            {/* Hero Section */}
            <HeroSection />

            {/* Products Section */}
            <ProductSection />

            {/* What We Do Section */}
            <WhatWeDoSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <CallToAction />

            {/* Footer */}
            <Footer />
        </div>
    );
}