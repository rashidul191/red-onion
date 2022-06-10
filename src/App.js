import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Header from "./Page/Shared/Header/Header";
import Footer from "./Page/Shared/Footer/Footer";
import NotFound from "./Page/Shared/NotFound/NotFound";
import FoodDetails from "./Page/Home/FootsItem/FoodDetails/FoodDetails";
import OrderNow from "./Page/Home/FootsItem/OrderNow/OrderNow";
import Login from "./Page/Login/Login";
import RequireAuth from "./Page/Login/RequireAuth/RequireAuth";
import Registration from "./Page/Login/Registration/Registration";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="/food-detail/:foodId"
          element={<FoodDetails></FoodDetails>}
        ></Route>

        <Route
          path="/user-info"
          element={
            <RequireAuth>
              <OrderNow></OrderNow>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
