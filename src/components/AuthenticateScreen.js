import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';
import * as actions from '../actions';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import mainStyles from '../styles/mainStyles.js';

class Authenticate extends React.Component {
    constructor(props){
        super(props);
        this.state = { text: '', valid: ''};
    }

	static navigationOptions = {
	header: null,
	};

    render() {
        function setAuthKey(value){
            AsyncStorage.setItem('authKey', value).then((value) => console.log(value));
        }

        const { navigate } = this.props.navigation;
        const checkCode = () => {
            if(this.state.text.length == 12){
                setAuthKey(this.state.text);
                navigate("Home");
            }
            else{
                this.setState({valid: 'Invalid code.'});
            }
        }

        return (
            <View style={mainStyles.authenticationScreen}>
                <Image style={mainStyles.ogp} source={require('../images/ogp.png')}/>
				<Text style={mainStyles.headerText}>Incident Management Mobile</Text>
				<Text style={mainStyles.footerText}>Please enter your authorization code.</Text>
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

export default connect()(Authenticate);
