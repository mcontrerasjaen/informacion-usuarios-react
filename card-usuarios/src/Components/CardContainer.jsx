import Card from "./Card"
import "./CardContainer.css"



    const usuarios = [
  {
    nombre: "Elena",
    apellido: "Martínez",
    direccion: "Calle Mayor 15",
    ciudad: "Madrid",
    movil: "611223344",
    imagen: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    nombre: "Julián",
    apellido: "Sánchez",
    direccion: "Avenida del Sol 42",
    ciudad: "Valencia",
    movil: "622334455",
    imagen: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    nombre: "Valeria",
    apellido: "Gómez",
    direccion: "Plaza de la Luna 8",
    ciudad: "Sevilla",
    movil: "633445566",
    imagen: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    nombre: "Ricardo",
    apellido: "Torres",
    direccion: "Calle de la Paz 120",
    ciudad: "Bilbao",
    movil: "644556677",
    imagen: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    nombre: "Isabel",
    apellido: "Ruiz",
    direccion: "Rambla de Cataluña 5",
    ciudad: "Barcelona",
    movil: "655667788",
    imagen: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

function CardContainer () {
    return (
            <div className = "card-container">
                {usuarios.map((usuario, index) => (
                  <Card info = {usuario} key = {index}/>
                  ))
                }
            </div>

    )
}

export default CardContainer

