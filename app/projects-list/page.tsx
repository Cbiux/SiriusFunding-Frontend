"use client";

export default function ProjectsList() {
  // Ejemplo de datos de proyectos
  const projects = [
    { id: 1, title: "Proyecto Alpha", description: "Descripción del Proyecto Alpha." },
    { id: 2, title: "Proyecto Beta", description: "Descripción del Proyecto Beta." },
    { id: 3, title: "Proyecto Gamma", description: "Descripción del Proyecto Gamma." },
    { id: 4, title: "Proyecto Delta", description: "Descripción del Proyecto Delta." },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2d046e", color: "#fff", overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #ffffff, #9c27b0, #673ab7)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "20px",
          }}
        >
          Lista de Proyectos
        </h1>
        <p style={{ fontSize: "24px", color: "#ccc", marginBottom: "40px" }}>
          Explora los proyectos disponibles y encuentra oportunidades de financiamiento.
        </p>

        {/* Lista de proyectos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                textAlign: "left",
              }}
            >
              <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
                {project.title}
              </h2>
              <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
                {project.description}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#9c27b0",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}