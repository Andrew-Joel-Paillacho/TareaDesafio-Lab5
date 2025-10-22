/*

  1- useEffect

*/

import { useEffect, useState } from "react"

const ContadorConEfectos = () => {

  const [contador, setContador] = useState(0)
  const [mensaje, setMensaje] = useState("")

  // useEffect sin dependencias - se ejecuta en cada render
  useEffect(() => {
    console.log("✅ Componente montado/actualizado")
    document.title = `Contador: ${contador}`
  })

  // useEffect con array de dependencias vacío - se ejecuta solo al montar
  useEffect(() => {
    console.log("🎯 Componente montado por primera vez")
    setMensaje("¡Bienvenido al contador!")

    // Cleanup function - se ejecuta al desmontar
    return () => {
      console.log("👋 Componente desmontado")
    }
  }, [])

  // useEffect con dependencias - se ejecuta cuando cambia 'contador'
  useEffect(() => {
    console.log(`🔢 Contador cambió a: ${contador}`)

    if (contador > 10) {
      setMensaje("¡Wow, vas muy rápido! 🚀")
    } else if (contador > 5) {
      setMensaje("¡Vas subiendo! 📈")
    } else if (contador < 0) {
      setMensaje("¡Cuidado, números negativos! ⚠️")
    } else {
      setMensaje("Sigue contando...")
    }
  }, [contador])

  // useEffect para efectos de intervalo
  useEffect(() => {
    if (contador > 15) {
      const intervalo = setInterval(() => {
        setContador(prev => prev - 1)
      }, 1000)

      // Cleanup - importante para limpiar intervalos
      return () => clearInterval(intervalo)
    }
  }, [contador])

  const incrementar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador - 1)
  const resetear = () => setContador(0)

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect - Ejemplo Sencillo</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5 mb-8">
        <li>
          <strong>Sin dependencias:</strong> Se ejecuta después de cada render.
        </li>
        <li>
          <strong>Array vacío:</strong> Se ejecuta solo al montar el componente.
        </li>
        <li>
          <strong>Con dependencias:</strong> Se ejecuta cuando cambian las dependencias especificadas.
        </li>
        <li>
          <strong>Cleanup:</strong> Función que se ejecuta al desmontar o antes del siguiente efecto.
        </li>
      </ul>

      <div className="flex justify-center mb-8">

        <div className="w-120 border rounded-lg p-6 w-80 text-center bg-gray-50">

          <h2 className="text-4xl font-bold mb-4 text-blue-600">{contador}</h2>

          <div className="mb-4 p-3 bg-white rounded border">
            <p className="text-sm text-gray-700">{mensaje}</p>
          </div>

          <div className="flex gap-2 justify-center">
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              onClick={decrementar}
            >
              -1
            </button>

            <button 
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
              onClick={resetear}
            >
              Reset
            </button>

            <button 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              onClick={incrementar}
            >
              +1
            </button>
          </div>

          {/* Información adicional */}
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <p>🔍 Mira la consola para ver los efectos</p>
            <p>📝 El título de la página también cambia</p>
            {contador > 15 && (
              <p className="text-orange-500 font-bold">
                ⏰ ¡Contador automático activado!
              </p>
            )}
          </div>

        </div>

      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">¿Qué está pasando?</h3>
        <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-1">
          <li>El título de la página se actualiza con el contador</li>
          <li>El mensaje cambia según el valor del contador</li>
          <li>Cuando llegas a 15, el contador empieza a decrementar automáticamente</li>
          <li>Todos los efectos se limpian apropiadamente</li>
        </ul>
      </div>

    </>
  )
}

export default ContadorConEfectos