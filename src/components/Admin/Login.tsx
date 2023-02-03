import logo from "../../assets/logo.png";
import bg_img from "../../assets/img_bg.jpg";
import axios from "axios";
import { useState } from "react";
import { UserLog } from "../../Interfaces/User";
import { useNavigate } from "react-router-dom";
import useSessionStorage from "../../Custom hooks/useSessionStorage";
import { useEffect } from "react";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useSessionStorage("isLoggedIn", "");
  const [credentials, setCredentials] = useState<UserLog>({
    email: "",
    password: "",
  });
  const url = "http://localhost/YouCode/CineHall_api";
  const { email, password } = credentials;

  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn")) {
      navigate("/dashboard");
    }
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const login = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    await axios
      .post(`${url}/authenticate`, credentials)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Access allowed") {
          if (window.sessionStorage["isLoggedIn"]) {
            window.sessionStorage.setItem("isLoggedIn", "");
            setLoggedIn("Authenticated");
            navigate("/dashboard");
          } else {
            setLoggedIn("Authenticated");
            navigate("/dashboard");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-1/2 w-1/2" src={logo} alt="Your Company" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Enter password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={login}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className="flex items-center justify-center mt-8">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      You're a client click here to check your reservations?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bg_img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
