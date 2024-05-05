import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Image } from 'expo-image'
import { Linking } from "react-native";
import { Link } from "expo-router";

const logo = require("../../assets/welcome_page_logo.jpeg")

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const privacyPolicy = "https://www.whatsapp.com/legal/privacy-policy";
const termsOfServices = "https://www.whatsapp.com/legal/terms-of-service";

export default function Welcome() {

    const privacyPolicyClick = async() => {
        const supported = await Linking.canOpenURL(privacyPolicy);
        if(supported)
        {
            await Linking.openURL(privacyPolicy);
        }
    };
    const termsOfServicesClick = async() => {
        const supported = await Linking.canOpenURL(termsOfServices);
        if(supported)
        {
            await Linking.openURL(termsOfServices);
        }
    };

    return (
        <View style={styles.main}>
           <View style={styles.container}>
            <View>
                    <Image 
                    style={styles.image}
                    source={logo}
                    />
            </View>
            <View style={{marginBottom: 100}}>
                <Text style={styles.heading}>Welcome to WhatsApp</Text>
                <Text style={styles.message}>
                    Read your <Text style={{color: "#68BAE3"}} onPress={privacyPolicyClick}>Privacy Policy.</Text> Tap "Agree and continue" to accept the <Text style={{color: "#68BAE3"}} onPress={termsOfServicesClick}>Terms of Services</Text>.
                </Text>
            </View>
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.8} 
            >
                {/* <Link href="/Auth/login"> */}
                <Link href="/MainApp">
                    <Text 
                        style={{
                            color: "#101D24",
                            fontWeight: "500",
                        }}
                    >
                        Agree and continue
                    </Text>
                </Link>
            </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        height : screenHeight,
        backgroundColor : "#101D24",
        alignItems : "center",
        justifyContent : "center"
    },
    container : {
        height : screenHeight,
        width : screenWidth * 85/100,
        alignItems : "center",
        justifyContent : "space-around"
    },
    heading : {
        color : "white",
        fontSize : 26,
        fontWeight : "500",
        paddingHorizontal : 0,
        marginBottom : 20
    },
    message : {
        color : "#969C9E"
    },
    image : {
        height : 270, 
        width : 270, 
        borderRadius : 270/2
    },
    button : {
        backgroundColor : "#00B09E",
        paddingVertical : 12,
        paddingHorizontal : 80,
        borderRadius : 50,
    }
});
