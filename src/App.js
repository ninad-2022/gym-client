import logo from "./logo.svg";
import "./App.css";
import FullLayout from "./layout/full-layout/FullLayout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import BlankLayout from "./layout/blank-layout/BlankLayout";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUser } from "./app/slices/authSlice";
import { useEffect } from "react";
import AuthService from "./services/AuthServices";

// the content in the opening and closing of the ProtectedRoutes will be children
const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector(selectUser);

  // checking the respponse data and adding it into the redux
  useEffect(() => {
    AuthService.validateToken()
      .then((response) => {
        console.log(response.data, "valid token");
        dispatch(addUser(response?.data?.data));
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status == 403) {
          sessionStorage.clear();
          navigate("/");
        }
      });
  }, []);

  const token = sessionStorage.getItem("access");
  return loggedUser._id || token ? children : <Navigate to="/" />;
};
const App = () => {
  return (
    <>
      {/* securaed routing  */}
      <Routes>
        <Route path="/*" element={<BlankLayout />}></Route>
        <Route
          path="/secured/*"
          element={
            <ProtectedRoutes>
              <FullLayout />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
