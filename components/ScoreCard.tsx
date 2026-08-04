export default function ScoreCard({ score }: any) {

  return (

    <div className="bg-white rounded-xl shadow p-6 text-gray-900">

      <h2 className="text-2xl font-bold">

        Readiness Score

      </h2>

      <div className="mt-8 text-center">

        <p className="text-6xl font-bold text-blue-600">

          {score}%

        </p>

      </div>

    </div>

  );

}