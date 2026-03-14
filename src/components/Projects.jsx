import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            title: "Real-time Drowsiness Detection System",
            category: "ml",
            description: "A computer vision system that monitors driver behavior and triggers alerts using TensorFlow.js and OpenCV.",
            tags: ["Python", "TensorFlow", "OpenCV"],
            image: "/projects/drowsiness.png",
            github: "https://github.com/garvit31602/Drowsiness-detection-system",
        },
        {
            title: "E-Commerce App",
            category: "web",
            description: "Modern e-commerce platform with real-time inventory and seamless checkout experience.",
            tags: ["Bootstrap", "Node.js", "React", "MongoDB"],
            image: "/projects/ecommerce.png",
            github: "https://github.com/garvit31602/e-commerce-app",
            demo: "https://e-commerce-app-unhh-iqa5w9uan-garvit31602s-projects.vercel.app/"
        },
        {
            title: "Health Risk Prediction System",
            category: "ml",
            description: "Predicting heart disease risk using ensemble learning models with clinical dataset analysis.",
            tags: ["React", "Typescript", "Machine learning"],
            image: "/projects/health.png",
            github: "https://github.com/garvit31602/Health-Risk-Prediction-System",
            demo: "https://health-risk-prediction-system-five.vercel.app/"
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', gap: '1.5rem' }}>
                <h2 className="text-3xl font-bold" style={{ fontSize: '2rem', fontWeight: 'bold' }}>Featured Projects</h2>

                <div className="flex flex-wrap glass p-1 rounded-2xl justify-center" style={{ display: 'flex', flexWrap: 'wrap', padding: '0.25rem', borderRadius: '1rem', justifyContent: 'center' }}>
                    {['all', 'web', 'ml'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-gradient-to-r from-violet-500 to-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '0.75rem',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                border: 'none',
                                cursor: 'pointer',
                                background: filter === cat ? 'linear-gradient(135deg, var(--accent-ml), var(--accent-web))' : 'transparent',
                                color: filter === cat ? 'white' : 'var(--text-muted)'
                            }}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass rounded-3xl overflow-hidden group"
                            style={{ borderRadius: '1.5rem', overflow: 'hidden' }}
                        >
                            <a
                                href={project.demo || project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block aspect-video relative overflow-hidden"
                                style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden', display: 'block' }}
                            >
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }}>
                                    <div className="px-4 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest text-white" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.75rem' }}>
                                        View Demo
                                    </div>
                                </div>
                            </a>
                            <div className="p-6" style={{ padding: '1.5rem' }}>
                                <div className="flex gap-2 mb-3" style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-0.5 rounded" style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', border: '1px solid #1f2937', padding: '0.125rem 0.5rem', borderRadius: '0.25rem' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-start mb-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{project.title}</h3>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}>
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-400 line-clamp-2" style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
