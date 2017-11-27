import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import mainStyles from '../styles/mainStyles.js';

import {severityLevel} from '../db/db.js';

export default class SeverityLevel extends React.Component {

    renderLocations() {
        console.log("Hello world");
    }

    componentDidMount() {
        this.renderLocations();
    }

    render(){

        return (
            <View>
                <Text style={{
                    fontSize:20, textDecorationLine:'underline', fontWeight: 'bold', marginTop: 10, marginBottom: -10
                }}>
                    Severity Level
                </Text>
                <Dropdown
                    placeholder="[SELECT ONE]"
                    label=''
                    data={severityLevel}
                    //backgroundColor={'#f0f8ff'}
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
