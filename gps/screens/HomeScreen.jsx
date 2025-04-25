import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";

const HomeScreen = () => {

    const { latitude, longitude, errorMsg, location } = useLocation();

    return (
        <View style={style.container}>
            <View style={style.iconWrapper}>
                <Feather name="map-pin" size={70} color="#a1a1a1" />
            </View>

            <Text style={style.title}>Use Location</Text>

            <Text style={style.desc}>
                To use this app, you need to enable location services on your device.
            </Text>
            
            <TouchableOpacity
                style={style.btn}
                onPress={() =>
                    Alert.alert(
                        "Ubicación detectada",
                        `City: ${location.city}\nCountry: ${location.country}\nAddress: ${location.formattedAddress}`
                    )
                }
            >
                <Text style={style.btnText}>Get Location</Text>
            </TouchableOpacity>


        </View>
    )
}

export default HomeScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    iconWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "#333",
    },
    desc: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    btn: {
        marginTop: 40,
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 5,
    },
    btnText: {
        color: "#fff",
    }
})