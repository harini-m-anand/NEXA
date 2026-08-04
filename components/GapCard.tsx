export default function GapCard({ gaps }: any) {

  return (

    <div className="bg-white rounded-xl shadow p-6 text-gray-900">

      <h2 className="text-2xl font-bold mb-4">

        Missing Skills

      </h2>

      <ul className="space-y-2">

        {gaps.map((gap: string, index: number) => (

          <li key={index}>

            ❌ {gap}

          </li>

        ))}

      </ul>

    </div>

  );

}