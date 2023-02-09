import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../Interfaces/User";
import axios from "axios";
import Navbar from "./Navbar";

const Profile: React.FC = () => {
  const [user, setUser] = useState<User>({
    fname: "",
    lname: "",
    email: "",
  });

  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const url = "http://localhost/YouCode/CineHall_api";

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
    getLoggedInUser();
  }, []);

  const getLoggedInUser = async () => {
    await axios
      .get(`${url}/users/getLoggedInUser/${userId}`)
      .then((res) => {
        setUser(res.data.User);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const updateProfile = async () => {
    await axios
      .put(`${url}/users/update/${userId}`, user)
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-24 px-4">
          <div className="flex items-center justify-center mt-5 md:col-span-2 md:mt-0">
            <form action="" method="">
              <div className="overflow-hidden shadow sm:rounded-md">
                <h1 className="text-center text-2xl p-2">Personal info</h1>
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        id="first-name"
                        onChange={handleChange}
                        value={user?.fname}
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter first name"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lname"
                        value={user?.lname}
                        onChange={handleChange}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter last name"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={user?.email}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter email address"
                      />
                    </div>

                    <div></div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="Hall"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        disabled
                        value={user.role ? "Client" : "Admin"}
                        readOnly
                        autoComplete="hall"
                        className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    onClick={updateProfile}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
