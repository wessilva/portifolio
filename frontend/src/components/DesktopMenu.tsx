import { socialLinks } from './SocialLinks';

export const DesktopMenu = () => (
    <ul className="hidden md:flex gap-4">
        {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
                <li key={index} className="transition-transform duration-300 hover:scale-110">
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white ${link.hoverColor} transition-colors `}
                    >
                        <IconComponent
                            size={30}
                            title={link.title}
                        />
                    </a>
                </li>
            );
        })}
    </ul>
);
