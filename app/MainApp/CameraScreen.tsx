import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get("window").width;

export default function CameraScreen() {

    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    const refCamera = useRef<Camera>(null);

    const [clickedPhoto, setClickedPhoto] = useState<string>("");
    const [isFlash, setIsFlash] = useState<boolean>(false);

    if(!permission) 
    {
        // Camera permissions are still loading
        return <View />;
    }

    if(!permission.granted) 
    {
    // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        )
    }

    function toggleCameraType() 
    {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takePicture = () => {
        const onPictureSaved = (photo: any) => {
            setClickedPhoto(photo.uri);
        }
        refCamera.current?.takePictureAsync({onPictureSaved: onPictureSaved});
    };

    return (
        <View style={styles.container}>
            <Camera 
                style={styles.camera} 
                type={type}
                ratio='16:9'
                ref={refCamera}
                flashMode={isFlash ? 2 : 1}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 25,
                        marginTop: 25
                    }}
                >
                    <Link href={"MainApp"}>
                        <AntDesign name="close" size={24} color="white" />
                    </Link>
                    {
                        isFlash ? 
                        <TouchableOpacity onPress={() => setIsFlash(!isFlash)}>
                            <Ionicons name="flash" size={24} color="white" /> 
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setIsFlash(!isFlash)}>
                            <Ionicons name="flash-off" size={24} color="white" />
                        </TouchableOpacity>
                    }
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        width: screenWidth,
                        bottom: 60
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            borderWidth: 5,
                            borderColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        activeOpacity={0.6}
                        onPress={takePicture}
                    >
                        <View
                            style={{
                                backgroundColor: "white",
                                height: 50,
                                width: 50,
                                borderRadius: 50
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 30
                        }}
                        onPress={toggleCameraType}
                    >
                        <FontAwesome6 name="camera-rotate" size={26} color="white" />
                    </TouchableOpacity>
                </View>
                <Image 
                    source={clickedPhoto} 
                    style={{
                        height: 200,
                        width: 200
                    }}
                />
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
});