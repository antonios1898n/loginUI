import React from 'react'
import { View,Dimensions,Text,StyleSheet} from "react-native"
import Carousel,{Pagination}  from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CarouselCards = () => {
  const navigation = useNavigation();
  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const [Carousell, setCarousell] = React.useState()
  const data = [
      {
        title: "first one",
        // body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: require("../assets/Splash2.png")
      },
      {
        title: "second one",
        // body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: require("../assets/Splash22.png")
      },
      {
        title: "third one",
        // body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: require("../assets/Splash2.png")
      }
    ]
  return (
    <View style={{height:windowHeight,width:windowWidth}}>
      <Carousel
      style={{height:windowHeight,width:windowWidth}}
        layout="tinder"
        // layoutCardOffset={9}
        ref={(c) => {setCarousell(c); }}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <View style={{position:"absolute",top:windowHeight*0.7,alignSelf:"center"}}>
        <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={Carousell}
            dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                marginHorizontal: 0,
                backgroundColor: '#1667B1'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
            />
            <View style={{flexDirection:"row",display:"flex",justifyContent:"space-between"}}>
                <Text style={styles.text} onPress={() => { navigation.navigate("Home")}}>
                    Skip
                </Text>
                <Text style={styles.text,{color:"#1667B1"}} onPress={() => { Carousell.snapToNext(); }}>
                    Next
                </Text>
            </View>
        </View>
    </View>
  )
}

export default CarouselCards

const styles = new StyleSheet.create({
    text: {
        color:"#39393B",
        fontSize:14,
        fontWeight:"800"
    },

})