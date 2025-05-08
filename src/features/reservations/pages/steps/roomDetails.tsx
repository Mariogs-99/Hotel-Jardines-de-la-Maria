import { useState } from "react";
import HeaderRoom from "../../components/headerRooms";
import { CreditCardOutlined, UserOutlined } from "@ant-design/icons";
import bedIcon from "../../../../assets/bed.png"
import googlePayIcon from "../../../../assets/googlePayIcon.png"
import { Radio, RadioChangeEvent } from "antd";
import { useReservation } from "../../../../context/reservationContext";
import { Image } from 'antd';
import { Bill } from "../../components/bill";
import { GuarranteePolicies } from "../../components/guaranteePolicies";

const RoomDetails = () => {
    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const { selectedRoom, setStep } = useReservation();

    return (
        <div className="w-full">
            <HeaderRoom title={selectedRoom.name} />

            <Image.PreviewGroup
                items={selectedRoom.image.map((img: any) => String(img))} // convertir imagen a string
            >
                <Image
                    width={'100%'}
                    src={String(selectedRoom.image[0])}
                />
            </Image.PreviewGroup>
            <div className="px-10">
                <span className="flex gap-10 py-2 pb-10">
                    <span className="flex items-center gap-3">
                        <UserOutlined className="opacity-75 h-7" />
                        <p className="text-gray-600">Máx.: {selectedRoom.maxCapacity}</p>
                    </span>
                    <span className="flex gap-3">
                        <img src={bedIcon} alt="bed_icon" className="h-7" />
                        <p className="text-gray-600">{selectedRoom.bedSize}</p>
                    </span>
                </span>
                <div>
                    <h1 className="text-xl text-start font-bold">Detalles</h1>
                    <p className="mt-2 text">{selectedRoom.description}</p>
                </div>

                <Bill />
                <GuarranteePolicies />

                <div className="flex flex-col py-10 gap-2">
                    <p className="text-base">Continuar con:</p>
                    <div>
                        <Radio.Group
                            onChange={onChange}
                            value={value}
                            style={{ display: 'flex', flexDirection: 'column' }}
                            options={[
                                {
                                    value: 1,
                                    label: (
                                        <div className="flex items-center gap-5 font-body h-full">
                                            <img src={googlePayIcon} alt="google pay icon" className="h-10" />
                                            <p>Google pay</p>
                                        </div>
                                    ),
                                },
                                {
                                    value: 2,
                                    label: (
                                        <div className="flex items-center gap-5 font-body h-full">
                                            <CreditCardOutlined alt="card pay icon" className="h-10" />
                                            <p>Tarjeta de credito o debito</p>
                                        </div>
                                    ),
                                },
                            ]}
                        />
                    </div>
                </div>
                <button
                    className="mt-4 w-full bg-primary-brown text-white px-5 py-3 rounded-md hover:cursor-pointer hover:brightness-125 active:brightness-50"
                    onClick={() => setStep(4)}
                >
                    Reservar ahora
                </button>
            </div>
        </div>
    );
};

export default RoomDetails;

