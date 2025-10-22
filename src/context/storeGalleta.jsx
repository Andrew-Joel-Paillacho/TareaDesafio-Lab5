import { create } from "zustand";


const storeGalleta = create((set)=>({
    
    detalle:{
        nombre: "Nucita",
        tipo: "galleta",
    },
    
    setGalleta: (newGalleta) => set({ detalle: newGalleta })
    
}))


export default storeGalleta
