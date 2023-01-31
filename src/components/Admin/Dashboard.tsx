import SideBar from "./SideBar";
import Home from "./Home";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        <SideBar />
      </div>
      <Home />
    </div>
  );
};

export default Dashboard;
