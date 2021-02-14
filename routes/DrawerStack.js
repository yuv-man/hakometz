import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'
import UserProfileStack from './UserProfileStack'
import SlideBar from '../screens/drawer/SlideBar'
import HistoryStack from './HistoryStack'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const DrawerNavigator = createDrawerNavigator()

const DrawerStack = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator drawerContent= {props => <SlideBar {... props}/>} >
            <DrawerNavigator.Screen name="Home" component={HomeStack}
            options={{
                title: 'Home',
                drawerIcon: ({focused, size}) => (
                <Ionicons
                    name="md-home"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                />
                ),
            }}/>
                <DrawerNavigator.Screen name='User Profile' component={UserProfileStack}
                options={{
                    drawerIcon: ({focused, size}) => (
                        <FontAwesome name="user-circle-o" 
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                        ),
                }}/>
                <DrawerNavigator.Screen name='History' component={HistoryStack}
                options={{
                    drawerIcon: ({focused, size}) => (
                        <FontAwesome name="history" 
                        size={size}
                        color={focused ? '#7cc' : '#ccc'}
                    />
                    ),
                }}/>
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default DrawerStack

const styles = StyleSheet.create({})
