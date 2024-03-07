import { ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import { BlurView } from "expo-blur"

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

export default function Loading() {
    return (
        <BlurView intensity={60} style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#00B09E" />
        </BlurView>
    )
}

const styles = StyleSheet.create({
    loadingContainer : {
        height : screenHeight,
        width : screenWidth,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        position : "absolute",
        zIndex : 100
    }
})