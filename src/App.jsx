import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ContextProvider } from "./Store/ContextProvider";
import Footer from "./Components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { IoSettingsOutline } from "react-icons/io5";



function App() {
  return (
    <div className="container app-container rounded p-3  w-100 w-md-75 ">
      <ContextProvider>
        <Header />
        <Main />
        <Footer/>
      </ContextProvider>
    </div>
  );
}

export default App;
