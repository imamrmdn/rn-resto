import React, { useEffect, useState } from 'react';
import { Image, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../settings/api';
import useDetails from '../hooks/useDetails';

export function HomeDetailScreen(){

    const [getResult, result, errMsg] = useDetails()

    //console.log(result);

    if(!result){
        return errMsg
    }

    return(
        <>
            <Text style={styles.textStyle} >
                {result.name}
            </Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => (

                    <Image 
                        style={styles.imageStyle}
                        source={{
                            uri: item
                        }}
                    />

                )}
            />
        </>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: '500'
    },
    imageStyle:{
        width: 250,
        height: 150,
        borderRadius: 8,
        marginBottom: 10
    }
})