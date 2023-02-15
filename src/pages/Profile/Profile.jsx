import React, { useCallback, useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import styles from "./Profile.module.css";
import Input from "../../components/Input/input";
import SubmitButton from "../../components/SubmitButton/submit-button";
import { useDispatch, useSelector } from "react-redux";
import {deleteCookie} from '../../utils/cookie';
import {LOGOUT_USER} from '../../utils/constants/auth';
import {DELETE_USER_DATA} from '../../utils/constants/user-data';
import Modal from "../../components/Modal/Modal";
import {patchKeys} from "../../services/actions/API_keys";


function Profile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userDataReducer.userInfo);
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  console.log(isLogin)
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    token: "",
    token_statistics: "",
    phone: ""
  });
  const [showModal, setShowModal] = useState(false);
  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const logoutFromAccount = () => { 
    window.location.reload();
    dispatch({type: DELETE_USER_DATA })
    localStorage.removeItem("refreshToken");
    deleteCookie("token");
  }

  const tryLogout = useCallback((e) => {
    logoutFromAccount();
    e.preventDefault();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formState.token.trim() && formState.token_statistics.trim()) {
      const form = {
        token: formState.token,
        token_statistics: formState.token_statistics
      };
      dispatch(patchKeys(form));
      setFormState({...formState, token: "", token_statistics: ""});
      if (formState.token.length < 100 || formState.token_statistics.length < 100) {
        alert(`Вы не указали стандартный токен валберис в этом кабинете, без него данная функция не может работать`)
      } else {
        alert(`Токен обновился ${formState.email} `)
      }
     
    }
  }

  useEffect(() => {
    if(userInfo !== null) {
      setFormState({
        ...formState,
        email: userInfo.email,
        first_name: userInfo.first_name,
      });
    }
  }, [userInfo]);
  
  return (
    !!formState && (
    <section className={styles.section}>
      <div className={styles.page}>
        <div className={styles.mainForms}>
          <SubmitButton onClick={tryLogout} content="Выход"></SubmitButton>
          <form className={styles.form} onSubmit={onFormSubmit}>
            <h2>API</h2>
            <Input
                id={"seller"}
                placeholder="Стандартный токен"
                size="medium"
                type="text"
                name={"token"}
                value={formState.token}
                onChange={onInputChange}
            />
            <label className={styles.label} htmlFor="seller">
              <div>Можно получить по ссылке:</div>
              <div>Профиль --{">"} Настройки --{">"} Доступ к новому API</div>
              <a href="https://seller.wildberries.ru/supplier-settings/access-to-new-api">https://seller.wildberries.ru/supplier-settings/access-to-new-api</a>
            </label>
            <Input
                placeholder="Токен сервиса статистики"
                id={"stats"}
                size="medium"
                type="text"
                name={"token_statistics"}
                value={formState.token_statistics}
                onChange={onInputChange}
            />
            <label className={styles.label} htmlFor="stats">
              <div>Можно получить по ссылке:</div>
              <div>Профиль --{">"} Настройки --{">"} Доступ к новому API</div>
              <a href="https://seller.wildberries.ru/supplier-settings/access-to-new-api">https://seller.wildberries.ru/supplier-settings/access-to-new-api</a>
            </label>
          <SubmitButton content="Добавить токены"></SubmitButton>
        </form>
        {/*<Modal title={"Введите номер телефона"} show={showModal} close={closeModal}>*/}
        {/*    <form style={{marginLeft: 50, marginTop: 50}}>*/}
        {/*      <Input*/}
        {/*          placeholder="Номер телефона"*/}
        {/*          id={"stats"}*/}
        {/*          size="medium"*/}
        {/*          type="text"*/}
        {/*          name={"phone"}*/}
        {/*          onChange={onInputChange}*/}
        {/*      />*/}
        {/*      <div style={{marginTop: 25}}>*/}
        {/*        <SubmitButton content="Отправить запрос"></SubmitButton>*/}
        {/*      </div>*/}
        {/*    </form>*/}
        {/*</Modal>*/}

        {/*  <form className={styles.form} onSubmit={"push"}>*/}
        {/*    <h2>Настройки</h2>*/}
        {/*    <Input*/}
        {/*      placeholder={formState.first_name}*/}
        {/*      size="medium"*/}
        {/*      type="text"*/}
        {/*      name={"first_name"}*/}
        {/*      onChange={onInputChange}*/}
        {/*    />*/}
        {/*    <Input*/}
        {/*      placeholder={formState.email}*/}
        {/*      size="medium"*/}
        {/*      type="email"*/}
        {/*      name={"email"}*/}
        {/*      onChange={onInputChange}*/}
        {/*      required={true}*/}
        {/*    />*/}
        {/*    <div className={styles.buttons}>*/}
        {/*    <SubmitButton content="Сохранить"></SubmitButton>*/}
        {/*    <SubmitButton onClick={tryLogout} content="Выход"></SubmitButton>*/}
        {/*    </div>*/}
        {/*  </form>*/}
        {/*  <form className={styles.form} onSubmit={"push"}>*/}
        {/*    <h2>Wildberries</h2>*/}
        {/*    <p>Как подключиться к WB Maneger?</p>*/}

          {/*  <Input*/}
          {/*    placeholder="Доступ к API"*/}
          {/*    size="medium"*/}
          {/*    type="text"*/}
          {/*    name={"first_name"}*/}
          {/*    onChange={onInputChange}*/}
          {/*  />*/}
          {/*  <Input*/}
          {/*    placeholder="Доступ к новому API"*/}
          {/*    size="medium"*/}
          {/*    type="text"*/}
          {/*    onChange={onInputChange}*/}
          {/*    required={true}*/}
          {/*  />*/}
          {/*  <Input*/}
          {/*    placeholder="ваш id"*/}
          {/*    size="medium"*/}
          {/*    type="password"*/}
          {/*    onChange={onInputChange}*/}
          {/*    required={true}*/}
          {/*  />*/}
          {/*  <SubmitButton content="Отправить запрос"></SubmitButton>*/}
          {/*</form>*/}

        </div>
        <div className={styles.organization}>
          <form className={styles.page} action="">
            <span className={styles.span}>Поделиться:</span>
            <Input
              placeholder="Cсылка"
              size="medium"
              type="text"
              onChange={onInputChange}
              required={true}
            />
          </form>
        </div>
      </div>
      
    </section>
    )
  );
}

export default Profile;
