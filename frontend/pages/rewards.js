import RewardsOverview from "@/components/rewards/RewardsOverview";
import RewardsActions from "@/components/rewards/RewardsActions";
import Leaderboard from "@/components/rewards/Leaderboard";
import Layout from "@/components/layout";
import Head from "next/head";
import { withAuth } from "@/hocs/withAuth";

function Rewards() {
  return (
    <>
    <Head>
        <title>Solaris 3.0 | Rewards</title>
    </Head>
    <div className="flex min-h-screen bg-[#cfcbbdff]">
    <Layout />
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 kumbhSans text-[#072000ff]">Rewards</h1>
      <main className="mx-auto space-y-8">
        <RewardsOverview />
        <RewardsActions />
        <Leaderboard />
      </main>
    </div>
    </div>
    </>
  );
}

export default withAuth(Rewards);
