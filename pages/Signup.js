
import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert,FlatList,ImageBackground, View, Modal, Dimensions,PermissionsAndroid,SafeAreaView, ScrollView,StyleSheet, Image, SafeArray, Text, TextInput, Button, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function App ({navigation}){
    const [list, setList] = useState();
    const [text, onChangeText] = React.useState();
    const [Email, onChangeEmail] = React.useState();
    const [Phone, onChangePhone] = React.useState();
    const [pass, onChangePassword] = React.useState();
    const [ConfirmPassword, onChangeConfirmPassword] = React.useState();
     return(
        <SafeAreaView>
            <View style={{ height: windowHeight,width:windowWidth }}>
                    <ImageBackground source={require("../assets/Signin.png")} imageStyle={{ opacity: 0.4 }} resizeMode="cover"  style={styles.images}>
                        <View style={{height:windowHeight*0.04,alignItems:"center",margin:windowHeight*0.07}}>
                            <Image source={require('../assets/splash.png')} style={styles.backgroundImage} />
                        </View>
                        <View style={{height:windowHeight*0.07,alignItems:"center",margin:windowHeight*0.03}}>
                            <Text style={styles.textsignin}>
                                Sign up
                            </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                placeholder="Full Name"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                placeholder="Email"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePhone}
                                placeholder="Phone Number"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePassword}
                                placeholder="Enter Password"
                                secureTextEntry
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeConfirmPassword}
                                placeholder="Confirm Password"
                                secureTextEntry
                            />
                            <TouchableOpacity onPress={()=>{
                                if(pass==ConfirmPassword && !Email=="" && !Phone=="" && !text=="")
                                {navigation.navigate("Detail")}
                                else{
                                    alert("please make sure to enter all values and have the same password")
                                }
                                }}>
                                <View style={styles.buttonsignin}>
                                    <Text style={{color:"white",fontSize:16}}>
                                            SIGN UP 
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.orsignin}>
                                - Or login with -
                            </Text>
                            <View style={{width:windowWidth*0.45,padding:10,alignSelf:"center",flexDirection:"row",display:"flex",justifyContent:"space-between"}}>
                                <Image source={require('../assets/fb.png')}  />
                                <Image source={require('../assets/gle.png')}  />
                                <Image source={require('../assets/apple.png')}  />
                            </View>
                        </View>
                    </ImageBackground>
            </View>
            </SafeAreaView>
   
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
        marginTop:30
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
        margin: 10,
        borderRadius:50,
        backgroundColor:"white",
        padding: 18,
      },
})
