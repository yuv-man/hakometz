import React, { useState } from 'react';
import { StyleSheet, View, Button, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const DatePicker = ({setFieldValue, value}) => {
    const [date, setDate] = useState();
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log(`crrentDate ${currentDate}`)
        setShow(false);
        setDate(currentDate);
        setFieldValue('date', currentDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View style={styles.btns}>
                <TouchableOpacity style={styles.date} onPress={showDatepicker}>
                    <MaterialIcons name="date-range" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.date} onPress={showTimepicker}>
                    <Ionicons name="ios-time-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    date: {
        flexWrap: 'wrap',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        marginLeft: 20
    },
    btns: {
        justifyContent:'center',
        flexDirection: 'row'

    }
})