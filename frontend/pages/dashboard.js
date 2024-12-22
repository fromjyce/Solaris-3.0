"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Card from "@/components/dashboard/card";
import Table from "@/components/dashboard/table";
import Head from "next/head";
import { withAuth } from "@/hocs/withAuth";

function Dashboard() {
  const placeholderData = {
    stats: [
      { title: "Total Investments", value: "$0" },
      { title: "Energy Credits Owned", value: "0 RECs" },
      { title: "Dividends Earned", value: "$0" },
      { title: "CO2 Offset", value: "0 kg" },
    ],
    investments: {
      headings: ["Project", "Ownership %", "Dividends Earned"],
      rows: [["No Data", "0%", "$0"]],
    },
    transactions: {
      headings: ["Type", "Amount", "Date", "Status"],
      rows: [["No Transactions", "$0", "-", "No Data"]],
    },
  };

  const [dashboardData, setDashboardData] = useState(placeholderData);
  const [performancePeriod, setPerformancePeriod] = useState("Weekly");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("/api/dashboard");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setDashboardData({
          stats: [
            { title: "Total Investments", value: data.stats.totalInvestments },
            { title: "Energy Credits Owned", value: data.stats.energyCredits },
            { title: "Dividends Earned", value: data.stats.dividends },
            { title: "CO2 Offset", value: data.stats.co2Offset },
          ],
          investments: {
            headings: ["Project", "Ownership %", "Dividends Earned"],
            rows: data.investments.map((item) => [
              item.project,
              item.ownership,
              `$${item.dividends}`,
            ]),
          },
          transactions: {
            headings: ["Type", "Amount", "Date", "Status"],
            rows: data.transactions.map((item) => [
              item.type,
              `$${item.amount}`,
              item.date,
              item.status,
            ]),
          },
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setDashboardData(placeholderData);
      }
    };

    fetchDashboardData();
  }, []);

  const { stats, investments, transactions } = dashboardData;

  return (
    <>
      <Head>
        <title>Solaris 3.0 | Dashboard</title>
      </Head>
      <div className="flex min-h-screen bg-[#cfcbbdff]">
        <Layout />
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} title={stat.title} value={stat.value} />
            ))}
          </div>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">My Investments</h2>
            <Table headings={investments.headings} rows={investments.rows} />
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">Energy Performance Tracker</h2>
            <div className="flex items-center gap-4 mb-4">
              {["Weekly", "Monthly", "Yearly"].map((period) => (
                <button
                  key={period}
                  className={`px-4 py-2 rounded gabarito ${
                    performancePeriod === period
                      ? "bg-[#3f8649ff] text-[#f4f4f4]"
                      : "bg-[#f4f4f4] text-[#072000ff]"
                  }`}
                  onClick={() => setPerformancePeriod(period)}
                >
                  {period}
                </button>
              ))}
            </div>
            <div className="h-48 bg-[#f4f4f4] shadow-md rounded-lg flex items-center justify-center">
              <p className="text-gray-400 afacad">[Chart Placeholder - {performancePeriod}]</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 kumbhSans text-[#072000ff]">Recent Transactions</h2>
            <Table headings={transactions.headings} rows={transactions.rows} />
          </section>
        </main>
      </div>
    </>
  );
}

export default withAuth(Dashboard);