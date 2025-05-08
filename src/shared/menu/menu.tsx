import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import logo from "../../assets/logo-img.png";
import ReservationDrawer from "../../features/reservations/pages/reservationDrawer";
import { UpOutlined } from "@ant-design/icons";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import "../../index.css";
import "../../assets/style/dropDownCustomStyle.css";
import { useReservation } from "../../context/reservationContext";
import { Dropdown } from 'primereact/dropdown';

const menuItems = [
  {
    label: "Habitaciones",
    subItems: [
      { label: "Habitaciones", url: "/habitaciones" }
    ]
  },
  {
    label: "Hotel",
    subItems: [
      { label: "Galería", url: "/hotel-galeria" },
      { label: "Mapa", url: "/hotel-map" },
      { label: "Contacto", url: "/hotel-contact" }
    ]
  },
  { label: "Experiencias", url: "/experiencias" },
  { label: "Restaurante", url: "/restaurant" },
  { label: "Eventos", url: "/events" }
];

const menuItemsEn = [
  {
    label: "Rooms",
    subItems: [
      { label: "Rooms", url: "/habitaciones" }
    ]
  },
  {
    label: "Hotel",
    subItems: [
      { label: "Gallery", url: "/hotel-galeria" },
      { label: "Map", url: "/hotel-map" },
      { label: "Contact Us", url: "/hotel-contact" }
    ]
  },
  { label: "Experiences", url: "/experiencias" },
  { label: "Restaurant", url: "/restaurant" },
  { label: "Events", url: "/events" }
];



