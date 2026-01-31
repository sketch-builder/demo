import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tours = [
    {
        id: "maldives-honeymoon",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        title: "Luxury Honeymoon in Maldives",
        price: "BDT 120,000",
        duration: "5 Days",
        rating: 4.9
    },
    {
        id: "thailand-adventure",
        image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        title: "Family Adventure in Thailand",
        price: "BDT 55,000",
        duration: "7 Days",
        rating: 4.8
    },
    {
        id: "dubai-safari",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        title: "Dubai City & Desert Safari",
        price: "BDT 85,000",
        duration: "4 Days",
        rating: 4.9
    }
];

const FeaturedTours = () => {
    return (
        <section className="py-20 bg-slate-50" id="packages">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Tour Packages</h2>
                        <p className="text-gray-600">Discover our most popular destinations</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                        View All Packages <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 flex items-center gap-1">
                                    <Star size={14} className="text-yellow-500 fill-yellow-500" /> {tour.rating}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                    <Clock size={16} />
                                    <span>{tour.duration}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{tour.title}</h3>
                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <span className="text-sm text-gray-500">Starting from</span>
                                        <p className="text-2xl font-bold text-primary">{tour.price}</p>
                                    </div>
                                    <Link to={`/package/${tour.id}`} className="bg-slate-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary transition-colors">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
