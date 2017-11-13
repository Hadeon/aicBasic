import React from 'react';
import {
    StyleSheet
} from 'react-native';

const mainStyles = StyleSheet.create({
    authenticationScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        paddingTop: '20%',
        backgroundColor: 'white'
    },
    incidentScreen:{
        padding: '5%',
        backgroundColor: 'white'
    },
    ogp:{
        width: 100,
        height: 100
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    headerTwo: {
        fontSize: 19,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textDecorationLine: 'underline'
    },
    inputContainer: {
        height: 50,
        width: '95%',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center',
        borderColor: 'skyblue',
        backgroundColor: '#f0f8ff',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#6495ED',
        color: 'white',
        width: '50%',
        marginTop: 20,
		marginBottom: 50,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '30%'
    },
    datepicker: {
        margin: 10,
        width: 200,

    },
    textInput: {
        fontSize: 20,
        height: 120,
        width: '90%',
        overflow: 'scroll',
        borderColor: 'skyblue',
        borderWidth: 1,
        backgroundColor: '#f0f8ff',
		textAlign: 'left',
		textAlignVertical: 'top'
    },
    dropdown: {
        backgroundColor: '#f0f8ff',
        height: 30,
        color: 'black',
        fontSize: 20
    }
});


export default mainStyles;
