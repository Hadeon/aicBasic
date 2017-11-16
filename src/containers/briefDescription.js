import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import mainStyles from '../styles/mainStyles.js';

export default class BriefDescription extends React.Component {
    render() {
        return (
            <View>
                <Text style={mainStyles.headerTwo}>Brief Description</Text>
                <TextInput style={mainStyles.textInput} maxLength={250} multiline={true}></TextInput>
            </View>
        );
    }
}
