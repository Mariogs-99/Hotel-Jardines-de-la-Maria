export const GuarranteePolicies = () => {
    return(
        <>
            <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-xl">Políticas de garantía y cancelación</h1>
                    <span className="flex flex-col gap-2">
                        <h2 className="font-bold">Política de garantía</h2>
                        <p className="opacity-80">Paga en el hotel - Sin depósito. Un número de tarjeta de crédito válida, con fecha de caducidad y código de seguridad es exigido para garantizar su reserva.</p>
                    </span>
                    <span className="flex flex-col gap-2">
                        <h2 className="font-bold">Política de cancelación</h2>
                        <p className="opacity-80">Cancelación/modificación gratis hasta las 16:00, 14 días antes de la llegada. Se cobra la estancia total incluyendo el impuesto si la cancelación/modificación ocurre demasiado tarde o en caso de no presentación y salida anticipada.</p>
                    </span>
                </div>
        </>
    )
}