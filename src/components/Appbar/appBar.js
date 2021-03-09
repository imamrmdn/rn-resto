import React from 'react';
import { Appbar } from 'react-native-paper';

export function AppBar({ title }){

    return(
        <Appbar.Header style={{ backgroundColor: 'teal' }} >
            { (title === 'Home Screen') ? null : <Appbar.BackAction /> }
            <Appbar.Content title={title} style={{ alignItems: 'center' }} />
        </Appbar.Header>
    )

}