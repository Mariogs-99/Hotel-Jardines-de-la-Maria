import { FC, HTMLProps } from "react";

interface TitleInterface {
    className?: HTMLProps<HTMLElement>["className"];
    children:string
}

const Title:FC<TitleInterface> = ({className, children}) =>{
    return(
        <h1 className={`${className} font-title text-3xl md:text-4xl text-primary-brown py-20 px-5 font-medium`}>{children}</h1>
    )
}

export default Title;