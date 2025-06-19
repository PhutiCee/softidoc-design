import Image from "next/image";
import img from '@/assets/img.png';
import phone from '@/assets/phone.png';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-200 to-indigo-400 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-8xl md:text-8xl font-bold text-blue-500 leading-tight">
                        Softi<span className="text-white">Doc</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Fintech solutions enhanced with AI for the Insurance, Banking and Lending Sectors
                    </p>
                    <div className="mt-8 flex justify-center md:justify-start space-x-4">
                        <a
                            href="#"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
                        >
                            Try it free
                        </a>
                        <a
                            href="#"
                            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50"
                        >
                            Book a demo
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    {/* Placeholder for image or video */}
                    <div className="h-64 md:h-96 rounded-lg flex items-center justify-center">
                        {/* <span className="text-gray-500">Image/Video Placeholder</span> */}
                        <Image src={phone} height={300} width={200} alt="image" className="md:h-[600px] md:w-[650px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}