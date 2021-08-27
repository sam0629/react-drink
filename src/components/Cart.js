import React from 'react'

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.printcart2 = this.printcart2.bind(this)
    }
    printcart2() {
        this.props.cart.forEach((car) => {
            console.log(1)
        })
        console.log(1)
    }
    render() {
        return (
            <button className="cart" onClick={this.printcart2}>Cart</button>
        )
    }
}

export default Cart