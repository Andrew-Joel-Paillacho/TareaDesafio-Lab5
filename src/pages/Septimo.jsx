/*

  1- Zustand 

*/

import storeUsuario from "../context/storeUsuario"
import Octavo from "./Octavo"

const Septimo = () => {

  const {usuario, setUsuario} = storeUsuario()

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Además, funciona como un store que cualquier componente puede usar.
        </li>
      </ul>

      <h2 className="text-blue-700 text-center mt-8">Componente Padre</h2>

      <div className="border-2 border-blue-500 rounded-lg p-4 w-80 mx-auto mb-8">

        <Octavo/>

        <p><strong>Nombre:</strong> {usuario.nombre}</p>

        <p><strong>Email:</strong> {usuario.email}</p>

        <p><strong>Rol:</strong> {usuario.rol}</p>

        <button 
          className="bg-blue-600 text-white py-2 px-4 rounded w-full mt-4 hover:bg-blue-700 transition"
          onClick={() => {
            setUsuario({
              nombre: "Ana García", 
              email: "ana@empresa.com", 
              rol: "Administradora"
            })
          }}
        >
          Cambiar Usuario
        </button>

      </div>

    </>
  )
}

export default Septimo