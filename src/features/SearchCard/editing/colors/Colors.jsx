import React, { useEffect, useRef } from 'react';
import Styles from './Colors.module.css';
import del from '../../../../images/icons/cross.svg';
import index from "../../../../images/logos/index.png";
export const Colors = ({colors, setColors}) => {
    const ref = useRef()
  const findChange = (e,i) => {
    setColors([...colors.slice(0, i), e.target.value, ...colors.slice(i + 1)])
  }
  const addColor = () => {
    setColors([...colors, ''])
  }
  const delColor = (e,i) => {
    e.preventDefault()
    setColors([...colors.slice(0,i), ...colors.slice(i + 1)])
  }
  useEffect(() => {
    if (!ref.current) {
        return
    }
    ref.current.focus()
  }, [colors])


    return(
        <div className={Styles.currentColorsOptions}>
            <h2>Цвет:</h2>

            <ul>
            {colors && colors.map((x,i) => (
              <li key={i}  ref={ref}>
                  <input  type='text'  value={x}
                     onChange={(e) => findChange(e,i)} />
                     <img className={Styles.delColor}  src={del} onClick={(e) => delColor(e,i)}  />
              </li>
                  
            ))}
            </ul>
            <button onClick={addColor}>Добавить</button>
        </div>
    )
}