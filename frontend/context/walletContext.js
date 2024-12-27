import { createContext, useContext, useState, useEffect } from "react";
import { connectWallet, getWalletBalance } from "utils/connectWallet";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const loadWallet = async () => {
      const savedAddress = localStorage.getItem("walletAddress");
      if (savedAddress) {
        setWalletAddress(savedAddress);
        const walletBalance = await getWalletBalance(savedAddress);
        setBalance(walletBalance);
      }
    };

    loadWallet();
  }, []);

  const connect = async () => {
    const address = await connectWallet();
    if (address) {
      setWalletAddress(address);
      localStorage.setItem("walletAddress", address);
      const walletBalance = await getWalletBalance(address);
      setBalance(walletBalance);
    }
  };

  const disconnect = () => {
    localStorage.removeItem("walletAddress");
    setWalletAddress("");
    setBalance(0);
  };

  return (
    <WalletContext.Provider
      value={{ walletAddress, balance, connect, disconnect }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
