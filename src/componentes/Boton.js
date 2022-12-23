import '../estilos/Boton.css'
function Boton(props) {
  
  // const isOperator = (buttonText) => {
  //   return isNaN(buttonText) && (buttonText !=='.') && (buttonText !== '=');
  // };
  
  return (
    <div className={`button ${props.class}`} onClick={() => props.clickFunc(props.symbolButton ? props.symbolButton: props.clickFunc(props.operation) )}>
      {props.children}
    </div>
  );
}

export default Boton;