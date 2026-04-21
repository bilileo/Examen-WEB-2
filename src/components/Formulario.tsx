import { useForm } from "react-hook-form";
import Error from './Error'
import { usePersonaStore } from '../store/store'
import type { DraftPersona } from '../types/index.ts'
import { toast } from 'react-toastify'
import { useEffect } from "react";


const Formulario = () => {
    const personaActiva = usePersonaStore(state => state.personaActiva)
    const agregarPersona = usePersonaStore(state => state.agregarPersona)
    const actualizarPersona = usePersonaStore(state => state.actualizarPersona)
    const limpiarPersonaActiva = usePersonaStore(state => state.limpiarPersonaActiva)

    const { register, handleSubmit, reset, formState: {errors}, watch, setValue } = useForm<DraftPersona>({
        mode: 'onChange',
        defaultValues: {
            nombreCompleto: '',
            fechaNacimiento: '',
            curp: '',
            lugarNacimiento: '',
            matriculaUABC: '',
            cursoCoursera: '',
            ofertadaPor: '',
            numeroCursos: '',
            duracionHoras: ''
        }
    })
    
    // Observar los valores del formulario en tiempo real
    const formValues = watch()
    
    const registrarPersona = (data: DraftPersona) => {
        if (personaActiva) {
            actualizarPersona(data)
            toast.success('Persona actualizada correctamente')
        }else{
        console.log('=== SUBMIT ===')
        console.log('Datos JSON:', JSON.stringify(data, null, 2))
        console.log('Valores watch:', formValues)
        agregarPersona(data)
        toast.success('Persona agregada correctamente')
        }
        
        // Usar setTimeout para que reset ocurra despues de que react-hook-form procese todo
        setTimeout(() => {
            reset({
                nombreCompleto: '',
                fechaNacimiento: '',
                curp: '',
                lugarNacimiento: '',
                matriculaUABC: '',
                cursoCoursera: '',
                ofertadaPor: '',
                numeroCursos: '',
                duracionHoras: ''
            })
        }, 0)
    }

    const handleCancelar = () => {
        limpiarPersonaActiva() // Limpiar la persona activa para cancelar la edición
        reset() // Reiniciar el formulario
    }

    useEffect(() => {
    if (personaActiva) {
        setValue('nombreCompleto',    personaActiva.nombreCompleto)
        setValue('fechaNacimiento',   personaActiva.fechaNacimiento)
        setValue('curp',              personaActiva.curp)
        setValue('lugarNacimiento',   personaActiva.lugarNacimiento)
        setValue('matriculaUABC',     personaActiva.matriculaUABC)
        setValue('cursoCoursera',     personaActiva.cursoCoursera)
        setValue('ofertadaPor',       personaActiva.ofertadaPor)
        setValue('numeroCursos',      personaActiva.numeroCursos)
        setValue('duracionHoras',     personaActiva.duracionHoras)
    }
    }, [personaActiva])   // Se ejecuta cada vez que cambia personaActiva

  return (
    <div className="w-full">
        <form 
            className="space-y-4"
            noValidate
            onSubmit={handleSubmit(registrarPersona)}
        >
          <div>
            <label htmlFor="nombreCompleto" className="text-xs font-semibold text-cyan-300 block mb-1">
              Nombre Completo
            </label>
            <input  
              id="nombreCompleto"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="text" 
              placeholder="Nombre completo" 
              {...register('nombreCompleto', {
                required: "El nombre completo es obligatorio",
                pattern: {
                  value: /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/,
                  message: "El nombre solo puede contener letras y espacios"
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres"
                },
                maxLength: {
                  value: 100,
                  message: "El nombre no puede exceder 100 caracteres"
                }
              })}
            />
            {errors.nombreCompleto && <Error>{errors.nombreCompleto?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="fechaNacimiento" className="text-xs font-semibold text-cyan-300 block mb-1">
              Fecha de Nacimiento
            </label>
            <input  
              id="fechaNacimiento"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="date" 
              {...register('fechaNacimiento', {
                required: 'La fecha de nacimiento es obligatoria',
                validate: (value) => {
                  const selectedDate = new Date(value);
                  const today = new Date();
                  const age = today.getFullYear() - selectedDate.getFullYear();
                  
                  if (age < 15) {
                    return "Debes tener al menos 15 años";
                  }
                  if (age > 120) {
                    return "La fecha no es válida";
                  }
                  return true;
                }
              })}
            />
            {errors.fechaNacimiento && <Error>{errors.fechaNacimiento?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="curp" className="text-xs font-semibold text-cyan-300 block mb-1">
              CURP
            </label>
            <input  
              id="curp"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition uppercase"  
              type="text" 
              placeholder="EIDL050708HBCSZSA4" 
              {...register('curp', {
                required: "El CURP es obligatorio",
                pattern: {
                  value: /^[A-Z]{4,6}\d{6}[HM][A-Z]{2}[A-Z]{3}[A-Z0-9]{2}$/i,
                  message: "El CURP debe tener un formato válido (18 caracteres)"
                },
                minLength: {
                  value: 18,
                  message: "El CURP debe tener exactamente 18 caracteres"
                },
                maxLength: {
                  value: 18,
                  message: "El CURP debe tener exactamente 18 caracteres"
                }
              })}
            />
            {errors.curp && <Error>{errors.curp?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="lugarNacimiento" className="text-xs font-semibold text-cyan-300 block mb-1">
              Lugar de Nacimiento
            </label>
            <input  
              id="lugarNacimiento"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="text" 
              placeholder="Guadalajara, Jalisco" 
              {...register('lugarNacimiento',{
                required:"El lugar de nacimiento es obligatorio",
                pattern: {
                  value: /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s\,]+$/,
                  message: "El lugar solo puede contener letras, espacios y comas"
                },
                minLength: {
                  value: 2,
                  message: "El lugar debe tener al menos 2 caracteres"
                },
                maxLength: {
                  value: 100,
                  message: "El lugar no puede exceder 100 caracteres"
                }
              })}
            />
            {errors.lugarNacimiento && <Error>{errors.lugarNacimiento?.message?.toString()}</Error>} 
          </div>
          
          <div>
            <label htmlFor="matriculaUABC" className="text-xs font-semibold text-cyan-300 block mb-1">
              Matrícula UABC
            </label>
            <input  
              id="matriculaUABC"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="text"
              placeholder="1234567" 
              {...register('matriculaUABC', {
                required: 'La matrícula UABC es obligatoria',
                pattern: {
                  value: /^[0-9]{7}$/,
                  message: "La matrícula debe contener exactamente 7 números"
                },
                minLength: {
                  value: 7,
                  message: "La matrícula debe tener 7 dígitos"
                },
                maxLength: {
                  value: 7,
                  message: "La matrícula debe tener 7 dígitos"
                }
              })}
            />
            {errors.matriculaUABC && <Error>{errors.matriculaUABC?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="cursoCoursera" className="text-xs font-semibold text-cyan-300 block mb-1">
              Curso a afiliar en Coursera
            </label>
            <input  
              id="cursoCoursera"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="text"
              placeholder="Python for Everybody" 
              {...register('cursoCoursera', {
                required: 'El curso de Coursera es obligatorio',
                minLength: {
                  value: 3,
                  message: "El nombre del curso debe tener al menos 3 caracteres"
                },
                maxLength: {
                  value: 200,
                  message: "El nombre del curso no puede exceder 200 caracteres"
                }
              })}
            />
            {errors.cursoCoursera && <Error>{errors.cursoCoursera?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="ofertadaPor" className="text-xs font-semibold text-cyan-300 block mb-1">
              Ofertada Por
            </label>
            <input  
              id="ofertadaPor"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="text"
              placeholder="Google Career Certificates" 
              {...register('ofertadaPor', {
                required: 'El campo Ofertada Por es obligatorio',
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres"
                },
                maxLength: {
                  value: 150,
                  message: "El campo no puede exceder 150 caracteres"
                }
              })}
            />
            {errors.ofertadaPor && <Error>{errors.ofertadaPor?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="numeroCursos" className="text-xs font-semibold text-cyan-300 block mb-1">
              Número de Cursos
            </label>
            <input  
              id="numeroCursos"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="number"
              placeholder="8"
              min="1"
              max="999"
              {...register('numeroCursos', {
                required: 'El número de cursos es obligatorio',
                pattern: {
                  value: /^\d+$/,
                  message: "Solo se permiten números"
                },
                min: {
                  value: 1,
                  message: "El número de cursos debe ser mayor a 0"
                },
                max: {
                  value: 999,
                  message: "El número de cursos no puede ser mayor a 999"
                },
                validate: (value) => {
                  if (!value || isNaN(Number(value))) return "Debe ser un número válido";
                  return true;
                }
              })}
            />
            {errors.numeroCursos && <Error>{errors.numeroCursos?.message?.toString()}</Error>} 
          </div>

          <div>
            <label htmlFor="duracionHoras" className="text-xs font-semibold text-cyan-300 block mb-1">
              Duración del curso (horas)
            </label>
            <input  
              id="duracionHoras"
              className="w-full px-3 py-2 bg-gray-800 border border-cyan-500/30 rounded text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"  
              type="number"
              placeholder="120"
              min="1"
              max="9999"
              {...register('duracionHoras', {
                required: 'La duración en horas es obligatoria',
                pattern: {
                  value: /^\d+$/,
                  message: "Solo se permiten números"
                },
                min: {
                  value: 1,
                  message: "La duración debe ser mayor a 0 horas"
                },
                max: {
                  value: 9999,
                  message: "La duración no puede ser mayor a 9999 horas"
                },
                validate: (value) => {
                  if (!value || isNaN(Number(value))) return "Debe ser un número válido";
                  return true;
                }
              })}
            />
            {errors.duracionHoras && <Error>{errors.duracionHoras?.message?.toString()}</Error>} 
          </div>

          <div className="flex gap-2 pt-2">
            <input
              type="submit"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold py-2 rounded hover:from-cyan-600 hover:to-blue-700 cursor-pointer transition shadow-lg shadow-cyan-500/30"
              value={personaActiva ? 'Actualizar' : 'Guardar'}
            />

            {personaActiva && (
              <button
                type="button"
                className="flex-1 bg-gray-700 text-gray-200 text-sm font-semibold py-2 rounded hover:bg-gray-600 cursor-pointer transition"
                onClick={handleCancelar}
              >
                Cancelar
              </button>
            )}
          </div>

        </form> 
    </div>
  )

}

export default Formulario