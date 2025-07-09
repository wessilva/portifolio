import { FaAddressBook, FaTimes } from 'react-icons/fa';

import type { MobileMenuButtonProps } from '../types';

export const MobileMenuButton = ({ isMenuOpen, toggleMenu }: MobileMenuButtonProps) => (
    <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-gray-300 transition-colors"
        aria-label="Menu de contatos"
    >
        {isMenuOpen ? (
            <FaTimes size={24} />
        ) : (
            <FaAddressBook size={24} />
        )}
    </button>
);
