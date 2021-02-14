import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


const UserProfile = () => {

    const [mockUser, setMockUser] = useState({
        userName: 'yuval',
        email: 'aa@aa.com',
        profileImage: require('../../assets/zohar.jpg')
    })

    const pickPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setMockUser({...mockUser, ['profileImage']:result.uri});
        }
    }



const handleSubmit = () => {
    console.log(mockUser)
}

useEffect(() => {
    (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    })();
}, []);

return (
    <View style={styles.container}>
        <View style={styles.bubble}>
            <Text style={styles.title}>User Profile</Text>
            <View style={styles.imgCon}>
                <Image style={styles.image} source={mockUser.profileImage} />
            </View>
            <TouchableOpacity style={styles.pick} onPress={pickPicture}>
                <Text><MaterialIcons name="add-photo-alternate" size={24} color="black" />
                </Text>
            </TouchableOpacity>
            <Text>User Name:</Text>
            <TextInput style={styles.text}
                onChangeText={text => setMockUser({ ...mockUser, ['userName']: text })}
                value={mockUser.userName} />
            <Text>E-mail:</Text>
            <TextInput style={styles.text}
                onChangeText={text => setMockUser({ ...mockUser, ['email']: text })}
                value={mockUser.email} />
            <View style={{ marginTop: 10 }}>
                <Button color='#AD0B0D' title='Save Changes' onPress={handleSubmit} />
            </View>

        </View>
    </View>
)
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102733',
        alignItems: 'center'
    },
    bubble: {
        flex: 1,
        backgroundColor: '#F7A68B',
        margin: 30,
        width: '90%',
        borderRadius: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    imgCon: {
        marginTop: 40,
        height: 150,
        width: 150,
        resizeMode: 'contain',
        marginBottom: 10
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    text: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        marginTop: 5,
        width: 200,
        alignSelf: 'center',
        marginBottom: 15
    },
    pick: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 10,
        position: 'relative',
        right: 50,
        bottom: 40
    }
})
