import '../estilos/Boton.css'
function Boton(props) {
  
  
  
  
  return (
    <div className={`Boton ${props.class}`} onClick={() => props.clickFunc(props.symbolBoton ? props.symbolBoton: props.clickFunc(props.operation) )}>
      {props.children}
    </div>
  );
}

export default Boton;