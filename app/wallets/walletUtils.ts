import { walletKit } from "./walletsKit";
import { WalletNetwork } from "@creit.tech/stellar-wallets-kit"; // Importar WalletNetwork

// Obtener la dirección de la wallet conectada
export async function getWalletAddress() {
  try {
    const { address } = await walletKit.getAddress();
    console.log("Dirección obtenida:", address);
    return address;
  } catch (error) {
    console.error("Error al obtener la dirección:", error);
    return null;
  }
}

// Firmar una transacción
export async function signTransaction(xdr: string) {
  try {
    const address = await getWalletAddress();
    if (!address) throw new Error("No se pudo obtener la dirección.");

    const { signedTxXdr } = await walletKit.signTransaction(xdr, {
      address,
      networkPassphrase: WalletNetwork.PUBLIC, // Usar WalletNetwork.PUBLIC
    });

    console.log("Transacción firmada:", signedTxXdr);
    return signedTxXdr;
  } catch (error) {
    console.error("Error al firmar la transacción:", error);
    return null;
  }
}

// Cambiar la wallet activa
export async function switchWallet(walletId: string) {
  const supportedWallets = ["freighter"]; // Lista de wallets soportadas
  if (!supportedWallets.includes(walletId)) {
    console.error(`Wallet id "${walletId}" no es soportado.`);
    return;
  }

  try {
    await walletKit.setWallet(walletId);
    console.log("Wallet cambiada a:", walletId);
  } catch (error) {
    console.error("Error al cambiar la wallet:", error);
  }
}