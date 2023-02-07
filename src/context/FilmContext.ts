import { createContext } from "react";
import Film from "../Interfaces/Film";

const FilmContext = createContext<[Film | null, (film: Film | null) => void]>([
  {
    id: 1337,
    title: "",
    hall_id: 0,
    date: "",
    time: "",
    hall: "",
  },
  () => {},
]);

export default FilmContext;
