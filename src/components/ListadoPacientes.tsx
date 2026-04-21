import { usePersonaStore } from '../store/store'
import Paciente from './Paciente'

const ListadoPersonas = () => {
   
    const personas = usePersonaStore((state) => state.personas)

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll px-5">
            <h2 className="font-black text-3xl text-center">Listado de Personas</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra a tus {''}
                <span className="text-indigo-600 font-bold">Personas</span>
            </p>

            {personas.length === 0 && (
                <p className="text-center text-gray-600">No hay personas registradas todavía.</p>
            )}

            <div className="space-y-5">
                {personas.map(persona => (
                    <Paciente key={persona.id} paciente={persona} />
                ))}
            </div>
        </div>
    )
}

export default ListadoPersonas