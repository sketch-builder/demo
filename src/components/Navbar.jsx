import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <a href="#" className="flex-shrink-0 flex items-center gap-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                SABREEN
                            </span>
                            <span className="text-gray-600 font-semibold tracking-wider">
                                Travels & Tours
                            </span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Packages</a>
                            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                            <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-purple-200"
                            >
                                <Phone size={18} />
                                Contact Us
                            </motion.button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white shadow-lg"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Packages</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Services</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">About</a>
                        <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-primary font-bold">
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
