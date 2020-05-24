import React from 'react';
import { StyleSheet, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { color } from 'react-native-reanimated';



function Login(){
		return (
			<KeyboardAvoidingView style = { styles.background }>
                <View style={styles.containerLogo}>
                <Image style={styles.logo}
                    source={require('../assets/logo.png')}
                    />
                </View>

                <View style = {styles.form}>

                    <TextInput style = {styles.TextInput}
                    placeholder = "Gender"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <TextInput style = {styles.TextInput}
                    placeholder = "Date of birth"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <TextInput style = {styles.TextInput}
                    placeholder = "Phone Number"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <View style={styles.row}>
                        <TextInput style = {styles.row1}
                        placeholder = "Country"
                        autoCorrect = {false}
                        onChangeText = {()=> {}}
                        />
                        <TextInput style = {styles.row2}
                        placeholder = "State"
                        autoCorrect = {false}
                        onChangeText = {()=> {}}
                    /></View>

                    <TextInput style = {styles.TextInput}
                    placeholder = "City"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />

                    <TouchableOpacity style = {styles.sendButton}>
                        <Text style = {styles.buttonText}>Register</Text>
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

        row: 
        {
            flexDirection: "row"
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
        row1:
        {
            width: 185,
            height: 45,
            margin: 5,
            paddingLeft: 24,
            borderWidth: 2,
            borderColor: "#A8A8A8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
        },
        row2:
        {
            width: 93,
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