import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import AdminLogin from "./components/Admin/Login";
import Halls from "./components/Admin/Halls";
import Films from "./components/Admin/Films";
import Landing from "./components/Client/Landing";
import FilmsClient from "./components/Client/Films";
import Book from "./components/Client/Book";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/halls" element={<Halls />}></Route>
          <Route path="/films" element={<Films />}></Route>
          <Route path="/availableFilms" element={<FilmsClient />}></Route>
          <Route path="/book" element={<Book />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
