import { FC, HTMLProps } from "react";

interface SepartorInterface{
    className?: HTMLProps<HTMLElement>["className"];
}

const Separator:FC<SepartorInterface> = ({className}) => {
    return(
        <div className={`${className} w-full bg-primary-brown opacity-40 h-0.5`}></div>
    )
}

export default Separator;