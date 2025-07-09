
import { useState } from 'react';

import type { CardProjectProps } from '../types';


export const CardProject = ({ project, onClick }: CardProjectProps) => {
    const [isHovered, setIsHovered] = useState(false);


    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) {
            onClick(project);
        }
    };
    return (
        <div
            className="w-64 h-100 bg-[#787b8f]  p-2 rounded-lg  hover:bg-[#8a8da0] transition-all duration-500 hover:scale-102"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-1/2 bg-[#000000]/50 rounded-lg">
                <img
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    className={`w-full h-full object-cover rounded-lg transition-all duration-300`}
                    loading='lazy'
                />
            </div>

            <h3 className="text-white font-semibold text-[16px] mt-2 mb-1">
                {project.title}
            </h3>

            <p className="text-white/70 text-[14px] line-clamp-3">
                {project.description}
            </p>

            <div className="flex justify-center gap-5 w-full h-15 p-1 mt-2">
                {project.technologies.slice(0, 3).map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <div
                            key={index}
                            className={`w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 ${isHovered ? 'scale-120' : 'scale-100'
                                }`}
                            title={tech.name}
                        >
                            <IconComponent
                                className="w-5 h-5"
                            />
                        </div>
                    );
                })}
                {project.technologies.length > 4 && (
                    <div className={`w-8 h-8 bg-[#000000]/30 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'
                        }`}>
                        <span className="text-white text-xs">+{project.technologies.length - 4}</span>
                    </div>
                )}
            </div>
            <a
                href='#'
                className='hover:text-blue-500 text-white     mt-2 transition-all duration-300'
                onClick={handleClick}
            >
                Ver mais...

            </a>
        </div>
    );
};