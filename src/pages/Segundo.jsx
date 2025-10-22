/*

  2- useState con formulario

*/

import { useState } from "react"

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos del usuario:", user)
    alert(`Usuario registrado: ${user.name}, ${user.email}, ${user.age} años`)
  }

  const handleReset = () => {
    setUser({
      name: "",
      email: "",
      age: ""
    })
  }

  return (
    <>
      <h1 className="font-bold text-2xl">useState con Formulario</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5 mb-8">
        <li>
          Manejo de estado complejo con objetos
        </li>
        <li>
          Actualización de propiedades específicas del estado
        </li>
        <li>
          Uso de formularios controlados
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nombre:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu nombre"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Edad:</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu edad"
          />
        </div>

        <div className="flex gap-2">
          <button 
            type="submit" 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Registrar
          </button>

          <button 
            type="button" 
            onClick={handleReset}
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            Limpiar
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h3 className="font-bold mb-2">Datos actuales:</h3>
        <p><strong>Nombre:</strong> {user.name || "No ingresado"}</p>
        <p><strong>Email:</strong> {user.email || "No ingresado"}</p>
        <p><strong>Edad:</strong> {user.age || "No ingresada"}</p>
      </div>
    </>
  )
}

export default UserForm