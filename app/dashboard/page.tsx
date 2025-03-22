"use client"; // Esto marca el archivo como un componente de cliente

import { useState } from "react";
import { walletKit } from "../wallets/walletsKit";
import "../styles/globals.css"; // Importa los estilos globales

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      const { address } = await walletKit.getAddress(); // Abre el flujo de conexión de la wallet
      setWalletAddress(address); // Guarda la dirección de la wallet
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
      alert("Ocurrió un error al conectar la wallet.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end", // Alinea el contenido a la derecha
        padding: "20px", // Espaciado interno
        backgroundColor: "#f9f9f9", // Fondo claro para contraste
        height: "10vh", // Ocupa toda la altura de la pantalla
        boxSizing: "border-box",
      }}
    >
      <button
        className="primary" // Clase de estilo definida en globals.css
        onClick={handleConnectWallet}
      >
        {walletAddress ? `${walletAddress.slice(0, 6)}...` : "Conectar Wallet"}
      </button>
    </div>
  );
}