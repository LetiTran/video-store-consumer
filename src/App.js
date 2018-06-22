import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import CustomerCollection from './components/CustomerCollection.js'
import LibraryCollection from './components/LibraryCollection.js'
import SearchForm from './components/SearchForm.js'
import SearchResults from './components/SearchResults.js'
import SelectionBar from './components/SelectionBar.js'
import CheckOutModal from './components/CheckOutModal.js'
import AddtoLibModal from './components/AddtoLibModal.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedCustomerName: 'Please Select a Customer',
      selectedCustomerId: 0,
      selectedMovieName: 'Please Select a Movie',
      selectedMovieId: 0,
      searchQuery: '',
      checkoutIsOpen: false,
      showSearch: false,
      addLibIsOpen: false
    };
  }

  selectionCustomerBarComponent = (customerName, customerId) => {
    // preventDefault();
    const updateState = {};

    if(customerName === this.state.selectedCustomerName && this.state.selectedCustomerName !== 'Please Select a Customer'){
      updateState["selectedCustomerName"] = 'Please Select a Customer';
      updateState["selectedCustomerId"] = 0;
      this.setState(updateState);
    }  else {
      updateState["selectedCustomerName"] = customerName;
      updateState["selectedCustomerId"] = customerId;
      this.setState(updateState);
    }
 }


selectionMovieBarComponent= (movieInfo) => {
  const updateState = {};

  if(movieInfo.title === this.state.selectedMovieName && this.state.selectedMovieName !== 'Please Select a Movie'){
    updateState["selectedMovieName"] = 'Please Select a Movie';
    updateState["selectedMovieId"] = 0;
    this.setState(updateState);
  }  else {
    updateState["selectedMovieName"] = movieInfo.title;
    updateState["selectedMovieId"] = movieInfo.id;
    this.setState(updateState);
  }
}

clearState =()=>{
    this.setState({
      selectedCustomerName: 'Please Select a Customer',
      selectedCustomerId: 0,
      selectedMovieName: 'Please Select a Movie',
      selectedMovieId: 0,
    });
}

  searchQuery = (query) => {
    this.setState({
      searchQuery: query,
    });
    this.toggleSearchresults("show");
  }

  renderSearchResults() {
    if(this.state.showSearch) {
      return (
        <Redirect to='/search'/>
      );
    }
  }


  toggleCheckoutModal = () => {
    this.setState({
      checkoutIsOpen: !this.state.checkoutIsOpen
    });
  }

  toggleLibModal= () => {
    this.setState({
      addLibIsOpen: !this.state.addLibIsOpen
    });
  }


  toggleSearchresults = (bool) => {
    if(bool === "show") {
      this.setState({
        // showSearch: !this.state.showSearch
        showSearch: bool
      });
    } else {
      this.setState({
        // showSearch: !this.state.showSearch
        showSearch: false
      });
    }
  }



  render() {
    const Library = () => (
      <LibraryCollection selectionBarComponentCallBack={this.selectionMovieBarComponent}/>
    )

    const Customers = () => (
      <CustomerCollection selectionBarComponentCallBack={this.selectionCustomerBarComponent}
      />
    )

    const Search = () => (
      <SearchResults query={this.state.searchQuery} toggleLibModalCallBack = {this.toggleLibModal} />
    )


    return (
      <Router>
        <div className="App">
          <header>
            <h1>THE Video Store</h1>
            <nav className="nav">
              <ul>
                <li>
                  <SearchForm searchQueryCallback={this.searchQuery} />
                </li>
                <li>
                  <Link to="/library" onClick={this.toggleSearchresults}>Library</Link>
                </li>
                <li>
                  <Link to="/customers" onClick={this.toggleSearchresults}>Customers</Link>
                </li>
                <li>{this.renderSearchResults()}</li>
              </ul>
            </nav>

            <SelectionBar
            customerName={this.state.selectedCustomerName} movieName={this.state.selectedMovieName}
            customerId={this.state.selectedCustomerId}
            movieId={this.state.selectedMovieId}
            clearStateCallBack = {this.clearState}
            toggleCheckoutModalCallBack = {this.toggleCheckoutModal}
            />
          </header>

          <CheckOutModal show={this.state.checkoutIsOpen}
          onClose={this.toggleCheckoutModal} />

          <AddtoLibModal show={this.state.addLibIsOpen}
          onClose={this.toggleLibModal} />

          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/customers" component={Customers} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
