"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { walletKit } from "./wallets/walletsKit"; // Asegúrate de que esta ruta sea correcta
import { FiLogOut } from "react-icons/fi"; // Ícono de logout de react-icons
import "./styles/globals.css"; // Importa los estilos globales

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Verifica si hay una wallet conectada en localStorage
    const savedWallet = localStorage.getItem("walletAddress");
    if (savedWallet) {
      setWalletAddress(savedWallet);
    }
  }, []);

  const handleConnectWallet = async () => {
    try {
      // Conecta la wallet usando walletKit
      const { address } = await walletKit.getAddress(); // Obtiene la dirección de la wallet
      setWalletAddress(address);
      localStorage.setItem("walletAddress", address); // Guarda la dirección en localStorage
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
      alert("Ocurrió un error al conectar la wallet.");
    }
  };

  const handleDisconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem("walletAddress");
  };

  return (
    <html lang="en">
      <body>
        {/* Barra superior fija */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between", // Espaciado entre el botón de volver y los botones de wallet
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#2d046e", // Fondo morado vibrante
            color: "#fff", // Texto blanco
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            gap: "10px",
          }}
        >
          {/* Botón para volver */}
          <button
            onClick={() => router.push("/dashboard")} // Redirige a la página principal
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* Puedes reemplazar este texto con un logo más adelante */}
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>←</span> Inicio
          </button>

          {/* Botones de wallet */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleConnectWallet}
              style={{
                backgroundColor: "#9c27b0", // Morado vibrante constante
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Conectar Wallet"}
            </button>
            {walletAddress && (
              <button
                onClick={handleDisconnectWallet}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#e74c3c", // Rojo para desconectar
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <FiLogOut size={20} /> {/* Ícono minimalista de desconexión */}
                Disconnect
              </button>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        <div
          style={{
            marginTop: "80px", // Asegura que el contenido no quede oculto detrás de la barra fija
            padding: "20px",
            backgroundColor: "#2d046e", // Fondo morado vibrante (igual que en dashboard y proyects)
            color: "#fff", // Texto blanco
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}