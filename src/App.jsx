import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ContextProvider } from "./Store/ContextProvider";
import Footer from "./Components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="app-container">
      <ContextProvider>
        <Header />
        <Main />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
