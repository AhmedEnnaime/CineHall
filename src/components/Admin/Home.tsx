import {
  UsersIcon,
  FilmIcon,
  BuildingLibraryIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users";

type userCount = {
  Users: { total: number };
};

type hallCount = {
  Halls: { total: number };
};

type filmCount = {
  Films: { total: number };
};

type reservationCount = {
  Reservations: { total: number };
};

const Home: React.FC = () => {
  const [usersCount, setUsersCount] = useState<number>();
  const [hallsCount, setHallsCount] = useState<number>();
  const [filmsCount, setFilmsCount] = useState<number>();
  const [reservationsCount, setReservationsCount] = useState<number>();
  const url = "http://localhost/YouCode/CineHall_api";
  useEffect(() => {
    getUserCount();
    getHallCount();
    getFilmCount();
    getReservationCount();
  }, []);

  const getUserCount = async () => {
    await axios
      .get<userCount>(`${url}/users/getUsersCount`)
      .then((res) => {
        setUsersCount(res.data.Users.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getHallCount = async () => {
    await axios
      .get<hallCount>(`${url}/halls/getHallsCount`)
      .then((res) => {
        setHallsCount(res.data.Halls.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilmCount = async () => {
    await axios
      .get<filmCount>(`${url}/films/getFilmsCount`)
      .then((res) => {
        setFilmsCount(res.data.Films.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReservationCount = async () => {
    await axios
      .get<reservationCount>(`${url}/reservations/getReservationsCount`)
      .then((res) => {
        setReservationsCount(res.data.Reservations.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cards = [
    {
      name: "Halls",
      href: "/halls",
      icon: BuildingLibraryIcon,
      amount: hallsCount,
    },
    { name: "Films", href: "#", icon: FilmIcon, amount: filmsCount },
    { name: "Clients", href: "#", icon: UsersIcon, amount: usersCount },
    {
      name: "Reservations",
      href: "#",
      icon: CalendarIcon,
      amount: reservationsCount,
    },
  ];

  return (
    <div className="flex flex-col px-8 mt-12 w-5/6 overflow-y-scroll">
      <div className="px-4 sm:px-6">
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            {/* Profile */}
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                    Good morning, Ahmed Ennaime
                  </h1>
                </div>
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                    <CheckCircleIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                      aria-hidden="true"
                    />
                    Verified account
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="truncate text-sm font-medium text-gray-500">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {card.amount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a
                      href={card.href}
                      className="font-medium text-cyan-700 hover:text-cyan-900"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Users />
    </div>
  );
};

export default Home;
