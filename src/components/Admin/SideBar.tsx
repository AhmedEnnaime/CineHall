const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 w-1/6 bg-red-400 h-screen">
      <ul className="flex flex-col gap-y-16 justify-start p-24">
        <li className="flex flex-row items-center gap-x-4 cursor-pointer px-12 rounded-lg py-2 hover:bg-blue-100">
          <i className="fa-sharp fa-solid fa-house"></i>
          <p>Home</p>
        </li>
        <li className="flex flex-row items-center gap-x-4 cursor-pointer px-12 rounded-lg py-2 hover:bg-blue-100">
          <i className="fa-sharp fa-solid fa-film"></i>
          <p>Films</p>
        </li>
        <li className="flex flex-row items-center gap-x-4 cursor-pointer px-12 rounded-lg py-2 hover:bg-blue-100">
          <i className="fa-sharp fa-solid fa-landmark"></i>
          <p>Halls</p>
        </li>
        <li className="flex flex-row items-center gap-x-4 cursor-pointer px-12 rounded-lg py-2 hover:bg-blue-100">
          <i className="fa-sharp fa-solid fa-registered"></i>
          <p>Reservations</p>
        </li>

        <li className="flex flex-row items-center gap-x-4 cursor-pointer px-12 rounded-lg py-2 hover:bg-blue-100">
          <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
