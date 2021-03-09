import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, HomeDetailScreen } from '../screens';

const Stack = createStackNavigator();

const Routes = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen 
                    name='HomeDetail'
                    component={HomeDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;