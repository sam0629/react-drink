import React from 'react'
import Header from './Header'
import FilterProductTable from './FilterProductTable'


class OrderDrinks extends React.Component {
    render() {
        return (
            <>
                <Header />
                <FilterProductTable />
            </>
        )
    }
}

export default OrderDrinks