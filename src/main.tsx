import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Layout from './layout/layout.tsx';
import Home from './features//home/pages/home.tsx';
import RoomsPage from './features/room/pages/roomsPage.tsx';
import Gallery from './features/hotel/pages/galleryPage/gallery.tsx';
import HotelMapPage from './features/hotel/pages/hotelMapPage/hotelMapPage.tsx';
import ContactPage from './features/hotel/pages/contact/contactPage.tsx';
import RestaurantPage from './features/restaurant/pages/restaurantPage.tsx';
import EventsPage from './features/events/eventsPage.tsx';
import ExperiencesPage from './features/experiences/experiencesPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Routes>
  <Route path="/" element={ <Layout /> }>
    <Route index element={<Home />} />
    <Route path="/habitaciones" element={<RoomsPage />} />
    <Route path="/hotel-galeria" element={<Gallery />} />
    <Route path="/hotel-map" element={<HotelMapPage />} />
    <Route path="/hotel-contact" element={<ContactPage />} />  
    <Route path="/restaurant" element={<RestaurantPage />} />   
    <Route path="/events" element={<EventsPage />} />  
    <Route path="/experiencias" element={<ExperiencesPage />} />    
  </Route>
</Routes>
  </BrowserRouter>
)
