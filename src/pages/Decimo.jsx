/*

  1- Localstorage

*/

import { useEffect, useState } from "react"

const ListaTareasPersistente = () => {

  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState("")
  const [filtro, setFiltro] = useState("todas") // todas, completadas, pendientes

  // Cargar tareas desde localStorage al montar el componente
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("mis-tareas")
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas))
    }
  }, [])

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("mis-tareas", JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      completada: false,
      fecha: new Date().toLocaleDateString()
    }

    setTareas(prev => [tarea, ...prev])
    setNuevaTarea("")
  }

  const toggleCompletada = (id) => {
    setTareas(prev => 
      prev.map(tarea => 
        tarea.id === id 
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    )
  }

  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(tarea => tarea.id !== id))
  }

  const limpiarCompletadas = () => {
    setTareas(prev => prev.filter(tarea => !tarea.completada))
  }

  const limpiarTodas = () => {
    setTareas([])
    localStorage.removeItem("mis-tareas")
  }

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === "completadas") return tarea.completada
    if (filtro === "pendientes") return !tarea.completada
    return true // "todas"
  })

  const tareasCompletadas = tareas.filter(t => t.completada).length
  const tareasPendientes = tareas.length - tareasCompletadas

  return (
    <>
      <h1 className="font-bold text-2xl">LocalStorage - Lista de Tareas</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5 mb-8">
        <li>
          <strong>Persistencia:</strong> Los datos se mantienen al recargar la página.
        </li>
        <li>
          <strong>Sincronización:</strong> useEffect para guardar automáticamente los cambios.
        </li>
        <li>
          <strong>Objetos complejos:</strong> Usamos JSON.stringify/parse para arrays de objetos.
        </li>
        <li>
          <strong>Limpieza:</strong> Diferentes formas de eliminar datos del almacenamiento.
        </li>
      </ul>

      <div className="max-w-2xl mx-auto">

        {/* Formulario para agregar tareas */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
              placeholder="Escribe una nueva tarea..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={agregarTarea}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Agregar
            </button>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div className="bg-gray-100 p-2 rounded">
              <div className="font-bold text-lg">{tareas.length}</div>
              <div>Total</div>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <div className="font-bold text-lg text-green-600">{tareasCompletadas}</div>
              <div>Completadas</div>
            </div>
            <div className="bg-orange-100 p-2 rounded">
              <div className="font-bold text-lg text-orange-600">{tareasPendientes}</div>
              <div>Pendientes</div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-4 justify-center">
          <button
            onClick={() => setFiltro("todas")}
            className={`px-3 py-1 rounded ${
              filtro === "todas" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Todas ({tareas.length})
          </button>
          <button
            onClick={() => setFiltro("pendientes")}
            className={`px-3 py-1 rounded ${
              filtro === "pendientes" ? "bg-orange-600 text-white" : "bg-gray-200"
            }`}
          >
            Pendientes ({tareasPendientes})
          </button>
          <button
            onClick={() => setFiltro("completadas")}
            className={`px-3 py-1 rounded ${
              filtro === "completadas" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            Completadas ({tareasCompletadas})
          </button>
        </div>

        {/* Lista de tareas */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {tareasFiltradas.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {tareas.length === 0 
                ? "📝 No hay tareas. ¡Agrega una nueva!" 
                : "🔍 No hay tareas que coincidan con el filtro"}
            </div>
          ) : (
            tareasFiltradas.map(tarea => (
              <div
                key={tarea.id}
                className={`flex items-center justify-between p-4 border-b ${
                  tarea.completada ? "bg-green-50" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={tarea.completada}
                    onChange={() => toggleCompletada(tarea.id)}
                    className="h-4 w-4"
                  />
                  <div>
                    <span className={tarea.completada ? "line-through text-gray-500" : ""}>
                      {tarea.texto}
                    </span>
                    <span className="text-xs text-gray-400 ml-2">{tarea.fecha}</span>
                  </div>
                </div>
                <button
                  onClick={() => eliminarTarea(tarea.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  🗑️ Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2 justify-center mt-6">
          <button
            onClick={limpiarCompletadas}
            disabled={tareasCompletadas === 0}
            className="bg-orange-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Limpiar Completadas
          </button>
          <button
            onClick={limpiarTodas}
            disabled={tareas.length === 0}
            className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Limpiar Todo
          </button>
        </div>

        {/* Información de localStorage */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">💾 Datos en localStorage:</h3>
          <p className="text-sm">
            Tareas guardadas: <strong>{tareas.length}</strong> | 
            Espacio usado: <strong>{JSON.stringify(tareas).length}</strong> caracteres
          </p>
          <button
            onClick={() => console.log("Tareas en localStorage:", JSON.parse(localStorage.getItem("mis-tareas")))}
            className="text-xs bg-blue-100 px-2 py-1 rounded mt-2"
          >
            Ver en consola
          </button>
        </div>

      </div>
    </>
  )
}

export default ListaTareasPersistente