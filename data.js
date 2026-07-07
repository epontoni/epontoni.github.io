const DATA = {
  profile: {
    name: "Emanuel Pontoni",
    role: "Profesor de Matemática & Desarrollador Frontend",
    location: "Bell Ville, Córdoba, Argentina",
    locationLink: "https://maps.app.goo.gl/Gq4Q5zNyGN3FyJzg9",
    avatar: "mame-cv.jpg",
    cvPdf: "emanuelpontoni-cv.pdf",
    bio: "Mi nombre es Emanuel Pontoni, tengo 33 años y vivo en la ciudad de Bell Ville, Córdoba, Argentina. Soy un profesional versátil con formación en educación y desarrollo web, que combina más de 10 años de experiencia como profesor de matemática con una sólida experiencia en tecnologías modernas de desarrollo. Sobresalgo en la integración de la tecnología y la educación, promoviendo el aprendizaje y el desarrollo de habilidades tanto técnicas como blandas en mis estudiantes."
  },
  skills: [
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React.js", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Shadcn UI", category: "frontend" },
    { name: "Framer Motion", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Nest.js", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "SQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Firebase", category: "backend" },
    { name: "GeoGebra", category: "math" },
    { name: "LaTeX", category: "math" },
    { name: "Figma", category: "design" },
    { name: "Git & GitHub", category: "tools" },
    { name: "NPM", category: "tools" },
    { name: "Arduino / Automatización", category: "tools" }
  ],
  projects: [
    {
      title: "Plataforma de Aprendizaje",
      description: "Plataforma de e-learning que permite a docentes publicar cursos de manera organizada y a estudiantes acceder a material didáctico.",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Prisma", "MySQL"],
      demo: "https://emanuelpontoni.vercel.app",
      category: "web"
    },
    {
      title: "FLOKOOB",
      description: "Plataforma de eventos deportivos. Permite publicar eventos, gestionar inscripciones, pagos (Mercado Pago), acreditación y cronometraje, con ticket digital. Incluye shop de personalización de kits.",
      tech: ["React.js", "Tailwind CSS", "Firebase", "Mercado Pago"],
      demo: "https://flokoob.vercel.app",
      category: "web"
    },
    {
      title: "Custom AI Chatbot",
      description: "Agente de chat inteligente personalizable para gestionar conversaciones de clientes y soporte.",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "OpenAI API", "Pinecone", "Langchain"],
      demo: "https://custom-ai-chatbot-mocha.vercel.app/",
      category: "web"
    },
    {
      title: "Programación, Robótica y Pensamiento Computacional",
      description: "Propuesta educativa y material interactivo que introduce a los estudiantes en el desarrollo de software y robótica física aplicando lógica y resolución de problemas.",
      tech: ["Robótica", "Arduino", "Lógica", "Material Didáctico"],
      demo: "https://docs.google.com/document/d/1pQBDmInx3LE_RfnpFDMvIPeqjonCtEehYeQd6Zk7OW4/edit?usp=sharing",
      category: "edu"
    },
    {
      title: "Trigonometría y Medidas Indirectas",
      description: "Proyecto integrador de matemática y programación. Construcción de un telémetro casero y desarrollo de software para automatizar cómputos de distancias astronómicas y fluviales.",
      tech: ["Trigonometría", "Software Matemático", "GeoGebra", "LaTeX"],
      demo: "https://drive.google.com/file/d/1fZJxg15YZPu6oQBdzGcQdDluB3C8EHS6/view?usp=sharing",
      category: "edu"
    }
  ],
  socials: [
    { name: "linkedin", href: "https://www.linkedin.com/in/emanuelpontoni", icon: "linkedin" },
    { name: "github", href: "https://github.com/epontoni", icon: "github" },
    { name: "twitter", href: "https://twitter.com/emanuelpontoni", icon: "twitter" },
    { name: "telegram", href: "https://t.me/epontoni", icon: "send" },
    { name: "youtube", href: "https://www.youtube.com/channel/UCHB4Cf5IWgCCxEbO4zmQm2A", icon: "youtube" },
    { name: "instagram", href: "https://www.instagram.com/emanuelpontoni", icon: "instagram" },
    { name: "facebook", href: "https://www.facebook.com/emanuel.pontoni", icon: "facebook" }
  ],
  experience: [
    {
      role: "Profesor de Matemática",
      company: "Educación Secundaria (Varios)",
      period: "Noviembre 2015 – Presente (~10 años)",
      description: "Dictado de clases y planificación pedagógica para nivel medio y superior. Desempeño como Jefe del Departamento de Matemática durante 4 años, liderando iniciativas curriculares y coordinando el equipo docente."
    },
    {
      role: "Docente Remoto (Pensamiento Computacional)",
      company: "Plan Ceibal (Uruguay) – Fundación Sadosky (Argentina)",
      period: "Junio 2019 – Noviembre 2019",
      description: "Enseñanza de conceptos fundamentales de programación, algoritmos y robótica a distancia para estudiantes de educación secundaria, aplicando metodologías activas y aprendizaje basado en proyectos."
    }
  ],
  education: [
    {
      degree: "Especialización en Enseñanza de las Ciencias Naturales y Matemática",
      institution: "UNSL (Universidad Nacional de San Martín)",
      year: "2026",
      details: "Cursando estudios de posgrado enfocados en la didáctica de las ciencias exactas y el diseño de estrategias pedagógicas innovadoras."
    },
    {
      degree: "Licenciatura en Matemática",
      institution: "Universidad Juan Agustín Maza",
      year: "2026",
      details: "Cursando estudios de grado para profundizar en el análisis matemático, álgebra abstracta y matemática aplicada."
    },
    {
      degree: "Profesor de Educación Secundaria en Matemática",
      institution: "Instituto Superior Mariano Moreno",
      year: "2014",
      details: "Formación pedagógica y científica centrada en metodologías de la enseñanza de las ciencias exactas y el diseño curricular."
    },
    {
      degree: "Técnico de nivel medio en producción de bienes y servicios (Equipos e instalaciones electromecánicas)",
      institution: "IPEM N° 267 \"Antonio Graziano\"",
      year: "2009",
      details: "Orientación técnica especializada en mantenimiento industrial, sistemas electromecánicos y bases de automatización."
    }
  ],
  certificates: [
    { title: "EF SET English Certificate (C2 Proficient)", path: "certificados/EF SET Certificate.pdf", category: "english" },
    { title: "Web Designer - Certificación de Carrera", path: "certificados/WebDesigner.pdf", category: "design" },
    { title: "JavaScript Algorithms and Data Structures (freeCodeCamp)", path: "certificados/certificate-JavaScript-Algorithms-and-Data-Structures.pdf", category: "javascript" },
    { title: "HTML5 Game Development (Udacity)", path: "certificados/certificate-udacity-html5-game-development.pdf", category: "javascript" },
    { title: "Modelo de negocio para productos y servicios creativos", path: "certificados/certificate-Modelo-de-negocio-para-productos-y-servicios-creativos.pdf", category: "other" },
    { title: "Curso de Asincronismo con JavaScript", path: "certificados/diploma-asincronismo-js.pdf", category: "javascript" },
    { title: "Curso de Backend con Node.js", path: "certificados/diploma-backend-nodejs.pdf", category: "backend" },
    { title: "Curso de Fundamentos de Backend", path: "certificados/diploma-backend.pdf", category: "backend" },
    { title: "Curso Básico de JavaScript", path: "certificados/diploma-basico-javascript.pdf", category: "javascript" },
    { title: "Curso de Computación Básica", path: "certificados/diploma-computacion-basica.pdf", category: "other" },
    { title: "Curso de Configuración de Windows", path: "certificados/diploma-configuracion-windows.pdf", category: "other" },
    { title: "Curso para Conseguir Trabajo como Frontend Developer", path: "certificados/diploma-conseguir-trabajo-frontend.pdf", category: "frontend" },
    { title: "Curso de Diseño para Programadores", path: "certificados/diploma-diseno-programadores.pdf", category: "design" },
    { title: "Curso de Manipulación del DOM", path: "certificados/diploma-dom.pdf", category: "javascript" },
    { title: "Curso de ECMAScript 6+", path: "certificados/diploma-ecmascript-6.pdf", category: "javascript" },
    { title: "Curso Básico de Electrónica", path: "certificados/diploma-electronica.pdf", category: "math" },
    { title: "Curso de Estrategias para Aprender Inglés", path: "certificados/diploma-estrategias-ingles.pdf", category: "english" },
    { title: "Curso de Frameworks de JavaScript", path: "certificados/diploma-frameworks-javascript.pdf", category: "javascript" },
    { title: "Curso Práctico de Frontend Developer", path: "certificados/diploma-frontend-developer-practico.pdf", category: "frontend" },
    { title: "Curso de Frontend Developer", path: "certificados/diploma-frontend-developer.pdf", category: "frontend" },
    { title: "Curso de Fundamentos de Matemáticas", path: "certificados/diploma-fundamentos-matematicas.pdf", category: "math" },
    { title: "Curso de Fundamentos de Node.js", path: "certificados/diploma-fundamentos-node.pdf", category: "backend" },
    { title: "Curso de Git y GitHub", path: "certificados/diploma-git-github.pdf", category: "tools" },
    { title: "Curso de Historia de la Programación", path: "certificados/diploma-historia-programacion.pdf", category: "other" },
    { title: "Curso de HTML y CSS", path: "certificados/diploma-html-css.pdf", category: "frontend" },
    { title: "Curso Práctico de HTML y CSS", path: "certificados/diploma-html-practico.pdf", category: "frontend" },
    { title: "Curso de Introducción a la Ingeniería", path: "certificados/diploma-ingenieria.pdf", category: "other" },
    { title: "Curso de Introducción a las Finanzas", path: "certificados/diploma-intro-finanzas.pdf", category: "other" },
    { title: "Curso de Historia del Internet", path: "certificados/diploma-intro-historia-internet.pdf", category: "other" },
    { title: "Curso de Java Básico", path: "certificados/diploma-java-basico.pdf", category: "backend" },
    { title: "Curso de JavaScript: Closures y Scope", path: "certificados/diploma-javascript-closures-scope.pdf", category: "javascript" },
    { title: "Curso Práctico de JavaScript", path: "certificados/diploma-javascript-practico.pdf", category: "javascript" },
    { title: "Curso Profesional de JavaScript", path: "certificados/diploma-javascript-profesional.pdf", category: "javascript" },
    { title: "Curso de Mobile First", path: "certificados/diploma-mobile-first.pdf", category: "design" },
    { title: "Curso de MongoDB", path: "certificados/diploma-mongodb.pdf", category: "backend" },
    { title: "Curso de Next.js", path: "certificados/diploma-next.pdf", category: "frontend" },
    { title: "Curso de NPM", path: "certificados/diploma-npm.pdf", category: "tools" },
    { title: "Curso de Pensamiento Lógico: Estructuras de Datos", path: "certificados/diploma-pensamiento-logico-estructuras.pdf", category: "logic" },
    { title: "Curso de Pensamiento Lógico: Lenguajes de Programación", path: "certificados/diploma-pensamiento-logico-lenguajes.pdf", category: "logic" },
    { title: "Curso de Pensamiento Lógico", path: "certificados/diploma-pensamiento-logico.pdf", category: "logic" },
    { title: "Curso de Programación Básica", path: "certificados/diploma-programacion-basica.pdf", category: "logic" },
    { title: "Curso de React", path: "certificados/diploma-react.pdf", category: "frontend" },
    { title: "Curso de Tecnología Satelital", path: "certificados/diploma-satelite.pdf", category: "other" },
    { title: "Curso de Sistemas de Diseño", path: "certificados/diploma-sistemas-diseno.pdf", category: "design" },
    { title: "Curso de Startups e Ideas de Negocio", path: "certificados/diploma-startups-ideas.pdf", category: "other" },
    { title: "Curso de Tailwind CSS", path: "certificados/diploma-tailwind-css-2020.pdf", category: "frontend" },
    { title: "Curso de TypeScript", path: "certificados/diploma-typescript.pdf", category: "javascript" },
    { title: "Curso de Videojuegos Multijugador", path: "certificados/diploma-videojuegos-multijugador.pdf", category: "javascript" }
  ]
};
export default DATA;
