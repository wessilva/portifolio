import {
    SiReact,
    SiTypescript,
    SiVite,
    SiTailwindcss,
    SiRedux,
    SiExpo,
    SiGithub

} from 'react-icons/si';

import type { Project } from '../types'



export const projects: Project[] = [
    {
        id: '1',
        title: 'App de Grupos',
        description: 'Este projeto é um aplicativo mobile desenvolvido com a principal ideia de solucionar problemas voltados para a organização de grupos para estudo, jogos, campeonatos etc...',
        image: '/AppNative.png',
        technologies: [
            { name: 'React Native', icon: SiReact, color: '#61DAFB' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Redux', icon: SiRedux, color: '#61DAFB' },
            { name: 'Expo', icon: SiExpo, color: '#61DAFB' },
            { name: 'Github', icon: SiGithub, color: '#61DAFB' }
        ],
        githubUrl: 'https://github.com/wessilva/igniteteams',
        liveUrl: '#'
    },
    {
        id: '2',
        title: 'Portfólio Pessoal',
        description: 'Este projeto é um portfólio pessoal desenvolvido para apresentar minhas habilidades e projetos de forma atraente e funcional.',
        image: '/portifolio1.png',
        technologies: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Vite', icon: SiVite, color: '#61DAFB' },
            { name: 'GitHub', icon: SiGithub, color: '#61DAFB' }

        ],
        githubUrl: 'https://github.com/user/projeto',
        liveUrl: '#'
    },


];