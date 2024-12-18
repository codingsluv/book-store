import { Outlet } from "react-router";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-primary">
        <Outlet />
      </main>
    <Footer />
    </>
  )
}