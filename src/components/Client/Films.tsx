import Navbar from "./Navbar";
import poster from "../../assets/poster.jpeg";

const Films: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center mt-12">Films available</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-center px-4 pt-28 pb-8">
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-2xl p-2">One piece Red</h2>
          <img className="rounded-lg w-64" src={poster} alt="" />
          <div className="flex items-center gap-x-2 w-3/4 pb-2 justify-between">
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-calendar-days"></i>
              <p>2023-02-12</p>
            </div>
            <div className="flex items-center gap-x-2">
              <i className="fa-sharp fa-solid fa-clock"></i>
              <p>22:00</p>
            </div>
          </div>

          <button className="p-2 w-32 rounded-lg bg-green-400">Book</button>
        </div>
      </div>
    </>
  );
};

export default Films;
