import { useState } from 'react';
import { CardProject } from "./CardProject"
import { ProjectModal } from "./ProjectModal"
import { projects } from "../data/projects"

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: Array<{
        name: string;
        icon: React.ComponentType<{ className?: string }>;
        color?: string;
    }>;
    githubUrl?: string;
    liveUrl?: string;
}

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <section className="flex justify-center  w-full h-90 p-5 gap-10 mb-20">
                {projects.map((project) => (
                    <CardProject
                        key={project.id}
                        project={project}
                        onClick={handleOpenModal}
                    />
                ))}
            </section>

            {isModalOpen && selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}