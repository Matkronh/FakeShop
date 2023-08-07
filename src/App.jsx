import Layout from "./Layout/Layout"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Landing from "./routes/Landing";
import Hats from "./routes/Hats";
import Shirts from "./routes/Shirts";
import Pants from "./routes/Pants";
import Shoes from "./routes/Shoes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/fakeshop" element={<Layout />}>
            <Route
              index
              element={<Landing/>}
            />
            <Route path="hats" element={<Hats />} />
            <Route path="shirts" element={<Shirts />} />
            <Route path="pants" element={<Pants />} />
            <Route path="shoes" element={<Shoes />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer position="top-left" />
    </>
  );
}

export default App;
