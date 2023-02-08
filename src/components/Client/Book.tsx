import BookForm from "./BookForm";
import Navbar from "./Navbar";
import FilmContext from "../../context/FilmContext";
import { useContext, useState, useEffect } from "react";
import Hall from "../../Interfaces/Hall";
import axios from "axios";
import { MdChair } from "react-icons/md";
import IReservation from "../../Interfaces/Reservation";

const Book: React.FC = () => {
  const [film] = useContext(FilmContext);
  const [hall, setHall] = useState<Hall>();
  const [checked, setChecked] = useState("text-black");
  const [reservations, setReservations] = useState<IReservation[]>();
  const url = "http://localhost/YouCode/CineHall_api";

  useEffect(() => {
    getHall(film?.hall_id as number);
    getReservations();
  }, []);

  const getCapacityHall = () => {
    const seats: Array<number> = [];
    if (hall?.capacity) {
      for (let i = 1; i <= hall?.capacity; i++) {
        seats.push(i);
      }
    }

    return seats;
  };

  const getSelectedSeats = () => {
    const chairs = document.querySelectorAll(".seat");
    const num: Array<number> = [];
    for (let chair of chairs) {
      const seat_num = chair.nextSibling?.textContent;

      if (chair.classList.contains("text-green-500")) {
        seat_num ? num.push(+seat_num) : "";
      }
    }
    return num;
  };

  const getReservations = async () => {
    await axios
      .get(`${url}/reservations/getReservations/${film?.id}`)
      .then((res) => {
        console.log(res.data.Reservations);
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

  const getReservedSeats = (
    seat: number,
    e: React.ChangeEvent<HTMLButtonElement>
  ) => {
    reservations?.map((reservation, key) => {
      if (reservation.seat_num === seat) {
        e.currentTarget.disabled = true;
        return true;
      } else {
        return false;
      }
    });
  };

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  // const getReservedSeats = () => {
  //   const chairs = document.querySelectorAll(".seat");
  //   getSelectedSeats().map((seat, key) => {
  //     reservations?.map((reservation, key) => {
  //       if (seat === reservation.seat_num) {
  //         for (let chair of chairs) {
  //           chair.classList.add("text-red-500");
  //           // chair.setAttribute("disabled", true);
  //         }
  //       }
  //     });
  //   });
  // };

  return (
    <>
      <Navbar />
      <div className="flex">
        <BookForm />
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center px-4 pt-28 pb-8">
          <>
            {getCapacityHall()
              ? getCapacityHall().map((seat, key) => (
                  <div
                    key={key}
                    className="flex flex-col cursor-pointer items-center gap-y-2 w-24"
                  >
                    <button
                      className={classNames(
                        getReservedSeats(seat, e)
                          ? "text-4xl text-red-500 seat"
                          : "text-4xl seat"
                      )}
                      onClick={(e) => {
                        e.currentTarget.classList.toggle("text-green-500");
                      }}
                    >
                      <MdChair />
                    </button>

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
