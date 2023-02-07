import logo from "../../assets/logo.png";
import {
  CalendarIcon,
  ArrowRightOnRectangleIcon,
  FilmIcon,
  HomeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../../Interfaces/User";
import { useState, useEffect } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SideBar: React.FC = () => {
  const url = "http://localhost/YouCode/CineHall_api";
  const navigate = useNavigate();
  const [admin, setAdmin] = useState<User>();
  const adminId = sessionStorage.getItem("adminId");

  useEffect(() => {
    getLoggedAdmin();
  }, []);

  const logout = async () => {
    await axios
      .post(`${url}/authenticate/logout`)
      .then((res) => {
        console.log(res.data);
        if (res.data === "logged out successfully") {
          sessionStorage.removeItem("isLoggedIn");
          sessionStorage.clear();
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLoggedAdmin = async () => {
    await axios
      .get(`${url}/users/getLoggedInAdmin/${adminId}`)
      .then((res) => {
        setAdmin(res.data.Admin);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigation = [
    { name: "Home", icon: HomeIcon, href: "/dashboard" },
    { name: "Halls", icon: BuildingLibraryIcon, href: "/halls" },
    { name: "Films", icon: FilmIcon, href: "/films" },
    { name: "Reservations", icon: CalendarIcon, href: "/reservations" },
    {
      name: "Logout",
      icon: ArrowRightOnRectangleIcon,
      href: "#",
      onclick: { logout },
    },
  ];
  return (
    <div className="flex h-screen flex-1 flex-col bg-indigo-700 w-1/6 fixed">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img className="" src={logo} alt="Company" />
        </div>
        <nav className="mt-6 flex-1 space-y-12 px-4" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              className={classNames(
                "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
              key={item.name}
              to={item.href}
              onClick={() => {
                item.onclick;
              }}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                aria-hidden="true"
              />

              <span className="flex-1">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">
                {admin?.fname} {admin?.lname}
              </p>
              <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
