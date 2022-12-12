import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./Components/Userpage/userpage";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Router>
        <div className="container bg-slate-300">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
