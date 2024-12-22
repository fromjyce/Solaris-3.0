import clientPromise from "@/utils/db";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("solaris");
    const stats = await db.collection("stats").findOne({});
    const investments = await db.collection("investments").find({}).toArray();
    const transactions = await db.collection("transactions").find({}).toArray();

    res.status(200).json({ stats, investments, transactions });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
