import React from 'react'
import { View, Text,ImageBackground, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CarouselCardItem = ({ item, index }) => {
    const aimage =""+item.imgUrl
  return (
    <View style={{ height: windowHeight,width:windowWidth,backgroundColor:"#F5F7FB",justifyContent:"center" }}>
                <ImageBackground source={item.imgUrl} resizeMode="cover"  imageStyle={{ opacity: 0.4 }} style={styles.images}>
                    <View >
                        <Text style={styles.title}>Request a ride</Text>
                        <View style={{width:windowWidth*0.8,alignSelf:"center",paddingTop:20}}>
                           <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
                        </View>
                    </View>
                </ImageBackground>
         </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width:windowWidth,
  },
  images: {
            flex: 1,
            justifyContent: "center",
        },
  image: {
    width: windowWidth,
    height: windowHeight,
  },
  title: {
            color:"#1667B1",
            fontSize:30,
            fontWeight:'600',
            fontFamily:"Avenir",
            alignSelf: "center",
        },
        text: {
            color:"#39393B",
            fontSize:16,
            textAlign:"center",
            fontFamily:"Avenir",
        },
})

export default CarouselCardItem