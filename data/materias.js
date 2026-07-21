const materias = [

    // ===== SEMESTRE I =====

    {
        nombre: "Biología General",
        creditos: 3,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Competencias Comunicativas",
        creditos: 3,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Historia y Epistemología de las Naturales",
        creditos: 2,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Matemática I",
        creditos: 3,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Mediaciones Tecnológicas",
        creditos: 3,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Psicología Evolutiva",
        creditos: 3,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Química General",
        creditos: 3,
        semestre: 1,
        estado: "pendiente",
        requisitos: []
    },


    // ===== SEMESTRE II =====

    {
        nombre: "Biología Celular y Molecular",
        creditos: 3,
        semestre: 2,
        estado: "pendiente",
        requisitos: ["Biología General"]
    },
    {
        nombre: "Lectura y Escritura Crítica",
        creditos: 3,
        semestre: 2,
        estado: "pendiente",
        requisitos: ["Competencias Comunicativas"]
    },
    {
        nombre: "Matemática II",
        creditos: 3,
        semestre: 2,
        estado: "pendiente",
        requisitos: ["Matemática I"]
    },
    {
        nombre: "Psicología del Aprendizaje",
        creditos: 3,
        semestre: 2,
        estado: "pendiente",
        requisitos: ["Psicología Evolutiva"]
    },
    {
        nombre: "Química Inorgánica",
        creditos: 3,
        semestre: 2,
        estado: "pendiente",
        requisitos: ["Química General"]
    },
    {
        nombre: "Razonamiento Cuantitativo",
        creditos: 2,
        semestre: 2,
        estado: "pendiente",
        requisitos: ["Matemática I"]
    },


    // ===== SEMESTRE III =====

    {
        nombre: "Bioestadística",
        creditos: 2,
        semestre: 3,
        estado: "pendiente",
        requisitos: ["Matemática II"]
    },
    {
        nombre: "Botánica",
        creditos: 3,
        semestre: 3,
        estado: "pendiente",
        requisitos: ["Biología Celular y Molecular"]
    },
    {
        nombre: "Física I",
        creditos: 3,
        semestre: 3,
        estado: "pendiente",
        requisitos: ["Matemática II"]
    },
    {
        nombre: "Práctica Pedagógica Investigativa I",
        creditos: 2,
        semestre: 3,
        estado: "pendiente",
        requisitos: ["Psicología del Aprendizaje"]
    },
    {
        nombre: "Química Orgánica",
        creditos: 3,
        semestre: 3,
        estado: "pendiente",
        requisitos: ["Química Inorgánica"]
    },
    {
        nombre: "Sociología de la Educación",
        creditos: 3,
        semestre: 3,
        estado: "pendiente",
        requisitos: ["Psicología del Aprendizaje"]
    },


    // ===== SEMESTRE IV =====

    {
        nombre: "Educación Ambiental",
        creditos: 3,
        semestre: 4,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Electiva Libre",
        creditos: 2,
        semestre: 4,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Física II",
        creditos: 3,
        semestre: 4,
        estado: "pendiente",
        requisitos: ["Física I"]
    },
    {
        nombre: "Práctica Pedagógica Investigativa II",
        creditos: 2,
        semestre: 4,
        estado: "pendiente",
        requisitos: ["Práctica Pedagógica Investigativa I"]
    },
    {
        nombre: "Química Analítica",
        creditos: 3,
        semestre: 4,
        estado: "pendiente",
        requisitos: ["Química Orgánica"]
    },
    {
        nombre: "Tendencias Pedagógicas y Didácticas",
        creditos: 3,
        semestre: 4,
        estado: "pendiente",
        requisitos: ["Sociología de la Educación"]
    },
    {
        nombre: "Zoología",
        creditos: 3,
        semestre: 4,
        estado: "pendiente",
        requisitos: ["Botánica"]
    },


    // ===== SEMESTRE V =====

    {
        nombre: "Biología Humana",
        creditos: 3,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Zoología"]
    },
    {
        nombre: "Currículo y Gestión Escolar",
        creditos: 3,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Tendencias Pedagógicas y Didácticas"]
    },
    {
        nombre: "Física III",
        creditos: 3,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Física II"]
    },
    {
        nombre: "Práctica Pedagógica Investigativa III",
        creditos: 2,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Práctica Pedagógica Investigativa II"]
    },
    {
        nombre: "Fisicoquímica",
        creditos: 3,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Química Analítica"]
    },
    {
        nombre: "Didáctica General",
        creditos: 3,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Tendencias Pedagógicas y Didácticas"]
    },
    {
        nombre: "Teorías y Problemática Ambiental",
        creditos: 3,
        semestre: 5,
        estado: "pendiente",
        requisitos: ["Educación Ambiental"]
    },


    // ===== SEMESTRE VI =====

    {
        nombre: "Bioquímica",
        creditos: 3,
        semestre: 6,
        estado: "pendiente",
        requisitos: ["Fisicoquímica"]
    },
    {
        nombre: "Didáctica de las Ciencias Naturales I",
        creditos: 3,
        semestre: 6,
        estado: "pendiente",
        requisitos: ["Didáctica General"]
    },
    {
        nombre: "Física IV",
        creditos: 3,
        semestre: 6,
        estado: "pendiente",
        requisitos: ["Física III"]
    },
    {
        nombre: "Inglés I",
        creditos: 3,
        semestre: 6,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Práctica Pedagógica Investigativa IV",
        creditos: 3,
        semestre: 6,
        estado: "pendiente",
        requisitos: ["Práctica Pedagógica Investigativa III"]
    },
    {
        nombre: "Procesos Evaluativos",
        creditos: 3,
        semestre: 6,
        estado: "pendiente",
        requisitos: ["Currículo y Gestión Escolar"] // <-- ¡CORREGIDO AQUÍ!
    },
    {
        nombre: "Seminario de Investigación I",
        creditos: 2,
        semestre: 6,
        estado: "pendiente",
        requisitos: ["Práctica Pedagógica Investigativa III"]
    },


    // ===== SEMESTRE VII =====

    {
        nombre: "Ciencia, Tecnología y Sociedad",
        creditos: 3,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Teorías y Problemática Ambiental"] // <-- ¡CORREGIDO AQUÍ!
    },
    {
        nombre: "Didáctica de las Ciencias Naturales II",
        creditos: 3,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Didáctica de las Ciencias Naturales I"]
    },
    {
        nombre: "Inglés II",
        creditos: 3,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Inglés I"]
    },
    {
        nombre: "Legislación y Política Educativa",
        creditos: 3,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Procesos Evaluativos"]
    },
    {
        nombre: "Microbiología",
        creditos: 3,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Biología Humana"]
    },
    {
        nombre: "Práctica Pedagógica Investigativa V",
        creditos: 3,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Práctica Pedagógica Investigativa IV"]
    },
    {
        nombre: "Seminario de Investigación II",
        creditos: 2,
        semestre: 7,
        estado: "pendiente",
        requisitos: ["Seminario de Investigación I"]
    },


    // ===== SEMESTRE VIII =====

    {
        nombre: "Constitución y Educación para la Ciudadanía",
        creditos: 2,
        semestre: 8,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Desarrollo Educativo Ambiental",
        creditos: 3,
        semestre: 8,
        estado: "pendiente",
        requisitos: ["Ciencia, Tecnología y Sociedad"]
    },
    {
        nombre: "Electiva de Carrera I",
        creditos: 2,
        semestre: 8,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Genética",
        creditos: 3,
        semestre: 8,
        estado: "pendiente",
        requisitos: ["Microbiología"]
    },
    {
        nombre: "Inglés III",
        creditos: 3,
        semestre: 8,
        estado: "pendiente",
        requisitos: ["Inglés II"]
    },
    {
        nombre: "Práctica Docente I",
        creditos: 3,
        semestre: 8,
        estado: "pendiente",
        requisitos: ["Práctica Pedagógica Investigativa V"]
    },


    // ===== SEMESTRE IX =====

    {
        nombre: "Ecología",
        creditos: 3,
        semestre: 9,
        estado: "pendiente",
        requisitos: ["Genética"]
    },
    {
        nombre: "Electiva de Carrera II",
        creditos: 2,
        semestre: 9,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Emprendimiento y Gestión Ambiental",
        creditos: 3,
        semestre: 9,
        estado: "pendiente",
        requisitos: ["Desarrollo Educativo Ambiental"]
    },
    {
        nombre: "Inglés IV",
        creditos: 3,
        semestre: 9,
        estado: "pendiente",
        requisitos: ["Inglés III"]
    },
    {
        nombre: "Práctica Docente II (Aplicación de Proyecto)",
        creditos: 3,
        semestre: 9,
        estado: "pendiente",
        requisitos: ["Práctica Docente I"]
    },


    // ===== SEMESTRE X =====

    {
        nombre: "Biodiversidad y Cultura",
        creditos: 3,
        semestre: 10,
        estado: "pendiente",
        requisitos: ["Emprendimiento y Gestión Ambiental"]
    },
    {
        nombre: "Electiva de Profundización",
        creditos: 2,
        semestre: 10,
        estado: "pendiente",
        requisitos: []
    },
    {
        nombre: "Opción de Grado",
        creditos: 2,
        semestre: 10,
        estado: "pendiente",
        requisitos: [
            "Ecología",
            "Inglés IV",
            "Práctica Docente II (Aplicación de Proyecto)",
            "Emprendimiento y Gestión Ambiental"
        ]
    },
    {
        nombre: "Sistematización de la Práctica Pedagógica",
        creditos: 2,
        semestre: 10,
        estado: "pendiente",
        requisitos: ["Práctica Docente II (Aplicación de Proyecto)"]
    }
];
