import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

import { MaterialIcons, Entypo } from '@expo/vector-icons'

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";

export default function LoginScreen( {navigation }) {
    return(
        
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                <Text style={styles.text}>
                    Login
                </Text>
                <View>
                    <CustomInput 
                        text={'Seu login:'} 
                        inputType={'text'} 
                        label={'digite o seu login...'} 
                        keyboardType={'default'}
                        icon={
                        <MaterialIcons 
                            name='alternate-email'
                            size={20}
                            color='#666'
                        />
                        }/>
                    <CustomInput 
                        text={'Sua senha:'} 
                        inputType={'password'} 
                        label={'digite a sua senha...'} 
                        keyboardType={'default'}
                        icon={
                            <Entypo
                                name='key'
                                size={20}
                                color='#666'
                                style={{ marginRight: 5 }}
                            />
                            }/>
                    <CustomButton label={'Login'} onPress={() => navigation.navigate('Main')}/>
                    <CustomText label={'Esqueci minha senha'} onPress={() => navigation.navigate('Password')}/>
                    <View style={styles.register}>
                        <CustomText text={'Não possui login?'}label={'Registre-se'} onPress={() => navigation.navigate('Register')}/>
                    </View>
                </View>
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'start',
        backgroundColor: '#ffffff'
    },
    view: {
        marginTop: 50
    },
    text: {
        paddingLeft: 60,
        paddingBottom: 20,
        color: '#DF0101',
        fontSize: 28,
        fontWeight: '700'
    },
    register: {
        paddingTop: 30
    }
});