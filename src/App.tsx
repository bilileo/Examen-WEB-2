import { useState } from 'react'
import Formulario from "./components/Formulario"
import ListadoPersonas from "./components/ListadoPacientes"
import Navbar from "./components/Navbar"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import { ToastContainer } from 'react-toastify'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home')

  return (
    <>
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <ToastContainer position="top-right" autoClose={2500} pauseOnHover />
      
      {currentPage === 'home' ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col">
          {/* Header */}
          <div className="border-b border-cyan-500/30 py-8 px-4 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                Registro de Personas
              </h1>
              <p className="text-gray-400">
                Gestiona a las personas listas para generar su documentación de Coursera. 
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Formulario */}
                <div>
                  <div className="sticky top-20">
                    <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
                      <h2 className="text-lg font-semibold text-cyan-400 mb-6">
                        + Agregar Persona
                      </h2>
                      <Formulario />
                    </div>
                  </div>
                </div>

                {/* Listado */}
                <div>
                  <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
                    <h2 className="text-lg font-semibold text-cyan-400 mb-6">
                      Personas Registradas
                    </h2>
                    <ListadoPersonas />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
          <AboutUs />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App