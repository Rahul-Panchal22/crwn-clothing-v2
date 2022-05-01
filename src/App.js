import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authenticate from "./routes/authenticate/authenticate.component";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Shop = () => {
  return <h1>Shop Page</h1>;
};
const App = () => {
  return (
    <>
      <ToastContainer
        theme="dark"
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="sign-in" element={<Authenticate />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
