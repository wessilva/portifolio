import { CardProject } from "./CardProject"

import { projects } from "../data/projects"

export const Projects = () => {

    return (
        <section className="flex justify-center  w-full h-90 p-5 gap-10">
            {projects.map((project) => (
                <CardProject
                    key={project.id}
                    project={project}
                    onClick={(project) => console.log('Clicou no projeto:', project)}
                />
            ))}
        </section>
    )
}