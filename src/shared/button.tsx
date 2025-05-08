import { FC, HTMLProps } from "react";

interface ButtonInterface {
    text: string,
    url:any,
    className?: HTMLProps<HTMLElement>["className"];
    onClick?: () => void,
}

const Button:FC<ButtonInterface> = ({ text, url }) => {
    const redirect = (url: string) => {
        window.location.href = url; // Esto recarga la página
      };
      

    return(
        <button onClick={() => {redirect(url)}} className="hover:cursor-pointer border border-white px-7 py-4 text-white font-medium hover:border-primary-brown hover:bg-primary-brown transition-all ">
            <p>{text}</p>
        </button>
    )
}

export default Button;

