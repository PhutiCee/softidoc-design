import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-white/10 pb-10">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                        <div className="w-36 h-10 rounded-lg flex items-center justify-center">
                            {/* <Zap className="w-6 h-6 text-white" /> */}
                            <Image src={logo} height={100} width={300} alt='softidoc' />
                        </div>
                    </div>
                    <div className="flex items-center space-x-8 text-cyan-500">
                        <a href="mailto:info@softidoc.co.za" className="hover:text-cyan-400 transition-colors">info@softidoc.co.za</a>
                        {/* <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">Support</a> */}
                    </div>
                </div>
                <div className="pt-7 flex flex-col min-[520px]:flex-row items-center justify-between gap-6">
                    <ul className="flex items-center gap-9">
                        <li><a href="jaascript:;"
                            className="text-sm font-normal text-cyan-500 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Terms</a>
                        </li>
                        <li><a href="jaascript:;"
                            className="text-sm font-normal text-cyan-500 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Privacy</a>
                        </li>
                        <li><a href="jaascript:;"
                            className="text-sm font-normal text-cyan-500 transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Cookies</a>
                        </li>
                    </ul>
                    <span className='text-gray-400'>SoftiDoc (Pty) Ltd.</span>
                </div>
            </div>
        </footer>
    )
}
