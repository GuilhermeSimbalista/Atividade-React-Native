import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";

import { Entypo } from '@expo/vector-icons'

export default function RegisterScreen ( { navigation }) {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Registre-se
                </Text>
                <View>
                    <CustomInput 
                        text={'Nome Completo:'} 
                        inputType={'text'} 
                        label={'digite o seu nome...'} 
                        keyboardType={'default'} 
                        icon = {
                            <Entypo
                            name='user'
                            size={20}
                            color='#666'
                        />
                        }/>
                    <CustomInput 
                        text={'Login:'} 
                        inputType={'text'} 
                        label={'digite o seu login...'} 
                        keyboardType={'default'}
                        icon = {
                            <Entypo
                            name='login'
                            size={20}
                            color='#666'
                        />
                        }/>
                    <CustomInput 
                        text={'E-mail:'} 
                        inputType={'text'} 
                        label={'digite o seu e-mail...'} 
                        keyboardType={'email-address'}
                        icon = {
                            <Entypo
                            name='email'
                            size={20}
                            color='#666'
                        />
                        }/>
                    <CustomInput 
                        text={'Telefone:'}
                        inputType={'number'} 
                        label={'digite o seu telefone...'} 
                        keyboardType={'phone-pad'}
                        icon = {
                            <Entypo
                            name='phone'
                            size={20}
                            color='#666'
                        />
                        }/>
                    <CustomInput 
                        text={'Senha:'} 
                        inputType={'password'} 
                        label={'digite a sua senha...'} 
                        keyboardType={'default'}
                        icon = {
                            <Entypo
                            name='key'
                            size={20}
                            color='#666'
                        />}/>
                        <CustomButton label={'Registre-se'} onPress={() => navigation.navigate('Main')} />
                        <CustomText text={'Ja possui conta?'} label={'Login'} onPress={() => navigation.navigate('Login')}/>
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
        marginTop: 30
    },
    text: {
        paddingLeft: 55,
        paddingBottom: 30,
        color: '#DF0101',
        fontSize: 28,
        fontWeight: '700'
    },
})