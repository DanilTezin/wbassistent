import { useCallback, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import Input from "../../components/Input/input";
import SliderCard from "../../components/SliderCard/slider-card";
import SubmitButton from "../../components/SubmitButton/submit-button";
import { authenticateUser, getData } from "../../services/actions/auth";
import { fetchUserData } from "../../utils/fetches";
import styles from "./login.module.css";

function Login() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const hasError = useSelector(state => state.authReducer.hasError)
  const errMessage = useSelector(state => state.authReducer.errMessage)
  const location = useLocation();
  console.log(isLogin)
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const loginUser = (form) => {
    dispatch(authenticateUser(form));

  };

  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const push = useCallback(
    (e) => {
      e.preventDefault();
      loginUser(formState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formState]
  );

  if (isLogin) {
    return (
      <Redirect
        to={{
          pathname: "/profile",
          state: { from: location },
        }}
      />
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>Вход</h1>
        <div className={styles.gridContainer}>
          <form className={styles.form} onSubmit={push}>
            {/* <Input
              placeholder="Телефон 7xxxxxxxxxx"
              size="medium"
              type="text"
              name='number'
            /> */}
            <Input
              placeholder="E-mail"
              size="medium"
              type="email"
              name="email"
              onChange={onInputChange}
            />
            <Input
              placeholder="Пароль"
              size="medium"
              type="password"
              name="password"
              onChange={onInputChange}
            />
            <div className={styles.isRegister}>
              <h2 className={styles.subtitle}>Впервые на сайте?</h2>
              <Link to="/register" className={styles.linkComponent}>
                Зарегистрироваться
              </Link>
            </div>
            {hasError && 
            <span className={styles.spanErr}>{errMessage}</span>
            }
            <SubmitButton
              type="primary"
              size="medium"
              content="Авторизоваться"
            />
          </form>
          <SliderCard />
        </div>
      </div>
    </section>
  );
}

export default Login;
