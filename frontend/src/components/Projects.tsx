import { CardProject } from "./CardProject"

export const Projects = () => {

    return (
        <section className="flex justify-center  w-full h-78 bg-[#272937]/90 p-5 gap-2">
            <ul className="flex w-full  justify-between">
                <li ><CardProject /></li>
                <li ><CardProject /></li>
                <li ><CardProject /></li>
                <li ><CardProject /></li>
            </ul>
        </section>
    )
}