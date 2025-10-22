/*

  1- Props 

*/

import Sexto from "./Sexto"

const Quinto = () => {

  const producto = {
    nombre: "Laptop Gaming",
    precio: 1299.99,
    categoria: "Tecnología",
    enStock: true,
    caracteristicas: ["16GB RAM", "512GB SSD", "RTX 3060"],
    descuento: 15
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Props</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos de un componente padre a un hijo.
        </li>
      </ul>

      <h2 className="text-green-700 text-center mt-8">Componente Padre - Tienda</h2>

      <div className="border-2 border-green-500 rounded-lg p-6 w-120 mx-auto mb-8">

        <Sexto 
          producto={producto}
          mostrarPrecio={true}
          onComprar={() => alert(`¡Gracias por comprar ${producto.nombre}!`)}
        />

      </div>

    </>
  )
}

export default Quinto