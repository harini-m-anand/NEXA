export default function SkillsCard({ skills }: any) {

  return (

    <div className="bg-white rounded-xl shadow p-6 text-gray-900">

      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Extracted Skills
      </h2>

      <ul className="space-y-2">

        {skills.map((skill: string, index: number) => (

          <li key={index}>
            ✅ {skill}
          </li>

        ))}

      </ul>

    </div>

  );

}