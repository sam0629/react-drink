import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Cart = (props) => {
    console.log(props.cart)
    const {
        buttonLabel = "Cart(" + props.cart.length + ")",
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const deleteHandler = (car) => {
        const newCart = props.cart.filter(cart => cart.idDrink !== car.idDrink)
        props.onHandleDeleteCart(newCart)
    }
    const onChange = (e, car) => {
        const newcart = []
        props.cart.map(cart => {
            console.log(cart)
            if (cart.idDrink !== car.idDrink) {
                newcart.push(cart)
            } else {
                newcart.push({ strDrink: cart.strDrink, strDrinkThumb: cart.strDrinkThumb, idDrink: cart.idDrink, value: e.target.value })
            }
        })
        props.onHandleDeleteCart(newcart)
    }
    const cart = []
    const cartTable = [<table key={cart}><thead><tr><th>編號</th><th>名稱</th><th>數量</th><th>刪除</th></tr></thead><tbody>{cart}</tbody></table>]
    props.cart.forEach((car, index) => {
        cart.push(<tr key={car.idDrink} >

            <td>{index + 1}</td>
            <td>{car.strDrink}</td>
            <td><input type="number" min="1" value={car.value} onChange={(e) => onChange(e, car)}></input></td>
            <td><button onClick={() => deleteHandler(car)}>X</button></td>
        </tr>)
    });
    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>購物車清單</ModalHeader>
                <ModalBody>
                    {cartTable}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>去結帳</Button>{' '}
                    <Button color="secondary" onClick={toggle}>關閉</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Cart;
