import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity, Text, Picker, SafeAreaView, ScrollView, ScrollViewComponent } from 'react-native';
import { color } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';



function Login(){

    const [selectedValue, setSelectedValue] = useState("java");

		return (
			<KeyboardAvoidingView style = { styles.background }>
                <ScrollView>
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
                    <TextInput style = {styles.TextInput}
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <Text style={styles.baseText}>
                        2. What is the natural color of your hair, that which you had when you were 20 years old?
                    </Text>
                    <TextInput style = {styles.TextInput}
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <Text style={styles.baseText}>
                        3. What is the color of your eyes?
                    </Text>
                    <TextInput style = {styles.TextInput}
                    autoCorrect = {false}
                    onChangeText = {()=> {}}
                    />
                    <Text style={styles.baseText}>
                        4. Does your skin turn red after being exposed to the sun without any protection?
                    </Text>
                    <TextInput style = {styles.TextInput}
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
                 </ScrollView>
           </KeyboardAvoidingView>
		);
}

const styles = StyleSheet.create(
    {
        scrollView: 
        {
            backgroundColor: '#fffbf3',
            flex: 1
            //marginHorizontal: 20,
        },
        container: 
        {
            flex: 1,
            paddingTop: 40,
            alignItems: "center"
        },
        baseText: 
        {
            marginTop: 8,
            fontSize: 13,
            width: "73%",
            fontWeight: "bold",
            marginBottom: 2,
        },
          titleText: 
        {
            marginTop: 30,
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
            width: "96%",
            height: "96%",
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