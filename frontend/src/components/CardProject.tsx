

export const CardProject = () => {

    return (
        <div className="w-64 h-80 bg-[#787b8f] p-2 rounded-lg ">
            <div className="w-full h-1/2  bg-[#000000]/50 rounded-lg">
                <img
                    src="/AppNative.png"
                    alt="Imagem do projeto"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <p className="text-white/70 text-[14px]  mt-2">Este projeto e um aplicativo mobile desenvolvido com a principal ideia de solucionar problemas voltados para a organização de grupos para estudo, jogos, campeonatos ee etc... </p>
            <div className="flex justify-between gap-2 w-full h-15 p-1">
                <img
                    src="/logoReact.png"
                    alt="Logo GitHub"
                    className="w-8 h-8 object-cover rounded-full"

                />
                <img
                    src="/logoReact.png"
                    alt="Logo GitHub"
                    className="w-8 h-8 object-cover rounded-full"

                />
                <img
                    src="/logoReact.png"
                    alt="Logo GitHub"
                    className="w-8 h-8 object-cover rounded-full"

                />
                <img
                    src="/logoReact.png"
                    alt="Logo GitHub"
                    className="w-8 h-8 object-cover rounded-full"

                />

            </div>

        </div>
    )
}
