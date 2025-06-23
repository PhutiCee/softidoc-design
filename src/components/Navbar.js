"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

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
                            <Link
                                href="/"
                                className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '/' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '/' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>

                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductDropdownOpen(true)}
                                onMouseLeave={() => setIsProductDropdownOpen(false)}
                            >
                                <Link
                                    href="/products"
                                    className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '/products' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '/products' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                    onClick={() => handleLinkClick('/products')}
                                >
                                    Products
                                </Link>
                            </div>

                            <Link
                                href="/pricing"
                                className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '/pricing' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '/pricing' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => handleLinkClick('/pricing')}
                            >
                                Pricing
                            </Link>

                            <Link
                                href="/contact-us"
                                className={`relative text-base font-medium transition-colors duration-300 ${activeLink === '/contact-us' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 ${activeLink === '/contact-us' ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                                onClick={() => handleLinkClick('/contact-us')}
                            >
                                Contact Us
                            </Link>

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
                            <Link
                                href="/"
                                className={`block text-lg ${activeLink === '/' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('/')}
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className={`block text-lg ${activeLink === '/products' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('/products')}
                            >
                                Products
                            </Link>
                            <Link
                                href="/pricing"
                                className={`block text-lg ${activeLink === '/pricing' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('/pricing')}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/contact-us"
                                className={`block text-lg ${activeLink === '/contact-us' ? 'text-cyan-400' : 'text-white'} hover:text-cyan-400 transition-colors`}
                                onClick={() => handleLinkClick('/contact-us')}
                            >
                                Contact Us
                            </Link>
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