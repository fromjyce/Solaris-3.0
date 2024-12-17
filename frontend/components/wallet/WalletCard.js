const WalletCard = ({ address, balance }) => {
    return (
      <div className="bg-[#f4f4f4] shadow-md rounded p-6 mt-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-[#072000ff] mb-4">
          Wallet Overview
        </h2>
        <div className="flex flex-col space-y-2">
          <p>
            <span className="font-medium text-[#072000ff]">Wallet Address: </span>
            {address}
          </p>
          <p>
            <span className="font-medium text-[#072000ff]">Token Balance (RECs): </span>
            {balance} RECs
          </p>
        </div>
      </div>
    );
  };
  
  export default WalletCard;
  