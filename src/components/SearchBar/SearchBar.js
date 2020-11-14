import React, { useState } from 'react';
import './styles.scss';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Search = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const onSuggestionsFetchRequested = async ({ value }) => {
        let response = await axios.post(process.env.REACT_APP_API_URL, {
            query: `
                {
                    search(searchTerm: "${value}") {
                        id
                        name
                        image
                        categoryId
                    }
                }
            `
        });
    
        setSuggestions(response.data.data.search);
    }

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    }

    const onSuggestionSelected = () => {
        setSearchTerm('');
    }
    
    const onChange = (event, { newValue }) => {
        setSearchTerm(newValue);
    };

    const onFocus = (event) => {
        document.querySelector('.search-bar__overlay').classList.add('search-bar__overlay--active');
    }

    const onBlur = (event) => {
        document.querySelector('.search-bar__overlay').classList.remove('search-bar__overlay--active');
    }
    
    const getSuggestionValue = (suggestion) => {
        return suggestion.name;
    }

    const renderSuggestion = suggestion => (
        <NavLink to={`/product/${suggestion.id}`}>
            <div>
                <div className="react-autosuggest__suggestion-column">
                    <span className="react-autosuggest__suggestion-name">{suggestion.name}</span>
                </div>
                <div className="react-autosuggest__suggestion-column">
                    <img className="react-autosuggest__suggestion-img" src={suggestion.image} alt={suggestion.name} />
                </div>
            </div>
        </NavLink>
    );

    const inputProps = {
        placeholder: "Search",
        value: searchTerm,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            focusInputOnSuggestionClick={false}
        />
    )
}

export default Search;