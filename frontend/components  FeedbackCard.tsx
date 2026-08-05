export default function FeedbackCard({ feedback }: any) {

    return (

        <div className="bg-white rounded-xl shadow p-6 mt-8">

            <h2 className="text-2xl font-bold mb-6">

                AI Resume Feedback

            </h2>

            <div className="space-y-3">

                {feedback.map((item:string,index:number)=>(

                    <div
                        key={index}
                        className="bg-slate-100 p-4 rounded-lg"
                    >

                        {item}

                    </div>

                ))}

            </div>

        </div>

    )

}