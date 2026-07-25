interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export default function ComparisonTable({
  headers,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10">
      <table className="w-full">
        <thead className="bg-cyan-500/10">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-white/10 px-6 py-5 text-left font-semibold text-cyan-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-white/5"
            >
              {row.map((cell) => (
                <td
                  key={cell}
                  className="px-6 py-5 text-slate-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}