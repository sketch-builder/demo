import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                SABREEN
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Your trusted partner for all travel needs. We ensure a smooth and memorable journey for you and your loved ones.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Tour Packages</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-primary flex-shrink-0" size={24} />
                                <span>RH Home Center, Level# 02 Room# 204, 74/B/1, Green Road, Dhaka - 1215</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-primary flex-shrink-0" size={24} />
                                <div className="flex flex-col">
                                    <span>+8801720-244135, +8801876-676537</span>
                                    <span>+8801689-015577, +8801904-475911</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-primary flex-shrink-0" size={24} />
                                <span>sabreentnt@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sabreen Travels & Tours. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
