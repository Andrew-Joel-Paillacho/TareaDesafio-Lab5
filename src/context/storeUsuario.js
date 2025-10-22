import { create } from "zustand";

const storeUsuario = create((set) => ({

    usuario: {
        nombre: "Carlos López",
        email: "carlos@ejemplo.com",
        rol: "Usuario"
    },

    setUsuario: (nuevoUsuario) => set({ usuario: nuevoUsuario })

}))

export default storeUsuario