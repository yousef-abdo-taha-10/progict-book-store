import logo from "./logo.svg";
import "./App.css";
import Books from "./components/Books";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksDetails from "./components/BooksDetails";
import Data from "./components/Data";
function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/data" element={<Data />} />
          <Route path="/details/:DetailsID" element={<BooksDetails />} />
        </Routes>
   
    </div>
  );
}

export default App;
