import { IoSettingsOutline , IoNotificationsOutline } from "react-icons/io5";

const Nav = ()=>{
    return (
        <nav className="flex w-full justify-between border-1 border-gray-300">
            <section id="Logo" className="border-r-1 border-gray-300 w-[20%] p-5">
                <p className="font-bold text-blue-500 text-2xl">RS-TECH</p>
            </section>
            <section id="actions" className="p-5">
                <ul className="flex gap-3">
                    <li className="w-8 h-8 bg-gray-300 grid place-content-center rounded-full cursor-pointer">
                        <IoSettingsOutline/>
                    </li>
                    <li className="w-8 h-8 bg-gray-300 grid place-content-center rounded-full cursor-pointer">
                        <IoNotificationsOutline/>
                    </li>
                    <li className="cursor-pointer">
                        <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="pfp" className="w-8 h-8 rounded-full object-cover"/>
                    </li>
                </ul>
            </section>
        </nav>
    )
};

export default Nav;