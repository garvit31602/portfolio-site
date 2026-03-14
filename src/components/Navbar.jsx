import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
                <div className="hidden md:flex gap-8" style={{ display: 'none', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium hover:text-emerald-400 transition-colors" style={{ fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.3s' }}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Simple style override for responsiveness since I'm not using Tailwind yet or fully */}
                <div className="desktop-links" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link" style={{ fontSize: '0.9rem', fontWeight: 500, opacity: 0.8 }}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle Placeholder */}
                <button className="md:hidden" style={{ display: 'none' }}>
                    <Menu size={24} />
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
