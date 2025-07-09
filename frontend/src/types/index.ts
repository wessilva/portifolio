export interface Technology {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: Technology[];
    githubUrl?: string; // Opcional
    liveUrl?: string;   // Opcional
}

export interface CardProjectProps {
    project: Project;
    onClick?: (project: Project) => void;
}

export interface MobileMenuButtonProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}
