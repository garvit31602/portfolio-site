import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Web Development",
            color: "var(--accent-web)",
            skills: ["React", "Node.js", "TypeScript", "Bootstrap", "mySQL", "MongoDB"]
        },
        {
            title: "Machine Learning",
            color: "var(--accent-ml)",
            skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Computer Vision", "Keras", "NumPy", "Pandas", "Python"]
        }
    ];

    return (
        <section id="skills" className="container">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center' }}>Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-12" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        className="glass p-8 rounded-3xl"
                        initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        style={{ padding: '2rem', borderRadius: '1.5rem' }}
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div className="w-1.5 h-6 rounded-full" style={{ width: '0.375rem', height: '1.5rem', borderRadius: '1rem', backgroundColor: category.color }}></div>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-xl glass text-sm font-medium hover:scale-105 transition-transform cursor-default"
                                    style={{ padding: '0.5rem 1rem', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 500, transition: 'transform 0.2s', display: 'inline-block' }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
