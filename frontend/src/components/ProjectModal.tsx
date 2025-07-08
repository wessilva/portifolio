import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Technology {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color?: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: Technology[];
    githubUrl?: string;
    liveUrl?: string;
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div className="relative bg-[#1b1c2f] rounded-lg max-w-lg w-full mx-4 h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                    aria-label="Fechar modal"
                >
                    <FaTimes size={24} />
                </button>

                <div className="p-4 ">
                    <div className="w-full h-48 bg-[#000000]/50 rounded-lg mb-4 mt-10 overflow-hidden">
                        <img
                            src={project.image}
                            alt={`Imagem do projeto ${project.title}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h2 className="text-white text-xl font-semibold mb-5">
                        {project.title}
                    </h2>

                    <p className="text-white/80 text-sm leading-relaxed mb-5">
                        {project.description}
                    </p>

                    <div className="mb-4">
                        <h3 className="text-white text-base font-semibold mb-5">
                            Tecnologias utilizadas:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => {
                                const IconComponent = tech.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-[#787b8f]/50 px-2 py-1 rounded-full"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span className="text-white text-xs">
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex gap-5 mt-10 ">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#787b8f] hover:bg-[#8a8da0] px-3 py-2 rounded-lg transition-colors"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span className="text-white text-sm">GitHub</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors"
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                <span className="text-white text-sm">Ver Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
