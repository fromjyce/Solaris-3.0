"use client";
import { useState } from "react";
import Layout from "@/components/layout";
import Card from "@/components/dashboard/card";
import Table from "@/components/dashboard/table";
import Head from "next/head";
import { withAuth } from "@/hocs/withAuth";

function Dashboard() {
  const stats = [
    { title: "Total Investments", value: "$15,000" },
    { title: "Energy Credits Owned", value: "120 RECs" },
    { title: "Dividends Earned", value: "$450" },
    { title: "CO2 Offset", value: "300 kg" },
  ];

  const investments = {
    headings: ["Project", "Ownership %", "Dividends Earned"],
    rows: [
      ["Solar Project A", "15%", "$150"],
      ["Solar Project B", "10%", "$100"],
    ],
  };

  const transactions = {
    headings: ["Type", "Amount", "Date", "Status"],
    rows: [
      ["REC Purchase", "$200", "2024-06-30", "Completed"],
      ["Dividend Payout", "$50", "2024-06-25", "Received"],
    ],
  };

  const [performancePeriod, setPerformancePeriod] = useState("Weekly");

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