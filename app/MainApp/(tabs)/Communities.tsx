import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";

const screenWidth = Dimensions.get("window").width;

export default function Communities() {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text
                    style={{
                        color: "white",
                        fontSize: 24,
                    }}
                >
                    Communities
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        marginRight: 2
                    }}
                >
                    <TouchableOpacity>
                        <Link href={"MainApp/CameraScreen"}>
                            <AntDesign name="camerao" size={24} color="white" />
                        </Link>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width: screenWidth,
                    paddingVertical: 40,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderBottomColor: "black",
                    borderBottomWidth: 12,
                }}
                activeOpacity={0.8}
            >
                <View
                    style={{
                        backgroundColor: "#8a8a8a",
                        position: "absolute",
                        padding: 12,
                        borderRadius: 12,
                        left: 14
                    }}
                >
                    <MaterialCommunityIcons name="account-group-outline" size={40} color="white" />
                    <View
                        style={{
                            backgroundColor: "#4ebf6d",
                            position: "absolute",
                            borderRadius: 50,
                            padding: 4,
                            right: -5,
                            bottom: -5,
                            borderColor: "#0B141B",
                            borderWidth: 2
                        }}
                    >
                        <AntDesign name="plus" size={18} color="black" />
                    </View>
                </View>
                <Text
                    style={{
                        color: "white",
                        fontSize: 21,
                        position: "absolute",
                        right: 90,
                        fontWeight: "500"
                    }}
                >
                    New community
                </Text>
                <Text>&nbsp;</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#101d29",
        flex: 1
    },
    navbar: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 12,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,
    }
});