export default function Table({ headings, rows }) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full text-base text-[#072000ff]">
          <thead className="bg-[#f4f4f4] gabarito">
            <tr>
              {headings.map((heading, index) => (
                <th key={index} className="px-4 py-2 text-left">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b afacad hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  