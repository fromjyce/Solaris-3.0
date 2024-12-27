const WalletCard = ({ address, balance, onDisconnect }) => {
  return (
    <div className="w-full bg-[#f4f4f4] shadow-md rounded p-6">
      <h2 className="text-3xl gabarito font-semibold text-[#072000ff] mb-4">
        Wallet Overview
      </h2>
      <div className="flex flex-col space-y-2">
        <p className="afacad text-xl">
          <span className="font-medium text-[#072000ff]">Wallet Address: </span>
          {address}
        </p>
        <p className="afacad text-xl">
          <span className="font-medium text-[#072000ff]">Token Balance (RECs): </span>
          {balance} RECs
        </p>
      </div>
      <button
        onClick={onDisconnect}
        className="mt-6 px-6 py-3 bg-[#d32f2f] gabarito text-white rounded hover:bg-[#9a0007] transition"
      >
        Disconnect Wallet
      </button>
    </div>
  );
};

export default WalletCard;
