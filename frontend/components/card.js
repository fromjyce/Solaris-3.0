export default function Card({ title, value }) {
    return (
      <div className="bg-[#f4f4f4] shadow-md rounded-lg p-4 gabarito">
        <h2 className="text-[#072000ff] text-sm font-medium">{title}</h2>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
    );
  }
  