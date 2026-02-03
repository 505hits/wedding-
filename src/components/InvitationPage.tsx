"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Heart, GlassWater, Music, Utensils, Hotel, Car, Check } from "lucide-react";
import { useState } from "react";

export default function InvitationPage() {
    return (
        <main className="min-h-screen bg-[#FDFBF7] text-[#4A4A4A] bg-noise overflow-x-hidden selection:bg-amber-100">
            <HeroSection />
            <IntroSection />
            <TimelineSection />
            <LocationSection />
            <AccommodationSection />
            <RsvpSection />
            <Footer />
        </main>
    );
}

function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-white/40">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/f94463d2-6b84-4b8f-a16c-6d3398c99abb.mp4" type="video/mp4" />
                </video>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 max-w-3xl px-8 py-20 border-y border-stone-800/80 bg-white/30 backdrop-blur-sm shadow-sm"
            >
                <div className="mb-8">
                    <span className="block font-lato text-xs md:text-sm tracking-[0.4em] uppercase text-stone-800 mb-2 font-bold">
                        Nos Casamos
                    </span>
                    <div className="w-px h-8 bg-stone-800 mx-auto" />
                </div>

                <h1 className="font-playfair text-6xl md:text-9xl mb-8 text-stone-900 leading-[0.9]">
                    Mar <span className="text-4xl md:text-6xl align-middle italic text-stone-700 font-serif mx-2">&</span> Jaume
                </h1>

                <div className="mt-8 flex flex-col items-center gap-4">
                    <div className="w-px h-8 bg-stone-800 mx-auto" />
                    <p className="font-lato text-xl md:text-2xl tracking-[0.2em] text-stone-800 font-semibold">
                        08 . 05 . 2027
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 animate-pulse text-stone-800 z-10"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
            </motion.div>
        </section>
    );
}

function IntroSection() {
    return (
        <section className="py-24 px-6 max-w-2xl mx-auto text-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-12"
            >
                <img
                    src="/Gemini_Generated_Image_f0s8jpf0s8jpf0s8-removebg-preview.png"
                    alt="Decorative Element"
                    className="w-48 md:w-64 mx-auto opacity-90"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Heart className="w-6 h-6 text-stone-400 mx-auto mb-6" />
                <p className="font-dancing text-3xl md:text-5xl text-stone-600 leading-relaxed mb-8">
                    &quot;Contigo, cada día es una celebración. Queremos compartir nuestro día más especial con las personas que más queremos.&quot;
                </p>
            </motion.div>
        </section>
    );
}

