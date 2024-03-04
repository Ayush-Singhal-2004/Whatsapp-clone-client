import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";

import { useState } from "react";
import axios from "axios";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Login() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);

    const handleSubmit = async() => {
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9]{5,}[@]{1}[a-z]{3,}[.]{1}[a-z]{2,}$/;
        if(phoneRegex.test(phoneNumber) && emailRegex.test(email))
        {
            setIsError(false);
            const response = await axios.post("http://192.168.229.79:3001/email/send-email", {
                "phoneNumber" : phoneNumber,
                "email" : email
            })
            console.log(response);
            return
        }
        console.log("Invalid phone or email");
        setIsError(true);
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.enterMessage}>
                    <Text
                    style={{color: "white", fontSize: 18, fontWeight: "500", marginBottom: 30}}
                    >Enter your phone number</Text>
                </View>
                <View style={{alignItems: "center", gap: 10, marginBottom: 20}}>
                    <Text 
                    style={styles.textColor}
                    >
                        WhatsApp will need to verify your account.
                    </Text>
                    <Text style={{color: "#018a7c"}}>What's my number?</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View 
                    style={styles.countryCode}
                    >
                        <Text style={{color: "#949494", fontSize: 16}}>+</Text>
                        <Text style={[styles.textColor, {fontSize: 16}]}>91</Text>
                    </View>
                    <View 
                    style={{ borderBottomColor : "#00B09E", borderBottomWidth : 2, width: screenWidth*40/100}}
                    >
                        <TextInput 
                        placeholder="phone number"
                        keyboardType="numeric"
                        style={styles.inputField}
                        placeholderTextColor="#949494"
                        value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
                        />
                    </View>
                </View>
                <View style={{borderBottomColor : "#00B09E", borderBottomWidth : 2,
                width: screenWidth*60/100, marginBottom: 10}}>
                    <TextInput 
                    placeholder="Enter email"
                    placeholderTextColor="#949494"
                    style={styles.inputField}
                    value={email}
                    onChangeText={newEmail => setEmail(newEmail)}
                    />
                </View>
                {
                    isError ?
                    <Text style={{color: "#ff6b7a"}}>Invalid phone or email!!</Text>
                    : <View></View>
                }
                <View style={{position: "absolute", bottom : 10}}>
                    <TouchableOpacity 
                    style={styles.nextBtn}
                    activeOpacity={0.8}
                    onPress={handleSubmit}
                    >
                        <Text style={{color: "#101D24", fontWeight: "500"}}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main : {
        height : screenHeight,
        backgroundColor : "#101D24",
        alignItems : "center",
        justifyContent : "center",
    },
    container : {
        height : screenHeight * 95/100,
        width : screenWidth * 90/100,
        alignItems : "center",
        paddingTop : 20
    },
    enterMessage : {
        flexDirection : "row",
        alignItems : "center",
    },
    inputContainer : {
        flexDirection : "row",
        gap : 15,
        marginBottom : 30
    },
    inputField : {
        color : "white",
        fontSize : 16
    },
    textColor : {
        color : "white"
    },
    countryCode : {
        flexDirection: "row", 
        gap: 15,
        borderBottomColor : "#00B09E", 
        borderBottomWidth : 1, 
        alignItems: "center"
    }, 
    nextBtn : {
        backgroundColor : "#00B09E",
        paddingHorizontal : 26,
        paddingVertical : 9,
        borderRadius : 50
    }
});