import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Quiz' component={Quiz} />
                <Stack.Screen name='Result' component={Result} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router