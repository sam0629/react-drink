import React from 'react'
import ProductRow from './ProductRow'
class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText
        const rows = []
        let rowsData = []
        var i = 1
        this.props.drinksData.forEach((drink) => {
            console.log(drink.strDrink.indexOf(filterText))
            if (drink.strDrink.indexOf(filterText) === -1) {
                return;
            }
            rowsData.push(drink)//每筆資料都會存放進去
            if (i !== 4) {
                i++
            } else {
                // drinksData.push(temp)
                rows.push(<ProductRow rowsData={rowsData} key={drink.idDrink} cart={this.props.cart} onHandleAddCart={this.props.onHandleAddCart} />)
                rowsData = []
                i = 1
            }
            // if(i!==4&&r)
        })
        return (
            <table>
                <thead>
                    <tr className="table_tr">
                        <th colSpan="4">Products</th>
                    </tr>
                </thead>
                <tbody >
                    {rows}
                </tbody >
            </table>
        )
    }
}

export default ProductTable