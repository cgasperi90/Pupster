import React, { Component } from "react";
import API from "../../utils/API";
import SearchResults from "../../components/searchResults";
import SearchForm from "../searchForm";

class Search extends Component {
    state = {
        search: "",
        breeds: [],
        results: []
    };

    componentDidMount() {
        API.getBaseBreedsList().then(res => this.setState({ breeds: res.data.message}))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({search: event.target.value});
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
            .then(res => {
                this.setState({results: res.data.message});
            })
    };

    render() {
        return (
            <div>
                <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                breeds={this.state.breeds}
                />
                <SearchResults results={this.state.results} />
            </div>
        );
    }
}

export default Search;