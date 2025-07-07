import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <nav className="bg-[#000000]/50 p-5">
            <div className="mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-montserratItalic">Wesley Silva</div>

                <ul className="flex gap-4">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/wesley-silva-468642245/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedin
                                size={30}
                                title="LinkedIn"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/wessilva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition-colors"
                        >
                            <FaGithub
                                size={30}
                                title="GitHub"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discord.gg/Q6BwkxdC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-indigo-500 transition-colors"
                        >
                            <FaDiscord
                                size={30}
                                title="Discord"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}