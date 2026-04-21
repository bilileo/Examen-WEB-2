import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DraftPersona, Persona } from '../types';
import { v4 as uuidv4 } from 'uuid';
type PersonasState = {
 personas: Persona[];
 personaActiva: Persona | null;
 agregarPersona: (data: DraftPersona) => void;
 eliminarPersona: (id: Persona['id']) => void;
 establecerPersonaActiva: (persona: Persona) => void;
 actualizarPersona: (data: DraftPersona) => void;
 limpiarPersonaActiva: () => void;
}
const crearPersona = (data: DraftPersona): Persona => ({
 id: uuidv4(),
 ...data
})
export const usePersonaStore = create<PersonasState>()( // <-- () extra
 persist(
 (set) => ({
 personas: [],
 personaActiva: null,
 agregarPersona: (data) =>
 set((state) => ({
 personas: [...state.personas, crearPersona(data)]
 })),
 eliminarPersona: (id) =>
 set((state) => ({
 personas: state.personas.filter(p => p.id !== id)
 })),
 establecerPersonaActiva: (persona) =>
 set(() => ({ personaActiva: persona })),
 actualizarPersona: (data) =>
 set((state) => ({
 personas: state.personas.map(p =>
 p.id === state.personaActiva?.id
 ? { id: p.id, ...data }
 : p
 ),
 personaActiva: null
 })),
 limpiarPersonaActiva: () =>
 set(() => ({ personaActiva: null })),
 }),
 { name: 'personas-storage' } // <-- nombre para localStorage
 )
)
