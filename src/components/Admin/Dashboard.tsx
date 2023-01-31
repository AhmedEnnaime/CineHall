import SideBar from "./SideBar";
import Home from "./Home";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <SideBar />
      <div className="bg-red-400">
        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
