import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Style from "../../pages/SearchCard/SearchCard.module.css";
import SubmitButton from "../../components/SubmitButton/submit-button";
import { Preview } from "../../features/SearchCard/preview/Preview";
import { Loading } from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../services/actions/search-card";
import { Editing } from "../../features/SearchCard/editing/Editing";
import { FetchError } from "../../components/FetchError/FetchError";
import { getCookie } from "../../utils/cookie";
import { FormArticle } from "../../components/FormArticle/FormArticle";

function SearchCard() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.searchCardReducer.card);
  const isLoading = useSelector((state) => state.searchCardReducer.isLoading);
  const hasError = useSelector((state) => state.searchCardReducer.hasError);
  const errMessage = useSelector((state) => state.searchCardReducer.errMessage);
  const [otherItemOptions, setOtherItemOptions] = useState(null)
  const [vendorCode, setVendorCode] = useState("");

  const [swtch, setSwitch] = useState(false);
  let token = getCookie("token");

  const handleChange = (e) => {
    let value = e.target.value
    setVendorCode(value);
  };

  const push = (e) => {
    e.preventDefault();
    setSwitch(false)
    dispatch(getCard(token, vendorCode));
  };
  useEffect(() => {
    if (!item?.object) {
      return
    }
    fetch(`${process.env.REACT_APP_BASE_API_URL}/sellers/charcsbyobjectname/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ objectName: item?.object }),
    })
      .then((res) => res.json())
      .then((res) => {
        setOtherItemOptions(res.data.map(x => ({ name: x.name, value: '' })))
      }).catch(err => setOtherItemOptions(null))

  }, [item]);



  return (
    <div className={Style.editing}>
      <h1>
        Редактирование <span className={Style.span}>товара</span>
      </h1>
      <div className={Style.editContainer}>
        <FormArticle onSubmit={push} placeholder="Введите артикул товара" onChange={handleChange} />
        {item && (
          <div>
            {swtch ? (
              <Editing
                vendor={vendorCode}
                setSwitch={setSwitch}
                token={token}
                setOtherItemOptions={setOtherItemOptions}
                otherItemOptions={otherItemOptions}
              />
            ) : (
              <Preview
                setSwitch={setSwitch} />
            )}
          </div>
        )}
        {isLoading && <Loading />}
        {hasError && <FetchError content={errMessage} />}
      </div>
    </div>
  );
}

export default SearchCard;
