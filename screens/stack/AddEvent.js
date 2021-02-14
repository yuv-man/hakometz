import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, 
    Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { EventContext } from '../../utils/EventContext'
import { Formik } from 'formik'
import { DatePicker } from '../../utils/Date'
import { Picker } from 'native-base'


const AddEvent = ({setOpenModal}) => {

    const { events, setEvents } = useContext(EventContext) 

    const submitForm = (form) =>{
        form.key = Math.random().toString()
        form.date = form.date
        setEvents([...events, form])
        setOpenModal(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Formik initialValues={{title:'', description: '', type: 'beer', date: new Date(), location: '', key:''}}
                    onSubmit={(values) => submitForm(values)} 
                    >
                    {({ handleChange, handleSubmit, values, setFieldValue }) => 
                        (<View>
                            <Text>Title</Text>
                            <TextInput style={styles.text} name='title'
                                        onChangeText={handleChange('title')}
                                        value={values.title}/>
                            <Text>Description</Text>
                            <TextInput style={styles.text} name='description' multiline
                                        onChangeText={handleChange('description')} 
                                        value={values.description}/>
                            <Text>Event type</Text>
                            <Picker style={styles.text} 
                                selectedValue={values.type}
                                onValueChange={(itemValue) => {
                                    setFieldValue('type', itemValue)}}>
                                <Picker.Item label='beer' value='beer'/>
                                <Picker.Item label='birthday' value='birthday'/>
                                <Picker.Item label='dinner' value='dinner'/>
                                <Picker.Item label='park' value='park'/>
                                <Picker.Item label='party' value='party'/>
                                <Picker.Item label='crazy event' value='crazy'/>
                                <Picker.Item label='other' value='other'/>
                            </Picker>
                            <Text>Date</Text>

                            <DatePicker value={values.date} setFieldValue={setFieldValue}/>
                            
                            <Text>Location</Text>
                            <TextInput style={styles.text} name='location'
                                        onChangeText={handleChange('location')} 
                                        value={values.location}
                            />
                            <View style={styles.button}>
                                <Button title='add event' onPress={handleSubmit}/>
                            </View>    
                    </View>)
                }
            </Formik>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AddEvent

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // backgroundColor: '#fff',
        marginHorizontal: 20, 
        // alignItems: 'center',
        justifyContent: 'center',

    },
    text:{
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 10
    },
    title: {
        marginVertical: 15,
        fontSize: 20,
        alignSelf: 'center'
    },
    button: {
        marginTop: 10
    }
})


// 