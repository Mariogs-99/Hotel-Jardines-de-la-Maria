import { Outlet } from "react-router";
import Menu from "../shared/menu/menu";
import Footer from "../shared/footer";
import { ReservationProvider } from "../context/reservationContext";

function Layout() {
    return (
        <>
            <ReservationProvider>
                <Menu />
                <Outlet />
            </ReservationProvider>
            <Footer />
        </>
    )
}

export default Layout;