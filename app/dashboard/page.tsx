"use client"; // Esto marca el archivo como un componente de cliente

export default function Dashboard() {
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
          Sirius Funding
        </h1>
        <p style={{ fontSize: "24px", color: "#ccc", marginBottom: "40px" }}>
          Aquí puedes gestionar tus proyectos y explorar nuevas oportunidades de financiamiento.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Botón para ver proyectos */}
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#673ab7", // Morado vibrante
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={() => window.location.href = "/projects-list"} // Redirige a la lista de proyectos
          >
            Ver Proyectos
          </button>

          {/* Botón para crear un nuevo proyecto */}
          <button
            style={{
              padding: "15px 30px",
              backgroundColor: "#9c27b0", // Morado vibrante
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={() => window.location.href = "/proyects"} // Redirige a la página de creación de proyectos
          >
            Crear Proyecto
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          backgroundColor: "rgba(45, 4, 110, 0.9)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
          color: "#ccc",
        }}
      >
        <p>© {new Date().getFullYear()} Sirius Funding. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}