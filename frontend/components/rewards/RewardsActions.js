export default function RewardsActions() {
    const actions = [
      { title: "Offset Carbon Footprint", description: "Reduce your carbon emissions with RECs." },
      { title: "Support a Green Project", description: "Contribute to renewable energy initiatives." },
      { title: "Trade Carbon Credits", description: "Buy and sell carbon offsets easily." },
    ];
  
    return (
      <section className="bg-[#f4f4f4] rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-[#072000ff] kumbhSans mb-4">
          Rewards Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-gray-50  hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-[#072000ff] gabarito">
                {action.title}
              </h3>
              <p className="text-gray-600 text-md afacad">{action.description}</p>
              <button className="mt-3 px-4 py-2 bg-[#239d12ff] text-[#f4f4f4] font-semibold rounded hover:bg-[#1c7e0e]">
                Redeem Rewards
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  