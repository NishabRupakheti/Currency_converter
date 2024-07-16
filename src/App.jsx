import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ContextProvider } from "./Store/ContextProvider";


function App() {
  return (
    <div className="container app-container rounded p-3  w-100 w-md-75 ">
      <ContextProvider>
        <Header />
        <Main />
      </ContextProvider>
    </div>
  );
}

export default App;
