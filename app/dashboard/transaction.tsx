import { useState } from "react";
import { signTransaction } from "../wallets/walletUtils";

export default function TransactionPage() {
  const [xdr, setXdr] = useState("");

  const handleSignTransaction = async () => {
    if (!xdr) return alert("Ingresa un XDR válido.");
    const signedTx = await signTransaction(xdr);
    console.log("Transacción firmada:", signedTx);
  };

  return (
    <div>
      <h2>Firma una Transacción</h2>
      <input type="text" value={xdr} onChange={(e) => setXdr(e.target.value)} placeholder="Ingresa el XDR" />
      <button onClick={handleSignTransaction}>Firmar</button>
    </div>
  );
}