import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import EmployeeTable from "./Pages/EmployeeTable";
import ViewEmployee from "./Pages/ViewEmployee";
import AddEmployee from "./Pages/AddEmployee";
import EditEmployee from "./Pages/EditEmployee";

function App() {
  return (
    <>
      <Nav/>
      <section className="w-full h-[80vh] flex">
        <Sidebar/>
        <Routes>
          <Route path="/">
            <Route index element={<EmployeeTable/>}/>
            <Route path="employee/view" element={<ViewEmployee/>}/>
            <Route path="employee/add" element={<AddEmployee/>}/>
            <Route path="employee/edit" element={<EditEmployee/>}/>
          </Route>
        </Routes>
      </section>
    </>
  )
}

export default App
