import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import mainStyles from '../styles/mainStyles.js';

export default class HomeScreen extends React.Component {
	render(){
		return(
			<View>
				<Text style={mainStyles.headerText}>Incident Management Mobile</Text>
			</View>
		)
	}
}
