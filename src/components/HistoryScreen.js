import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

import { StackNaviagtor } from 'react-navigation';

import NavBar from '../containers/navBar.js';
import RecordHistory from '../containers/recordHistory.js';

import mainStyles from '../styles/mainStyles.js';

export default class History extends React.Component {
    static: navigationOptions = {
        title: 'History',
    };

    render() {
        const { navigate } = this.props.navigation;

        const handleNavigate = (routeName) => {
            navigate("Incident");
        }

        return (
            <View>
                <View style={mainStyles.navBar}>
                    <Text style={mainStyles.navHeader}>History</Text>
                    <TouchableOpacity onPress={handleNavigate} style={mainStyles.navBarButton}>
                        <Text style={mainStyles.navBarText}>Create Record</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={mainStyles.mainContainer}>
                    <Text style={mainStyles.headerText}>Records Created</Text>
                    <Text style={mainStyles.footerText}>If a record is submitted while offline it will be accompanied by a red marker. Once internet connection is reestablished the record will submit and the marker will be updated to green.</Text>
                    <RecordHistory color={mainStyles.green} recordText={"Record 1: Incident ID 131"}/>
                    <RecordHistory color={mainStyles.green} recordText={"Record 2: Incident ID 228"}/>
                    <RecordHistory color={mainStyles.red} recordText={"Record 3: (Waiting on connection for server response)"}/>
                </ScrollView>
            </View>
        );
    }
}
