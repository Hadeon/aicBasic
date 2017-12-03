import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import mainStyles from '../styles/mainStyles.js';

export default class NavBar extends React.Component {
    render() {
        return (
            <View style={mainStyles.navBar}>
                <Image style={mainStyles.ogpNav} source={require('../images/ogp.png')}/>
                {this.props.backButton}
            </View>
        );
    }
}
