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
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Registro de Personas</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade personas y {''}
            <span className="text-indigo-600 font-bold">Administralas</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registrarPersona)}
        >
              <div className="mb-5">
                  <label htmlFor="nombreCompleto" className="text-sm uppercase font-bold">
                      Nombre Completo 
                  </label>
                  <input  
                      id="nombreCompleto"
                      className="w-full p-3  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre Completo" 
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

              <div className="mb-5">
                <label htmlFor="fechaNacimiento" className="text-sm uppercase font-bold">
                    Fecha de Nacimiento 
                </label>
                <input  
                    id="fechaNacimiento"
                    className="w-full p-3  border border-gray-100"  
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

            <div className="mb-5">
              <label htmlFor="curp" className="text-sm uppercase font-bold">
                  CURP 
              </label>
              <input  
                  id="curp"
                  className="w-full p-3  border border-gray-100"  
                  type="text" 
                  placeholder="CURP" 
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

            <div className="mb-5">
                <label htmlFor="lugarNacimiento" className="text-sm uppercase font-bold">
                    Lugar de Nacimiento 
                </label>
                <input  
                    id="lugarNacimiento"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Lugar de Nacimiento" 
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
            
            <div className="mb-5">
                <label htmlFor="matriculaUABC" className="text-sm uppercase font-bold">
                Matrícula UABC 
                </label>
                <input  
                    id="matriculaUABC"
                    className="w-full p-3  border border-gray-100"  
                    type="text"
                    placeholder="Matrícula UABC" 
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

            <div className="mb-5">
                <label htmlFor="cursoCoursera" className="text-sm uppercase font-bold">
                Curso de Coursera 
                </label>
                <input  
                    id="cursoCoursera"
                    className="w-full p-3  border border-gray-100"  
                    type="text"
                    placeholder="Nombre del Curso Coursera" 
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

            <div className="mb-5">
                <label htmlFor="ofertadaPor" className="text-sm uppercase font-bold">
                Ofertada Por 
                </label>
                <input  
                    id="ofertadaPor"
                    className="w-full p-3  border border-gray-100"  
                    type="text"
                    placeholder="Ej. Google Career Certificates" 
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

            <div className="mb-5">
                <label htmlFor="numeroCursos" className="text-sm uppercase font-bold">
                Número de Cursos 
                </label>
                <input  
                    id="numeroCursos"
                    className="w-full p-3  border border-gray-100"  
                    type="number"
                    placeholder="Ej. 08"
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

            <div className="mb-5">
                <label htmlFor="duracionHoras" className="text-sm uppercase font-bold">
                Duración en Horas 
                </label>
                <input  
                    id="duracionHoras"
                    className="w-full p-3  border border-gray-100"  
                    type="number"
                    placeholder="Ej. 120"
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

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={personaActiva ? 'Actualizar Persona' : 'Guardar Persona'}
            />

            {personaActiva && (
                    <button
                        type="button"
                        className="bg-gray-600 w-full p-3 text-white uppercase font-bold hover:bg-gray-700 cursor-pointer transition-colors mt-3"
                        onClick={handleCancelar}
                    >
                        Cancelar
                    </button>
                )}

        </form> 
    </div>
  )

}

export default Formulario