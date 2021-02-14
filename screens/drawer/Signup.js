import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, 
    Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { EventContext } from '../../utils/EventContext'
import { Formik } from 'formik'

const Signup = () => {


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Formik initialValues={{userName: '', email:'', password: ''}}
                onSubmit={(values) => submitForm(values)} 
            >
            {({ handleChange, handleSubmit, values }) => 
                (<View style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput style={styles.input} name='userName'
                                onChangeText={handleChange('userName')}
                                value={values.userName}
                                placeholder='userName' placeholderTextColor='white'/>
                    <TextInput style={styles.input} name='email' keyboardType={'email-address'}
                                onChangeText={handleChange('email')}
                                value={values.email}
                                placeholder='email' placeholderTextColor='white'/>
                    <TextInput style={styles.input} name='password' secureTextEntry
                                onChangeText={handleChange('password')}
                                value={values.password}
                                placeholder='password' placeholderTextColor='white'/>
                    <View style={styles.button}>
                        <Button color='#0F7844' title='Sign Up' onPress={handleSubmit}/>
                    </View>
                </View>)}
            </Formik>
        </TouchableWithoutFeedback>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#102733'
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginVertical: 30
    },
    input: {
        width: 250,
        backgroundColor: '#293F4D',
        color: 'white',
        padding: 15,
        marginBottom: 20,
        borderRadius: 6,
        fontSize: 16
    },
    button: {
        width: 250,
    }
})


