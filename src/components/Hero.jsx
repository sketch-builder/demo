import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Graphic */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
                <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Airplane"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 mb-6">
                        <Plane size={16} className="animate-pulse" />
                        <span className="text-sm font-medium tracking-wide uppercase">Best Travel Agency in Town</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Explore the World with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Sabreen Travels
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Your trusted partner for Air Ticketing, Hotel Reservations, Visa Assistance, and exclusive Tour Packages.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-secondary hover:bg-cyan-600 text-white rounded-full font-bold text-lg shadow-lg shadow-cyan-500/30 flex items-center gap-2"
                    >
                        Explore Packages <ArrowRight size={20} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg transition-colors"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
