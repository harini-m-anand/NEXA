export default function CareerCard({
  career,
  alternatives,
}: any) {

  return (

    <div className="bg-white rounded-xl shadow p-6 text-gray-900">
      <h2 className="text-2xl font-bold">

        Career Match

      </h2>

      <p className="mt-4 text-xl font-semibold text-blue-600">

        {career}

      </p>

      <h3 className="mt-6 font-semibold">

        Alternative Careers

      </h3>

      <ul className="mt-2 space-y-2">

        {alternatives.map((item: string, index: number) => (

          <li key={index}>

            • {item}

          </li>

        ))}

      </ul>

    </div>

  );

}