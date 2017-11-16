import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import mainStyles from '../styles/mainStyles.js';

export default class Authenticate extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: '', valid: ''};
    }

    static: navigationOptions = {
        title: 'Authenticate',
    }

    render() {
        const { navigate } = this.props.navigation;

        const checkCode = () => {
            if(this.state.text.length == 12){
                    navigate("Incident")
            }
            else{
                this.setState({valid: 'Invalid code.'});
            }
        }

        return (
            <View style={mainStyles.authenticationScreen}>
                <Image
                    style={mainStyles.ogp}
                    source={require('../images/ogp.png')}
                    />
                <Text style={mainStyles.headerText}>Please enter your authorization code.</Text>
                <TextInput style={mainStyles.inputContainer} onChangeText={(text)=> this.setState({text})} value={this.state.text} maxLength= {12}/>
                <TouchableOpacity style={mainStyles.buttonContainer} onPress={checkCode}>
                    <Text style={mainStyles.button}>Authenticate</Text>
                </TouchableOpacity>
                <View>
                    <Text style={mainStyles.errorMessage}>{this.state.valid}</Text>
                </View>
                <View style={mainStyles.footer}>
                    <Text style={mainStyles.footerText}>Applications International 2017</Text>
                </View>

            </View>
        );
    }
}
