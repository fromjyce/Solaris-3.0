import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout";

const recData = [
  { name: "Solar Project A", location: "India", output: "500 kWh", price: 0.05 },
  { name: "Solar Project B", location: "USA", output: "1000 kWh", price: 0.1 },
  { name: "Solar Project C", location: "Germany", output: "200 kWh", price: 0.03 },
  { name: "Solar Project D", location: "India", output: "800 kWh", price: 0.07 },
  { name: "Solar Project E", location: "USA", output: "1500 kWh", price: 0.12 },
];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 0.15]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRec, setSelectedRec] = useState(null);
  const [recAmount, setRecAmount] = useState(1);

  const openTradeModal = (rec) => {
    setSelectedRec(rec);
    setIsModalOpen(true);
  };

  const closeTradeModal = () => {
    setIsModalOpen(false);
    setRecAmount(1);
  };

  const filteredRecs = recData.filter(
    (rec) =>
      (search === "" || rec.name.toLowerCase().includes(search.toLowerCase())) &&
      (selectedRegion === "" || rec.location === selectedRegion) &&
      rec.price >= selectedPriceRange[0] &&
      rec.price <= selectedPriceRange[1]
  );

  return (
    <>
    <Head>
    <title>Solaris 2.0 | Marketplace</title>
    </Head>
    <div className="flex min-h-screen bg-[#cfcbbdff]">
      <Layout/>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">REC Marketplace</h1>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search projects by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-1/3 gabarito"
        />
         <div className="flex gap-8">
        <div className="flex flex-col">
          <label className="text-lg font-medium gabarito mb-2 text-[#072000ff]">Region</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="p-3 border rounded-lg text-lg w-56 h-12 afacad text-[#072000ff]"
          >
            <option value="">All Regions</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium gabarito mb-2 text-[#072000ff]">Max Price (ETH)</label>
          <input
            type="range"
            min="0"
            max="0.15"
            step="0.01"
            value={selectedPriceRange[1]}
            onChange={(e) => setSelectedPriceRange([0, e.target.value])}
            className="w-64 h-4 accent-[#3f8649ff]"
          />
          <span className="gabarito text-lg text-[#072000ff] mt-2">{`0 ETH - ${selectedPriceRange[1]} ETH`}</span>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecs.map((rec, index) => (
          <div key={index} className="bg-[#f4f4f4] shadow-md rounded-lg p-6">
            <h3 className="text-xl mb-1 font-bold gabarito">{rec.name}</h3>
            <p className="text-base text-gray-600 afacad">Location: {rec.location}</p>
            <p className="text-base text-gray-600 afacad">Output: {rec.output}</p>
            <p className="text-lg mt-1 font-semibold gabarito">Price: {rec.price} ETH</p>
            <button
              onClick={() => openTradeModal(rec)}
              className="mt-4 gabarito bg-[#3f8649ff] hover:bg-[#326b3a] text-white p-2 rounded-md w-full"
            >
              Buy/Stake
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && selectedRec && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#f4f4f4] rounded-lg p-6 w-80">
            <h3 className="text-xl font-bold mb-4 gabarito text-[#072000ff]">Purchase {selectedRec.name}</h3>
            <label className="block text-sm font-medium mb-2 gabarito text-[#072000ff]">Number of RECs</label>
            <input
              type="number"
              value={recAmount}
              onChange={(e) => setRecAmount(e.target.value)}
              className="w-full p-2 border rounded-md mb-4 afacad"
              min="1"
            />
            <div className="flex justify-between mb-4">
              <span className="font-medium gabarito text-[#072000ff]">Total Cost</span>
              <span className="font-semibold text-[#072000ff] gabarito">
                {(recAmount * selectedRec.price).toFixed(2)} ETH
              </span>
            </div>
            <button
              onClick={() => {
                alert(`Purchased ${recAmount} RECs from ${selectedRec.name}!`);
                closeTradeModal();
              }}
              className="w-full bg-[#239d12ff] text-white p-2 rounded-md gabarito"
            >
              Confirm Purchase
            </button>
            <button
              onClick={closeTradeModal}
              className="w-full mt-4 bg-red-500 text-white p-2 rounded-md gabarito"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
}
