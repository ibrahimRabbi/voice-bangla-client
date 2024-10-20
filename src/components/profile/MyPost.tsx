 
import Card from "@/components/ui/Card";
import { useGetThreadsQuery } from '@/redux/api/baseApi';
import ShortAddThread from "./ShortAddThread";


const MyPost = () => {

    const { data: threads } = useGetThreadsQuery({})



    return (
        <div className="my-6">
            <ShortAddThread />
            <div className="space-y-10 mt-14">
                {
                    threads?.response.map((v: any) => {
                        return (
                            <div>
                                <Card data={v} />
                            </div>
                        )
                    })
                }
           </div>
        </div>
    );
};

export default MyPost;