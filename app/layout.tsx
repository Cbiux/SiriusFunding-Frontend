import './globals.css'
import { WalletProvider } from '../context/WalletContext'

export const metadata = {
  title: 'Stellar Login App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  )
}
