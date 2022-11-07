import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data/data.json";
import { Outlet } from "react-router-dom";

export const loader = () => {
  return data;
};

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-screen bg-gray-200">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
