/*

  1- Props 

*/

const Sexto = ({producto, mostrarPrecio, onComprar}) => {

  const calcularPrecioConDescuento = () => {
    return producto.precio - (producto.precio * producto.descuento / 100)
  }

  return (
    <>

      <h2 className="text-orange-800 text-center font-bold mb-4">Componente Hijo - Detalle del Producto</h2>

      <div className="flex justify-center mb-8">

        <div className="max-w-sm border-2 border-orange-500 rounded-lg p-6 w-80 bg-white shadow-md">

          <h2 className="text-xl font-semibold mb-2 text-blue-600">{producto.nombre}</h2>

          <p className="mb-2 text-gray-600">Categoría: {producto.categoria}</p>

          <div className="mb-3">
            <span className={`inline-block px-2 py-1 rounded text-xs ${
              producto.enStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {producto.enStock ? '✅ En stock' : '❌ Agotado'}
            </span>
          </div>

          {mostrarPrecio && (
            <div className="mb-4">
              {producto.descuento > 0 ? (
                <div>
                  <p className="text-gray-500 line-through text-sm">
                    ${producto.precio.toFixed(2)}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    ${calcularPrecioConDescuento().toFixed(2)}
                  </p>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {producto.descuento}% OFF
                  </span>
                </div>
              ) : (
                <p className="text-2xl font-bold text-gray-800">
                  ${producto.precio.toFixed(2)}
                </p>
              )}
            </div>
          )}

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Características:</h3>
            <ul className="list-disc pl-5 text-sm">
              {producto.caracteristicas.map((caracteristica, index) => (
                <li key={index}>{caracteristica}</li>
              ))}
            </ul>
          </div>

          <button 
            onClick={onComprar}
            disabled={!producto.enStock}
            className={`w-full py-2 px-4 rounded font-semibold ${
              producto.enStock 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            {producto.enStock ? '🛒 Comprar Ahora' : 'Producto Agotado'}
          </button>

        </div>

      </div>

    </>
  )
}

export default Sexto