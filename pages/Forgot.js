import React, { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert,FlatList,ImageBackground, View, Modal, Dimensions,PermissionsAndroid,SafeAreaView, ScrollView,StyleSheet, Image, SafeArray, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function App ({navigation}){
    const [Email, onChangeEmail] = React.useState();
     return(
        <View style={{ height: windowHeight,width:windowWidth ,backgroundColor:"#F5F7FB"}}>
                    <View style={{height:windowHeight*0.04,alignItems:"center",margin:windowHeight*0.07}}>
                         <Image source={require('../assets/splash.png')} style={styles.backgroundImage} />
                    </View>
                    <View style={{height:windowHeight*0.1,alignItems:"center",margin:windowHeight*0.05}}>
                        <Text style={styles.textsignin}>
                            Forgot your password?
                        </Text>
                        <Text style={styles.textpleaseenter}>
                            Please enter your email address.{"\n"}
                            You will receive a link via email
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            placeholder="Email"
                        />
                        <TouchableOpacity 
                        onPress={()=>
                        {
                            Alert.alert(
                                "Link has been successfully sent",
                                "Please check your email",
                                [
                                  {
                                    text: "cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "destructive"
                                  },
                                ]
                              );
                        }
                        }
                        >
                            <View style={styles.buttonsignin}>
                                <Text style={{color:"white",fontSize:16}}>
                                    Send link 
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    textpleaseenter: {
        textAlign:"center",
        color:"#39393B",
        fontSize:15,
        marginBottom:25
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
