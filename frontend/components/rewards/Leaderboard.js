export default function Leaderboard() {
    const users = [
      { rank: 1, name: "Nidhi Gummaraju", recs: "120", dividends: "$500", impact: "Carbon Neutral" },
      { rank: 2, name: "Jayashre", recs: "110", dividends: "$450", impact: "Green Supporter" },
      { rank: 3, name: "User 3", recs: "90", dividends: "$350", impact: "Solar Champion" },
    ];
  
    return (
      <section className="bg-[#f4f4f4] rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-[#072000ff] kumbhSans mb-4">
          Leaderboard
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#3f8649ff] text-[#072000ff] gabarito">
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">RECs Owned</th>
                <th className="p-3 text-left">Dividends Earned</th>
                <th className="p-3 text-left">Impact</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="text-[#072000ff] border-b hover:bg-[#8cb692] gabarito transition"
                >
                  <td className="p-3">{user.rank}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.recs}</td>
                  <td className="p-3">{user.dividends}</td>
                  <td className="p-3">{user.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  