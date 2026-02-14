import './card.css'; 

function Card({info}) {
  console.log(info)

  function mostrarAlert () {
    alert(`Usuario:
    \nMóvil: ${info.movil}
    \nDirección:${info.direccion}
    \nCiudad: ${info.ciudad}`);
  };
    
    return (
    <div className="card">
      <img src={info.imagen} alt={info.nombre} className="card-img" />
      <h3 className="card-name">{info.nombre} {info.apellido}</h3>
      
      
      <button className="card-btn" onClick={mostrarAlert}>
        Mostrar +info
      </button>
    </div>
  )
}

export default Card