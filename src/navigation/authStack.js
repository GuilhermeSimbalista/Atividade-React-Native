import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import MainScreen from "../screens/main/MainScreen";
import PasswordScreen from "../screens/recoverPassword/PasswordScreen";

const Stack = createNativeStackNavigator() 

export default function AuthStack () {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Password" component={PasswordScreen}/>
            <Stack.Screen name="Main" component={MainScreen}/>
        </Stack.Navigator>
    )
}