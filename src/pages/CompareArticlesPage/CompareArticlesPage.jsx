import { getCookie } from '../../utils/cookie';
import style from './compareArticles.module.css'
import { useState, useCallback, useEffect, useRef } from 'react';
import ReactChipInput from "react-chip-input";
import { Link, Redirect, useLocation } from "react-router-dom";
import * as XLSX from 'xlsx/xlsx.mjs';


export const CompareArticlesPage = () => {
    let token = getCookie('token')
    const tableRef = useRef(null);

    const [inputValue, setInputValue] = useState([])
    const [articles, setArticles] = useState([])
    const [keys, setKeys] = useState([])
    const [inputValueValid, setInputValueValid] = useState(false)
    const [visibleDelBtn, setVisibleDelBtn] = useState(true)
    const [errorVis, setErrorVis] = useState(false)
    const location = useLocation();

    const deleteAll = () => {
        console.log(process.env.REACT_APP_BASE_API_URL)
        setInputValue([])
        setArticles([])
    }

    useEffect(() => {
        let allKeys = []
        articles.forEach((article) => {
            Object.keys(article).forEach((art) => {
                if (art) allKeys.push(art)
            })
        })
        
        setKeys([...new Set(allKeys)])

    }, [articles, visibleDelBtn, inputValue, inputValueValid])

    const handleDeleteArticle = (value) => {
        setArticles(articles.filter((ar) => ar['Артикул'] != value))
    }

    const handleAddArticles = (input) => {
        try {
            fetch(`${process.env.REACT_APP_BASE_API_URL}/cards/compare/?articles=${input.join(';')}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.type === 'validation_error') {
                        console.log(res)
                        setErrorVis(true)
                        setTimeout(() => setErrorVis(false), 2000)
                    } else {
                        let parseObj = Object.entries(res)
                        let arr = []
                        parseObj.map((ob) => { arr.push(ob[1]) })
                        addChip(input[input.length - 1])
                        setArticles(arr)
                    }
                })
        } catch (e) {
            console.log(e)
        }
    }


    

    const addChip = value => {
        if (value !== '') {
            if (!inputValue.includes(value)) {
                setInputValue([...inputValue, value])
                console.log([...inputValue, value])
                setInputValueValid(false)
            } else {
                setInputValueValid(true)
                setTimeout(() => {
                    setInputValueValid(false)
                }, 2000)
            }
        }
    };
    const removeChip = index => {
        let sp = [...inputValue].splice(index, 1)
        setInputValue([...inputValue].filter((value) => value != sp[0]));
        handleDeleteArticle(sp[0])
    };

    const refresh = () => {
        fetch(`${process.env.REACT_APP_BASE_API_URL}/cards/compare/?articles=${inputValue.join(';')}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => res.json()).then((res) => {
            let parseObj = Object.entries(res)[0][1]
            setArticles([...articles, parseObj])
        })
    }
    const xport = useCallback(async () => {
        /* Create worksheet from HTML DOM TABLE */
        const table = document.getElementById("table");
        const wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, "Сравнение.xlsx");
    });
    return (
        <div className={style.wrapp} onMouseEnter={() => setVisibleDelBtn(false)}>
            <div className={style.toolbar}>
                <p>Введите артикул и нажмите Enter</p>
                {errorVis && <p>Артикул с таким товаром не найден.</p>}
                <ReactChipInput
                    ariaLabel="adsfvd"
                    chips={inputValue}
                    onSubmit={value => handleAddArticles([...inputValue, value])}
                    onRemove={index => removeChip(index)}
                />
                {inputValueValid && <div className={style.message}>Артикул уже есть в списке</div>}
                <div className={style.wrapToolbar}>
                   <button onClick={() => handleAddArticles(inputValue)}>Обновить</button>
                   <button onClick={xport}>Скачать</button>

                    <button onClick={() => deleteAll()}>Очистить список товаров</button>
                </div>
                {token ? null : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />}
            </div>
            <div className={style.wrapTable}>
                <table ref={tableRef} id='table'>

                    {keys.map((key) => {
                        const values = articles.map((article, index) => {
                            return <td>
                                {key === 'Артикул' && visibleDelBtn && <button onClick={() => removeChip(index)}>Удалить</button>}
                                {key === 'Фото' ? <img width={150} src={article[key][0]} /> : <div>{article[key]}</div> || 0}
                            </td>
                        })
                        return (
                            <tr>
                                <td>{key}</td>
                                {values}
                            </tr>
                        )
                    })}

                </table>
                <table className={style.tableExcel} id='table_to_exel'>      
                    {keys.map((key) => {
                            const values = articles.map((article, index) => {
                                return <td>
                                    {key === 'Артикул' && visibleDelBtn && <button onClick={() => removeChip(index)}>Удалить</button>}
                                    {key === 'Фото' ? article[key] : article[key] || 0}
                                </td>
                            })
                            return (
                                <tr>
                                    <td>{key}</td>
                                    {values}
                                </tr>
                            )
                        })}
                </table>
            </div>
        </div>
    )
}