import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({title, navigation}) => {

    const handlePress = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={handlePress} style={styles.icon}/>
            <View >
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'white'
    },
    icon:{
        position: 'absolute',
        left: 16
    }
})
