import Navbar from "./Navbar";
import poster from "../../assets/poster.jpeg";
import FilmContext from "../../context/FilmContext";
import { useContext, useState, useEffect } from "react";
import Film from "../../Interfaces/Film";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Films: React.FC = () => {
  const [_, setFilm] = useContext(FilmContext);
  const [films, setFilms] = useState<Film[]>();
  const url = "http://localhost/YouCode/CineHall_api";
  const navigate = useNavigate();

  useEffect(() => {
    getFilms();
  }, []);

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
  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center mt-12">Films available</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-center px-4 pt-28 pb-8">
        {films
          ? films.map((flm, key) => (
              <div key={key} className="flex flex-col items-center gap-y-2">
                <h2 className="text-2xl p-2">{flm.title}</h2>
                <img className="rounded-lg w-64" src={poster} alt="" />
                <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
                  <div className="flex items-center gap-x-2">
                    <i className="fa-sharp fa-solid fa-calendar-days"></i>
                    <p>{flm.date}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <i className="fa-sharp fa-solid fa-clock"></i>
                    <p>{flm.time}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFilm(flm);
                    navigate("/book");
                  }}
                  className="p-2 w-32 rounded-lg bg-green-400"
                >
                  Book
                </button>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Films;
