import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { Image } from "expo-image";
import { defaultProfilePicUrl } from "../../../data";
import { useState } from "react";
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

interface ChatData {
    profilePic: string,
    chatName: string,
    recentMessage: string
}

function ChatElement({data: ChatData}) {
    return (
        <TouchableOpacity 
            style={styles.chatElement}
            activeOpacity={0.6}
        >
            <Image 
                source={ChatData.profilePic} 
                style={{
                    height: 52,
                    width: 52,
                    borderRadius: 50
                }}
            />
            <View>
                <View>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "500"
                        }}
                    >
                        {ChatData.chatName}
                    </Text>
                </View>
                <Text
                    style={{
                        color: "grey"
                    }}
                >
                    {ChatData.recentMessage}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default function Chats() {

    const userdata: ChatData = {
        profilePic: defaultProfilePicUrl,
        chatName: "Ayush Singhal",
        recentMessage: "Hello World"
    }

    const[isMenu, setIsMenu] = useState<boolean>(false);

    function Menu() {

        const options = ["New group", "New broadcast", "Linked devices", "Starred messages", "Payments", "Settings"];

        const handlePress = () => {
            setIsMenu(false);
        }

        const handlePressOption = (option: string) => {
            //TODO : functionality
            console.log(option);
        }

        return (
            <Pressable 
                style={styles.menu}
                onPress={handlePress}
            >
                <View style={styles.menuContainer}>
                    {
                        options.map((option, key) => (
                            <Text 
                                style={styles.menuText} 
                                key={key} 
                                onPress={() => handlePressOption(option)}
                            >
                                {option}
                            </Text>
                        ))
                    }
                </View>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text
                    style={{
                        fontSize: 22,
                        color: "white",
                        fontWeight: "500"
                    }}    
                >
                    WhatsApp
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 18,
                    }}
                >
                    <TouchableOpacity>
                        <Link href={"MainApp/CameraScreen"}>
                            <AntDesign name="camerao" size={24} color="white" />
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsMenu(true)}>
                        <Entypo name="dots-three-vertical" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.searchBar}>
                    <AntDesign name="search1" size={24} color="#485561" />
                    <TextInput                                                 
                        placeholder="Search..."
                        placeholderTextColor="#485561"
                        style={styles.searchBarText}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.archived}
                    activeOpacity={0.6}
                >
                    <MaterialCommunityIcons name="inbox-arrow-down-outline" size={24} color="white" />
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "500",
                            fontSize: 15
                        }}
                    >
                        Archived
                    </Text>
                </TouchableOpacity>
                <View style={styles.chats}>
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                    <ChatElement data={userdata} />
                </View>
                <View style={styles.alertText}>
                    <EvilIcons name="lock" size={22} color="grey" />
                    <Text
                        style={{
                            color: "grey",
                            fontSize: 12,
                            fontWeight: "500"
                        }}
                        >
                        Your personal messages are
                        <Text
                            style={{
                                color: "#018a7c"
                            }}
                            >
                            &nbsp;end-to-end-encrypted
                        </Text>
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.contacts}>
                <MaterialIcons name="add-comment" size={24} color="#0B141B" />
            </View>
            {
                isMenu ? <Menu /> : <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#101d29",
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 12
    },
    head: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    searchBar: {
        backgroundColor: "#242B31",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 12,
        borderRadius: 50,
        marginBottom: 5
    },
    searchBarText: {
        color: "white",
        width: screenWidth * 75/100,
    },
    archived: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        paddingVertical: 10,
        paddingLeft: 20,
        marginBottom: 10
    },
    chats: {
        display: "flex",
        gap: 10,
        marginBottom: 20,
        borderBottomColor: "grey",
        borderBottomWidth: 0.2,
        paddingBottom: 12
    },
    chatElement: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingLeft: 5,
        paddingVertical: 5
    },
    contacts: {
        backgroundColor: "#42c979",
        position: "absolute",
        padding: 16,
        borderRadius: 15,
        right: 18,
        bottom: 18
    },
    alertText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20
    },
    menu: {
        height: screenHeight,
        width: screenWidth,
        position: "absolute",
        zIndex: 100
    },
    menuContainer: {
        backgroundColor: "#13212b",
        position: "absolute",
        paddingVertical: 10,
        borderRadius: 8,
        right: 5,
        top: 50
    },
    menuText: {
        color: "white",
        fontSize: 16,
        paddingVertical: 12,
        paddingLeft: 15,
        paddingRight: 25,
    },
})