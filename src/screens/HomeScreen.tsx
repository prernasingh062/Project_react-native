import { ScrollView, StyleSheet, Text, Pressable, ImageBackground, useWindowDimensions, Alert, View} from 'react-native'
import React from 'react'
import MenuItems from '../components/MenuItems';
import ViewMenu from '../components/ViewMenu';
import { BlurView } from '@react-native-community/blur'

export default function HomeScreen () {
  const localImages: any = {
    image0: require('../assets/Veg.jpg'),
    image1: require('../assets/nonVeg.jpg'),
    image2: require('../assets/vegan.jpg'),
  };

  const categories = [
    {name: "🍕 Vegetarian - appealing vegetarian menu includes fresh ingredients and flavor"},
    {name:"🍔 Non-Vegetarian - non-veg menu includes Thalapakkati Style Chicken Biryani"},
    {name:"🍣 Vegan - vegan menu emphasize fresh, plant-based ingredients and appealing preparations"},
];

  return (
    <ScrollView style={[styles.container, {flexDirection: 'column'}]}>
      <View style={styles.menuContainer}>
          <ViewMenu></ViewMenu>
      </View>
      <View style={{flex: 1, paddingLeft:12, paddingRight:12}}>
        <View style={styles.container2}>
          <Text style={styles.categoryText}>What would you like to have today?</Text> 
          <View style={styles.imgContainer}>
            {categories.map((cat, index) => (
              <ImageBackground
                key={index}
                source={localImages[`image${index}`]}
                style={styles.img}
                imageStyle={{ borderRadius: 15 }} // Rounded corners for the image itself
              >
                <BlurView blurType="dark" style={styles.blurView}>
                  <Text style={styles.text}>{cat.name}</Text>
                </BlurView>
              </ImageBackground>
            ))}
          </View>
        </View>      
        <View style={styles.container3}>
          <Text style={styles.comboText}>Combo meals for you</Text>
          <MenuItems></MenuItems>
        </View>
      </View>   
    </ScrollView>   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  scrollContainer: {
    flex: 1,
  },
  menuContainer: {
    flex:1,
  },
  container2: {
    flex:1,
    marginTop: 8
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF8C00',
    marginTop: 10,
    textAlign: 'center',
  },
  container3: {
    flex:2,
    marginTop: 8
  },
  categoryScroll: { 
    //marginTop: 40
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 16, 
    color: '#F75C3E'
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 110,
    width: 110,
    overflow: 'hidden', // Required for rounded corners to apply to children like BlurView
    borderRadius: 15,
  },
  blurView: {
      width: '100%',
      height: '50%',
      bottom:0,
      position: 'absolute',
  },
  text: {
      textAlign: 'center',
      top: 7,
      position: 'absolute',
      color: 'white',
      fontSize: 8,
  },
  comboText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    marginTop: 10,
    marginBottom: 7,
    textAlign: 'left'
  }
})