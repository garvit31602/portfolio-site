import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-8" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <p className="text-gray-400" style={{ color: 'var(--text-muted)' }}>
                            I am a driven developer with a unique blend of expertise in both <span className="text-emerald-400" style={{ color: 'var(--accent-web)' }}>Web Development</span> and <span className="text-violet-400" style={{ color: 'var(--accent-ml)' }}>Machine Learning</span>.
                            My journey started with building interactive user interfaces, which eventually led me to explore the fascinating world of data and AI.
                        </p>
                        <p className="text-gray-400" style={{ color: 'var(--text-muted)' }}>
                            I believe that the most powerful solutions emerge when intuitive design meets intelligent algorithms.
                            Whether it's optimizing a React application for performance or training a neural network for complex pattern recognition,
                            I am always looking for ways to push the boundaries of what's possible.
                        </p>
                        <div className="flex gap-8 py-4" style={{ display: 'flex', gap: '2rem', padding: '1rem 0' }}>
                            <div>
                                <h4 className="text-2xl font-bold text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>3+</h4>
                                <p className="text-xs uppercase tracking-wider text-gray-500" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>20+</h4>
                                <p className="text-xs uppercase tracking-wider text-gray-500" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280' }}>Projects Done</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl relative overflow-hidden" style={{ padding: '2rem', borderRadius: '1.5rem', position: 'relative' }}>
                        <h3 className="text-xl font-bold mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>My Focus</h3>
                        <ul className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                            <li className="flex gap-4 items-start" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2" style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--accent-web)', marginTop: '0.5rem' }}></div>
                                <div>
                                    <p className="font-semibold" style={{ fontWeight: 600 }}>Full-Stack Development</p>
                                    <p className="text-sm text-gray-400" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Building scalable applications with React, Node.js, and modern databases.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="w-2 h-2 rounded-full bg-violet-500 mt-2" style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--accent-ml)', marginTop: '0.5rem' }}></div>
                                <div>
                                    <p className="font-semibold" style={{ fontWeight: 600 }}>AI & Machine Learning</p>
                                    <p className="text-sm text-gray-400" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Implementing computer vision, and predictive models using TensorFlow & PyTorch.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#3b82f6', marginTop: '0.5rem' }}></div>
                                <div>
                                    <p className="font-semibold" style={{ fontWeight: 600 }}>System Optimization</p>
                                    <p className="text-sm text-gray-400" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Ensuring high performance and low latency across the entire technology stack.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
