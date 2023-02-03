import SideBar from "./SideBar";
import Home from "./Home";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/admin");
    }
  }, []);
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
