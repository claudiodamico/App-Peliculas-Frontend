export default function MostarErrorCampo(props: mostrarErrorCampo){
    return (
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface  mostrarErrorCampo {
    mensaje: string;
}