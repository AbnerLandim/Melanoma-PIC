import React from 'react';
import { StyleSheet, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { Dropdown } from 'react-native-material-dropdown';


let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];

function Login(){
		return (
			<KeyboardAvoidingView style = { styles.background }>
                <View style={styles.containerLogo}>
                <Image style={styles.logo}
                    source={require('../assets/logo.png')}
                    />
                </View>

                <View style = {styles.form}>
                    <Text style={styles.titleText}>
                        Before we get started, let us know a little more about yourself...
                    </Text>
                    <Text style={styles.baseText}>
                        1. What is the color of your skin?
                    </Text>
                    <Dropdown
                    label='Favorite Fruit'
                     data={data}
                    />
                    <TextInput style = {styles.TextInput}
                    placeholder = "Last Name"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <TextInput style = {styles.TextInput}
                    placeholder = "E-mail"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <TextInput style = {styles.TextInput}
                    placeholder = "Password"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />

                    <TouchableOpacity style = {styles.sendButton}>
                        <Text style = {styles.buttonText}>Next</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.backButton}>
                        <Text style = {styles.buttonText}>Back</Text>
                    </TouchableOpacity>

                 </View>         
            </KeyboardAvoidingView>
		);
}

const styles = StyleSheet.create(
    {
        baseText: 
        {
            fontSize: 13,
            width: "73%",
            fontWeight: "bold",    
            marginBottom: 3,
        },
          titleText: 
        {
            fontSize: 16,
            width: "73%",
            fontWeight: "bold",
            marginBottom: 30
        },

        background:
        {
            flex: 1,
            backgroundColor: '#fffbf3' // Set your own custom Color
        },
        containerLogo:
        {
            maxHeight: "40%",
            top: "5%",
            alignItems: "center",

        },
        logo:
        {
            width: "84%",
            height: "84%",
            resizeMode: 'contain',
        },
        buttonText:
        {
            fontWeight: "bold",
            color: "#FFFFFF",
        },
        form:
        {
            marginTop: -25,
            top: "10%",
            alignItems: "center",
        },
        TextInput:
        {
            width: 290,
            height: 45,
            margin: 5,
            paddingLeft: 24,
            borderWidth: 2,
            borderColor: "#A8A8A8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
        },
        sendButton:
        {
            width: 290,
            height: 45,
            margin: 5,
            borderWidth: 1,
            borderColor: "#FF5C5C",
            backgroundColor: "#FF5C5C",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        },
        container:
        {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        sendEmail:
        {
            width: 250,
            margin: 8,
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A8A8",
            marginBottom: 15,
        },
        backButton:
        {
            margin: 5,
            width: 290,
            height: 45,
            borderWidth: 1,
            borderColor: "#FF802E",
            backgroundColor: "#FF802E",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        },
    });
   

export default Login;