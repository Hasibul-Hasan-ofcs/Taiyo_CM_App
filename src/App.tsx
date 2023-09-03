import { useContext } from "react";
import "./App.css";
import Drawer from "./components/darwer/Darwer";
import CharsParticle from "./components/particles/CharsParticle";
import { CgMenuRight } from "react-icons/cg";
import { MainContext } from "./providers/ContextProvider";
import { useLocation, Outlet } from "react-router-dom";

function App() {
  const contextData = useContext(MainContext);
  let setSideBarActiveData = contextData?.setSideBarActive;

  const location = useLocation();

  return (
    <div className="App box-border overflow-hidden">
      <div className="min-h-screen min-w-full flex flex-col">
        <div className="relative box-border w-full h-40">
          <button
            className="border border-white text-white p-4 rounded-lg shadow-md absolute top-[2%] right-[2%] block lg:hidden"
            onClick={() => setSideBarActiveData && setSideBarActiveData(true)}
          >
            <CgMenuRight></CgMenuRight>
          </button>
          <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold z-10">
            {location.pathname == "/" ? "Contacts" : "Charts and Maps"}
          </h3>
          <div className="sticky">
            <CharsParticle></CharsParticle>
          </div>
        </div>

        <div className="flex">
          <div className="w-0 lg:w-1/4">{<Drawer></Drawer>}</div>
          <div className="w-full lg:w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
