import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/*Container principal*/}
      <div className="bg-background-color mx-auto w-screen h-screen grid max-sm:grid-rows-1 sm:grid-cols-[20%,80%] md:grid-cols-[30%,70%] lg:grid-cols-[20%,80%]">
        {/*Container izquierdo*/}
        <div className="max-sm:hidden ">
          <Sidebar></Sidebar>
        </div>
        {/*Container derecho*/}
        <div className=" overflow-y-scroll overflow-hidden flex flex-col items-center ">
          <Content></Content>
        </div>
      </div>
    </>
  );
}

export default App;
