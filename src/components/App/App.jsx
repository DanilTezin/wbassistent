import Style from "../../components/App/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import { Switch, Route } from "react-router-dom";
import { Homepage, Login } from "../../pages/all-pages";
import Footer from "../Footer/Footer";
import LicenseAgreement from "../../pages/LicenseAgreement/LicenseAgreement.jsx";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import RegisterPage from "../../pages/RegisterPage/register-page";
import Profile from "../../pages/Profile/Profile.jsx";
import ProtectedRoute from "../../services/ProtectedRoute/ProtectedRoute";
import { getData } from "../../services/actions/auth";
import SearchCard from "../../pages/SearchCard/SearchCard";
import { Telegram } from "./Telegram";
import { CompareProduct } from "../../pages/CompareProduct/CompareProduct";
import axios from "axios"
import { setCookie } from "../../utils/cookie";
import { CompareArticlesPage } from "../../pages/CompareArticlesPage/CompareArticlesPage";
import { ReturnControlPage } from "../../pages/ReturnControlPage/ReturnControlPage";
function App() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const dispatch = useDispatch();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const refreshToken = localStorage.getItem('refreshToken')
  useEffect(() => {
    if (getCookie('token') !== undefined) {
      dispatch(getData());
    }
  }, []);
  useEffect(() => {
    if (refreshToken) {
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_BASE_API_URL}/token/refresh/`,
        data: {
          'refresh': refreshToken
        }
      }).then(res => {
        setCookie("token", res.data.access, { 'max-age': 604800 });
      })
    }
  }, [])
  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      <Telegram />
      <main className={Style.main}>
        <Switch>
          <Route path="/" exact={true}>
            <Homepage />
          </Route>
          <ProtectedRoute anonymous={true} path="/login" exact={true}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute anonymous={true} path="/register" exact={true}>
            <RegisterPage />
          </ProtectedRoute>
          <ProtectedRoute
            isAuth={isLogin}
            anonymous={false}
            path="/profile"
            exact={true}
          >
            <Profile />
          </ProtectedRoute>
          <Route
            path="/compare">
            <CompareArticlesPage />
          </Route>
          <Route path="/license-agreement" exact={true}>
            <LicenseAgreement />
          </Route>
          <Route path="/returns" exact={true}>
            <ReturnControlPage />
          </Route>
          <Route path="/privacy-policy" exact={true}>
            <PrivacyPolicy />
          </Route>
          <Route path="/search-card" exact={true}>
            <SearchCard />
          </Route>
          <Route path="/compare-product" exact={true}>
            <CompareProduct />
          </Route>
        </Switch>

      </main>
      <Footer />
    </div>
  );
}

export default App;
