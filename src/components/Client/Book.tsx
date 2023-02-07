import BookForm from "./BookForm";
import Navbar from "./Navbar";
import FilmContext from "../../context/FilmContext";
import { useContext, useState, useEffect } from "react";
import Hall from "../../Interfaces/Hall";
import axios from "axios";
import seat_img from "../../assets/icons8-seat-64.png";
import IReservation from "../../Interfaces/Reservation";

const Book: React.FC = () => {
  const [film] = useContext(FilmContext);
  const [hall, setHall] = useState<Hall>();
  const [checked, setChecked] = useState(false);
  const [reservations, setReservations] = useState<IReservation>();
  const url = "http://localhost/YouCode/CineHall_api";

  useEffect(() => {
    getHall(film?.hall_id as number);
    getReservations();
  }, []);

  const getCapacityHall = () => {
    const seats: Array<number> = [];
    for (let i = 1; i <= hall?.capacity; i++) {
      seats.push(i);
    }
    return seats;
  };
  console.log(getCapacityHall());
  const getReservations = async () => {
    await axios
      .get(`${url}/reservations/getReservations`)
      .then((res) => {
        setReservations(res.data.Reservations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getHall = async (id: number) => {
    await axios
      .get(`${url}/halls/getHallById/${id}`)
      .then((res) => {
        setHall(res.data.Hall);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <BookForm />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-center px-4 pt-28 pb-8">
          <>
            {getCapacityHall()
              ? getCapacityHall().map((seat, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer items-center gap-y-2"
                  >
                    <img className="" src={seat_img} alt="" />
                    <p>{seat}</p>
                  </div>
                ))
              : "Noo"}
          </>
        </div>
      </div>
    </>
  );
};

export default Book;
