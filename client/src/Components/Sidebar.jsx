import { useState } from 'react';
import { IoGrid , IoPeopleSharp , IoCalendarSharp , IoChatboxEllipsesOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

const Sidebar = ()=>{
    const [currentTab,setCurrentTab] = useState('Employee');
    const { pathname } = useLocation();
    const tabs = [{
        icon:<IoGrid color={`${currentTab === 'Dashboard' ? "white" : "gray"}`}/>,
        value:"Dashboard"
    },{
        icon:<IoPeopleSharp color={`${currentTab === 'Employee' ? "white" : "gray"}`}/>,
        value:"Employee"
    },{
        icon:<IoCalendarSharp color={`${currentTab === 'Calendar' ? "white" : "gray"}`}/>,
        value:"Calendar"
    },{
        icon:<IoChatboxEllipsesOutline color={`${currentTab === 'Messages' ? "white" : "gray"}`}/>,
        value:"Messages"
    }];


    return(
        <section className={`w-[20%] ${ pathname != '/' ? "h-[100vh]" : 'h-full'} border-r-1 border-gray-300`}>
            <section className="h-full flex flex-col pt-6 w-full gap-3">
                {
                    tabs.map(tab=>(
                        <button className={`flex items-center gap-5 p-3 pl-7 w-[90%] rounded-r-full cursor-pointer ${tab.value === currentTab ? 'bg-blue-500' : ""} transition-colors transition-discrete`} onClick={(e)=>{
                            e.preventDefault();
                            setCurrentTab(tab.value);
                        }}>
                            {tab.icon}
                            <p className={`text-sm font-[400] ${tab.value === currentTab ? "text-white" : "text-gray-400"}`}>
                                {tab.value}</p>
                        </button >        
                    ))
                }
            </section>
        </section>
    )
}

export default Sidebar;