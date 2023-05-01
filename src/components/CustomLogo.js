import React from "react";
import { Image, View, StyleSheet } from "react-native";

const ScreenImage = '../../assets/logoReactFoods.png'

export default function CustomLogo () {
    return (
        <View>
            <Image
                style={styles.logo}
                source={require(ScreenImage)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 70,
        marginBottom: 50
    }
})