import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Formik } from 'formik'

const Login = () => {

const submitForm = (loginProp) => {
    console.log(loginProps)
}

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Formik initialValues={{email:'', password: ''}}
                onSubmit={(values) => submitForm(values)} 
            >
            {({ handleChange, handleSubmit, values }) => 
                (<View style={styles.container}>
                    <Text style={styles.title}>LOGIN</Text>
                            <TextInput style={styles.input} name='email' keyboardType={'email-address'}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        placeholder='email' placeholderTextColor='white'/>
                    <TextInput style={styles.input} name='password' secureTextEntry
                                onChangeText={handleChange('password')}
                                value={values.password}
                                placeholder='password' placeholderTextColor='white'/>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.text}>Log In</Text></TouchableOpacity>
                    </View>
                </View>)}
            </Formik>
        </TouchableWithoutFeedback>
    )
}

export default Login
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
        backgroundColor: '#F74E2E',
        padding: 15,
        borderRadius: 6,
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: 16
    }
})
