import Card from "@/components/ui/Card";
import { useGetThreadsQuery } from "@/redux/api/baseApi";


const PostApproved = () => {
    const { data, isLoading } = useGetThreadsQuery({})
    if (isLoading) {
        return <h1 className="text-2xl">Loading...</h1>
    }

    console.log(data)
    return (
        <section>
            <h1 className="text-3xl font-bold text-center">Thread Verifications</h1>
            <div className="space-y-14 my-10">
                {
                    data?.response.map((v: any) => {
                        return (
                            <div>
                                <Card data={v} />
                                <div className="flex justify-center items-center gap-x-14 mt-4">
                                    <button className="border-2 bg-green-50 px-2 py-1 font-semibold rounded-lg border-green-500">approve</button>
                                    <button className="border-2 px-2 py-1 font-semibold rounded-lg border-red-500 bg-red-50">approve</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default PostApproved;