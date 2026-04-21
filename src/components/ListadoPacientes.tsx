import { usePersonaStore } from '../store/store'
import Paciente from './Paciente'

const ListadoPersonas = () => {
   
    const personas = usePersonaStore((state) => state.personas)

    return (
        <div className="w-full">
            {personas.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                    <p className="text-sm">Sin registros</p>
                </div>
            ) : (
                <div>
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs text-cyan-300/70 font-semibold">Total: <strong className="text-cyan-400">{personas.length}</strong></span>
                    </div>

                    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                        {personas.map(persona => (
                            <Paciente key={persona.id} paciente={persona} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListadoPersonas