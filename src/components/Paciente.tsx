import type { Persona } from "../types"
import PacienteDetalle from "./PacienteDetalle"
import { usePersonaStore } from '../store/store' // Importamos el store para eliminar personas
import DialogModal from "./DialogModal";
import { useState } from "react";
import { toast } from 'react-toastify'
import { generateCertificadoCoursera, generateDocumentoCoursera } from '../utils/generatePDF'


type PacienteProps = {
    paciente: Persona
}

const Paciente = ({ paciente }: PacienteProps) => {

    const [isOpened, setIsOpened] = useState(false);

    const onProceed = () => {
        handleClickDelete(); // Llamamos a la función para eliminar la persona cuando se hace clic en "Proceed"
    };

    const eliminarPersona = usePersonaStore((state) => state.eliminarPersona) // Importamos la función para eliminar personas desde el store
    //const getPersonaById = usePersonaStore((state) => state.getPersonaById)
    
    // Importar la funcion del store para editar 
    const establecerPersonaActiva =
    usePersonaStore((state) => state.establecerPersonaActiva)

    const handleClickDelete = () => {
        eliminarPersona(paciente.id)
        toast.info(`Persona ${paciente.nombreCompleto} eliminada`)
    }
    // Manejador del click
    const handleClickEditar = () => {
    establecerPersonaActiva(paciente)  // Enviar el objeto completo
    }

    const handleDescargarDocumento = () => {
        try {
            generateDocumentoCoursera(paciente)
            toast.success('Documento descargado correctamente')
        } catch (error) {
            toast.error('Error al generar el documento')
            console.error(error)
        }
    }

    const handleDescargarCertificado = () => {
        try {
            generateCertificadoCoursera(paciente)
            toast.success('Certificado descargado correctamente')
        } catch (error) {
            toast.error('Error al generar el certificado')
            console.error(error)
        }
    }

    return (
        <div className="border border-cyan-500/30 rounded-lg p-4 bg-gray-800/50 hover:border-cyan-500/60 hover:bg-gray-800/70 transition">
            {/* Encabezado */}
            <div className="mb-4 pb-4 border-b border-cyan-500/20">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs text-cyan-300/70 font-semibold">ID</p>
                        <p className="text-lg font-semibold text-cyan-400">{paciente.id}</p>
                    </div>
                    <div className="text-right flex-1">
                        <p className="text-xs text-cyan-300/70 font-semibold">Nombre</p>
                        <p className="text-sm font-semibold text-gray-100">{paciente.nombreCompleto}</p>
                    </div>
                </div>
            </div>

            {/* Detalles */}
            <div className="space-y-0 mb-4 text-sm">
                <PacienteDetalle label="Nacimiento" data={paciente.fechaNacimiento} />
                <PacienteDetalle label="CURP" data={paciente.curp} />
                <PacienteDetalle label="Lugar" data={paciente.lugarNacimiento} />
                <PacienteDetalle label="Matrícula" data={paciente.matriculaUABC} />
                <PacienteDetalle label="Curso" data={paciente.cursoCoursera} />
                <PacienteDetalle label="Ofertada" data={paciente.ofertadaPor} />
                <PacienteDetalle label="Num. Cursos" data={paciente.numeroCursos} />
                <PacienteDetalle label="Horas" data={paciente.duracionHoras} />
            </div>

            {/* Botones */}
            <div className="grid grid-cols-4 gap-2">
                <button
                    type="button"
                    className="text-xs py-1.5 px-2 bg-cyan-600/80 hover:bg-cyan-600 text-white font-semibold rounded transition"
                    onClick={() => handleClickEditar()}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="text-xs py-1.5 px-2 bg-blue-600/80 hover:bg-blue-600 text-white font-semibold rounded transition"
                    onClick={() => handleDescargarDocumento()}
                >
                    Doc
                </button>

                <button
                    type="button"
                    className="text-xs py-1.5 px-2 bg-purple-600/80 hover:bg-purple-600 text-white font-semibold rounded transition"
                    onClick={() => handleDescargarCertificado()}
                >
                    Cert
                </button>

                <button
                    type="button"
                    className="text-xs py-1.5 px-2 bg-red-600/80 hover:bg-red-600 text-white font-semibold rounded transition"
                    onClick={() => setIsOpened(true)}
                >
                    Borrar
                </button>

                <DialogModal
                    title="Confirmar eliminación"
                    isOpened={isOpened}
                    onProceed={onProceed}
                    onClose={() => setIsOpened(false)}
                >
                    <p>
                        ¿Eliminar a <strong>{paciente.nombreCompleto}</strong>? Esta acción no se puede deshacer.
                    </p>
                </DialogModal>
            </div>
        </div>
    )
}

export default Paciente