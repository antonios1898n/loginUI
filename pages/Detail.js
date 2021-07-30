
import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert,FlatList,ImageBackground, View, Modal, Dimensions,PermissionsAndroid,SafeAreaView, ScrollView,StyleSheet, Image, SafeArray, Text, TextInput, Button, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function App ({navigation}){
    const [list, setList] = useState();
    const [text, onChangeText] = React.useState();
    const [Name, onChangeName] = React.useState();
    const [number, onChangenumber] = React.useState();
     return(
        <View style={{ height: windowHeight,width:windowWidth }}>
                <ImageBackground source={require("../assets/Signin.png")} imageStyle={{ opacity: 0.4 }} resizeMode="cover"  style={styles.images}>
                    <View style={{height:windowHeight*0.04,alignItems:"center",margin:windowHeight*0.07}}>
                         <Image source={require('../assets/splash.png')} style={styles.backgroundImage} />
                    </View>
                    <View style={{height:windowHeight*0.1,alignItems:"center",margin:windowHeight*0.05}}>
                        <Text style={styles.textsignin}>
                            Continue signing in
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            placeholder="Enter Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder="Enter Email"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangenumber}
                            placeholder="Number"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity>
                            <View style={styles.buttonsignin}>
                                <Text style={{color:"white",fontSize:16}}>
                                    SIGN IN 
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
         </View>
   
  )
}




export default App;

const styles = StyleSheet.create({
    backgroundImage:{
        height:windowHeight*0.09,
        width:windowWidth*0.4
    },
    social: {
        height:30,
        width:30,
        borderRadius:30,
        alignSelf:"center",
        justifyContent:"center",

    },
    images: {
        flex: 1,
    },
    buttonsignin: {
        backgroundColor:"#1667B1",
        borderRadius:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal:30,
        paddingVertical:15,
        marginTop:50
    },
    textsignin: {
        color:"#1667B1",
        fontSize:20,
        fontWeight:'bold',
        marginBottom:25
    },
    orsignin: {
        color:"#1667B1",
        fontSize:14,
        alignSelf:'center',
        margin:15
    },
    forgot: {
        color:"#1667B1",
        fontSize:14,
        alignSelf:'flex-end',
        fontWeight:'bold'
    },
    input: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 15,
        shadowRadius: 15,

        elevation: 5,
        width:windowWidth*0.8,
        height: 50,
        margin: 12,
        borderRadius:50,
        backgroundColor:"white",
        padding: 18,
      },
})
