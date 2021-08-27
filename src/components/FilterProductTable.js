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
            cart: [1, 3]
        }
        this.handleFilterTextchange = this.handleFilterTextchange.bind(this)
        this.handleAddCart = this.handleAddCart.bind(this)
    }
    componentDidMount() {
        fetch('http://localhost:3001/drinks')
            .then(res => res.json())
            .then(data => {
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
                <ProductTable drinksData={this.state.drinksData} filterText={this.state.filterText} cart={this.state.cart} onHandleAddCart={this.handleAddCart} />
                <Cart cart={this.state.cart} />
            </div>
        )
    }
}
export default FilterProductTable