const TransactionTable = ({ transactions }) => {
    return (
      <div className="shadow rounded p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="p-3 text-left text-[#072000ff] gabarito">ID</th>
              <th className="p-3 text-left text-[#072000ff] gabarito">Type</th>
              <th className="p-3 text-left text-[#072000ff] gabarito">Amount</th>
              <th className="p-3 text-left text-[#072000ff] gabarito">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b afacad hover:bg-gray-100">
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
  