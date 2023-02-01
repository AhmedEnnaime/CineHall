import SideBar from "./SideBar";
import Home from "./Home";

const Dashboard: React.FC = () => {
  return (
    <>
      <SideBar />
      <div className="flex flex-row justify-end">
        <Home />
      </div>
    </>
  );
};

export default Dashboard;
