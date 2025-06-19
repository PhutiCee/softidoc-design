"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-36 h-10 rounded-lg flex items-center justify-center">
                                <Image src={logo} height={100} width={300} alt='softidoc' />
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="/"
                                className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '/' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '/' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </a>

                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductDropdownOpen(true)}
                                onMouseLeave={() => setIsProductDropdownOpen(false)}
                            >
                                <a
                                    href="#"
                                    className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '#products' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '#products' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                    onClick={() => handleLinkClick('#products')}
                                >
                                    Products
                                </a>
                                {isProductDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-xl py-2 transition-all duration-300 ease-in-out transform scale-95 opacity-0 hover:scale-100 hover:opacity-100">
                                        <a href="#feature1" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">Feature 1</a>
                                        <a href="#feature2" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">Feature 2</a>
                                        <a href="#feature3" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">Feature 3</a>
                                    </div>
                                )}
                            </div>

                            <a
                                href="#"
                                className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '#pricing' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '#pricing' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => handleLinkClick('#pricing')}
                            >
                                Pricing
                            </a>

                            <div
                                className="relative"
                                onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                                onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                            >
                                <a
                                    href="#"
                                    className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '#resources' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '#resources' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                    onClick={() => handleLinkClick('#resources')}
                                >
                                    Resources
                                </a>
                                {isResourcesDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-xl py-2 transition-all duration-300 ease-in-out transform scale-95 opacity-0 hover:scale-100 hover:opacity-100">
                                        <a href="#blog" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">Blog</a>
                                        <a href="#docs" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">Docs</a>
                                        <a href="#tutorials" className="block px-4 py-2 text-sm text-white hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">Tutorials</a>
                                    </div>
                                )}
                            </div>

                            <a
                                href="/contact-us"
                                className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '#contact' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '#contact' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => handleLinkClick('#contact')}
                            >
                                Contact Us
                            </a>

                            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden text-white"
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
                    <div className="fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg border-l border-white/20 p-6">
                        <div className="mt-16 space-y-6">
                            <a
                                href="#home"
                                className={`block text-lg ${activeLink === '#home' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('#home')}
                            >
                                Home
                            </a>
                            <a
                                href="#products"
                                className={`block text-lg ${activeLink === '#products' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('#products')}
                            >
                                Products
                            </a>
                            <a
                                href="#solutions"
                                className={`block text-lg ${activeLink === '#solutions' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('#solutions')}
                            >
                                Solutions
                            </a>
                            <a
                                href="#pricing"
                                className={`block text-lg ${activeLink === '#pricing' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('#pricing')}
                            >
                                Pricing
                            </a>
                            <a
                                href="#contact"
                                className={`block text-lg ${activeLink === '#contact' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('#contact')}
                            >
                                Contact Us
                            </a>
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 backdrop-blur-sm border border-white/20">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}