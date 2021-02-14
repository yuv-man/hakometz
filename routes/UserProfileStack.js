import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import Header from '../shared/Header'
import UserProfile from '../screens/drawer/UserProfile'

const Stack = createStackNavigator()

function UserProfileStack(){
    return(
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#F74E2E',
                },
                headerTintColor: '#fff'
            }}>
                <Stack.Screen name='User Profile' component={UserProfile}
                    options= {({navigation, route }) => ({
                        headerTitle: () => <Header title={'User Profile'} navigation={navigation}/>
                        })}
                />
            </Stack.Navigator>
    )
}

export default UserProfileStack