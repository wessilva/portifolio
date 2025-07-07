import { socialLinks } from './SocialLinks';

interface MobileMenuDropdownProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

export const MobileMenuDropdown = ({ isMenuOpen, setIsMenuOpen }: MobileMenuDropdownProps) => (
    <div className={`md:hidden absolute top-full right-3 w-50 bg-[#000000]/50 backdrop-blur-sm border border-gray-700 rounded-b-lg shadow-lg z-50 overflow-hidden transition-all duration-300 ${isMenuOpen
            ? 'max-h-96 opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-2'
        }`}>
        <ul className="flex flex-col items-center py-4 gap-4">
            {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                const delay = 75 + (index * 25); // Delay escalonado para animação

                return (
                    <li
                        key={index}
                        className={`transition-all duration-300 delay-${delay} ${isMenuOpen
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform -translate-y-4'
                            }`}
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 text-white ${link.hoverColor} transition-colors py-2 px-4`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <IconComponent size={24} />
                            <span className="font-montserratRegular">{link.title}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    </div>
);
