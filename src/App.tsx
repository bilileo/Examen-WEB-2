import Formulario from "./components/Formulario"
import ListadoPersonas from "./components/ListadoPacientes"
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
          <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Registro de Personas - {''}
            <span className="text-indigo-700">Cursos Coursera</span>
          </h1>

          <div className="mt-12 md:flex">
              <Formulario />
              <ListadoPersonas />
          </div>
      </div>
      <ToastContainer position="top-right" autoClose={2500} pauseOnHover />
    </>
  )
}

export default App