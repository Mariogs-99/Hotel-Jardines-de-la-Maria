import { Calendar } from 'primereact/calendar';
import { useEffect, useState } from 'react';
import "primereact/resources/themes/saga-orange/theme.css";
import '../../../index.css';
import { useReservation } from '../../../context/reservationContext';
// import { getUnavailableDates } from '../services/reservationService';


function CalendarReservation() {
  const { setCheckIn, setCheckOut } = useReservation()
  const [dates, setDates] = useState<(Date | null)[] | null>(null);
  const [unavailableDates] = useState<Date[]>([]);
  // const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);

  const minDate = new Date()


  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" }) : "";
  };

  useEffect(() => {
    console.log(dates)
    if (dates && dates[0] != null) 
      setCheckIn(formatDate(dates[0]));
    if (dates && dates[1] != null)
      setCheckOut(formatDate(dates[1]));
  }, [dates]);

  useEffect(() => {
    fetchUnavailableDates()
  }, [])

  const fetchUnavailableDates = async () => {
    // try {
    //   const response = await getUnavailableDates();
  
    //   if (Array.isArray(response)) {
    //     const formattedDates = response.map((entry) => {
    //       if (entry?.fullyBookedDate?.length === 3) {
    //         const newDate = new Date(entry.fullyBookedDate[0], entry.fullyBookedDate[1] - 1, entry.fullyBookedDate[2]);
    //         return newDate;
    //       } else {
    //         console.error("Invalid date format:", entry);
    //         return null;
    //       }
    //     }).filter(date => date !== null) as Date[];
  
    //     setUnavailableDates(formattedDates);
    //   } else {
    //     console.error("API response is not an array:", response);
    //   }
    // } catch (error) {
    //   console.error("Error fetching unavailable dates:", error);
    // }
  };  

  // Verificar si alguna fecha dentro del rango está deshabilitada
  const isRangeValid = (startDate: Date, endDate: Date) => {
    return !unavailableDates.some(date => {
      return date >= startDate && date <= endDate;
    });
  };

  const handleDateChange = (e: any) => {
    const selectedDates = e.value;
    setDates(selectedDates);

    if (selectedDates && selectedDates[0] && selectedDates[1]) {
      const [startDate, endDate] = selectedDates;
      if (isRangeValid(startDate, endDate)) {
        setDates(selectedDates);
      } else {
        // Si el rango contiene fechas no disponibles, mostrar un mensaje o no actualizar el estado
        alert("El rango seleccionado incluye fechas no disponibles.");
        setDates(null)
      }
    }
  };

  const dateTemplate = (date: any) => {

    const isFirst = dates && dates[0] && date.day === dates[0].getDate() && date.month === dates[0].getMonth() && date.year === dates[0].getFullYear();
    const isLast = dates && dates[1] && date.day === dates[1].getDate() && date.month === dates[1].getMonth() && date.year === dates[1].getFullYear();

    const isUnavailable = unavailableDates.some(
      (unavailableDate) =>
        unavailableDate.getDate() === date.day &&
        unavailableDate.getMonth() === date.month &&
        unavailableDate.getFullYear() === date.year
    );

    return (
      <div className={`custom-calendar-day ${isFirst ? "first-day" : ""} ${isLast ? "last-day" : ""} ${isUnavailable && 'unavailable-day'}`}>
        {date.day}
      </div>
    );
  };

  return (
    <>
      <div className="card flex justify-content-center py-10 px-7 w-full border-none ">
        <Calendar
          value={dates}
          onChange={(e) => handleDateChange(e)}
          selectionMode="range"
          readOnlyInput
          inline
          minDate={minDate}
          style={{ width: '100%' }}
          dateTemplate={dateTemplate}
          disabledDates={unavailableDates}
        />
      </div>
    </>
  );
}

export default CalendarReservation;
