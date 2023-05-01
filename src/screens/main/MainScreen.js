import React from "react";
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native'; 

import CustomLogo from "../../components/CustomLogo";
import CustomText from "../../components/CustomText";

const Pizza = '../../../assets/Pizza.png'
const Hamburguer = '../../../assets/hamburguer.png'
const Fritas = '../../../assets/fritas.png'



export default function MainScreen ( { navigation }) {
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CustomLogo />
            </View>
            <SafeAreaView style={styles.content}>
                <View style={styles.item}>
                    <Image style={styles.image} 
                            source={require(Pizza)} 
                    />
                <View style={styles.text}>
                    <Text style={styles.product}>Pizza   </Text>
                    <Text style={styles.price}>R$ 59,00</Text>
                </View>
            </View>
            <View style={styles.item}>
                    <Image style={styles.image} 
                            source={require(Hamburguer)} 
                    />
                <View style={styles.text}>
                    <Text style={styles.product}>Smash</Text>
                    <Text style={styles.price}>R$ 39,00</Text>
                </View>
                </View>
                <View style={styles.item}>
                    <Image style={styles.image} 
                            source={require(Fritas)} 
                    />
                <View style={styles.text}>
                    <Text style={styles.product}>Fritas  </Text>
                    <Text style={styles.price}>R$ 85,90</Text>
                </View>
                </View>
                <View style={styles.home}>
                <CustomText text={'Voltar para pagina:'} label={'Home'} onPress={() => navigation.navigate('Home')}/>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DF0101',
        width: '100%',
        height: '100%'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#909090',
        borderBottomWidth: 2,
        padding: 10
    },
    text: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    product: {
        fontSize: 24,
        fontWeight: '600',
        padding: 5,
        paddingRight: 50
    },
    price: {
        fontSize: 24,
        fontWeight: '600',
        paddingLeft: 35
        },
    home: {
        paddingTop: 20
    }
})