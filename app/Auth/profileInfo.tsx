import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Image } from "expo-image";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

const img: string = require("../../assets/AddImage.jpg")

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function ProfileInfo() {

    const [image, setImage] = useState(img);
    const [name, setName] = useState("");

    const userData = useLocalSearchParams();

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleNextBtn = () => {
        console.log(name);
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View>
                        <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginBottom:10}}>Profile info</Text>
                    </View>
                    <View style={{display:"flex", alignItems:"center"}}>
                        <Text style={{color:"#a1a1a1"}}>Please provide your name and an optional</Text>
                        <Text style={{color:"#a1a1a1"}}>profile photo</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} onPress={pickImage}>
                        <Image source={image} style={styles.profilePhoto}/>
                    </TouchableOpacity>
                    <View style={styles.inputField}>
                        <TextInput 
                        placeholder="Type your name here"
                        placeholderTextColor="#a1a1a1"
                        style={{color:"white", fontSize:15}}
                        value={name}
                        onChangeText={newName => setName(newName)}
                        />
                    </View>
                </View>
                <TouchableOpacity
                style={styles.button}
                onPress={handleNextBtn}
                >
                    <Text style={{color:"#101D24", fontWeight:"500"}}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main : {
        height : screenHeight,
        width : screenWidth,
        backgroundColor : "#101D24",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    },
    container : {
        height : screenHeight * 93/100,
        width : screenWidth * 92/100,
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between"
    },
    upperContainer : {
        display : "flex",
        alignItems : "center",
        gap : 25
    },
    button : {
        width : screenWidth * 25/100,
        display : 'flex',
        alignItems : "center",
        justifyContent : "center",
        paddingVertical : 12,
        borderRadius : 50,
        backgroundColor : "#00B09E",
    },
    profilePhoto : {
        height : 120,
        width : 120,
        borderRadius : 100
    },
    inputField : {
        width : screenWidth * 80/100,
        borderBottomColor : "#00B09E", 
        borderBottomWidth : 2, 
    }
});