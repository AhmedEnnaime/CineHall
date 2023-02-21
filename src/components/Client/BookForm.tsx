import { useContext, useState } from "react";
import FilmContext from "../../context/FilmContext";
import IReservation from "../../Interfaces/Reservation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Seats = {
  num: Array<number>;
};

const BookForm = ({ num }: Seats) => {
  const [film] = useContext(FilmContext);
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    num: num,
  });
  const url = "http://localhost/YouCode/CineHall_api";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const obj = { num: num };

  Object.assign(bookInfo, obj);
  console.log(bookInfo);

  const book = async () => {
    await axios
      .post(`${url}/reservations/takeReservation/${film?.id}`, bookInfo)
      .then((res) => {
        if (res.status === 200) {
          navigate("/availableFilms");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-10 sm:mt-0 w-1/2 flex items-center justify-center">
      <div className="md:grid md:grid-cols-3 md:gap-6 mt-24 px-4">
        <div className="mt-5 md:col-span-2 md:mt-0">
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
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div></div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={film?.date}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={film?.time}
                      readOnly
                      id="time"
                      autoComplete="address-level1"
                      className="mt-1 block w-full rounded-md border-gray-400 border-2 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="Hall"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hall
                    </label>
                    <input
                      type="text"
                      name="hall"
                      id="hall"
                      value={film?.hall}
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
                  onClick={book}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
