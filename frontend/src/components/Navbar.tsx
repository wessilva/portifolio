import { useState } from 'react';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenuButton } from './MobileMenuButton';
import { MobileMenuDropdown } from './MobileMenuDropdown';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#000000]/50 p-5 relative">
            <div className="mx-auto flex justify-between items-center">
                <div className="text-white text-2xl md:text-3xl font-montserratItalic">Wesley Silva</div>

                <DesktopMenu />
                <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>

            {isMenuOpen && <MobileMenuDropdown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        </nav>
    );
};