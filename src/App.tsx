import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import AdminLogin from "./components/Admin/Login";
import Halls from "./components/Admin/Halls";
import Films from "./components/Admin/Films";
import Landing from "./components/Client/Landing";
import FilmsClient from "./components/Client/Films";
import Book from "./components/Client/Book";
import "./index.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FilmContext from "./context/FilmContext";
import Film from "./Interfaces/Film";
import Reservations from "./components/Admin/Reservations";
import MyReservations from "./components/Client/MyReservations";
import Profile from "./components/Client/Profile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const film = useState(null as Film | null);
  return (
    <div className="App">
      <BrowserRouter>
        <FilmContext.Provider value={film}>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/admin" element={<AdminLogin />}></Route>
              <Route path="/halls" element={<Halls />}></Route>
              <Route path="/films" element={<Films />}></Route>
              <Route path="/reservations" element={<Reservations />}></Route>
              <Route path="/availableFilms" element={<FilmsClient />}></Route>
              <Route path="/book" element={<Book />}></Route>
              <Route
                path="/myReservations"
                element={<MyReservations />}
              ></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </QueryClientProvider>
        </FilmContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
