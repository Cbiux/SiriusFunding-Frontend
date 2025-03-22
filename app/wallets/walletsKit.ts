import { Buffer } from "buffer";
import {
  StellarWalletsKit,
  WalletNetwork,
  FreighterModule,
} from "@creit.tech/stellar-wallets-kit";

import { WalletConnectModule, WalletConnectAllowedMethods } from "@creit.tech/stellar-wallets-kit/modules/walletconnect.module";
import { TrezorModule } from "@creit.tech/stellar-wallets-kit/modules/trezor.module";


const trezorConfig = {
  url: "https://connect.trezor.io/8/",
  email: "tudireccion@email.com",
};

const walletConnectConfig = {
  url: "https://your-dapp-url.com",
  projectId: "YOUR_PROJECT_ID",
  method: WalletConnectAllowedMethods.SIGN,
  description: "Conecta tu wallet a nuestra DApp",
  name: "Mi DApp",
  icons: ["https://your-dapp-url.com/logo.png"],
  network: WalletNetwork.PUBLIC,
};

export const walletKit = new StellarWalletsKit({
  network: WalletNetwork.PUBLIC, // Configura la red como PUBLIC
  selectedWalletId: "freighter", // Identificador de Freighter
  modules: [
    new FreighterModule(), // Solo incluye FreighterModule
  ],
});