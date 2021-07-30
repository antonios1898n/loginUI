
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TextInput, Button, Icon, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Spalsh() {

    const navigation = useNavigation();
    useEffect(() => {
        async function show() {
                setTimeout(() => {

                    navigation.navigate('Splash2');
                }, 3000);

        }
        show()

    }, []);



    return (
        <View style={{ height: windowHeight,width:windowWidth,backgroundColor:"#F5F7FB",justifyContent:"center" }}>
            <Image source={require('../assets/splash.png')} style={styles.backgroundImage} />
        </View>


    )
}
const styles = new StyleSheet.create({
    backgroundImage: {
        alignSelf:"center",
        justifyContent:"center",
        // width: windowWidth*0.6,
        // height: windowHeight*0.2
        //    height:Dimensions.get('window').height/1.025,


    },

})
