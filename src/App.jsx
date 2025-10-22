
import {  BrowserRouter,  Routes,  Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Primero from "./pages/Primero";
import Segundo from "./pages/Segundo";
import Tercero from "./pages/Tercero";
import Cuarto from "./pages/Cuarto";
import Quinto from "./pages/Quinto";
import Septimo from "./pages/Septimo";
import Noveno from "./pages/Noveno";
import Decimo from "./pages/Decimo";




function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />}>
          <Route index element={<Primero />} />
          <Route path="fundamentos" element={<Primero />} />
          <Route path="usestate" element={<Segundo />} />
          <Route path="useffect" element={<Tercero />} />
          <Route path="customhook" element={<Cuarto />} />
          <Route path="props" element={<Quinto />} />
          <Route path="zustand" element={<Septimo />} />
          <Route path="rederizado" element={<Noveno />} />
          <Route path="localStorage" element={<Decimo />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App