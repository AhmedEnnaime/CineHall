import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { ControlModalProps } from "./ControlModalProps";
import axios from "axios";
import Hall from "../../../Interfaces/Hall";
import { useState } from "react";

const HallModal = ({ open, setOpen, hall, setHall }: ControlModalProps) => {
  const cancelButtonRef = useRef(null);
  const [inputs, setInputs] = useState<Hall>({
    name: "",
    capacity: 0,
  });

  const url = "http://localhost/YouCode/CineHall_api";
  // const { name, capacity } = inputs;

  const handleAddChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHall
      ? setHall((prevState: any) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      : "";
  };

  const handleAddSubmit = async (e: React.FormEvent<EventTarget>) => {
    console.log(inputs);

    e.preventDefault();
    await axios
      .post<Hall>(`${url}/halls/createHalls`, inputs)
      .then((res) => {
        if (res.status === 201) {
          setOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateSubmit = async (
    e: React.FormEvent<EventTarget>,
    id: number
  ) => {
    e.preventDefault();
    await axios
      .post<Hall>(`${url}/halls/updateHall/${id}`, hall)
      .then((res) => {
        if (res.status === 200) {
          setOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <BuildingLibraryIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Fill hall's information
                    </Dialog.Title>
                    {!hall ? (
                      <form className="flex flex-col items-center mt-4">
                        <div className="text-left w-full">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              value={inputs?.name}
                              onChange={handleAddChange}
                              id="name"
                              className="block px-4 w-full h-8 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter hall's name"
                            />
                          </div>
                        </div>

                        <div className="text-left w-full mt-4">
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Capacity
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="capacity"
                              value={inputs?.capacity}
                              onChange={handleAddChange}
                              id="capacity"
                              className="block w-full px-4 h-8 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter hall's name"
                            />
                          </div>
                        </div>
                      </form>
                    ) : (
                      <form className="flex flex-col items-center mt-4">
                        <div className="text-left w-full">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              value={hall.name}
                              onChange={handleChange}
                              id="name"
                              className="block px-4 w-full h-8 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter hall's name"
                            />
                          </div>
                        </div>

                        <div className="text-left w-full mt-4">
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Capacity
                          </label>
                          <div className="mt-1">
                            <input
                              type="number"
                              name="capacity"
                              value={hall.capacity}
                              onChange={handleChange}
                              id="capacity"
                              className="block w-full px-4 h-8 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Enter hall's name"
                            />
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  {hall?.id ? (
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={(e) => {
                        handleUpdateSubmit(e, hall?.id as number);
                      }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={handleAddSubmit}
                    >
                      Add
                    </button>
                  )}

                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HallModal;
