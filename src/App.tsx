import { Route, Routes } from "react-router";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { CssBaseline } from "@mui/material";
import { Navbar } from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ReservationForm from "./components/Forms/ReservationForm";
import ApplicationForm from "./components/Forms/ApplicationForm";

// const ROUTES = ["about"];

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
