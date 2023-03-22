import React from "react";
import '../hojas-de-estilos/Boton-clear.css'


const BotonClear = (props) => (
  <div className="Boton-clear"
   onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;