import type { Persona } from "../types"
import PacienteDetalle from "./PacienteDetalle"
import { usePersonaStore } from '../store/store' // Importamos el store para eliminar personas
import DialogModal from "./DialogModal";
import { useState } from "react";
import { toast } from 'react-toastify'
import { generateDocumentoCoursera } from '../utils/generatePDF'


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

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PacienteDetalle label="ID" data={paciente.id} />
            <PacienteDetalle label="Nombre Completo" data={paciente.nombreCompleto} />
            <PacienteDetalle label="Fecha de Nacimiento" data={paciente.fechaNacimiento} />
            <PacienteDetalle label="CURP" data={paciente.curp} />
            <PacienteDetalle label="Lugar de Nacimiento" data={paciente.lugarNacimiento} />
            <PacienteDetalle label="Matrícula UABC" data={paciente.matriculaUABC} />
            <PacienteDetalle label="Curso Coursera" data={paciente.cursoCoursera} />
            <PacienteDetalle label="Ofertada Por" data={paciente.ofertadaPor} />
            <PacienteDetalle label="Número de Cursos" data={paciente.numeroCursos} />
            <PacienteDetalle label="Duración en Horas" data={paciente.duracionHoras} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => handleClickEditar()}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => handleDescargarDocumento()}
                >Documento Coursera</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setIsOpened(true)}
                >Eliminar</button>

                <DialogModal
                        title="Confirmar eliminación"
                        isOpened={isOpened}
                        onProceed={onProceed}
                        onClose={() => setIsOpened(false)}
                    >
                        <p>
                            Vas a eliminar el registro de {paciente.nombreCompleto}. Esta acción no se puede deshacer.
                        </p>
                    </DialogModal>

            </div>
        </div>
    )
}

export default Paciente