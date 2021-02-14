import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, 
    FlatList } from 'react-native'
import EventBubble from './EventBubble'
import { EventContext } from '../../utils/EventContext'

const EventList = ({ navigation }) => {

    const { events } = useContext(EventContext)

    const pressHandler = (key) => {
        console.log(key)
    }

    return (
        <View style={styles.list}>
            <FlatList 
                numColumns={1}
                keyExtractor={(item) => item.key}
                data={events}
                renderItem={({item}) => (
                    <EventBubble item = {item} navigation={navigation} />
                )} /> 
        </View>
    )
}

export default EventList

const styles = StyleSheet.create({
    list:{
        flex: 1,
        marginTop: 20
    }
})

