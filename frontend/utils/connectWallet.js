export const connectWallet = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      localStorage.setItem("walletAddress", address);
      return address;
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      return null;
    }
  } else {
    alert("Please install MetaMask to connect your wallet.");
    return null;
  }
};

export const getWalletBalance = async (address) => {
  try {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    return (parseInt(balance, 16) / 1e18).toFixed(4);
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
    return 0;
  }
};
