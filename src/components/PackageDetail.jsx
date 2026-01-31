import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, MessageCircle } from 'lucide-react';

const toursData = {
    "maldives-honeymoon": {
        title: "Luxury Honeymoon in Maldives",
        price: "BDT 120,000",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        description: "Experience the ultimate romantic getaway in the pristine islands of Maldives. Enjoy overwater villas, crystal clear waters, and candlelight dinners.",
        duration: "5 Days / 4 Nights"
    },
    "thailand-adventure": {
        title: "Family Adventure in Thailand",
        price: "BDT 55,000",
        image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        description: "A perfect mix of culture, nature, and fun for the whole family. exploring Bangkok's temples and Phuket's beaches.",
        duration: "7 Days / 6 Nights"
    },
    "dubai-safari": {
        title: "Dubai City & Desert Safari",
        price: "BDT 85,000",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        description: "Discover the marvels of modern architecture and the thrill of the desert dunes in Dubai.",
        duration: "4 Days / 3 Nights"
    }
};

const inclusions = [
    "Return Air Ticket",
    "Hotel Accommodation (4/5 Star)",
    "Daily Breakfast",
    "Visa Assistance & Processing",
    "All Transfers & Public Transport",
    "Guided City Tours"
];

const PackageDetail = () => {
    const { id } = useParams();
    const tour = toursData[id];

    if (!tour) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h2>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const whatsappMessage = encodeURIComponent(`Hi, I am interested in booking the ${tour.title} package priced at ${tour.price}. Please provide more details.`);
    const whatsappLink = `https://wa.me/8801720244135?text=${whatsappMessage}`;

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </Link>

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative h-96">
                        <img
                            src={tour.image}
                            alt={tour.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-8 md:p-12 text-white">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
                                <p className="text-2xl font-semibold opacity-90">{tour.duration}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-8 md:p-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {tour.description}
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {inclusions.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                                            <Check size={16} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg sticky top-24">
                                <p className="text-gray-500 mb-2">Total Package Price</p>
                                <div className="text-4xl font-bold text-primary mb-8">{tour.price}</div>

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-200"
                                >
                                    <MessageCircle size={24} />
                                    Book on WhatsApp
                                </a>
                                <p className="text-center text-sm text-gray-400 mt-4">
                                    Directly chat with our agent for availability
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetail;
