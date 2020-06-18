import React from "react";

function SearchForm(props) {
    return (
        <div className="container">
                <h1 className="text-center">Search For Dogs!</h1>
                <form>
                    <label>Search For Breed</label>
                    <div className="input-group mb-3">
                        <input
                        value={props.search}
                        onChange={props.handleInputChange}
                        name="breed"
                        list="breeds"
                        id="breed"
                        type="text" className="form-control" />
                    </div>
                        <datalist id="breeds">
                            {props.breeds.map(breed => (
                                <option value={breed} key={breed} />
                            ))}
                        </datalist>
                        <button
                        onClick={props.handleFormSubmit}
                        type="button" className="btn btn-success">Search</button>
                    </form>
        </div>
    )
}

export default SearchForm;