import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from "leaflet"
import logo from "../../../assets/logo.png"
import googleMapIcon from "../../../assets/google-map-icon.webp"
import marker from "../../../assets/marcador-de-posicion.png"
import "./animation.css"

var MarkerIcon = new Icon({
    iconUrl: marker,
    iconSize: [41, 41],
});
function Map() {
    return (
        <MapContainer
            center={[13.940885265161556, -89.02707893653594]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '80%', padding:'10%', zIndex: 0 }} // Usa 100% para ajustarse al contenedor
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[13.940885265161556, -89.02707893653594]} icon={MarkerIcon}>
                <Popup>
                    <div className='md:w-[10vw]'>
                        <img src={logo} alt="" className='w-full' />
                        <button className="flex w-full justify-center items-center border border-gray-400 px-3 py-2 mt-5 font-body hover:cursor-pointer rounded-sm" type="button">
                            <img src={googleMapIcon} alt="" className='h-7'/>
                            <span className='text-nowrap text-base'>google maps</span>
                        </button>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
