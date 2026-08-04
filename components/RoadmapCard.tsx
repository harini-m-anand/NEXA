export default function RoadmapCard({ roadmap }: any) {

  return (

    <div className="bg-white rounded-xl shadow p-6 md:col-span-2 text-gray-900">

      <h2 className="text-2xl font-bold mb-4">

        Learning Roadmap

      </h2>

      <ol className="space-y-3">

        {roadmap.map((step: string, index: number) => (

          <li key={index}>

            <span className="font-semibold">

              Week {index + 1}

            </span>

            {" - "}

            {step}

          </li>

        ))}

      </ol>

    </div>

  );

}