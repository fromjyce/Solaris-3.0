import { useEffect, useState } from "react";
import RewardsOverview from "@/components/rewards/RewardsOverview";
import RewardsActions from "@/components/rewards/RewardsActions";
import Leaderboard from "@/components/rewards/Leaderboard";
import Layout from "@/components/layout";
import Head from "next/head";
import { withAuth } from "@/hocs/withAuth";

function Rewards() {
  const [data, setData] = useState({
    rewardsOverview: null,
    actions: [],
    leaderboard: [],
  });

  useEffect(() => {
    const fetchRewardsData = async () => {
      try {
        const response = await fetch("/api/rewards");
        const result = await response.json();
        setData({
          rewardsOverview: result.rewardsOverview,
          actions: result.actions,
          leaderboard: result.leaderboard,
        });
      } catch (error) {
        console.error("Error fetching rewards data:", error);
      }
    };

    fetchRewardsData();
  }, []);

  const { rewardsOverview, actions, leaderboard } = data;

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
            {rewardsOverview && <RewardsOverview data={rewardsOverview} />}
            {actions.length > 0 && <RewardsActions actions={actions} />}
            {leaderboard.length > 0 && <Leaderboard leaderboard={leaderboard} />}
          </main>
        </div>
      </div>
    </>
  );
}

export default withAuth(Rewards);