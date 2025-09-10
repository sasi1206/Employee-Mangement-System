import { IoSearchOutline , IoAddCircleOutline , IoEyeOutline , IoTrashOutline } from 'react-icons/io5';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import DeleteEmployee from '../Components/DeleteEmployee';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeTable = ()=>{
    const navigate = useNavigate();
    const [showDelete,setShowDelete] = useState(false);
    const [employees,setEmployees] = useState([]);

    useEffect(()=>{
        GetUsers();
    },[]);

    useEffect(() => {
        if (showDelete) {
            document.getElementsByTagName('body')[0].style.backgroundColor = '#e5e7eb';
        } else {
            document.getElementsByTagName('body')[0].style.backgroundColor = '';
        }
    }, [showDelete]);

    const GetUsers = async()=>{
        try {
            const response = await axios.get(import.meta.env.VITE_SERVER_URL);
            if(response.status !== 200){
                throw new Error(response.data);
            }else{
                setEmployees(response.data);
            }
        } catch (error) {
            alert("Error!!!! check console :(");
            console.log(error?.response?.data?.errors || error?.response?.data);
        }
    }

    const DeleteEmp = async(id)=>{
        try {
            const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/${id}`);
            if(response.status !== 200){
                throw new Error(response.data);
            }else{
                setShowDelete(false);
                GetUsers();
            }
        } catch (error) {
            alert("Error!!!! check console :(");
            console.log(error?.response?.data?.errors || error?.response?.data);
        }
    }

    return(
        <section className='p-4 pt-8 w-[80%] relative'>
            <section id="header" className='flex w-full justify-between items-center'>
                <p className='font-semibold text-2xl'>Employee</p>
                <section id="actions" className='flex items-center gap-5'>
                    <section id="search" className='border-1 border-gray-300 rounded-xl flex p-2 items-center gap-2 w-[50%] pl-4'>
                        <IoSearchOutline fontSize={20} color='gray'/>
                        <input type="text" name="search" className='w-full outline-0'
                        placeholder='Search'/>
                    </section>
                    <button id="addEmp" className='border-1 border-blue-600 bg-blue-600 rounded-xl flex p-2.5 items-center gap-2 w-[42%] pl-4 cursor-pointer'
                        onClick={()=>{
                            navigate('employee/add');
                        }}
                    >
                        <IoAddCircleOutline color='white' fontSize={20}/>
                        <p className='text-sm text-white font-light'>Add New Employee</p>
                    </button>
                </section>
            </section>
            <section id="empTable" className='h-full pt-8'>
                <section id="table" className={`border rounded-xl border-gray-400 p-3 pb-2 ${employees.length === 0 ? "h-64" : ""}`}>
                    <section id="headers" className='flex justify-between w-[98%] pb-3'>
                        {
                            ["Employee Name","Employee ID","Department", "Designation" ,"Project","Type","Status","Action"].map(header=>(
                                <p className='font-normal text-sm text-gray-600'>{header}</p>
                            ))
                        }
                    </section>
                    <hr className='border border-gray-300'></hr>
                    <section id="employees" className={`${employees.length === 0 ? "grid place-content-center h-full font-semibold" : "pt-4 flex flex-col gap-2"}`}>
                        {
                            employees.length === 0 
                            ?
                             <p>No records found</p>
                            :
                             employees.map(employee=>(
                                <div className='flex text-[13px] font-[350] pb-1 items-center'>
                                    <span className='flex items-center gap-1 w-2/11'>
                                        <img src={employee.employeePic} alt="user pfp" className="w-6 h-6 rounded-full object-cover"/>
                                        {employee.name}
                                    </span>
                                    <span className='w-[137px]'>
                                        {employee.id}
                                    </span>
                                    <span className='w-[140px]'> 
                                        {employee.department}
                                    </span>
                                    <span className='w-[135px]'>
                                        {employee.designation}
                                    </span>
                                    <span className='w-[100px]'>
                                        {employee.project}
                                    </span>
                                    <span className='w-[85px]'>
                                        {employee.employeeType}
                                    </span>
                                    <span className='w-[70px]'>
                                        {employee.status}
                                    </span>
                                    <span className='flex gap-2 pl-3 items-center justify-end'>
                                        <IoEyeOutline fontSize={19} cursor={'pointer'} onClick={()=>{
                                            navigate('employee/view',{
                                                state:{
                                                    emp:employee
                                                }
                                            })
                                        }}/>
                                        <HiOutlinePencilSquare fontSize={19} cursor={'pointer'} onClick={()=>{
                                            navigate('employee/edit',{
                                                state:{
                                                    emp:employee
                                                }
                                            })
                                        }}/>
                                        <IoTrashOutline fontSize={19} cursor={'pointer'} onClick={()=>{
                                            setShowDelete(true);
                                        }}/>
                                    </span>
                                    {
                                        (showDelete && <DeleteEmployee
                                            setShowDelete={setShowDelete}
                                            DeleteEmp={()=>DeleteEmp(employee.id)}
                                        />)
                                    }
                                </div>
                             ))
                        }
                    </section>
                </section>
            </section>
        </section>
    )
}

export default EmployeeTable;