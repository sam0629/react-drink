import React from 'react'
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCart = this.handleAddCart.bind(this)
    }
    handleAddCart(e) {
        this.props.onHandleAddCart(
            // function (prevData) {
            //     return [123, ...prevData]
            // }
            function (prevData) {
                return [123, ...prevData]
            }
        )
        console.log(this.props.cart)
    }
    render() {
        // console.log(this.props.drink)
        return (
            <td>
                <h6>{this.props.drink.strDrink}</h6>
                {<img src={this.props.drink.strDrinkThumb} alt="drink" className="imgDrink" />}
                <button className="addButton" onClick={this.handleAddCart}>加入購物車</button>
            </td>
        )
    }
}

export default Product