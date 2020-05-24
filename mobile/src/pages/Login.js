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
                    placeholder = "E-mail"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />

                    <TextInput style = {styles.TextInput}
                    placeholder = "Password"
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />

                    <TouchableOpacity style = {styles.signinButton}>
                        <Text style = {styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.forgotPass}>Forgot your password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.createAcc}>
                        <Text style = {styles.buttonText}>Create an account</Text>
                    </TouchableOpacity>

                 </View>         
            </KeyboardAvoidingView>
		);
}

const styles = StyleSheet.create(
    {
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
        signinButton:
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
        forgotPass:
        {
            margin: 8,
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A8A8",
        },
        createAcc:
        {
            marginTop: "30%",
            width: 290,
            height: 45,
            margin: 5,
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