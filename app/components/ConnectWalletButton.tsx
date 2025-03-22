import React from 'react';

interface ConnectWalletButtonProps {
  onClick: () => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-600 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-4 py-2"
      onClick={onClick}
    >
      Conectar Billetera
    </button>
  );
};

export default ConnectWalletButton;