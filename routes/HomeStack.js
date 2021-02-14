import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/stack/Home'
import AddEvent from '../screens/stack/AddEvent'
import Details from '../screens/stack/Details'
import Header from '../shared/Header'
import Signup from '../screens/drawer/Signup'
import Login from '../screens/drawer/Login'
import { EventContext } from '../utils/EventContext'

const Stack = createStackNavigator()

function StackNavigator() {

    const { user, setUser } = useContext(EventContext)

    return(
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#F74E2E',
                },
                headerTintColor: '#fff'
            }}>

            { user? <>
                        <Stack.Screen name='Home' component={Home} 
                            options={({ navigation, route }) => ({
                                headerTitle: () => <Header navigation={navigation} title={'Home'} />
                            })}
                        />
                        <Stack.Screen name='Details' component={Details}/>
                    </> :
                    <>
                        <Stack.Screen name='Log In' component={Login}/>
                        <Stack.Screen name='Sign Up' component={Signup}/>
                    </>
            }
            </Stack.Navigator>
    )
}

export default StackNavigator



