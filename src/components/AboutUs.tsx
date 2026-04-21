import { Zap, BarChart3, Code2, Palette } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Epic Hero Section */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <p className="text-cyan-400 text-sm font-semibold">🚀 EQUIPO DE ÉLITE</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 mb-6">
            La Innovación se Materializa
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Dos visionarios se unieron para crear un ecosistema de registro académico que revoluciona la forma en que gestionamos educación digital.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-cyan-400" />
              <span className="text-3xl font-bold text-cyan-400">100%</span>
            </div>
            <p className="text-gray-400 text-sm">Funcionalidad Optimizada</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="text-3xl font-bold text-blue-400">3x</span>
            </div>
            <p className="text-gray-400 text-sm">Iteraciones de Diseño</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-6 h-6 text-purple-400" />
              <span className="text-3xl font-bold text-purple-400">∞</span>
            </div>
            <p className="text-gray-400 text-sm">Creatividad sin Límites</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border border-pink-500/30 rounded-xl p-6 backdrop-blur">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-pink-400" />
              <span className="text-3xl font-bold text-pink-400">1.0</span>
            </div>
            <p className="text-gray-400 text-sm">Versión Producción</p>
          </div>
        </div>

        {/* Epic Team Section */}
        <div className="space-y-12 mb-20">
          {/* Oscar - The Architect */}
          <div className="group">
            <div className="bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                  🎨
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-cyan-400 mb-2">Oscar Tan Guan</h2>
                  <p className="text-cyan-300/70 font-semibold text-base mb-1">Chief Design Officer & Strategic Architect</p>
                  <p className="text-gray-400 text-sm font-mono mb-4">🏗️ Visión • 🎯 Estrategia • ✨ Experiencia de Usuario</p>
                  
                  <div className="space-y-3 text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-cyan-400 font-semibold">El Genio Creativo:</span> Nacido de la necesidad de revolucionar el diseño educativo, Oscar es el arquitecto detrás de cada píxel, cada componente, cada interacción. Su visión transformó líneas simples en un ecosistema visual cautivador.
                    </p>
                    <p>
                      <span className="text-cyan-400 font-semibold">La Metodología:</span> Desde el briefing estratégico hasta el prototipado en Figma, Oscar estableció los cimientos sobre los cuales se construyó la excelencia. Cada decisión de diseño fue calculada, pensada, perfeccionada.
                    </p>
                    <p>
                      <span className="text-cyan-400 font-semibold">El Resultado:</span> Un sistema de diseño moderno, accesible y futurista que desafía los estándares convencionales. Las iteraciones de diseño (3 versiones épicas) demuestran su compromiso con la perfección.
                    </p>
                    <p className="text-cyan-300 italic">
                      "El diseño no es solo lo que se ve, es cómo se siente. Y Registry se siente extraordinario."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Luis - The Developer */}
          <div className="group">
            <div className="bg-gradient-to-r from-blue-500/10 via-transparent to-transparent border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-blue-400 mb-2">Luis Fernando Espinoza Díaz</h2>
                  <p className="text-blue-300/70 font-semibold text-base mb-1">Lead Developer & Full Stack Innovator</p>
                  <p className="text-gray-400 text-sm font-mono mb-4">💻 React • ⚙️ TypeScript • 🎪 Tailwind CSS • 📦 Zustand</p>
                  
                  <div className="space-y-3 text-gray-300 leading-relaxed">
                    <p>
                      <span className="text-blue-400 font-semibold">El Mago del Código:</span> Transformando los diseños de Oscar en realidad digital tangible, Luis es el corazón técnico de Registry. Con React, TypeScript y una pasión por la excelencia, convierte visiones en aplicaciones funcionales.
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">La Ejecución Perfecta:</span> Validación de formularios con react-hook-form, gestión de estado con Zustand, generación de documentos con jsPDF, y un UI/UX impecable con Tailwind CSS. Cada línea de código cuenta una historia de precisión.
                    </p>
                    <p>
                      <span className="text-blue-400 font-semibold">El Resultado:</span> Una aplicación que no solo se ve hermosa, sino que funciona flawlessly. 9 campos validados, 4 botones de acción, almacenamiento persistente, y un sistema de modales confirmación que demuestra ingeniería de software de clase mundial.
                    </p>
                    <p className="text-blue-300 italic">
                      "El código perfecto es el que no necesita comentarios porque su lógica habla por sí sola. Registry es código poesía."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Synergy */}
        <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            ⚙️ La Sinergia Perfecta
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Oscar no solo diseña; Luisimplementa. Luis no solo codifica; mejora el diseño. Juntos, crearon un bucle virtuoso de innovación donde cada iteración era mejor que la anterior. El resultado: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">Registry 1.0 - La Solución Definitiva</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-cyan-400 font-semibold mb-2">📊 Análisis Profundo</p>
              <p className="text-sm text-gray-400">Briefing estratégico + Prototipado en Figma + Validación UX</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-blue-400 font-semibold mb-2">💎 Implementación Flawless</p>
              <p className="text-sm text-gray-400">React + TypeScript + Tailwind + Zustand + Validaciones</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-purple-400 font-semibold mb-2">🚀 Resultado Épico</p>
              <p className="text-sm text-gray-400">Una aplicación que sobrepasa expectativas y estándares</p>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-8 text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            Más Que Un Proyecto
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Registry no es solo una aplicación de registro académico. Es un testimonio de dedicación, creatividad y excelencia técnica. Es la prueba de que cuando talento y visión convergen, la magia sucede.
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm">✨ Diseño Premium</span>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm">⚡ Código Limpio</span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm">🚀 Producción Ready</span>
          </div>
          <p className="text-gray-300 text-lg font-semibold">
            Un saludo épico de parte del equipo: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Oscar & Luis</span>
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Gracias por permitirnos demostrar nuestras habilidades. Este proyecto es nuestro regalo para ti. 🎁
          </p>
        </div>
      </div>
    </div>
  );
}
