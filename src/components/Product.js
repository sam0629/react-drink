import React from 'react'
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCart = this.handleAddCart.bind(this)
    }
    handleAddCart(drink) {
        let newcart
        if (this.props.cart.find(item => item.idDrink === drink.idDrink)) {
            alert("新增失敗")
        } else {
            drink.value = 1
            newcart = [...this.props.cart, drink]
            this.props.onHandleAddCart(
                newcart
            )
            console.log(newcart)
        }

    }
    render() {
        return (
            <td width="25%" height="100px" id={this.props.drink.idDrink}>
                <h6>{this.props.drink.strDrink}</h6>
                {<img src={this.props.drink.strDrinkThumb} alt="drink" className="imgDrink" />}
                <button className="addButton" onClick={() => this.handleAddCart(this.props.drink)}>加入購物車</button>
            </td>
        )
    }
}

export default Product