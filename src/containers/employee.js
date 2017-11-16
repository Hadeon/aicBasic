import React from 'react';
import {
    View,
    Text,
    Picker
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import mainStyles from '../styles/mainStyles.js';

import {employees} from '../db/db.js';

export default class Employee extends React.Component {

    renderEmployees() {
        console.log("Hello world");
    }

    componentDidMount() {
        this.renderEmployees();
    }

    render(){

        return (
            <View>
                <Text style={{
                    fontSize:20, textDecorationLine:'underline', fontWeight: 'bold', marginTop: 10, marginBottom: -10
                }}>
                    Employee Name
                </Text>
                <Dropdown
                    placeholder="[SELECT ONE]"
                    label=''
                    data={employees}
                    // backgroundColor={'#f0f8ff'}
                    fontSize={20}
                    textcolor={'gray'}
                    selectedItemColor={'black'}
                    style={{
                        paddingLeft:10
                    }}
                />
            </View>
        )
    }
}
