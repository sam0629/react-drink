import React from 'react'
import SearchIcon from '../icons/search.png'
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }
    render() {
        return (
            <form className="search-field">
                <input type="text" value={this.props.filterText} onChange={this.handleFilterTextChange} placeholder="Seach By Name..."></input>
                <button>
                    <img src={SearchIcon} style={{ width: "15px" }} alt="search" />
                </button>
            </form >
        )
    }
}
export default SearchBar