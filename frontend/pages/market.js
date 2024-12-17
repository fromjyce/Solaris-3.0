import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout";

const recData = [
  {
    name: "Solar Project A",
    location: "India",
    output: "500 kWh",
    price: 0.05,
    description: "A state-of-the-art solar project in Southern India.",
    tokensAvailable: 100,
    ownershipPercentage: 20,
    co2Savings: "500 kg",
    treesPlanted: 50,
  },
  {
    name: "Solar Project B",
    location: "USA",
    output: "1000 kWh",
    price: 0.1,
    description: "High-efficiency solar farm located in California.",
    tokensAvailable: 150,
    ownershipPercentage: 30,
    co2Savings: "1000 kg",
    treesPlanted: 120,
  },
  {
    name: "Solar Project C",
    location: "Germany",
    output: "200 kWh",
    price: 0.03,
    description: "A small community solar project in Bavaria.",
    tokensAvailable: 80,
    ownershipPercentage: 10,
    co2Savings: "200 kg",
    treesPlanted: 25,
  },
  {
    name: "Desert Sun Initiative",
    location: "UAE",
    output: "1200 kWh",
    price: 0.09,
    description: "A large-scale solar farm harnessing the sun in the Arabian desert.",
    tokensAvailable: 200,
    ownershipPercentage: 40,
    co2Savings: "1500 kg",
    treesPlanted: 300,
  },
  {
    name: "Mountain Peak Solar Grid",
    location: "Canada",
    output: "750 kWh",
    price: 0.06,
    description: "An innovative grid project atop the Canadian Rockies.",
    tokensAvailable: 120,
    ownershipPercentage: 25,
    co2Savings: "800 kg",
    treesPlanted: 75,
  },
  {
    name: "Coastal Wind & Solar Hub",
    location: "Australia",
    output: "900 kWh",
    price: 0.08,
    description: "Hybrid energy hub combining wind and solar on the Australian coast.",
    tokensAvailable: 170,
    ownershipPercentage: 35,
    co2Savings: "1100 kg",
    treesPlanted: 150,
  },
  {
    name: "Urban Rooftop Revolution",
    location: "Japan",
    output: "300 kWh",
    price: 0.04,
    description: "A network of urban solar rooftops in Tokyo to power the city sustainably.",
    tokensAvailable: 90,
    ownershipPercentage: 15,
    co2Savings: "400 kg",
    treesPlanted: 60,
  },
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
        <Layout />
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">Renewable Energy Credits (RECs) Marketplace</h1>
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
                  className="w-64 h-3 accent-[#3f8649ff]"
                />
                <span className="gabarito text-lg text-[#072000ff] mt-2">{`0 ETH - ${selectedPriceRange[1]} ETH`}</span>
              </div>
            </div>
          </div>

          {/* Project Cards */}
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
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Detailed Modal */}
          {isModalOpen && selectedRec && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-[#f4f4f4] rounded-lg p-6 w-96">
                <h3 className="text-2xl font-bold mb-2 gabarito text-[#072000ff]">{selectedRec.name}</h3>
                <p className="text-lg mb-2 afacad text-gray-700">{selectedRec.description}</p>
                <p className="text-base text-gray-600 afacad mb-2">Location: {selectedRec.location}</p>
                <p className="text-base text-gray-600 afacad mb-2">Energy Output: {selectedRec.output}</p>
                <p className="text-base text-gray-600 afacad mb-2">Tokens Available: {selectedRec.tokensAvailable}</p>
                <p className="text-base text-gray-600 afacad mb-2">Ownership: {selectedRec.ownershipPercentage}%</p>
                <p className="text-base text-gray-600 afacad mb-2">
                  CO2 Saved: {selectedRec.co2Savings} | Trees Planted: {selectedRec.treesPlanted}
                </p>

                <button
                  onClick={() => alert(`Invested in ${selectedRec.name}`)}
                  className="w-full mt-4 bg-[#239d12ff] hover:bg-[#1d7c0dff] text-white p-2 rounded-md gabarito"
                >
                  Invest Now
                </button>
                <button
                  onClick={closeTradeModal}
                  className="w-full mt-4 bg-red-500 text-white p-2 rounded-md gabarito"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
