/*

  1- Zustand 

*/

// Octavo.js - Componente Hijo
import storeUsuario from "../context/storeUsuario"

const Octavo = () => {

  const {usuario, setUsuario} = storeUsuario()

  return (
    <div className="border-2 border-green-500 rounded-lg p-4 mb-4">
      <h2 className="text-green-700 text-center">Componente Hijo</h2>

      <p><strong>Usuario actual:</strong> {usuario.nombre}</p>

      <button 
        className="bg-green-600 text-white py-1 px-3 rounded w-full mt-2 hover:bg-green-700 transition"
        onClick={() => {
          setUsuario({
            nombre: "Pedro Martínez", 
            email: "pedro@ejemplo.com", 
            rol: "Editor"
          })
        }}
      >
        Cambiar desde Hijo
      </button>
    </div>
  )
}

export default Octavo