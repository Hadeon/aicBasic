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
    mainContainer:{
        padding: '5%',
        backgroundColor: 'white',
        marginTop: 75
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
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 10
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
		textAlign: 'left',
		textAlignVertical: 'top'
    },
    dropdown: {
        height: 30,
        color: 'black',
        fontSize: 20
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    footerText: {
        fontSize: 12,
        color: 'gray'
    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        width: '100%',
        backgroundColor: '#252525',
        top: 25,
    },
    navBarButton: {
        padding: 10,
        backgroundColor: '#555',
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5
    },
    navBarText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    navHeader: {
        position: 'absolute',
        left: 10,
        marginTop: 15,
        fontSize: 15,
        color: 'white'
    },
    recordHistory: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#e0e8ee',
        marginTop: 10,
        height: 50
    },
    green: {
        color: 'green',
        marginLeft: 25
    },
    red: {
        color: 'red',
        marginLeft: 25
    }
});


export default mainStyles;
