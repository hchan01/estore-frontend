import React, { useState } from 'react';
import './SearchBar.scss';
import Autosuggest from 'react-autosuggest';
import { useLazyQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { SEARCH } from './queries';

export const SearchBar = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [active, setActive] = useState(false);

    const [getSuggestions] = useLazyQuery(SEARCH, {
        onCompleted: (data) => {
            setSuggestions(data.search);
        }
    });

    const onSuggestionsFetchRequested = async ({ value }) => {
        getSuggestions({
            variables: {
                searchTerm: value
            }
        });
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
        setActive(true);
    }

    const onBlur = (event) => {
        setActive(false);
    }
    
    const getSuggestionValue = (suggestion) => {
        return suggestion.name;
    }

    const renderSuggestion = suggestion => (
        <NavLink to={`/product/${suggestion.id}`}>
            <div>
                <div className="react-autosuggest__suggestion-column">
                    <span className="react-autosuggest__suggestion-product-name">{suggestion.name}</span>
                </div>
                <div className="react-autosuggest__suggestion-column">
                    <img className="react-autosuggest__suggestion-product-image" src={suggestion.image} alt={suggestion.name} />
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
        <React.Fragment>
            <div className={`react-autosuggest__overlay ${active ? 'react-autosuggest__overlay--active' : ''}`}></div>
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
        </React.Fragment>
    )
}