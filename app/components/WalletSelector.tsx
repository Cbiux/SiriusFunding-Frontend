"use client";

import { walletKit } from "../wallets/walletsKit";
import "../styles/globals.css";

interface WalletButtonProps {
  text: string; // Texto que se mostrará en el botón
}

export default function WalletButton({ text }: WalletButtonProps) {
  const handleConnectWallet = async () => {
    try {
      const { address } = await walletKit.getAddress(); // Abre el flujo de conexión de la wallet
      alert(`Wallet conectada: ${address}`);
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
      alert("Ocurrió un error al conectar la wallet.");
    }
  };

  return (
    <button
      className="primary" // Clase de estilo definida en globals.css
      onClick={handleConnectWallet}
    >
      {text}
    </button>
  );
}