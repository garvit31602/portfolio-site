import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        // Append production URL to help FormSubmit identify the source
        data.append('_url', 'https://portfolio-site-pi-amber.vercel.app/');

        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/garvit31602@gmail.com', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            if (status !== 'error') setStatus('');
        }
    };

    return (
        <section id="contact" className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-24">
                <div>
                    <h2 className="text-3xl font-bold mb-6" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Get In Touch</h2>
                    <p className="text-gray-400 mb-8" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to discussing new opportunities and creative ideas.
                    </p>

                    <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="p-3 rounded-xl glass text-emerald-400" style={{ padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--accent-web)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold" style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', textTransform: 'uppercase' }}>Email Me</p>
                                <p className="font-medium" style={{ fontWeight: 500 }}>garvit31602@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="p-3 rounded-xl glass text-violet-400" style={{ padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--accent-ml)' }}>
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold" style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', textTransform: 'uppercase' }}>Chat</p>
                                <p className="font-medium" style={{ fontWeight: 500 }}>+91-86193-91317</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="p-3 rounded-xl glass text-blue-400" style={{ padding: '0.75rem', borderRadius: '0.75rem', color: '#60a5fa' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold" style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 'bold', textTransform: 'uppercase' }}>Location</p>
                                <p className="font-medium" style={{ fontWeight: 500 }}>Noida, UP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="glass p-8 rounded-3xl"
                                style={{ padding: '2rem', borderRadius: '1.5rem' }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label className="text-xs font-bold text-gray-400 uppercase" style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Name</label>
                                            <input required name="name" type="text" className="w-full glass border-none rounded-xl px-4 py-3 text-sm focus:ring-1 ring-emerald-500 transition-all outline-none" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white' }} placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label className="text-xs font-bold text-gray-400 uppercase" style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Email</label>
                                            <input required name="email" type="email" className="w-full glass border-none rounded-xl px-4 py-3 text-sm focus:ring-1 ring-emerald-500 transition-all outline-none" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white' }} placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label className="text-xs font-bold text-gray-400 uppercase" style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Subject</label>
                                        <input required name="subject" type="text" className="w-full glass border-none rounded-xl px-4 py-3 text-sm focus:ring-1 ring-emerald-500 transition-all outline-none" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white' }} placeholder="Project Inquiry" />
                                    </div>
                                    <div className="space-y-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label className="text-xs font-bold text-gray-400 uppercase" style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>Message</label>
                                        <textarea required name="message" className="w-full glass border-none rounded-xl px-4 py-3 text-sm min-h-[150px] focus:ring-1 ring-emerald-500 transition-all outline-none" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', minHeight: '150px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'white' }} placeholder="Tell me about your project..."></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="btn btn-primary w-full justify-center disabled:opacity-50"
                                        style={{ width: '100%', justifyContent: 'center', border: 'none', opacity: status === 'sending' ? 0.5 : 1 }}
                                    >
                                        {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                                    </button>
                                    {status === 'error' && (
                                        <p className="text-red-400 text-xs text-center mt-2" style={{ color: '#f87171', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.5rem' }}>
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass p-12 rounded-3xl flex flex-col items-center justify-center text-center h-full"
                                style={{ padding: '3rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '400px' }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                                    className="p-4 rounded-full bg-emerald-500/20 text-emerald-500 mb-6"
                                    style={{ padding: '1rem', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-web)', marginBottom: '1.5rem' }}
                                >
                                    <CheckCircle size={64} />
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Message Sent!</h3>
                                <p className="text-gray-400" style={{ color: 'var(--text-muted)' }}>
                                    Thank you for reaching out, Garvit! <br />
                                    I'll get back to you as soon as possible.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Contact;
