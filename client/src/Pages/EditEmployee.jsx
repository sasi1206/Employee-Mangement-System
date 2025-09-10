import { useState } from "react";
import { IoArrowBackOutline, IoPersonSharp } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import Select from 'react-select';
import axios from 'axios';

const EditEmployee = ()=>{
    const { emp } = useLocation()?.state;

    const [employee,setEmployee] = useState({...emp});

    console.log(employee);

    const Options = [
        {
            label:"Design",
            value:"Design",
            designations:[{
                label:"UI Developer",value:"UI Developer"
            },{
                label:"UX Developer",value:"UX Developer"
            },{
                label:"Design Lead",value:"Design Lead"
            }]
        },
        {
            label:'Developement',
            value:"Developement",
            designations:[{
                label:"Frontend Developer",value:"Frontend Developer"
            },{
                label:"Backend Developer",value:"Backend Developer"
            },{
                label:"Full Stack Developer",value:"Full Stack Developer"
            }]
        },{
            label:"HR",value:"HR",designations:[{
                label:"Hr",value:"Hr"
            },{
                label:"Junior Hr",value:"Junior Hr"
            }]
        }
    ];

    const employeeTypeOptions = [{
            label:'Office',
            value:"Office"
        },{
            label:"Hybrid",
            value:"Hybrid"
        },{
            label:"Work From Home",
            value:"Work From Home"
        }];

    const employeeStatusOptions = [{
            label:'Permenent',
            value:"Permenent"
        },{
            label:"Contract",
            value:"Contract"
        },{
            label:"Intern",
            value:"Intern"
        }];
    
    const navigate = useNavigate();

    const HandleChange = ({target:{ name , value }})=>{
        setEmployee(prev=>({
            ...prev,
            [name]:value
        }))
    }

    const HandleSubmit = async()=>{
        try {

            const formdata = new FormData();
            for (const [key , value] of Object.entries(employee)) {
                formdata.append(key,value);
            }
            const response = await axios.patchForm(import.meta.env.VITE_SERVER_URL,formdata);
            if(response.status === 200){
                alert(response.data);
                navigate('/');
            }else{
                throw new Error(response.data);
            }
        } catch (error) {
            alert("Error!!!! check console :(");
            console.log(error?.response?.data?.errors || error?.response?.data);
        }
    }

    return (
        <section id='AddEmp' className='p-7 w-[80%] h-[100vh]'>
            <section id='AddEmpHeader' className='text-2xl flex items-center gap-3 font-semibold'>
                <IoArrowBackOutline onClick={()=>{
                    navigate(-1);
                }} cursor={'pointer'}/>
                <p>Edit Employee Details</p>
            </section>
            <section id='EmployeeDetails' className='pt-5'>
                <section id="EmployeeDetailsHeader" className='flex items-end'>
                    <p className='flex items-center gap-3 pb-2 text-blue-600 w-max font-semibold border-b-2'>
                        <IoPersonSharp/>
                        Personal Information
                    </p>
                    <span className='border-b w-[70%]'></span>
                </section>
                <section id="EmployeeDetail" className='pt-8'>
                    <section className="flex gap-4 relative">
                        <section id="EmpImg" className='h-25 w-25 rounded-xl border border-gray-400 border-double'>
                            {
                                ( employee.employeePic === "") ?
                                <p className="text-xs text-center mt-8">No photo chosen</p>
                                :
                                <img src={employee.employeePic instanceof File ? URL.createObjectURL(employee.employeePic) : employee.employeePic} alt="pfp" className='rounded-xl h-full w-full object-cover'/>
                            }
                        </section>
                        <section className="absolute inset-y-[72%] inset flex items-center">
                            <input type="file" name="empPfp" id="empPfp" accept="image/*" onChange={(e)=>{
                                if(e.target.files){
                                    setEmployee(prev=>({
                                        ...prev,
                                        employeePic:e.target.files[0]
                                    }))
                                }
                            }} className="cursor-pointer relative border w-25 hidden"/>
                            <label htmlFor="empPfp"className=" bg-blue-600 absolute left-15 flex items-center justify-cennter rounded-full p-2">
                                <HiOutlinePencilSquare className="" fontSize={16} color="white"/>
                            </label>
                        </section>
                    </section>
                    <section id="EmpData" className='pt-5 flex flex-col gap-2'>
                        <section id="EmpBasicDetails" className='flex w-full'>
                            <section id="name" className='w-1/2'>
                                <label className='text-sm font-medium'>Name*</label>
                                <input type="text" name="name" className="border border-gray-300 border-double rounded-lg p-3 text-sm w-11/12 font-light mt-2" 
                                placeholder="Enter name" value={employee.name} onChange={HandleChange}/>
                            </section>
                            <section id="id" className="w-1/2">
                                <label className='text-sm font-medium'>Employee ID*</label>
                                <input type="text" name="id" className="border border-gray-300 border-double rounded-lg p-3 text-sm w-11/12 font-light mt-2 cursor-not-allowed" 
                                placeholder="Enter employee ID" value={employee.id} disabled/>
                            </section>
                        </section>
                        <section id="EmpPosition" className='flex w-full'>
                            <section id="department" className='w-1/2'>
                                <label className='text-sm font-medium mb-2' HtmlFor='department'>Department*</label>
                                <Select 
                                    options={Options}
                                    className="rounded-lg text-sm w-11/12 font-light m-3 ml-0"
                                    placeholder="Select Department"
                                    onChange={(selectedOption)=>{
                                        setEmployee(prev=>({
                                            ...prev,
                                            department:selectedOption.value,
                                            designation:""
                                        }))
                                    }}
                                    value={Options.find(opt=>opt.value === employee.department) || null}
                                />
                            </section>
                            <section id="designation" className="w-1/2">
                                <label className='text-sm font-medium mb-2' Htmlfor='department'>Designation*</label>
                                <Select 
                                    options={Options.find(opt=>opt.value === employee.department)?.designations}
                                    className="rounded-lg text-sm w-11/12 font-light m-3 ml-0"
                                    placeholder="Select designation"
                                    onChange={(selectedOption)=>{
                                        setEmployee(prev=>({
                                            ...prev,
                                            designation:selectedOption.value
                                        }))
                                    }}
                                    value={Options.find(opt=>opt.value === employee.department)?.designations.find(dest=>dest.value === employee.designation) || null}
                                />
                            </section>
                        </section>
                        <section id="EmpProject" className='flex w-full'>
                            <section id="project" className='w-1/2'>
                                <label className='text-sm font-medium'>Project</label>
                                <input type="text" name="project" className="border border-gray-300 border-double rounded-lg p-3 text-sm w-11/12 font-light mt-2" 
                                placeholder="Enter Project" value={employee.project} onChange={HandleChange}/>
                            </section>
                            <section id="type" className="w-1/2">
                                <label className='text-sm font-medium mb-2'>Type*</label>
                                <Select 
                                    options={employeeTypeOptions}
                                    className="rounded-lg text-sm w-11/12 font-light m-3 ml-0"
                                    placeholder="Select Type"
                                    onChange={(selectedOption)=>{
                                        setEmployee(prev=>({
                                            ...prev,
                                            employeeType:selectedOption.value
                                        }))
                                    }}
                                    value={employeeTypeOptions.find(type=>type.value === employee.employeeType)}
                                />
                            </section>
                        </section>
                        <section id="EmpStatus" className='w-1/2'>
                            <label className='text-sm font-medium mb-2'>Status*</label>
                                <Select 
                                    options={employeeStatusOptions}
                                    className="rounded-lg text-sm w-11/12 font-light m-3 ml-0"
                                    placeholder="Select Status"
                                    onChange={(selectedOption)=>{
                                        setEmployee(prev=>({
                                            ...prev,
                                            status:selectedOption.value
                                        }))
                                    }}
                                    value={employeeStatusOptions.find(sts=>sts.value === employee.status)}
                                />
                        </section>
                    </section>
                    <section id="actions" className="ml-auto w-1/4 flex gap-6">
                        <button className="p-3 border-1 rounded-lg my-10 text-sm font-semibold border-gray-300 cursor-pointer" onClick={(e)=>{
                            e.preventDefault();
                            navigate(-1);
                        }}>Cancel</button>
                        <button className="p-3 border-1 rounded-lg my-10 text-sm font-semibold border-blue-500 bg-blue-500 text-white cursor-pointer" onClick={(e)=>{
                            e.preventDefault();
                            HandleSubmit();
                        }}>Update</button>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default EditEmployee;