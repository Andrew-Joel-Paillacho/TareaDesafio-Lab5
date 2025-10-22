/*

  1- Renderizado condicional
  2- Renderizado de listas

*/

import { useState } from "react"

const RenderizadoEjemplo = () => {

  const [modoOscuro, setModoOscuro] = useState(false)
  const [frutas] = useState([
    "🍎 Manzana",
    "🍌 Plátano", 
    "🍊 Naranja",
    "🍓 Fresa",
    "🍇 Uva"
  ])

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado en React</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          <strong>Renderizado condicional:</strong> Mostrar contenido diferente según el estado.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Crear elementos repetitivos a partir de arrays.
        </li>
      </ul>

      {/* Ejemplo 1: Renderizado condicional simple */}
      <div className="flex justify-center mb-8 mt-8">
        <div className={`border rounded-lg p-4 w-80 text-center ${
          modoOscuro ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}>

          <h2 className="text-xl font-bold mb-4">Modo de Color</h2>

          {/* Condicional con operador ternario */}
          {modoOscuro ? (
            <p>🌙 Modo oscuro activado</p>
          ) : (
            <p>☀️ Modo claro activado</p>
          )}

          <button 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => setModoOscuro(!modoOscuro)}
          >
            Cambiar a {modoOscuro ? "claro" : "oscuro"}
          </button>

        </div>
      </div>

      {/* Ejemplo 2: Renderizado condicional con && */}
      <div className="flex justify-center mb-8">
        <div className="border rounded-lg p-4 w-80 text-center">

          <h2 className="text-xl font-bold mb-4">Notificación</h2>

          {/* Condicional con operador lógico AND */}
          {modoOscuro && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-4">
              ⚠️ El modo oscuro está activado
            </div>
          )}

          <p>Prueba activar/desactivar el modo oscuro</p>

        </div>
      </div>

      {/* Ejemplo 3: Renderizado de listas básico */}
      <div className="flex justify-center mb-8">
        <div className="border rounded-lg p-4 w-80">

          <h2 className="text-xl font-bold mb-4 text-center">Lista de Frutas</h2>

          <ul className="space-y-2">
            {frutas.map((fruta, index) => (
              <li 
                key={index}
                className="bg-gray-100 p-2 rounded flex items-center gap-2"
              >
                <span>{fruta}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* Ejemplo 4: Lista con objetos */}
      <div className="flex justify-center">
        <div className="border rounded-lg p-4 w-80">

          <h2 className="text-xl font-bold mb-4 text-center">Tareas Diarias</h2>

          {[
            { id: 1, tarea: "Hacer ejercicio", completada: true },
            { id: 2, tarea: "Estudiar React", completada: false },
            { id: 3, tarea: "Leer un libro", completada: false },
            { id: 4, tarea: "Cocinar comida", completada: true }
          ].map((item) => (
            <div 
              key={item.id}
              className={`p-3 border rounded mb-2 ${
                item.completada ? "bg-green-100 border-green-300" : "bg-white border-gray-300"
              }`}
            >
              <span className={item.completada ? "line-through text-gray-500" : ""}>
                {item.tarea}
              </span>
              {item.completada && (
                <span className="ml-2 text-green-600">✓</span>
              )}
            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default RenderizadoEjemplo