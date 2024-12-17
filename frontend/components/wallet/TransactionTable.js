const TransactionTable = ({ transactions }) => {
    return (
      <div className="bg-[#f4f4f4] shadow rounded p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#c3c3c3]">
              <th className="p-3 text-left text-[#072000ff]">ID</th>
              <th className="p-3 text-left text-[#072000ff]">Type</th>
              <th className="p-3 text-left text-[#072000ff]">Amount</th>
              <th className="p-3 text-left text-[#072000ff]">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-[#7a7a7a]">
                <td className="p-3">{tx.id}</td>
                <td className="p-3">{tx.type}</td>
                <td className="p-3">{tx.amount} RECs</td>
                <td className="p-3">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TransactionTable;
  