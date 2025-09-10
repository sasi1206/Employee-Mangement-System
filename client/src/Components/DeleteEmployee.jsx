import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";

const DeleteEmployee = ({ setShowDelete,DeleteEmp })=>{
    return (
        <section id="deleteEmployee" className="w-1/4 h-[45%] flex flex-col items-center absolute top-[30%] left-[30%] rounded-xl bg-white">
            <IoTrashOutline color="blue" fontSize={40} className="m-5"/>
            <p className="w-3/4 text-center">Are you sure you want to Delete?</p>
            <section id="actions" className="w-full mt-auto flex gap-1">
                <button className="w-1/2 bg-red-500 text-white p-2 rounded-bl-xl cursor-pointer" onClick={(e)=>{
                    setShowDelete(false);
                }}>Cancel</button>
                <button className="bg-blue-600 text-white w-1/2 p-2 rounded-br-xl cursor-pointer" onClick={(e)=>{
                    e.preventDefault();
                    DeleteEmp();
                }}>Yes</button>
            </section>
        </section>
    )
}

export default DeleteEmployee;