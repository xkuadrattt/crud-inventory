import { ToastContainer } from "react-toastify";
import { LandingPage } from "./components/page";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <LandingPage />
      <ToastContainer />
    </>
  );
}

export default App;
