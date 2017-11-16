import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import mainStyles from '../styles/mainStyles.js';

export default class AdditionalDetails extends React.Component {
    render() {
        return (
            <View>
                <Text style={mainStyles.headerTwo}>Additional Details</Text>
                <TextInput style={mainStyles.textInput} maxLength={250} multiline={true}></TextInput>
            </View>
        );
    }
}
