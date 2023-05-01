import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";

import { Entypo } from '@expo/vector-icons'

export default function PasswordScreen( {navigation }) {
    return(
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                <Text style={styles.text}>
                    Recupere sua senha
                </Text>
                <View>
                    <CustomInput 
                        text={'Senha antiga'} 
                        inputType={'password'} 
                        label={'digite a sua senha antiga...'} 
                        keyboardType={'default'} 
                        icon = {
                            <Entypo
                            name='key'
                            size={20}
                            color='#666'
                            />
                        }/>
                    <CustomInput 
                        text={'Nova senha'} 
                        inputType={'password'} 
                        label={'digite a sua nova senha...'} 
                        keyboardType={'default'}
                        icon = {
                            <Entypo
                            name='keyboard'
                            size={20}
                            color='#666'
                            />
                        }/>
                    <CustomInput 
                        text={'Nova senha'} 
                        inputType={'password'} 
                        label={'confirme sua senha...'} 
                        keyboardType={'default'}
                        icon = {
                            <Entypo
                            name='keyboard'
                            size={20}
                            color='#666'
                        />
                        }/>
                    <CustomButton label={'Alterar'} onPress={() => navigation.navigate('Main')}/>
                    <CustomText text={'Não quero alterar'}label={'Login'} onPress={() => navigation.navigate('Login')}/>
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
    }
});