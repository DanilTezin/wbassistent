import React, {useEffect, useState} from 'react';
import style from "./package.module.css";
import { Modal, Button, Form } from 'react-bootstrap'
import arrowLeft from '../../../../images/icons/arrowLeft.svg'
import exitIcon from '../../../../images/icons/exitIcon.svg'

const StocksModal =  (props) =>{
    const [modalAmount, setModalAmount] = useState(false)
    return(
        <Modal
            className={style.modals}
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className={style.headerAmount}>
                <img className={style.exitIcon} style={{width: '26px'}} onClick={props.onHide} src={exitIcon}/>
                <div>{props.name}</div>
            </Modal.Header>
            <Modal.Body style={{height: '200px'}}>
                {props.stocks.map((stock)=>{
                    return <>
                        <Button className={style.modalBtn} style={{width: '100%'}} onClick={()=> setModalAmount(true)}>
                            {stock.name}
                        </Button>
                        <ProductsModal
                            show={modalAmount}
                            onHide={()=>setModalAmount(false)}
                            name={stock.name}
                            quantity={stock.quantity}
                            setStocks={props.setStocks}
                            stock={stock}
                            stocks={props.stocks}
                        />
                    </>
                })}
            </Modal.Body>
        </Modal>
    )
}

const ProductsModal =  (props) =>{
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className={style.headerAmount} >
                <img style={{width: '26px'}} className={style.exitIcon} onClick={props.onHide} src={arrowLeft}/>
                <div>{props.name}</div>
            </Modal.Header>
            <Modal.Body style={{height: '200px'}}>
                <h5 style={{marginBottom: '20px'}}>Текущий остаток: {props.quantity[0].amount}</h5>
                <Form.Control
                    type="text"
                    className={style.inputPrice}
                    onChange={(e)=> {
                        props.setStocks( prevState =>
                            prevState.map(item =>
                                item.id === props.stock.id
                                    ? { ...item, quantity:  [{
                                       amount: e.target.value,
                                    sku: props.quantity[0].sku
                                        }]}
                                    : item
                            ))
                    }}
                    placeholder='Изменить остаток'
                />
            </Modal.Body>
        </Modal>
    )
}


export const PackageStocks = ({stocks, setStocks}) => {
    const [modalShow, setModalShow] = useState(false);


    useEffect(()=>{
        console.info(stocks)
    },[])

    return(
        <div className={style.packageSize}>
            <StocksModal
                show={modalShow}
                onHide={()=>setModalShow(false)}
                stocks={stocks}
                setStocks={setStocks}
            />
            <button onClick={()=>setModalShow(true)} style={{margin: 0}} className={style.uniqueButton}>Управление остатками</button>
        </div>
    )
}