import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image
} from 'react-native';

import mainStyles from '../styles/mainStyles.js';

export default class RecordHistory extends React.Component {
    render() {
        return (
            <View style={mainStyles.recordHistory}>
                <Text style={this.props.color}>{this.props.recordText}</Text>
            </View>
        );
    }
}