function Menu() {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  const { lang, setLang } = useReservation();

  const languaje = [
    { name: 'Es', code: 'es' },
    { name: 'En', code: 'en' }
  ];
  const [selectedLang, setSelectedLang] = useState(languaje[0]); // Por defecto 'Es'

  
  useEffect(() => {
    if (selectedLang) {
      setLang(selectedLang.code);
    }
  }, [selectedLang]);



  useEffect(() => {
    const handleScroll = (): void => {
      const triggerPoint = window.innerHeight / 2;
      if (window.scrollY >= triggerPoint) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reservationHandler = () => {
    setIsDrawerOpen(true);
  };

  const redirect = (url: string) => {
    window.location.href = url;
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function renderMenu(menuItems: any[], redirect: (url: string) => void) {
    return menuItems.map((item, index) => (
      <span key={index} className="relative">
        {item.subItems ? (
          <div className="relative">
            <span
              className="flex gap-3 items-center cursor-pointer uppercase font-[400]"
              onClick={() => toggleSubmenu(index)}
            >
              <li>{item.label}</li>
              <UpOutlined
                className={`transition-transform duration-300 ${openSubmenuIndex === index ? "rotate-0" : "rotate-180"}`}
              />
            </span>
            {openSubmenuIndex === index && (
              <div className="flex flex-col absolute bg-white rounded-sm text-black px-5 py-5 mt-2 gap-5 transition-all duration-300 shadow-lg">
                {item.subItems.map((subItem: { url: string; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, subIndex: Key | null | undefined) => (
                  <li
                    key={subIndex}
                    className="hover:cursor-pointer hover:bg-hover-brown px-4 uppercase"
                    onClick={() => redirect(subItem.url)}
                  >
                    {subItem.label}
                  </li>
                ))}
              </div>
            )}
          </div>
        ) : (
          <li className="hover:cursor-pointer uppercase font-[400]" onClick={() => redirect(item.url)}>
            {item.label}
          </li>
        )}
      </span>
    ));
  }

  function renderMenuMovil(menuItems: any[], redirect: (url: string) => void) {
    return menuItems.map((item, index) => (
      <span key={index} className="relative">
        {item.subItems ? (
          <div className="relative">
            <span
              className="flex gap-3 items-center cursor-pointer uppercase font-[400]"
              onClick={() => toggleSubmenu(index)}
            >
              <li>{item.label}</li>
              <UpOutlined
                className={`transition-transform duration-300 ${openSubmenuIndex === index ? "rotate-0" : "rotate-180"}`}
              />
            </span>
            {openSubmenuIndex === index && (
              <div className="flex  rounded-sm text-white px-5 my-5 gap-3 transition-all duration-300 shadow-lg">
                <div className=" h-cover">
                  <span className="flex h-full w-0.5 bg-white border border-white opacity-40 "></span>
                </div>
                <span className="flex flex-col gap-3">
                  {item.subItems.map((subItem: { url: string; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, subIndex: Key | null | undefined) => (
                    <li
                      key={subIndex}
                      className=" hover:cursor-pointer hover:bg-hover-brown px-4 uppercase"
                      onClick={() => redirect(subItem.url)}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </span>
              </div>
            )}
          </div>
        ) : (
          <li className="hover:cursor-pointer uppercase font-[400]" onClick={() => redirect(item.url)}>
            {item.label}
          </li>
        )}
      </span>
    ));
  }

  return (
    <>
      <nav
        className={`${isFixed
          ? "fixed bg-[rgba(0,0,0,0.5)] py-2"
          : "absolute py-10 flex-col"
          } hidden md:flex gap-7 w-full justify-center items-center text-white z-50 transition-all duration-500 ease-in-out`}
      >
        <span>
          <img
            src={logo}
            className={`${isFixed && "pl-5 h-[80%] w-[75%] "
              } h-18 hover:cursor-pointer`}
            onClick={() => redirect("/")}
          />
        </span>
        <ul
          className={`flex w-full justify-center items-center gap-12 text-sm ${isFixed && "text-sm"
            }`}
        >
          {renderMenu(lang == 'es' ? menuItems : menuItemsEn, redirect)}
          <span className="h-10 w-0.5 bg-primary-brown"></span>
          {/* <Radio.Group value={lang} onChange={(e) => setLang(e.target.value)}>
            <Radio.Button value="es">Es</Radio.Button>
            <Radio.Button value="en">En</Radio.Button>
          </Radio.Group> */}
          <div>
            <Dropdown
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.value)}
              options={languaje}
              optionLabel="name"
              placeholder="Select a Language"
              className="w-full md:w-14rem"
            />
          </div>

          <button
            className="bg-primary-brown px-5 py-2 uppercase font-[400] hover:cursor-pointer hover:bg-secondary-brown active:bg-secondary-brown-active transition-all duration-200"
            onClick={() => reservationHandler()}
          >
            {selectedLang.code === "en" ? "Book now" : "Reserve ahora"}
          </button>
        </ul>
        <ReservationDrawer
          isOpen={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
        />
      </nav>

      {/*Menu para movil*/}
      <div className="fixed justify-between flex z-40 w-full p-5 md:hidden bg-[rgba(0,0,0,0.8)]">
        <img
          src={logo}
          className={`h-20 hover:cursor-pointer`}
          onClick={() => redirect("/")}
        />
        <div className="flex gap-5 items-center">
          {/* <Radio.Group value={lang} onChange={(e) => setLang(e.target.value)}>
            <Radio.Button value="es">Es</Radio.Button>
            <Radio.Button value="en">En</Radio.Button>
          </Radio.Group> */}
          <div>
            <Dropdown
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.value)}
              
              options={languaje}
              optionLabel="name"
              placeholder="Select a Language"
              className="w-full md:w-14rem"
            />
          </div>
          <IoIosMenu
            className="size-7"
            color="white"
            onClick={() => {
              setIsBurgerMenuOpen(!isBurgerMenuOpen);
            }}
          />
        </div>
      </div>
      <nav
        className={`${isBurgerMenuOpen ? "fixed" : "hidden"
          } bg-[rgba(0,0,0,0.8)] py-10 flex-col h-full flex md:hidden gap-7 w-full justify-start items-center text-white z-50 transition-all duration-500 ease-in-out`}
      >
        <IoMdClose
          className="absolute right-10 size-8"
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        />
        <div className="flex flex-col gap-10 text-base items-center ">
          <img
            src={logo}
            className={`h-24 hover:cursor-pointer`}
            onClick={() => redirect("/")}
          />

          <ul className={`flex flex-col gap-10 pt-10`}>
            {renderMenuMovil(lang == 'es' ? menuItems : menuItemsEn, redirect)}
          </ul>
        </div>
      </nav>
      <button
        className={`${isDrawerOpen && "hidden"
          } fixed md:hidden bottom-0 w-full bg-primary-brown py-5 uppercase font-[400] hover:cursor-pointer hover:bg-secondary-brown active:bg-secondary-brown-active transition-all duration-200 text-white z-70`}
        onClick={() => {
          reservationHandler();
        }}
      >
        Reserve ahora
      </button>
      <ReservationDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      />
    </>
  );
}

export default Menu;
