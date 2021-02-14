import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { iconType } from '../../shared/EventType'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EventBubble = ({item ,navigation}) => {

    const [users, setUsers] = useState([
        {userName: 'yuval',
        email: 'aa@aa.com',
        profileImage: require('../../assets/zohar.jpg')}
    ])

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Details', item)} >
                <View style={styles.bubble}>
                    <View style={styles.info}>
                        <View style={styles.allDate}>
                            <Text style={styles.num}>{item.date.toString().slice(8,10)}</Text>
                            <Text style={styles.date}>{item.date.toString().slice(0,7)}</Text>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>
                                <Entypo name="location-pin" size={24} color="white" />{item.location}</Text>
                        </View>
                    </View>
                    <Text>{item.type && iconType.icons[item.type]}</Text>
                </View>
                <View style={styles.count}>
                    <TouchableOpacity style={styles.add}>
                    <MaterialCommunityIcons name="fire" size={24} color="#F74E2E" />
                        <Text style={{color:'#F74E2E'}}>Count Me In</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: '#FFCCCB', marginRight: 5, fontSize: 18}}>
                        {users.length}</Text>
                        <MaterialCommunityIcons name="account-group" 
                        size={24} color="#FFCCCB" />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default EventBubble

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2A414E',
        marginBottom: 5,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    bubble:{ 
        paddingRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#333',
        borderBottomWidth: 2,
        borderBottomColor: '#FACC00'

    },
    text:{
        flexDirection: 'column',
        marginLeft: 20,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 25
    },
    date: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    allDate:{
        flexDirection: 'column',
        alignItems:'center',
        marginRight: 20
    },
    num: {
        borderRadius: 35,
        backgroundColor: '#FACC00',
        padding: 10,
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    info: {
        flexDirection: 'row'
    },
    location:{
        fontSize: 18,
        color: 'white'
    },
    add: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    count: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 7
    },
})
