import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import Header from '../shared/Header'
import History from '../screens/drawer/History'
import Details from '../screens/stack/Details'

const Stack = createStackNavigator()

function HistoryStack(){
    return(
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#F74E2E',
                },
                headerTintColor: '#fff'
            }}>
                <Stack.Screen name='History' component={History}
                    options= {({navigation, route }) => ({
                        headerTitle: () => <Header title={'History'} navigation={navigation}/>
                        })}
                />
                <Stack.Screen name='Details' component={Details}
                    options= {({navigation, route }) => ({
                        headerTitle: () => <Header title={'Details'} navigation={navigation}/>
                        })}
                />
            </Stack.Navigator>
    )
}

export default HistoryStack