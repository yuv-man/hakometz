import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'

const Details = ({ navigation, route }) => {
    const item  = route.params

    return (
        <View style={globalStyles.container}>
            <Text>{item.date.toString().slice(0,21)}</Text>
            <Text style={globalStyles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.location}</Text>
            <Text>{item.type}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
