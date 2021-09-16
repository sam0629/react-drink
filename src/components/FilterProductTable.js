import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import Cart from './Cart'

class FilterProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: "",
            drinksData: [],
            cart: []
        }
        this.handleFilterTextchange = this.handleFilterTextchange.bind(this)
        this.handleAddCart = this.handleAddCart.bind(this)
    }
    componentDidMount() {
        fetch('http://localhost:3001/drinks')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({ drinksData: data })
            })
    }
    handleFilterTextchange(filterText) {
        this.setState({
            filterText: filterText
        })
    }
    handleAddCart(product) {
        this.setState({
            cart: product
        })
    }
    render() {
        return (
            <div className="filter-product-table">
                <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextchange} />
                <Cart cart={this.state.cart} onHandleDeleteCart={this.handleAddCart} />
                <ProductTable drinksData={this.state.drinksData} filterText={this.state.filterText} cart={this.state.cart} onHandleAddCart={this.handleAddCart} />

            </div>
        )
    }
}
export default FilterProductTable