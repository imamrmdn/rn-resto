import React from 'react';
import PropTypes from 'prop-types';
import { Searchbar } from 'react-native-paper';

export function SearchBar({ 
    value, 
    onSearchChange, 
    onSearchSubmit 
}){
    
    return(
        <Searchbar
            style={{ marginBottom: 20, fontSize: 16 }} 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search Here'
            value={value}
            onChangeText={onSearchChange}
            onEndEditing={onSearchSubmit}
        />
    )
}

SearchBar.propTypes = {
    value: PropTypes.string,
    onSearchChange: PropTypes.func.isRequired,
    onSearchSubmit: PropTypes.func.isRequired
}