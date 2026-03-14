import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Code } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="nav-container">
            <nav className={`transition-all duration-300 glass floating-nav w-full flex justify-between items-center`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#" className="flex items-center gap-2 text-xl font-bold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-emerald-500" style={{ padding: '0.4rem', borderRadius: '0.5rem', background: 'linear-gradient(135deg, var(--accent-ml), var(--accent-web))' }}>
                        <Cpu size={20} color="white" />
                    </div>
                    <span>Garvit</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8" style={{ gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link text-sm font-medium hover:text-emerald-400 transition-colors" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-20 left-0 right-0 glass rounded-3xl p-6 md:hidden"
                            style={{ position: 'absolute', top: '5rem', left: 0, right: 0, padding: '1.5rem', borderRadius: '1.5rem', zIndex: 100 }}
                        >
                            <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium p-2 hover:text-emerald-400 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '1.125rem', fontWeight: 500 }}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;
