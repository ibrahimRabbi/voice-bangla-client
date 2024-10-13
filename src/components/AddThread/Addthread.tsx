import { Link } from "react-router-dom";

 

const Addthread = () => {
    return (
        <div  className="flex justify-between items-center">
            <p className="font-bold text-xl text-sky-400">Our Voice</p>
            <Link to='/add-thread' className="font-semibold flex justify-center items-center gap-1">
                <p>Add Thread</p>
                <img src="../../public/icons/Plus Key.png" alt="" /> 
            </Link>
        </div>
    );
};

export default Addthread;