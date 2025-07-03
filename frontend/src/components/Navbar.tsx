



export const Navbar = () => {

    return (
        <nav className="bg-[#272937] p-5">
            <div className=" mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Wesley Silva</div>
                <ul className="flex gap-4">
                    <li>
                        <a href="https://www.linkedin.com/in/wesley-silva-468642245/" target="_blank" >
                            <img
                                src="/linkedin1.png"
                                alt="Logo LinkedIn"
                                width={30}
                                height={30}

                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/wessilva" target="_blank" >
                            <img
                                src="/github.png"
                                alt="Logo GitHub"

                                width={30}
                                height={30}

                            />
                        </a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}