import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Hotel, FileCheck, Map } from 'lucide-react';

const services = [
    {
        icon: <Ticket size={40} />,
        title: "Air Ticketing",
        description: "Best deals on domestic and international flights to anywhere in the world.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: <Hotel size={40} />,
        title: "Hotel Reservation",
        description: "Luxury to budget-friendly stays at the best rates guaranteed.",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: <FileCheck size={40} />,
        title: "Visa Assistance",
        description: "Hassle-free visa processing with expert guidance and support.",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: <Map size={40} />,
        title: "Tour Package",
        description: "Customized family, honeymoon, and group tour packages.",
        color: "bg-orange-100 text-orange-600"
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Premium Services
                    </motion.h2>
                    <motion.div
                        initial={{ w: 0 }}
                        whileInView={{ w: '100px' }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
