import SideBar from "./SideBar";
import not_found from "../../assets/undraw_no_data_re_kwbl (2).svg";
import { useState, useEffect } from "react";
import IReservation from "../../Interfaces/Reservation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reservations: React.FC = () => {
  const [reservations, setReservations] = useState<IReservation[]>();
  const url = "http://localhost/YouCode/CineHall_api";
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/admin");
    }
    getReservations();
  }, []);

  const getReservations = async () => {
    await axios
      .get(`${url}/reservations`)
      .then((res) => {
        setReservations(res.data.Reservations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteReservation = async (id: number) => {
    await axios
      .delete(`${url}/reservations/cancelReservation/${id}`)
      .then((res) => {
        if (res.status === 202) {
          navigate("/reservations");
        }
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
              <h1 className="text-xl font-semibold text-gray-900">
                Reservations
              </h1>
            </div>
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
                          Name of client
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Film
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Date
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Time
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Hall
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
                      {reservations?.length ? (
                        reservations.map((reservation, key) => (
                          <tr key={key}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {reservation.fname} {reservation.lname}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {reservation.film_title}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {reservation.reservation_date}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {reservation.reservation_time}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {reservation.hall_name}
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button
                                className="text-red-500 hover:text-red-600"
                                onClick={() => {
                                  deleteReservation(reservation.id);
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
