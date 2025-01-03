import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import { withAuth } from "@/hocs/withAuth";
import { useWallet } from "@/context/walletContext";

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
    receiverAddress: "0x0E9B75F9D253cCef031121854AF62f73E7C78022",
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
    receiverAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
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
    receiverAddress: "0x7890abcdef1234567890abcdef1234567890abcd",
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
    receiverAddress: "0x4567890abcdef1234567890abcdef1234567890",
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
    receiverAddress: "0xabcdef7890abcdef1234567890abcdef12345678",
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
    receiverAddress: "0x123456abcdef7890abcdef1234567890abcdef12",
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
    receiverAddress: "0x7890abcdef4561237890abcdef123456abcdef12",
  },
  {
    name: "Desert Light Solar Fields",
    location: "Egypt",
    output: "1400 kWh",
    price: 0.07,
    description: "Expansive solar fields capturing the intense sunlight of the Sahara Desert.",
    tokensAvailable: 250,
    ownershipPercentage: 50,
    co2Savings: "2000 kg",
    treesPlanted: 350,
    receiverAddress: "0x4567890abcdef78901234567890abcdef123456",
  },
  {
    name: "Tundra Energy Array",
    location: "Norway",
    output: "600 kWh",
    price: 0.05,
    description: "An innovative solar array designed for low-sunlight regions in the Arctic Tundra.",
    tokensAvailable: 110,
    ownershipPercentage: 22,
    co2Savings: "600 kg",
    treesPlanted: 80,
    receiverAddress: "0xabcdef1234567890abcdef4567890abcdef1234",
  },
  {
    name: "River Delta Solar Grid",
    location: "Vietnam",
    output: "850 kWh",
    price: 0.06,
    description: "Sustainable energy solutions for communities along the Mekong River Delta.",
    tokensAvailable: 140,
    ownershipPercentage: 28,
    co2Savings: "950 kg",
    treesPlanted: 120,
    receiverAddress: "0x1234567890abcdef1234567890abcdefabcdef12",
  },
];

function Marketplace() {
  const { walletAddress } = useWallet();
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 0.15]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRec, setSelectedRec] = useState(null);

  const openTradeModal = (rec) => {
    setSelectedRec(rec);
    setIsModalOpen(true);
  };

  const closeTradeModal = () => {
    setIsModalOpen(false);
  };

  const handleTransaction = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    if (window.ethereum) {
      try {
        const confirmed = confirm(
          `Are you sure you want to invest in ${selectedRec.name} for ${selectedRec.price} ETH?`
        );
        if (!confirmed) return;
        const transactionParams = {
          from: walletAddress, // Sender wallet
          to: selectedRec.receiverAddress, // Receiver wallet
          value: (selectedRec.price * 1e18).toString(16), // Convert ETH to Wei (hexadecimal format)
        };

        // Send transaction using MetaMask
        await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParams],
        });

        alert("Transaction successful! You have invested in the project.");
        closeTradeModal();
      } catch (error) {
        console.error("Transaction failed:", error);
        alert("Transaction failed. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install it to proceed.");
    }
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
        <title>Solaris 3.0 | Marketplace</title>
      </Head>
      <div className="flex min-h-screen bg-[#cfcbbdff]">
        <Layout />
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">
            Renewable Energy Credits (RECs) Marketplace
          </h1>
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
                  onClick={handleTransaction}
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

export default withAuth(Marketplace);
