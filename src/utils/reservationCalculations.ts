export const calculateReservation = (price: number, checkIn: string, checkOut: string) => {
  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(2000 + year, month - 1, day);
  };

  const checkInDate = parseDate(checkIn);
  const checkOutDate = parseDate(checkOut);

  const numberOfNights = Math.max(0, (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
  const subtotal = price * numberOfNights;
  const IVA = subtotal * 0.10;
  const total = subtotal + IVA;

  return { numberOfNights, subtotal, IVA, total };
};
