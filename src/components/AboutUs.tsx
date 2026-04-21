import React from 'react';
import { Zap, BarChart3, Code2, Palette, Users, Rocket, Target, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Epic Hero Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest">CO-CREACIÓN E INNOVACIÓN</p>
          </div>
          <h1 className="text-3xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 italic">
            Dos Visiones, Un Solo Código
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Este proyecto no es solo una herramienta; es el resultado de una <span className="text-cyan-400 font-bold">fusión estratégica</span> entre diseño de vanguardia e ingeniería de software de alto nivel. Oscar y Luis unieron fuerzas para resolver un problema real mediante una experiencia digital sin precedentes.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Zap, label: "Velocidad", value: "0.2s", color: "text-cyan-400", border: "border-cyan-500/30" },
            { icon: Code2, label: "Arquitectura", value: "TS", color: "text-blue-400", border: "border-blue-500/30" },
            { icon: Palette, label: "Iteraciones", value: "v3.0", color: "text-purple-400", border: "border-purple-500/30" },
            { icon: Rocket, label: "Calidad", value: "PROD", color: "text-pink-400", border: "border-pink-500/30" }
          ].map((stat, i) => (
            <div key={i} className={`bg-gray-900/50 border ${stat.border} rounded-2xl p-6 backdrop-blur-xl transform hover:scale-105 transition-transform duration-300`}>
              <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
              <div className={`text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Duo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Card: Luis */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-cyan-500/20 p-3 rounded-lg text-3xl"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Luis Fernando Espinoza Díaz</h2>
                  <p className="text-cyan-400 font-mono text-sm">Strategic Architect & UI Specialist</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><span className="text-gray-200 font-bold italic">La Columna Estética:</span> Me encargué de la conceptualización visual, definiendo un lenguaje de diseño moderno que prioriza la claridad y la elegancia.</p>
                <p><span className="text-gray-200 font-bold italic">Aporte Técnico:</span> Implemente la lógica de generación de documentos y la estructura semántica de los componentes.</p>
                <div className="pt-4 border-t border-gray-800 flex gap-2">
                  {['Figma', 'React', 'jsPDF', 'UI/UX'].map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-400 uppercase tracking-tighter border border-gray-700">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card: Oscar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg text-3xl"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Oscar Tan Guan</h2>
                  <p className="text-blue-400 font-mono text-sm">Systems Engineer & Logic Master</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-400">
                <p><span className="text-gray-200 font-bold italic">El Motor Lógico:</span> Estructure el flujo de datos y la persistencia de estado, asegurando que la aplicación sea robusta, escalable y libre de errores.</p>
                <p><span className="text-gray-200 font-bold italic">Aporte Creativo:</span> Mi intervención fue vital para pulir las interacciones de usuario, transformando la navegación en un flujo intuitivo y veloz.</p>
                <div className="pt-4 border-t border-gray-800 flex gap-2">
                  {['TypeScript', 'Zustand', 'Logic', 'Tailwind'].map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-400 uppercase tracking-tighter border border-gray-700">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High Synergy Feature */}
        <div className="relative overflow-hidden bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center mb-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">La Sinergia es Nuestra Fuerza</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
              En este proyecto, las etiquetas de "diseñador" y "programador" se quedaron cortas. <span className="text-white font-bold">Trabajamos en este sistema solo 2 horas</span>. Uno aportó la lógica de validación, mientras que otro estaba refinando los micro-detalles visuales. Esta colaboración cruzada permitió que la aplicación UABC-Coursera 1.0 no solo cumpla su función, sino que la supere con maestría técnica.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>Enfoque en el Usuario</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>Pasión por el Detalle</span>
              </div>
            </div>
        </div>

        {/* Conclusion Footer */}
        <div className="text-center">
          <p className="text-gray-500 font-mono text-sm mb-2 italic">Desarrollado con excelencia por</p>
          <p className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase">
            Oscar Tan & Luis Espinoza
          </p>
          <div className="mt-8 text-gray-600 text-xs">
            © 2026 TGET-Solutions • Sistemas Computacionales • UABC
          </div>
        </div>
      </div>
    </div>
  );
}