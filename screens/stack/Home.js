import React, { useState, useContext } from 'react';
import {StyleSheet, TouchableWithoutFeedback, Keyboard, View, Text, Modal } from 'react-native';
import AddEvent from './AddEvent'
import EventList from './EventList'
import { EventContext } from '../../utils/EventContext'
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {

    const { events, setEvents } = useContext(EventContext)
    const [openModal, setOpenModal] = useState(false)

    const handleEvent = () => {   
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <Modal visible={openModal}>
                    <Ionicons name="ios-close" size={30} color="black" onPress={closeModal}/>
                    <AddEvent setOpenModal={setOpenModal}/>
                </Modal>

                <Text style={styles.title}>Upcoming Events</Text>
                <TouchableWithoutFeedback onPress={handleEvent}>
                    <Text style={styles.add}>
                        <Ionicons name="ios-add" size={30} color="black" />
                    </Text>
                </TouchableWithoutFeedback>
                <EventList events = {events} navigation={navigation}/>
            </View>  
        </TouchableWithoutFeedback>
        );
    }

    export default Home
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102733',
        justifyContent: 'center',
        },
        title: {
            marginVertical: 15,
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'white'
        },
        add: {
            alignSelf:'flex-end',
            borderColor: '#333',
            borderWidth: 2,
            borderRadius: 8,
            padding: 10,
            backgroundColor: 'white',
            marginRight: 20
        }
});
