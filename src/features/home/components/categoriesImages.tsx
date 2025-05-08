import pool2 from "../../../assets/pool2.jpg"
import restaurant from "../../../assets/restaurant.jpeg"
import bedroom from "../../../assets/bedroom.jpeg"
import meetingRoom from "../../../assets/meetingroom.jpeg"

const categoriesList = [
    {
        image: pool2,
        text: "Actividades"
    },
    {
        image: meetingRoom,
        text: "Eventos"
    },
    {
        image: restaurant,
        text: "Restaurante"
    },
    {
        image: bedroom,
        text: "Habitaciones"
    },
]

function CategoriesImages() {
    return (
        <>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
                {
                    categoriesList.map((category) => (
                        <article className="relative overflow-hidden group">
                            <p className="absolute z-20 text-white flex items-center justify-center h-full w-full text-5xl font-title">
                                {category.text}
                            </p>
                            <img
                                className="brightness-50 group-hover:brightness-110 transition-all duration-300 transform group-hover:scale-110 object-cover h-[30vh] md:h-[60vh] w-full"
                                src={category.image}
                                alt={category.text}
                            />
                        </article>
                    ))
                }
            </article>
        </>
    )
}

export default CategoriesImages;