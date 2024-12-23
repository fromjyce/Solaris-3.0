export default function WalletSettings({ wallet }) {
  return (
    <div className="bg-[#f4f4f4] shadow rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">Wallet Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-base font-medium gabarito text-[#072000ff]">Connected Wallet</label>
          <input
            type="text"
            value={wallet.address}
            disabled
            className="mt-1 block w-full p-2 bg-[#dcdcdc] border gabarito border-gray-300 rounded-md"
          />
        </div>
        <button className="mt-4 px-6 py-2 bg-[#3f8649ff] gabarito text-white rounded-md">
          Change Wallet
        </button>
      </div>
    </div>
  );
}
