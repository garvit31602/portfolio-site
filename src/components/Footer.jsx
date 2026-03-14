import { Github, Twitter, Linkedin, ChefHat } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 border-t border-gray-900" style={{ paddingTop: '5rem', paddingBottom: '2.5rem', borderTop: '1px solid #111827' }}>
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                    <div>
                        <h3 className="text-xl font-bold mb-2 gradient-text" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Garvit.</h3>
                        <p className="text-sm text-gray-500" style={{ fontSize: '0.875rem', color: '#6b7280' }}>Design focused developer based in Noida.</p>
                    </div>

                    <div className="flex gap-6" style={{ display: 'flex', gap: '1.5rem' }}>
                        {[
                            { icon: <Github size={20} />, href: "https://github.com/garvit31602" },
                            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/garvit-sharma-7bb11a289/" },
                            { icon: <Twitter size={20} />, href: "https://x.com/Garvit31602" },
                            { icon: <ChefHat size={20} />, href: "https://www.codechef.com/users/garvit2002" },
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all"
                                style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', transition: 'all 0.3s' }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 gap-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid #111827', gap: '1rem' }}>
                    <p className="text-xs text-gray-500" style={{ fontSize: '0.75rem', color: '#6b7280' }}>&copy; 2026 Garvit. All rights reserved.</p>
                    <div className="flex gap-8" style={{ display: 'flex', gap: '2rem' }}>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
