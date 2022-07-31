import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<></>}>
          <Route path="add" element={<></>} />
          <Route path="detail/:id" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
