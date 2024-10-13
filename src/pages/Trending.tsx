 
import Addthread from "@/components/AddThread/Addthread";
import Card from "@/components/ui/Card";
import { useGetThreadsQuery } from "@/redux/api/baseApi";
 



const Trending = () => {

    
   
    const { data:threads,isLoading } = useGetThreadsQuery({})
    

    if (isLoading) {
        return <h1 className="text-4xl">Loading</h1>
    }


     
 

    return (
        <section className="">
            <Addthread/>
            <div className="my-10 space-y-5">
                {
                    threads.response.map((v:any) => {
                        return (
                            <div >
                                <Card data={v} />
                                
                            </div>
                        )
                    })
                }
           </div>
        </section>
    );
};

export default Trending;

// const find = keys.find(color => v.category === color)
// console.log(find)

// const category = {
//     'safe and security': '#008000',
//     'community': 'green',
//     'emergancy': 'red',
//     'report': 'black',
//     'thread': 'blue',
//     'others': 'off-white'
// }

// const keys = Object.keys(category)

// className = {`border p-4 rounded-md ${v?.category == 'community' ? 'bg-green-50' : v?.category == 'emergancy' ? 'bg-amber-50' : v?.category == 'report' ? 'bg-cyan-50' : v?.category == 'thread' ? 'bg-zinc-100' : v?.category == 'others' ? 'bg-orange-50' : 'bg-slate-50'} `}