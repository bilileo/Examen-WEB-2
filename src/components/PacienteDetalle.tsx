type DetallePacienteProps = {
    label: string
    data: string
}
export default function PacienteDetalle({label, data} : DetallePacienteProps) {
  return (
    <div className="flex justify-between py-1.5 border-b border-cyan-500/10 last:border-b-0">
      <span className="font-semibold text-cyan-300/70 text-xs">{label}</span>
      <span className="text-gray-300 text-xs text-right">{data}</span>
    </div>
  )
}