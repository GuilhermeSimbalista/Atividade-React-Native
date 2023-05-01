import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomText({ label,  text, onPress}) {
    return(
        <View style={styles.container}>
            <Text
                style={styles.text}
                > {text} </Text>
            <TouchableOpacity
                onPress={ onPress }
                style={styles.button}>
            <Text style={styles.label}
                > {label} </Text>
            </TouchableOpacity>
        </View>
    )}

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "row",
            
        },
        text: {
            fontSize: 16,
            fontWeight: '400'
        },
        label: {
            fontSize: 16,
            fontWeight: '700',
            color: '#DF0101'
        }
    })