import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
