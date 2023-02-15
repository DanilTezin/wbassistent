import React from 'react';
import index from "../../../../images/logos/index.png";
import Style from "./package.module.css";
import { useState } from 'react';
import { useEffect } from 'react';
export const PackageInfo = ({price, discount, itemOptions, otherItemOptions, findChange, findOtherChange, token, setPrice, setDiscount}) => {

    const [description, setDescription] = useState('')
    const [errorUnique, setErrorUnique] = useState()
    const [unique, setUnique] = useState()

    useEffect(()=>{
      let des = itemOptions.filter((des)=>des.name === 'Описание')[0]

      if(des !== null && des !== undefined){
        setDescription(des.value)
      }
    },[itemOptions])
    

    const checkDescription = () =>{
      
      fetch(`${process.env.REACT_APP_BASE_API_URL}/api/check_text/`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
           Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: description }),
      })
        .then(res => res.json())
        .then(res => {
          if(res.error_text != null){
            console.log(res.error_text)
            setUnique(-1)
            setErrorUnique(res.error_text)
          }else{
            setErrorUnique(null)
            setUnique(res.text_unique)
          }
        })
    }


    return(
        <div className={Style.packageInfo}>
            <h2>Наименование</h2>
            {itemOptions &&
              itemOptions.map(
                (x) =>
                  x.name &&
                  x.name.includes("Наименование") && (
                    <div key={x.name}>
                      <input
                        data-name={x.name}
                        placeholder="Введите значение"
                        type="text"
                        value={x.value}
                        onChange={(e) => findChange(e)}
                      />{" "}
                    </div>
                  )
              )}
            {otherItemOptions &&
              otherItemOptions.map(
                (x) =>
                  x.name &&
                  x.name.includes("Наименование") && (
                    <div key={x.name}>
                      <input
                        data-name={x.name}
                        placeholder="Введите значение"
                        type="text"
                        value={x.value}
                        onChange={(e) => findOtherChange(e)}
                      />{" "}
                    </div>
                  )
              )}
            <button className={Style.uniqueButton} onClick={checkDescription}>Проверить уникальность</button>

            {errorUnique != null ? <div className={Style.errorUnique}>{errorUnique}</div> : null}
            {unique > -1 ? <div className={Style.uniqueText}>{unique}% уникальности</div> : null}

            <h2>Описание</h2>

            {itemOptions !== undefined &&
              itemOptions.map(
                (x) =>
                  x.name &&
                  x.name.includes("Описание") && (
                    <div key={x.name}>
                      <textarea
                        data-name={x.name}
                        placeholder="Введите значение"
                        type="text"
                        value={description}
                        onChange={(e) => {
                          findChange(e)
                          setDescription(e.target.value)
                        }}
                      />
                    </div>
                  )
              )}

            {otherItemOptions !== undefined &&
              otherItemOptions.map(
                (x) =>
                  x.name &&
                  x.name.includes("Описание") && (
                    <div key={x.name}>
                      <textarea
                        data-name={x.name}
                        placeholder="Введите значение"
                        type="text"
                        value={description}
                        onChange={(e) => {
                          findOtherChange(e)
                          setDescription(e.target.value)
                        }}
                      />
                    </div>
                  )
              )}
          </div>
    )
}