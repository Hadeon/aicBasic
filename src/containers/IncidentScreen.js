import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { StackNaviagtor } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-checkbox';

import SeverityLevel from '../components/severityLevel.js';
import Location from '../components/location.js';
import BriefDescription from '../components/briefDescription.js';
import AdditionalDetails from '../components/additionalDetails.js';
import IncidentDate from '../components/incidentDate.js';
import Employee from '../components/employee.js';

import mainStyles from '../styles/mainStyles.js';

export default class Incident extends React.Component {
    static: navigationOptions = {
        title: 'Incident Details',
    };

    render() {
        return (

            // Could implement react-redux to store the states but may as well save it with react-native-local-storage in case the application is not connected to the internet

            // Leverage the NetInfo to expose information on online/offline status so that the application will store the data locally until a wifi/wireless connection is made

            // Once NetInfo confirms connection, the application will then send the POST request to the API and await confirmation

            // Once the confirmation response is acquired the data is dropped from the device

            // Come to think of it redux will still need to be implemented so that the applications individual components can update their states which can then be compiled into a single object when the Submit Incident button is pressed

            <ScrollView style={mainStyles.incidentScreen}>
                <Text style={mainStyles.headerText}>Incident Details</Text>
                <Location/>
                <Employee/>
                <SeverityLevel/>
                <BriefDescription/>
                <AdditionalDetails/>
                <IncidentDate/>
                <Text style={mainStyles.headerTwo}>Active</Text>
                <CheckBox
                    id="activeBox"
                    label=''
                    onChange={(checked) => console.log('I am checked', checked)}
                    checkboxStyle={{
                        borderColor: 'skyblue',
                        borderWidth: 1
                    }}
                />
                <TouchableOpacity style={mainStyles.buttonContainer} onPress={() => console.log("Submit Incident")}>
                    <Text style={mainStyles.button}>Submit Incident</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
