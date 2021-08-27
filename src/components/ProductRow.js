import React from 'react'
import Product from './Product'

class ProductRow extends React.Component {
    render() {
        // console.log(this.props.rowsData)
        let rowsData = []
        this.props.rowsData.forEach((drink) => rowsData.push(<Product drink={drink} key={drink.idDrink} cart={this.props.cart} onHandleAddCart={this.props.onHandleAddCart} />))

        return (
            <tr>
                {rowsData}
            </tr>
        )
    }
}

export default ProductRow