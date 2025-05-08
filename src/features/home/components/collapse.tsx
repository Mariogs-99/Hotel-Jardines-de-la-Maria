import { Collapse, CollapseProps, theme } from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { CSSProperties } from "react";
import { useReservation } from "../../../context/reservationContext";

const getItemsEs: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Escapa de tu día a día</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">Descubre un oasis de tranquilidad en el corazón de Suchitoto. Nuestro hotel es el destino perfecto para desconectarte del bullicio y sumergirte en la serenidad de un entorno colonial.</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Restaurante</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">
            Una experiencia gastronómica que deleita todos los sentidos. Nuestro restaurante ofrece una selección de platillos tradicionales y cocina internacional, preparados con ingredientes frescos y locales.
        </p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Idealmente ubicado</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">Ubicado en el corazón de Suchitoto, nuestro hotel te sitúa a pocos pasos de los principales atractivos de la ciudad. Explora la emblemática Iglesia Santa Lucía, pasea por sus calles empedradas llenas de historia y arte.</p>,
        style: panelStyle,
    },
    {
        key: '4',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Una villa con historia artística</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">Sumérgete en la belleza y autenticidad de Suchitoto desde un lugar que combina el encanto colonial con la tranquilidad de la naturaleza. </p>,
        style: panelStyle,
    },
];


const getItemsEn: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
        key: '1',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Escape from your daily routine</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">Discover an oasis of tranquility in the heart of Suchitoto. Our hotel is the perfect destination to disconnect from the hustle and bustle and immerse yourself in the serenity of a colonial setting.</p>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Restaurant</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">
            A gastronomic experience that delights all the senses. Our restaurant offers a selection of traditional dishes and international cuisine, prepared with fresh, local ingredients.
        </p>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">Ideally located</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">Located in the heart of Suchitoto, our hotel places you just a few steps from the city's main attractions. Explore the iconic Santa Lucia Church, stroll through its cobblestone streets full of history and art.</p>,
        style: panelStyle,
    },
    {
        key: '4',
        label: <h2 className="font-title text-primary-brown text-2xl md:text-3xl">A town with artistic history</h2>,
        children: <p className="font-body text-lg leading-10 opacity-90 pl-11 text-[#231309]">Immerse yourself in the beauty and authenticity of Suchitoto from a place that combines colonial charm with the tranquility of nature. </p>,
        style: panelStyle,
    },
];

function CollapseComponent() {

    const { lang } = useReservation()
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
        marginBottom: 0,
        background: "#9F8F7C",
        border: "none",
        borderRadius: token.borderRadiusLG,

    };
    return (
        <Collapse
            bordered={false}
            expandIcon={({ isActive }) =>
                isActive ?
                    <div className="flex items-center">
                        <MinusOutlined style={{ fontSize: '1.5rem', color: '#794628', textAlign: 'center' }} />
                    </div>

                    :
                    <div className="flex items-center">
                        <PlusOutlined style={{ fontSize: '1.5rem', color: '#794628', textAlign: 'center' }} />
                    </div>
            }
            style={{ background: "transparent", fontFamily: "Cabin" }}
            items={ lang == 'es' ? getItemsEs(panelStyle) : getItemsEn(panelStyle) }
        />
    )
}

export default CollapseComponent;