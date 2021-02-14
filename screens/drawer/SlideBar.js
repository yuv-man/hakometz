import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Drawer, Paragraph, Caption, Title} from 'react-native-paper'

const SlideBar = ({...props}) => {
    return (
            <DrawerContentScrollView {...props}>
                <DrawerItem style={styles.name} label='hello Sir'/>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
    )
}

export default SlideBar

const styles = StyleSheet.create({
    name: {
        borderBottomColor: '#F0F0F0',
        borderBottomWidth: 2,
        marginBottom: 10
    }
})
