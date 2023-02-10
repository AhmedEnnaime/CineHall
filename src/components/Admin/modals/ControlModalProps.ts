import Hall from "../../../Interfaces/Hall";
import Film from "../../../Interfaces/Film";

export type ControlModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hall?: Hall;
  setHall?: React.Dispatch<React.SetStateAction<Hall>>;
};

export type ControlFailModalProps = {
  fail: boolean;
  setFail: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ControlFilmModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  film?: Film | undefined;
  setFilm?: React.Dispatch<React.SetStateAction<Film>>;
};

export type ControlBookFormProps = {
  id: number;
};
