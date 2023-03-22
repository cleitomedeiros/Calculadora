import React from "react";
import '../hojas-de-estilos/Boton.css';
function Boton(props) {

 const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
 }

 let clases = " boton-contenedor " + (esOperador( props.children ) ? 'operador' :"");
    return (
      <div 
        className={ clases}
          onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    )
}

export default Boton;