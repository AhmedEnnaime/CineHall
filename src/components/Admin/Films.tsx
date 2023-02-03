import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import FilmModal from "./modals/FilmModal";
import not_found from "../../assets/undraw_no_data_re_kwbl (2).svg";
import axios from "axios";
import Film from "../../Interfaces/Film";
import { useNavigate } from "react-router-dom";

const Films: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [films, setFilms] = useState<Film[]>();
  const [film, setFilm] = useState<Film>();
  const url = "http://localhost/YouCode/CineHall_api";
  const navigate = useNavigate();

  useEffect(() => {
    getFilms();
  }, []);

  const getFilm = async (id: number) => {
    await axios
      .get(`${url}/films/getFilmById/${id}`)
      .then((res) => {
        setFilm(res.data.Film);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilms = async () => {
    await axios
      .get(`${url}/films`)
      .then((res) => {
        setFilms(res.data.Films);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFilm = async (id: number) => {
    await axios
      .delete(`${url}/films/deleteFilms/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.status === 202) {
          navigate("/films");
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
              <h1 className="text-xl font-semibold text-gray-900">Films</h1>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                onClick={() => {
                  setFilm(undefined);
                  setOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add film
              </button>
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
                          Title
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
                      {films?.length ? (
                        films.map((film, key) => (
                          <tr key={key}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {film.title}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {film.date}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {film.time}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {film.hall}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button
                                onClick={() => {
                                  getFilm(film.id as number);
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
                                  deleteFilm(film.id as number);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <img className="" src={not_found} alt="" />
                      )}
                    </tbody>
                  </table>
                  {open ? (
                    <FilmModal open={open} setOpen={setOpen} film={film} />
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

export default Films;
