import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'; 
import PropTypes from 'prop-types';
import { ResultDetails } from './resultDetail';
import { useNavigation } from '@react-navigation/native';

export function ResultList({ title, result }){

    const navigation = useNavigation()

    if(!result.length){
        return null
    }

    return(
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle} >
                {title}
            </Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(e) => e.id}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        onPress={() => 
                            navigation.navigate('HomeDetail', {
                                id: item.id
                            })
                        }
                    >
                        <ResultDetails 
                            result={item}
                        />
                    </TouchableOpacity>
                    
                )}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom: 15
    },  
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

ResultList.propTypes = {
    title: PropTypes.string.isRequired
}