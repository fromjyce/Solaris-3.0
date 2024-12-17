export default function RewardsOverview() {
    return (
      <section className="bg-[#f4f4f4] rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-[#072000ff] kumbhSans mb-4">
          User Rewards Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#e4ead1]  p-4 rounded">
            <p className="text-lg font-semibold text-[#239d12ff] gabarito">
              Total Rewards Earned:
            </p>
            <p className="text-3xl font-bold text-[#3f8649ff] gabarito">1200 Points</p>
          </div>
          <div className="bg-[#e2e0d7] p-4 rounded">
            <p className="text-lg font-semibold text-blue-800 gabarito">
              Gamified Achievements:
            </p>
            <ul className="list-disc pl-5 text-[#072000ff] afacad text-lg">
              <li>🌱 Carbon Neutral Hero</li>
              <li>🌞 Solar Investor Pro</li>
              <li>🌎 Green Supporter</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  