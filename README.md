# 📚 Registry - Sistema de Registro Académico

> Una aplicación moderna y elegante para gestionar registros de estudiantes en cursos Coursera, diseñada con tecnología de punta y experiencia de usuario excepcional.

## 🚀 Características Principales

- ✨ **Diseño Dark Mode Moderno** - Interfaz visual futurista con acentos cian
- 📝 **Formulario Validado** - Validación completa de datos académicos
- 👥 **Gestión de Registros** - Crear, editar, eliminar registros de estudiantes
- 📄 **Generación de Documentos** - Exportar información a PDF
- 🎓 **Certificados** - Generar certificados personalizados
- 💾 **Almacenamiento Persistente** - Zustand para estado global
- 🎨 **Responsive Design** - Funciona en cualquier dispositivo

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Validación**: react-hook-form
- **Estado Global**: Zustand
- **Iconos**: lucide-react
- **PDF Generation**: jsPDF
- **Build Tool**: Vite 7
- **Notifications**: react-toastify

## 📥 Instalación Local

```bash
# Clonar el repositorio
git clone <your-repo-url>
cd Examen

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción local
npm run preview
```

## 🌐 Despliegue en Vercel

### Opción 1: Via Git (Recomendado)

1. Push tu código a GitHub/GitLab/Bitbucket
2. Ve a [vercel.com](https://vercel.com)
3. Click en "New Project"
4. Selecciona tu repositorio
5. Vercel detectará automáticamente la configuración
6. Click en "Deploy"

### Opción 2: Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Deploy a producción
vercel --prod
```

### Opción 3: Manual Upload

1. Ejecuta `npm run build` localmente
2. Upload la carpeta `dist/` a Vercel

## 🔧 Variables de Entorno

No se requieren variables de entorno para esta aplicación. Todos los datos se almacenan localmente en el navegador.

## 📋 Validaciones de Formulario

- **Nombre Completo**: 3-100 caracteres, solo letras
- **Fecha de Nacimiento**: 15-120 años de edad
- **CURP**: 18 caracteres, formato específico (EIDL050708HBCSZSA4)
- **Lugar de Nacimiento**: 2-100 caracteres
- **Matrícula UABC**: Exactamente 7 números
- **Curso Coursera**: 3-200 caracteres
- **Ofertada Por**: 3-150 caracteres
- **Número de Cursos**: 1-999
- **Duración (horas)**: 1-9999

## 🎨 Paleta de Colores

- **Primario**: Cyan-400/500
- **Fondo**: Gray-950/900
- **Acentos Secundarios**: Blue-400/600
- **Texto**: Gray-300/400
- **Énfasis**: Cyan-300/400

## 👥 Equipo

- **Oscar Tan Guan** - Chief Design Officer & Strategic Architect
- **Luis Fernando Espinoza Díaz** - Lead Developer & Full Stack Innovator

## 📄 Licencia

MIT © 2024 Registry Team

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor abre un issue o PR para cambios significativos.

---

**Made with ❤️ and ⚡ by Oscar & Luis**
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
