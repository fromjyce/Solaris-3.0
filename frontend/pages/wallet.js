import { useWallet } from "@/context/walletContext";
import WalletCard from "@/components/wallet/WalletCard";
import TransactionTable from "@/components/wallet/TransactionTable";
import Head from "next/head";
import { withAuth } from "@/hocs/withAuth";
import Layout from "@/components/layout";

const Wallet = () => {
  const { walletAddress, balance, connect, disconnect } = useWallet();

  const transactions = [
    { id: 1, type: "Purchase", amount: 50, date: "2024-06-01" },
    { id: 2, type: "Trade", amount: 20, date: "2024-06-03" },
    { id: 3, type: "Dividend", amount: 5, date: "2024-06-05" },
  ];

  return (
    <>
      <Head>
        <title>Solaris 3.0 | Wallet</title>
      </Head>
      <div className="flex min-h-screen bg-[#cfcbbdff]">
        <Layout />
        <div className="container mx-auto p-8">
          <div>
            <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">
              Wallet Integration
            </h1>
            {!walletAddress ? (
              <button
                onClick={connect}
                className="px-6 py-3 bg-[#3f8649ff] gabarito text-white rounded hover:bg-[#326b3a] transition"
              >
                Connect Wallet
              </button>
            ) : (
              <div>
                <WalletCard
                  address={walletAddress}
                  balance={balance}
                  onDisconnect={disconnect}
                />
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-[#072000ff] kumbhSans mb-4">
                    Transaction History
                  </h2>
                  <TransactionTable transactions={transactions} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Wallet);
