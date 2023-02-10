import SideBar from "./SideBar";
import Hall from "../../Interfaces/Hall";
import { useState, useEffect } from "react";
import axios from "axios";
import not_found from "../../assets/undraw_no_data_re_kwbl (2).svg";
import HallModal from "./modals/HallModal";
import FailedModal from "../helpers/FailedModal";
import { useNavigate } from "react-router-dom";

const Halls: React.FC = () => {
  const [halls, setHalls] = useState<Hall[]>();
  const [hall, setHall] = useState<Hall>({
    name: "",
    capacity: 0,
  });
  const url = "http://localhost/YouCode/CineHall_api";
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/admin");
    }
    getHalls();
  }, []);

  const getHall = async (id: number) => {
    await axios
      .get(`${url}/halls/getHallById/${id}`)
      .then((res) => {
        console.log(res.data.Hall);
        setHall(res.data.Hall);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHall = async (id: number) => {
    await axios
      .delete(`${url}/halls/deleteHalls/${id}`)
      .then((res) => {
        if (res.status === 202) {
          navigate("/halls");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getHalls = async () => {
    await axios
      .get(`${url}/halls`)
      .then((res) => {
        setHalls(res.data.Halls);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SideBar />
      <div className="flex pr-8 justify-end overflow-y-scroll">
        <div className="sm:px-6 lg:px-8 px-8 mt-12 w-3/4">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Halls</h1>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                onClick={() => {
                  setHall({ name: "", capacity: 0 });
                  setOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add hall
              </button>
            </div>
            {/* {fail ? <FailedModal fail={fail} setFail={setFail} /> : ""} */}
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Capacity
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Delete</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {halls?.length ? (
                        halls.map((hall, key) => (
                          <tr key={key}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {hall.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {hall.capacity}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button
                                onClick={() => {
                                  getHall(hall.id as number);
                                  setOpen(true);
                                }}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                              </button>
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button
                                className="text-red-500 hover:text-red-600"
                                onClick={() => {
                                  deleteHall(hall.id as number);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            <img className="" src={not_found} alt="" />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  {open ? (
                    <HallModal
                      open={open}
                      setOpen={setOpen}
                      hall={hall}
                      setHall={setHall}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Halls;
