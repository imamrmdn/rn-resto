import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function ResultDetails({ result }){

    return(
        <View style={styles.viewStyle} >
            <Image 
                style={styles.imageStyle}
                source={{
                    uri: result.image_url
                }}
            />
            <Text style={styles.textStyles} >
                {result.name}
            </Text>
            <Text>
                {result.rating} Stars,
                {result.review_count} Reviews
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    viewStyle: {
        marginRight: 10, 
        flexWrap: 'wrap', 
        flex: 1
    },
    textStyles: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 14
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 8
    }
})