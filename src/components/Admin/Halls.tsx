import SideBar from "./SideBar";
import Hall from "../../Interfaces/Hall";
import { useState, useEffect } from "react";
import axios from "axios";

const Halls: React.FC = () => {
  const [halls, setHalls] = useState<Hall[]>();
  const url = "http://localhost/YouCode/CineHall_api";

  useEffect(() => {
    getHalls();
  }, []);
  const getHalls = async () => {
    await axios
      .get(`${url}/halls`)
      .then((res) => {
        console.log(res.data.Halls);
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
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add hall
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow md:rounded-lg">
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
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                              </a>
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <a
                                href="#"
                                className="text-red-500 hover:text-red-600"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h1>No hall found</h1>
                      )}
                    </tbody>
                  </table>
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
