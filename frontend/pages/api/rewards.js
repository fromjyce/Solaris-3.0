import clientPromise from "@/utils/db";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("solaris");
    const rewardsOverview = await db.collection("rewardsOverview").findOne({});
    const actions = await db.collection("rewardsActions").find({}).toArray();
    const leaderboard = await db.collection("leaderboard").find({}).sort({ rank: 1 }).toArray();

    res.status(200).json({
      rewardsOverview,
      actions,
      leaderboard,
    });
  } catch (error) {
    console.error("Error fetching rewards data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
