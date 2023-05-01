import React from "react";
import { StyleSheet, View, ImageBackground } from 'react-native';

import CustomLogo from "../../components/CustomLogo";
import CustomButton from "../../components/CustomButton";

const ScreenImage = '../../../assets/tela_inicio2.png'

export default function HomeScreen( {navigation }) {
    return (
    <View style={styles.container}>
        <ImageBackground
            source={require(ScreenImage)} 
            style={styles.image}
        >
        <CustomLogo />
        <View style={styles.button}>
        <CustomButton 
            label={'Login'}
            onPress={() => navigation.navigate('Login')}
            />
        <CustomButton 
            label={'Registre-se'}
            onPress={() => navigation.navigate('Register')}/>
        </View>
        </ImageBackground>
        
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '100%'
    }
});