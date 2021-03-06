import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image
} from 'react-native';

import mainStyles from '../styles/mainStyles.js';

export default class Home extends React.Component {
	static: navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        const navigateHistory = () => {
            navigate("History");
        }

		const navigateIncident = () => {
			navigate("Incident");
		}
		return(
			<View>
				<View style={mainStyles.navBar}>
					<Image style={mainStyles.ogpNav} source={require('../images/ogp.png')}/>
				</View>
                <ScrollView style={mainStyles.homeContainer}>
                    <Text style={mainStyles.headerText}>Welcome</Text>
					<Text style={mainStyles.footerText}>If a record is created while offline, the data will be submitted upon the application being notified of a change in connection.</Text>
					<View style={{marginTop: 20}}>
						<TouchableOpacity style={mainStyles.buttonContainer} onPress={navigateIncident}>
							<Text style={mainStyles.button}>Create Record</Text>
						</TouchableOpacity>
						<TouchableOpacity style={mainStyles.buttonContainer} onPress={navigateHistory}>
							<Text style={mainStyles.button}>Record History</Text>
						</TouchableOpacity>
					</View>
                </ScrollView>
				<View style={mainStyles.footer}>
					<Text style={mainStyles.footerText}>Applications International 2017</Text>
				</View>
            </View>
		)
	}
}
