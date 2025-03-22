"use client";

export default function Proyects() {
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
          ¡Bienvenido a Proyectos!
        </h1>
        <p style={{ fontSize: "24px", color: "#ccc", marginBottom: "40px" }}>
          Aquí puedes registrar y gestionar tus proyectos de financiamiento.
        </p>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Input 1: Project ID */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="projectId"
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              ID del Proyecto:
            </label>
            <input
              id="projectId"
              type="text"
              placeholder="Ingresa el ID del proyecto"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Input 2: Creator */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="creator"
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Creador del Proyecto:
            </label>
            <input
              id="creator"
              type="text"
              placeholder="Ingresa el nombre del creador"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Input 3: Goal */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="goal"
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Meta de Financiamiento:
            </label>
            <input
              id="goal"
              type="number"
              placeholder="Ingresa la meta de financiamiento"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Input 4: Deadline */}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="deadline"
              style={{
                display: "block",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Fecha Límite:
            </label>
            <input
              id="deadline"
              type="date"
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Botón de enviar */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                padding: "15px 30px",
                backgroundColor: "#9c27b0",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Enviar Proyecto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}