import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import SignUp from "./pages/signUp";
import LoginForm from "./components/loginForm/login";
import ResetPassword from "./components/resetForm/reset";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="log-in" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
