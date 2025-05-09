interface CreditCardProps {
    cardName: string;
    cardNumber: string;
    dueDate: string;
    CVV: string;
  }
  
  const CreditCard: React.FC<CreditCardProps> = ({ cardName, cardNumber, dueDate, CVV }) => {
    return (
      <div className="relative w-80 h-48 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl shadow-xl p-6 font-mono">
        <div className="absolute top-4 right-4 text-sm">{dueDate || "MM/AA"}</div>
        <div className="absolute bottom-10 left-6 text-xl tracking-widest">
          {cardNumber || "**** **** **** ****"}
        </div>
        <div className="absolute bottom-4 left-6 text-sm uppercase">{cardName || "NOMBRE EN TARJETA"}</div>
        <div className="absolute bottom-4 right-6 text-sm">{CVV ? `CVV: ${CVV}` : ""}</div>
      </div>
    );
  };
  
  export default CreditCard;
  