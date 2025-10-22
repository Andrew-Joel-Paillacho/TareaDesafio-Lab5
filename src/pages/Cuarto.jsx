/*

  1- customHook

*/

import { useCounter } from "../customHook/useCounter"

const Cuarto = () => {

  // Usando el customHook con diferentes configuraciones
  const contadorSimple = useCounter(0)

  const contadorLimitado = useCounter(5, {
    min: 0,
    max: 10,
    step: 2
  })

  const contadorTemperatura = useCounter(20, {
    min: -10,
    max: 40,
    step: 1
  })

  return (
    <>
      <h1 className="font-bold text-2xl">customHook - useCounter</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5 mb-8">
        <li>
          Encapsula lógica compleja de contadores en un hook reutilizable.
        </li>
        <li>
          Permite diferentes configuraciones (límites, paso, valor inicial).
        </li>
        <li>
          Incluye funcionalidades avanzadas como historial y deshacer.
        </li>
      </ul>

      {/* Contador Simple */}
      <div className="flex justify-center mb-8">
        <div className="w-120 border rounded-lg p-6 w-80 text-center bg-blue-50">
          <h2 className="text-lg font-semibold mb-4">Contador Simple</h2>

          <div className="text-4xl font-bold mb-4 text-blue-600">
            {contadorSimple.count}
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
              onClick={contadorSimple.decrement}
              disabled={contadorSimple.isMin}
            >
              -1
            </button>

            <button 
              className="bg-gray-500 text-white py-2 px-4 rounded"
              onClick={contadorSimple.reset}
            >
              Reset
            </button>

            <button 
              className="bg-green-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
              onClick={contadorSimple.increment}
              disabled={contadorSimple.isMax}
            >
              +1
            </button>
          </div>

          <div className="text-sm text-gray-600">
            Historial: [{contadorSimple.history.join(", ")}]
          </div>
        </div>
      </div>

      {/* Contador Limitado */}
      <div className="flex justify-center mb-8">
        <div className="w-120 border rounded-lg p-6 w-80 text-center bg-green-50">
          <h2 className="text-lg font-semibold mb-4">Contador Limitado (0-10, paso 2)</h2>

          <div className="text-4xl font-bold mb-4 text-green-600">
            {contadorLimitado.count}
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
              onClick={contadorLimitado.decrement}
              disabled={contadorLimitado.isMin}
            >
              -2
            </button>

            <button 
              className="bg-gray-500 text-white py-2 px-4 rounded"
              onClick={contadorLimitado.reset}
            >
              Reset
            </button>

            <button 
              className="bg-green-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
              onClick={contadorLimitado.increment}
              disabled={contadorLimitado.isMax}
            >
              +2
            </button>
          </div>

          <div className="flex gap-2 justify-center">
            <button 
              className="bg-purple-500 text-white py-1 px-3 rounded text-sm disabled:bg-gray-300"
              onClick={contadorLimitado.undo}
              disabled={!contadorLimitado.canUndo}
            >
              ↩️ Deshacer
            </button>

            <button 
              className="bg-orange-500 text-white py-1 px-3 rounded text-sm"
              onClick={() => contadorLimitado.setValue(7)}
            >
              Ir a 7
            </button>
          </div>
        </div>
      </div>

      {/* Simulador de Temperatura */}
      <div className="flex justify-center mb-8">
        <div className="w-120 border rounded-lg p-6 w-80 text-center bg-orange-50">
          <h2 className="text-lg font-semibold mb-4">🌡️ Simulador de Temperatura</h2>

          <div className={`text-4xl font-bold mb-4 ${
            contadorTemperatura.count < 0 ? 'text-blue-600' : 
            contadorTemperatura.count > 30 ? 'text-red-600' : 'text-orange-600'
          }`}>
            {contadorTemperatura.count}°C
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
              onClick={contadorTemperatura.decrement}
              disabled={contadorTemperatura.isMin}
            >
              Más frío
            </button>

            <button 
              className="bg-gray-500 text-white py-2 px-4 rounded"
              onClick={contadorTemperatura.reset}
            >
              20°C
            </button>

            <button 
              className="bg-red-500 text-white py-2 px-4 rounded disabled:bg-gray-300"
              onClick={contadorTemperatura.increment}
              disabled={contadorTemperatura.isMax}
            >
              Más calor
            </button>
          </div>

          <div className="text-sm text-gray-600">
            Rango: -10°C a 40°C
            {contadorTemperatura.isMin && " ❄️ Mínimo alcanzado"}
            {contadorTemperatura.isMax && " 🔥 Máximo alcanzado"}
          </div>
        </div>
      </div>

      {/* Información del Hook */}
      <div className="bg-gray-100 p-4 rounded-lg max-w-2xl mx-auto">
        <h3 className="font-semibold mb-2">📚 ¿Qué hace este customHook?</h3>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><strong>useCounter(valorInicial, opciones)</strong> - Crea un contador personalizado</li>
          <li><strong>Opciones:</strong> min, max, step para límites y incrementos</li>
          <li><strong>Funciones:</strong> increment, decrement, reset, setValue, undo</li>
          <li><strong>Estados:</strong> count, history, isMin, isMax, canUndo</li>
          <li><strong>Reutilizable:</strong> Mismo hook, diferentes configuraciones</li>
        </ul>
      </div>

    </>
  )
}

export default Cuarto