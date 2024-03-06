import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function VerifyOTP() {

    const otp = useLocalSearchParams().otp;
    const [userCode, setUserCode] = useState("");

    useEffect(() => {
        if(userCode.length == 6 && userCode == otp)
        {
            console.log("MATCH");
        }
    }, [userCode]);

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.inputSection}>
                    <Text style={styles.mainText}>Verify 6-digit code</Text>
                    <TextInput 
                    placeholder="- - -  - - -"
                    placeholderTextColor="grey"
                    inputMode="numeric"
                    maxLength={6}
                    value={userCode}
                    style={styles.inputField}
                    onChangeText={update => setUserCode(update)}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        height : screenHeight,
        width : screenWidth,
        backgroundColor : "#101D24",
    },
    container : {
        height : screenHeight * 70/100,
        width : screenWidth,
        paddingHorizontal : 30,
        paddingVertical : 10,
        display : "flex",
        justifyContent : "center"
    },
    mainText : {
        color : "white",
        fontSize : 20
    },
    inputSection : {
        height : screenHeight * 25/100,
        display : "flex",
        alignItems : "center",
        justifyContent : "space-around"
    },
    inputField : {
        fontSize : 20,
        color : "white",
        borderBottomColor : "#00B09E", 
        borderBottomWidth : 2,
        letterSpacing : 3,
        width : 120,
        textAlign : "center"
    }
});