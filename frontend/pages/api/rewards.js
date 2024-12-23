import clientPromise from "@/utils/db";

const placeholderData = {
  rewardsOverview: {
    totalRewards: "200 Tokens",
    carbonOffset: "150 kg",
    achievements: ["First Trade", "Eco Warrior"],
  },
  actions: [
    { id: 1, action: "Offset Carbon Footprint", reward: "50 Tokens" },
    { id: 2, action: "Support Green Projects", reward: "100 Tokens" },
  ],
  leaderboard: [
    { rank: 1, name: "Alice", rewards: "500 Tokens" },
    { rank: 2, name: "Bob", rewards: "450 Tokens" },
    { rank: 3, name: "Charlie", rewards: "400 Tokens" },
  ],
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("solaris");

    const rewardsOverview = await db.collection("rewardsOverview").findOne({});
    const actions = await db.collection("rewardsActions").find({}).toArray();
    const leaderboard = await db.collection("leaderboard").find({}).toArray();

    res.status(200).json({
      rewardsOverview: rewardsOverview || placeholderData.rewardsOverview,
      actions: actions.length > 0 ? actions : placeholderData.actions,
      leaderboard: leaderboard.length > 0 ? leaderboard : placeholderData.leaderboard,
    });
  } catch (error) {
    console.error("Error fetching rewards data:", error);
    res.status(200).json(placeholderData);
  }
}
