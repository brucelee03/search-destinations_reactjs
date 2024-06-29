import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchDestinationList: props.destinationsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, searchDestinationList} = this.state
    const searchResults = searchDestinationList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-card">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search"
            className="search-destination"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <div>
          <ul className="destination-container">
            {searchResults.map(destination => (
              <li key={destination.id}>
                <DestinationItem destination={destination} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
