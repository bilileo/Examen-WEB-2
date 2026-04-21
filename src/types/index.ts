export type Persona = {
    id: string;
    nombreCompleto: string;
    fechaNacimiento: string;
    curp: string;
    lugarNacimiento: string;
    matriculaUABC: string;
    cursoCoursera: string;
    ofertadaPor: string;
    numeroCursos: string;
    duracionHoras: string;
}


export type DraftPersona = Omit<Persona, 'id'>;
