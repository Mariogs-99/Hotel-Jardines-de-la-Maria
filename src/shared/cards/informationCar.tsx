import { FC } from "react"
import Title from "../title"

interface InformationCardInterface {
    img: string,
    title: string,
    description: string
}

const InformationCard:FC<InformationCardInterface> = ({img, title, description}) => {
    return(
        <article className="grid grid- md:grid-cols-[50%_50%] leading-8">
            <div className="overflow-hidden">
                <img src={img} alt="" className="object-cover h-[70vw] w-full md:w-[40vw] md:h-[30vw] blur-[0.02rem]" />
            </div>
            <div className="pt-5 md:px-20 flex flex-col justify-center">
                <Title className="text-primary-brown pl-0 pb-5 pt-0 px-0">{title}</Title>
                <p className="opacity-80">{description}</p>
            </div>
        </article>
    )
}

export default InformationCard