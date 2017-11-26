import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import DatePicker from 'react-native-datepicker';

import mainStyles from '../styles/mainStyles.js';

export default class IncidentDate extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:""}
    }

    render() {
        return (
            <View>
                <Text style={mainStyles.headerTwo}>Date of Incident</Text>
                <DatePicker
                    placeholder="[SELECT ONE]"
                    style={mainStyles.datepicker}
                    date={this.state.date}
                    confirmBtnText={'Confirm'}
                    cancelBtnText={'Cancel'}
                    onDateChange={(date) => {this.setState({date: date})}}
                    customStyles={{
                        dateInput: {
                            backgroundColor: '#f0f8ff',
                            width: 40
                        },
                        placeholderText: {
                            fontSize: 20
                        },
                        dateText: {
                            fontSize: 20
                        }
                    }}
                />
            </View>
        );
    }
}
