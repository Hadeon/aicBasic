import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    View,
    Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-checkbox';

import SeverityLevel from '../containers/severityLevel.js';
import Location from '../containers/location.js';
import BriefDescription from '../containers/briefDescription.js';
import AdditionalDetails from '../containers/additionalDetails.js';
import IncidentDate from '../containers/incidentDate.js';
import Employee from '../containers/employee.js';
import NavBar from '../containers/navBar.js';

import mainStyles from '../styles/mainStyles.js';

export default class Incident extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Incident',
        header: <NavBar backButton={
            <TouchableOpacity onPress={
                    handleBack = () => {

                        const { navigate } = {navigation};

                        const resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: "Home" })
                            ]
                        })

                        navigation.dispatch(resetAction);}} style={mainStyles.navBarButton}>
                <Text style={mainStyles.navBarText}>Back</Text>
            </TouchableOpacity>
        }/>
      });

    render() {

        return (
            // Leverage the NetInfo to expose information on online/offline status so that the application will store the data locally until a wifi/wireless connection is made

            // Once NetInfo confirms connection, the application will then send the POST request to the API and await confirmation

            // Once the confirmation response is acquired the data is dropped from the device
            <View>
                <View style={mainStyles.navBar}>
                    <Image style={mainStyles.ogpNav} source={require('../images/ogp.png')}/>
                    <TouchableOpacity onPress={handleBack} style={mainStyles.navBarButton}>
                        <Text style={mainStyles.navBarText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={mainStyles.mainContainer}>
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
            </View>
        );
    }
}
