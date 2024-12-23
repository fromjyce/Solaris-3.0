import clientPromise from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("solaris");
      const userId = "demoUserId";
      const userSettings = await db.collection("settings").findOne({ userId });

      if (!userSettings) {
        return res.status(404).json({ error: "Settings not found" });
      }

      res.status(200).json(userSettings);
    } catch (error) {
      console.error("Error fetching settings:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("solaris");

      const { userId, settings } = req.body;
      await db.collection("settings").updateOne(
        { userId },
        { $set: settings },
        { upsert: true }
      );

      res.status(200).json({ message: "Settings updated successfully" });
    } catch (error) {
      console.error("Error updating settings:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
