import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface SocialLink {
    href: string;
    icon: IconType;
    title: string;
    hoverColor: string;
}

export const socialLinks: SocialLink[] = [
    {
        href: "https://www.linkedin.com/in/wesley-silva-468642245/",
        icon: FaLinkedin,
        title: "LinkedIn",
        hoverColor: "hover:text-blue-500 scale-110"
    },
    {
        href: "https://github.com/wessilva",
        icon: FaGithub,
        title: "GitHub",
        hoverColor: "hover:text-gray-400"
    },
    {
        href: "https://discord.gg/Q6BwkxdC",
        icon: FaDiscord,
        title: "Discord",
        hoverColor: "hover:text-indigo-500"
    }
];
