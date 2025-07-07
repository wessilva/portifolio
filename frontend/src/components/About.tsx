
export const Abaout = () => {

    const secondDivContent = null;

    return (
        <section className="flex flex-col lg:flex-row w-full h-full p-3 md:p-5 gap-2 md:gap-4">
            <div className={`${secondDivContent ? 'w-full lg:w-1/2' : 'w-full'} h-full p-4 md:p-6 lg:p-10 text-amber-50`}>
                <h1 className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 font-montserratRegular">
                    Olá, eu sou o Wesley!
                </h1>
                <p className="font-montserratMediumItalic text-sm md:text-base lg:text-lg leading-relaxed">
                    Sou um desenvolvedor fullstack focado em criar aplicações modernas,
                    escaláveis e eficientes. Trabalho com tecnologias como JavaScript, TypeScript, React, React Native,
                    Node.js, Redux e TailwindCSS.
                    Tenho paixão por transformar ideias em soluções digitais funcionais e bem projetadas, buscando
                    constantemente evoluir minhas habilidades e acompanhar as melhores práticas do mercado.
                </p>
            </div>
            {secondDivContent && (
                <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full">
                    {secondDivContent}
                </div>
            )}
        </section>
    )
}