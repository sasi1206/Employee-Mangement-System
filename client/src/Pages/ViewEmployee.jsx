import { IoArrowBackOutline , IoPersonSharp } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewEmployee = ()=>{
    const { emp } = useLocation()?.state;
    const navigate = useNavigate();
    return (
        <section id='viewEmp' className='p-7 w-[80%] h-[100vh]'>
            <section id='viewEmpHeader' className='text-2xl flex items-center gap-3 font-semibold'>
                <IoArrowBackOutline onClick={()=>{
                    navigate(-1);
                }} cursor={'pointer'}/>
                <p>View Employee Details</p>
            </section>
            <section id='EmployeeDetails' className='pt-5'>
                <section id="EmployeeDetailsHeader" className='flex items-end'>
                    <p className='flex items-center gap-3 pb-2 text-blue-600 w-max font-semibold border-b-2 z-10'>
                        <IoPersonSharp/>
                        Personal Information
                    </p>
                    <span className='border-b border-b-gray-300 w-[70%]'></span>
                </section>
                <section id="EmployeeDetail" className='pt-8'>
                    <section id="EmpImg" className='h-25 w-25 rounded-xl border border-gray-400 border-double'>
                        <img src={emp.employeePic} alt="pfp" className='rounded-xl'/>
                    </section>
                    <section id="EmpData" className='pt-5'>
                        <section id="EmpBasicDetails" className='flex border-b-2 border-b-gray-300 w-full py-3'>
                            <section id="name" className='w-1/2'>
                                <p className='text-sm text-gray-500 font-normal'>Name</p>
                                <p className='text-[14px] pt-1'>{emp.name}</p>
                            </section>
                            <section id="id">
                                <p className='text-sm text-gray-500 font-normal'>Employee ID</p>
                                <p className='text-[14px] pt-1'>{emp.id}</p>
                            </section>
                        </section>
                        <section id="EmpPosition" className='flex border-b-2 border-b-gray-300 w-full py-3'>
                            <section id="department" className='w-1/2'>
                                <p className='text-sm text-gray-500 font-normal'>Department</p>
                                <p className='text-[14px] pt-1'>{emp.department}</p>
                            </section>
                            <section id="designation">
                                <p className='text-sm text-gray-500 font-normal'>Designation</p>
                                <p className='text-[14px] pt-1'>{emp.designation}</p>
                            </section>
                        </section>
                        <section id="EmpProject" className='flex border-b-2 border-b-gray-300 w-full py-3'>
                            <section id="project" className='w-1/2'>
                                <p className='text-sm text-gray-500 font-normal'>Project</p>
                                <p className='text-[14px] pt-1'>{emp.project}</p>
                            </section>
                            <section id="type">
                                <p className='text-sm text-gray-500 font-normal'>type</p>
                                <p className='text-[14px] pt-1'>{emp.employeeType}</p>
                            </section>
                        </section>
                        <section id="EmpStatus" className='flex border-b-2 border-b-gray-300 w-full py-3'>
                            <section id="status">
                                <p className='text-sm text-gray-500 font-normal'>Status</p>
                                <p className='text-[14px] pt-1'>{emp.status}</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ViewEmployee;