import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../../Interfaces/User";
import IReservation from "../../Interfaces/Reservation";
import not_found from "../../assets/undraw_no_data_re_kwbl (2).svg";
import { useNavigate } from "react-router-dom";

const MyReservations: React.FC = () => {
  const url = "http://localhost/YouCode/CineHall_api";
  const [user, setUser] = useState<User>();
  const userId = sessionStorage.getItem("userId");
  const [myReservations, setMyReservations] = useState<IReservation[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("userId")) {
      navigate("/");
    }
    getLoggedInUser();
    getMyReservations();
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

  const getMyReservations = async () => {
    await axios
      .get(`${url}/reservations/getUserReservation/${user?.key}`)
      .then((res) => {
        setMyReservations(res.data.Reservations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancelReservation = async (id: number) => {
    await axios
      .delete(`${url}/reservations/cancelReservation/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.status === 202) {
          navigate("/myReservations");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col gap-y-8 mt-10">
        <h1 className="text-center text-4xl bg-gray-100 rounded-sm p-4 md:w-1/2">
          My Reservations
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 justify-center px-4 pt-12 pb-8 md:w-1/2">
          {myReservations ? (
            myReservations.map((myReservation, key) => (
              <div
                key={key}
                className="flex flex-col md:flex-row justify-between items-center p-4 rounded-md bg-gray-200 w-full"
              >
                <div className="flex flex-col items-center px-4">
                  <h2 className="pb-4">
                    {myReservation.fname} {myReservation.lname}
                  </h2>
                  <div className="flex gap-x-12">
                    <div className="flex items-center gap-x-2">
                      <i className="fa-sharp fa-solid fa-film"></i>
                      <p>{myReservation.film_title}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <i className="fa-sharp fa-solid fa-building-columns"></i>
                      <p>{myReservation.hall_name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center">
                  <div className="flex justify-end">
                    {myReservation.reservation_date ? (
                      new Date(myReservation.reservation_date).getTime() >
                      new Date().getTime() ? (
                        <button
                          className=""
                          onClick={() => {
                            cancelReservation(myReservation.id);
                          }}
                        >
                          <i className="fa-sharp fa-solid fa-xmark text-2xl translate-x-24"></i>
                        </button>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex px-4 gap-x-4 items-center">
                    <div className="flex items-center gap-x-2">
                      <i className="fa-sharp fa-solid fa-calendar-days"></i>
                      <p>{myReservation.reservation_date}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <i className="fa-sharp fa-solid fa-clock"></i>
                      <p>{myReservation.reservation_time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <img src={not_found} alt="" />
          )}
        </div>
      </div>
    </>
  );
};

export default MyReservations;
