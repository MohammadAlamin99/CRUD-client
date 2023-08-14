import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Update from "../src/pages/Update";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Read></Read>} path="/"></Route>
            <Route element={<Create></Create>} path="/create"></Route>
            <Route element={<Update></Update>} path="/update/:id"></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;