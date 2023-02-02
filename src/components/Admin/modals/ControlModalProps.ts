import Hall from "../../../Interfaces/Hall";

export type ControlModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ControlFailModalProps = {
  fail: boolean;
  setFail: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ControlUpdateModalProps = {
  updateOpen: boolean;
  setUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hall: Hall | undefined;
};
