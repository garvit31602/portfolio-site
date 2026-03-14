import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, BrainCircuit, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section container min-h-screen flex items-center" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--nav-height)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ gap: '3rem', alignItems: 'center' }}>
                <div className="hero-content text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-3 py-1 rounded-full text-xs font-semibold glass text-emerald-400 mb-6 inline-block" style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-web)', marginBottom: '1.5rem', display: 'inline-block' }}>
                            Available for new projects
                        </span>
                        <h1 className="hero-title font-bold mb-6 leading-tight" style={{ fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Building the future with <br />
                            <span className="gradient-text">Web Dev & ML</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto md:mx-0" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '32rem' }}>
                            Passionate developer specializing in creating high-performance web applications and intelligent machine learning models.
                        </p>

                        <div className="flex gap-4 justify-center md:justify-start" style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#projects" className="btn btn-primary">
                                View My Work <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn glass">
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-visual relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    <div className="relative z-10 w-full aspect-square max-w-md glass rounded-3xl p-8 flex items-center justify-center overflow-hidden" style={{ aspectRatio: '1/1', width: '100%', maxWidth: '28rem', borderRadius: '1.5rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" style={{ position: 'absolute', top: 0, right: 0, width: '8rem', height: '8rem', background: 'rgba(16, 185, 129, 0.1)', filter: 'blur(3rem)', borderRadius: '50%' }}></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/20 blur-3xl rounded-full" style={{ position: 'absolute', bottom: 0, left: 0, width: '8rem', height: '8rem', background: 'rgba(139, 92, 246, 0.1)', filter: 'blur(3rem)', borderRadius: '50%' }}></div>

                        <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="p-6 glass rounded-2xl flex flex-col items-center gap-3" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500" style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-web)' }}>
                                    <Code size={32} />
                                </div>
                                <span className="font-semibold" style={{ fontWeight: 600 }}>Frontend</span>
                            </div>
                            <div className="p-6 glass rounded-2xl flex flex-col items-center gap-3" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500" style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                                    <Database size={32} />
                                </div>
                                <span className="font-semibold" style={{ fontWeight: 600 }}>Backend</span>
                            </div>
                            <div className="p-6 glass rounded-2xl flex flex-col items-center gap-3 col-span-2" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', gridColumn: 'span 2' }}>
                                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500" style={{ padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-ml)' }}>
                                    <BrainCircuit size={32} />
                                </div>
                                <span className="font-semibold" style={{ fontWeight: 600 }}>Machine Learning</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
