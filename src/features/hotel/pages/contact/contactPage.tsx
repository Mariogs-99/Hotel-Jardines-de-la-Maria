import BackgroundCarrousel from '../../../../shared/backgroundCarrousel';
import Title from '../../../../shared/title';
import { MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import logo from "../.././../../assets/logo.png"
import RoomsBackgroundImages from '../../../../shared/roomsBackgroundImage/roomsBackgroundImages';
import { Input } from 'antd';

function ContactPage() {
    const { TextArea } = Input;

    // const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     console.log('Change:', e.target.value);
    // };

    // const onChange: CheckboxProps['onChange'] = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // };

    return (
        <>
            <BackgroundCarrousel type="rooms" className="h-[70vh]" />

            <Title className="text-center pb-10 md:py-20">Contactanos</Title>
            <section className='grid md:grid-cols-[70%_30%]'>
                <form action="submit" className='order-2 md:order-1 flex flex-col w-full px-10 md:px-20 gap-5 py-10 md:pb-10'>
                    <span className='flex gap-5'>
                        <Input placeholder="Nombre" style={{ padding: '2%', background: '#FBFBFB', borderRadius: '0px' }} />
                        <Input placeholder="Correo electronico" style={{ padding: '2%', background: '#FBFBFB', borderRadius: '0px' }} />
                    </span>
                    <TextArea
                        showCount
                        maxLength={500}
                        // onChange={onChange}
                        placeholder="Mensaje"
                        style={{ height: 200, resize: 'none', padding: '1%', fontFamily: 'Cabin', background: '#FBFBFB', borderRadius: '0px' }}
                    />
                    <button type="submit" className='bg-primary-brown px-10 py-5 text-white self-start'>ENVIAR</button>
                </form>
                <article className='order-1 md:order-2 flex flex-col gap-10 items-center'>
                    <img src={logo} alt="" className='md:w-[50%]' />
                    <span className='flex flex-col gap-3 opacity-80'>
                        <span className='flex gap-5'>
                            <WhatsAppOutlined className='text-xl' />
                            <h3>WhatsApp: +503 7777 7777</h3>
                        </span>
                        <span className='flex gap-5'>
                            <MailOutlined className='text-xl' />
                            <h3>Email: jardinesdelasmariashotel@gmail.com</h3>
                        </span>
                    </span>
                </article>
            </section>

            <RoomsBackgroundImages text='Reserva una habitación' />

        </>
    )
}

export default ContactPage;