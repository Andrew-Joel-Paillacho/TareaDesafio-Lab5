/*

  1- Variable
  2- Fragment
  3- JSX
  4- Condicional
  5.- Eventos

*/

const TaskManager = () => {

  // 1- Variables
  const tasks = [
    { id: 1, title: "Aprender React", completed: true },
    { id: 2, title: "Practicar useState", completed: false },
    { id: 3, title: "Crear componentes", completed: false },
    { id: 4, title: "Manejar eventos", completed: true }
  ]

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks

  // Función para manejar eventos
  const handleTaskClick = (taskId, taskTitle) => {
    alert(`Hiciste clic en la tarea: "${taskTitle}" (ID: ${taskId})`)
  }

  const handleAddTask = () => {
    alert("¡Agregar nueva tarea!")
  }

  return (
    // 2- Fragment
    <>
      <h1 className="font-bold text-2xl">Gestor de Tareas</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5 mb-8">
        <li>
          <strong>Variable:</strong> Arrays y objetos para almacenar datos complejos.
        </li>
        <li>
          <strong>Fragment:</strong> Agrupa múltiples elementos sin afectar el DOM.
        </li>
        <li>
          <strong>JSX:</strong> Mezcla HTML con JavaScript de forma natural.
        </li>
        <li>
          <strong>Condicional:</strong> Renderizado condicional con operadores ternarios y lógicos.
        </li>
        <li>
          <strong>Eventos:</strong> Manejo de clicks con parámetros.
        </li>
      </ul>

      {/* 3- JSX con expresiones JavaScript */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Resumen de Tareas</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white p-3 rounded">
            <p className="text-2xl font-bold text-blue-600">{totalTasks}</p>
            <p className="text-sm">Total</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="text-2xl font-bold text-green-600">{completedTasks}</p>
            <p className="text-sm">Completadas</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="text-2xl font-bold text-red-600">{pendingTasks}</p>
            <p className="text-sm">Pendientes</p>
          </div>
        </div>
      </div>

      {/* 4- Condicionales */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Lista de Tareas</h2>

        {/* Condicional para mostrar mensaje si no hay tareas */}
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No hay tareas disponibles</p>
        ) : (
          <div className="space-y-2">
            {tasks.map(task => (
              <div 
                key={task.id}
                className={`p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  task.completed ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
                }`}
                // 5- Eventos con parámetros
                onClick={() => handleTaskClick(task.id, task.title)}
              >
                <div className="flex justify-between items-center">
                  <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                    {task.title}
                  </span>
                  {/* Condicional inline */}
                  {task.completed && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓ Completada
                    </span>
                  )}
                  {/* Operador lógico AND */}
                  {!task.completed && (
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                      Pendiente
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Condicional con && */}
      {pendingTasks > 0 && (
        <div className="bg-orange-100 border border-orange-300 text-orange-800 px-4 py-3 rounded mb-4">
          Tienes {pendingTasks} tarea{pendingTasks !== 1 ? 's' : ''} pendiente{pendingTasks !== 1 ? 's' : ''}
        </div>
      )}

      {/* Evento simple */}
      <div className="text-center">
        <button 
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          onClick={handleAddTask}
        >
          + Agregar Nueva Tarea
        </button>
      </div>

      {/* Ejemplo de condicional múltiple */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Estado del Proyecto:</h3>
        {completedTasks === totalTasks && totalTasks > 0 ? (
          <p className="text-green-600">🎉 ¡Todas las tareas completadas!</p>
        ) : completedTasks > totalTasks / 2 ? (
          <p className="text-blue-600">👍 Buen progreso, sigue así</p>
        ) : (
          <p className="text-orange-600">💪 Comienza a trabajar en tus tareas</p>
        )}
      </div>
    </>
  )
}

export default TaskManager