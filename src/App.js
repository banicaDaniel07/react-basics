
import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
// Stored data local in the code
// import DATA from './components/data/data.components'

export class App extends Component {

  constructor() {
    super();

    this.state = {
      shopItems : [],
      searchField: ''
    }

    
  }

  componentDidMount() {
    fetch('https://mocki.io/v1/56a2cddc-d691-405a-b531-97d14eb94a40')
    .then(res => res.json())
    .then(data => this.setState({shopItems : data}))

    // for data stored local in the code
    // this.setState({shopItems : DATA})
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {

    const {searchField, shopItems} = this.state;
    const filtredItems = shopItems.filter( item => item.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <p>Online Shop</p>
        <SearchBox handleChange={this.handleChange}/>
        <CardList filtredItems={filtredItems} />
      </div>
    )
  }
}

export default App;