function TimelineSection() {
    const events = [
        { time: "16:00", title: "Ceremonia Civil", icon: <Heart size={18} />, desc: "Jardines del Château" },
        { time: "18:00", title: "Cóctel & Aperitivos", icon: <GlassWater size={18} />, desc: "Terraza Principal" },
        { time: "20:30", title: "Cena de Gala", icon: <Utensils size={18} />, desc: "Gran Salón de Cristal" },
        { time: "23:00", title: "Fiesta", icon: <Music size={18} />, desc: "Hasta que salga el sol" },
    ];

    return (
        <section className="py-24 bg-stone-50/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-lato text-xs tracking-[0.3em] uppercase text-stone-400">Agenda</span>
                    <h2 className="font-playfair text-4xl md:text-5xl mt-3 text-stone-800">El Gran Día</h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-stone-200 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-left pl-12 md:pl-12" : "md:text-right pl-12 md:pr-12"}`}>
                                    <h3 className="font-playfair text-2xl text-stone-700">{event.title}</h3>
                                    <p className="font-serif text-stone-500 italic mt-1">{event.desc}</p>
                                </div>

                                {/* Icon/Dot (Center) */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-stone-50 border border-stone-200 text-stone-400 z-10 shadow-sm">
                                    {event.icon}
                                </div>

                                {/* Time Side */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12 pl-12" : "md:text-left md:pl-12 pl-12"}`}>
                                    <span className="font-lato text-sm tracking-[0.2em] text-stone-400 font-bold">
                                        {event.time}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function LocationSection() {
    return (
        <section className="py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <span className="font-lato text-xs tracking-[0.3em] uppercase text-stone-400">Ubicación</span>
                <h2 className="font-playfair text-4xl md:text-5xl mt-3 mb-12 text-stone-800">Château de Rêve</h2>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-2 shadow-sm border border-stone-100 max-w-3xl mx-auto">
                    <div className="h-64 md:h-80 bg-stone-200 w-full relative overflow-hidden group">
                        {/* Placeholder for Map Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-stone-400 bg-stone-100">
                            <MapPin size={40} className="text-stone-300" />
                            <span className="ml-2 font-serif italic">Mapa aquí</span>
                        </div>
                        <a href="#" className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>
                    <div className="text-left p-6 md:p-10 space-y-4">
                        <h3 className="font-playfair text-2xl text-stone-700">Provence, Francia</h3>
                        <p className="font-lato text-stone-500 leading-relaxed text-sm">
                            Un lugar mágico rodeado de campos de lavanda y viñedos centenarios. Disponemos de servicio de transporte desde el centro de la ciudad.
                        </p>
                        <button className="text-xs uppercase tracking-[0.2em] border-b border-stone-800 pb-1 mt-4 hover:opacity-50 transition-opacity">
                            Ver en Google Maps
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AccommodationSection() {
    return (
        <section className="py-24 bg-[#F8F6F1] px-6">
            <div className="max-w-4xl mx-auto text-center">
                <Hotel className="w-8 h-8 mx-auto text-stone-400 mb-6" />
                <h2 className="font-playfair text-3xl md:text-4xl text-stone-800 mb-12">Recomendaciones de Alojamiento</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-8 text-center border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <h3 className="font-playfair text-xl text-stone-700 mb-2">Hotel {i === 1 ? 'Central' : i === 2 ? 'Boutique' : 'Rural'}</h3>
                            <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">4 Estrellas</p>
                            <p className="font-lato text-sm text-stone-500 mb-6 leading-relaxed">
                                A solo 10 minutos del lugar de la celebración. Incluye desayuno.
                            </p>
                            <a href="#" className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-700/70 hover:text-amber-800">
                                Reservar
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-stone-500">
                    <div className="flex items-center gap-4">
                        <Car size={20} />
                        <span className="font-lato text-sm uppercase tracking-wider">Parking Gratuito</span>
                    </div>
                    <div className="w-px h-4 bg-stone-300 hidden md:block" />
                    <div className="flex items-center gap-4">
                        <Hotel size={20} />
                        <span className="font-lato text-sm uppercase tracking-wider">Descuento Boda</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RsvpSection() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simple state form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStep(2);
    };

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-white text-center">
            <div className="max-w-lg mx-auto relative z-10">
                <span className="font-dancing text-4xl text-amber-800/40 block mb-6">Rsvp</span>

                {step === 1 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="font-playfair text-4xl md:text-5xl text-stone-800 mb-4">¿Nos acompañas?</h2>
                        <p className="font-lato text-stone-500 text-sm tracking-wide">
                            Por favor, confirma antes del 1 de marzo
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6 text-left mt-8">
                            <div className="space-y-1">
                                <label className="text-xs uppercase tracking-[0.2em] text-stone-400 pl-1">Nombre Completo</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-stone-50 border-b border-stone-200 p-3 focus:outline-none focus:border-amber-400/50 focus:bg-amber-50/10 transition-colors font-serif text-stone-700"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-[0.2em] text-stone-400 pl-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-stone-50 border-b border-stone-200 p-3 focus:outline-none focus:border-amber-400/50 focus:bg-amber-50/10 transition-colors font-serif text-stone-700"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-[0.2em] text-stone-400 pl-1">Invitados</label>
                                    <select className="w-full bg-stone-50 border-b border-stone-200 p-3 focus:outline-none focus:border-amber-400/50 focus:bg-amber-50/10 transition-colors font-serif text-stone-700">
                                        <option>1 Adulto</option>
                                        <option>2 Adultos</option>
                                        <option>Familia (2+)</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-[#3A3A3A] text-white py-4 mt-8 uppercase tracking-[0.2em] text-xs font-bold hover:bg-black transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12"
                    >
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600/70 border border-green-100">
                            <Check size={32} />
                        </div>
                        <h3 className="font-playfair text-3xl text-stone-800 mb-4">¡Gracias por confirmar!</h3>
                        <p className="font-lato text-stone-500">Estamos deseando verte.</p>
                        <button
                            onClick={() => setStep(1)}
                            className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-8 hover:text-stone-600 underline decoration-stone-200 underline-offset-4"
                        >
                            Enviar otra respuesta
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="py-12 text-center text-stone-300 text-[10px] font-lato uppercase tracking-[0.3em] bg-[#2A2A2A]">
            <p>Mar & Jaume • 08.05.2027</p>
        </footer>
    );
}
