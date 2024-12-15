import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import Footer from '@/components/footer';

const MarketPage = () => {
  const [marketData, setMarketData] = useState(null);
  const [userStats, setUserStats] = useState({
    energyConsumed: 0,
    energyGenerated: 0,
    recBalance: 0,
  });

  // Generate random data for REC prices, token prices, and energy stats
  const getRandomPrice = (min, max) => (Math.random() * (max - min) + min).toFixed(2);
  const getRandomTrend = (length) => Array.from({ length }, () => getRandomPrice(45, 60));
  const getRandomEnergyStats = () => ({
    energyConsumed: Math.floor(Math.random() * 2000) + 500, // Between 500 and 2500 kWh
    energyGenerated: Math.floor(Math.random() * 1000) + 100, // Between 100 and 1100 kWh
    recBalance: Math.floor(Math.random() * 500) + 50, // Between 50 and 500 RECs
  });

  useEffect(() => {
    const fetchMarketData = () => {
      setMarketData({
        recPrice: getRandomPrice(45, 55), // Random price between 45 and 55
        tokenPrice: getRandomPrice(8, 12), // Random price between 8 and 12
        solarSharePrice: getRandomPrice(150, 250), // Random price between 150 and 250
        recPriceTrend: getRandomTrend(12), // 12-month trend data
      });

      setUserStats(getRandomEnergyStats());
    };

    fetchMarketData();
    const intervalId = setInterval(fetchMarketData, 10000); // Refresh every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  // Line chart options for REC price trends
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#4b5563', // Tailwind gray color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4b5563',
        },
      },
    },
  };

  // Pie chart for carbon offset investments
  const pieChartData = {
    labels: ['Solar Energy', 'Carbon Offsets', 'Other Investments'],
    datasets: [
      {
        data: [Math.random() * 40 + 30, Math.random() * 40 + 30, Math.random() * 40 + 30],
        backgroundColor: ['#f39c12', '#16a085', '#3498db'],
        borderColor: ['#f39c12', '#16a085', '#3498db'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="EcoSphere Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold">EcoSphere</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600">How It Works</a>
            <a href="#sign-in" className="text-gray-700 hover:text-green-600">Sign In</a>
            <a href="#sign-up" className="text-gray-700 hover:text-green-600">Sign Up</a>
          </nav>
        </div>
      </header>

      {/* Live Market Data Section */}
      <section className="py-20 bg-gray-100" id="market">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Live Market Data</h3>
          {marketData ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* REC Pricing */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-bold mb-2">REC Price</h4>
                <p className="text-2xl text-green-600">${marketData.recPrice} per REC</p>
                <Line
                  data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                      {
                        label: 'REC Price Trend',
                        data: marketData.recPriceTrend,
                        fill: false,
                        borderColor: '#34D399', // Tailwind green color
                        tension: 0.1,
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              </div>
              {/* Tokenized Carbon Offsets */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-bold mb-2">Tokenized Carbon Offsets</h4>
                <p className="text-2xl text-blue-600">${marketData.tokenPrice} per token</p>
              </div>
              {/* Solar Project Share */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-bold mb-2">Solar Project Share</h4>
                <p className="text-2xl text-yellow-600">${marketData.solarSharePrice} per share</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-700">Loading market data...</p>
          )}
        </div>
      </section>

      {/* REC Trading Section */}
      <section className="py-20 bg-white" id="rec-trading">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">REC Trading</h3>
          <div className="max-w-lg mx-auto space-y-4">
            <div>
              <p className="text-lg text-gray-700">Your REC Balance: {userStats.recBalance} RECs</p>
            </div>
            <div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full">
                Buy RECs
              </button>
            </div>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full">
                Sell RECs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Dashboard Section */}
      <section className="py-20 bg-gray-100" id="dashboard">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Energy Dashboard</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Energy Consumed */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">Energy Consumed</h4>
              <p className="text-2xl text-gray-700">{userStats.energyConsumed} kWh</p>
            </div>
            {/* Energy Generated */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">Energy Generated</h4>
              <p className="text-2xl text-gray-700">{userStats.energyGenerated} kWh</p>
            </div>
            {/* Carbon Offset Investments */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold mb-2">Carbon Offset Investments</h4>
              <Pie data={pieChartData} options={{ responsive: true }} />
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default MarketPage;
