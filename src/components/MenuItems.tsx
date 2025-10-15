import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const toggleSave = () =>{
  Alert.alert('button Pressed');
}

const menuItems = [
  { 
    id: "1", 
    name: "Fried Chicken", 
    price: "$8.99", 
    rating:'★4.9 ', 
    delivery: 'Dining & Delivery', 
    location: '📍2436, General Thimayya Road',
    img: require('../assets/c1.jpg'),
    time: 'Est. Delivery Time: 20 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
  { 
    id: "2", 
    name: "Burger", 
    price: "$6.50", 
    rating:'★4.4 ', 
    delivery: 'Dining & Delivery', 
    location: '📍Rajkamal Survey No. 759/125, Prabhat Road',
    img: require('../assets/c2.jpg'),
    time: 'Est. Delivery Time: 50 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
  { 
    id: "3", 
    name: "Salmon Sushi", 
    price: "$12.00", 
    rating:'★3.1 ', 
    delivery: 'Dining & Delivery', 
    location: '📍Rajkamal Survey No. 759/125, Prabhat Road',
    img: require('../assets/c3.jpg'),
    time: 'Est. Delivery Time: 30 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
  { 
    id: "4", 
    name: "Cold Drink combo", 
    price: "$5.50 ", 
    rating:'★5.0', 
    delivery: 'Delivery Only', 
    location: '📍Lobby Level, 7, Mangaldas Rd, Sangamvadi',
    img: require('../assets/c4.jpg'),
    time: 'Est. Delivery Time: 15 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
  { 
    id: "5", 
    name: "Caesar Salad", 
    price: "$2.50 ", 
    rating:'★4.7', 
    delivery: 'Dining & Delivery', 
    location: '📍2417, East St, Camp, Pune',
    img: require('../assets/c5.jpg'),
    time: 'Est. Delivery Time: 45 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
  { 
    id: "6", 
    name: "Thali Combo", 
    price: "$1.99 ", 
    rating:'★3.8', 
    delivery: 'Dining & Delivery', 
    location: '📍Siddharth Chambers, GVPW+VRH, Lane',
    img: require('../assets/c6.jpg'),
    time: 'Est. Delivery Time: 32 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
  { 
    id: "7", 
    name: "Cheese Pizza", 
    price: "$7.50 ", 
    rating:'★5.0', 
    delivery: 'Dining Only', 
    location: '📍Lane No. 7, Opposite SBI Bank, Ashok Chakra Society',
    img: require('../assets/c7.jpg'),
    time: 'Est. Delivery Time: 63 mins',
    cart: 'Add to Cart',
    later: 'save for later'
  },
];

const Items = ({ item }: any) => (
  <View style={styles.item}>
    <Image source={item.img} style={styles.image} resizeMode="cover" />
    <View style={styles.textContainer}>
      <View style={{flex:1,flexDirection: 'row',}}>
        <Text style={{
          fontSize: 16, 
          marginTop: 6, 
          backgroundColor: item.rating >= 4 ? '#FFD122' : '#00D100',
          color: '#FFFFFF', 
          fontWeight:'500'}}>
            {item.rating}
          </Text>
        <Text style={{fontSize: 16, marginTop: 6, paddingLeft:8}}>{item.delivery}</Text>
      </View>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 6}}>{item.name}</Text>
      <Text style={{fontSize: 11, color: '#FF8C00', fontWeight: 'bold', marginTop: 6}}>{item.location}</Text>
      <Text style={{fontSize: 13, marginTop: 6}}>{item.time}</Text>
      <Text style={{fontSize: 14, fontWeight: '700', marginTop: 6}}>{item.price}</Text>
      <View style={{flex:1,flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => toggleSave()} style={styles.saveBox}>
          <Icon name="shopping-cart" size={9} style={styles.Icon}></Icon>
          <Text style={[styles.saveText, { color: '#FF8C00'}]}>
            {item.cart}
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSave()} style={styles.saveBox}>
        <Icon name="save" size={9} style={styles.Icon}></Icon>
        <Text style={[styles.saveText, { color: '#FF8C00'}]}>
          {item.later}
        </Text>
      </TouchableOpacity>
      </View>     
    </View>
  </View>
);

const MenuItems = () => {
  return (
    <>
      {/* Map food items dynamically */}
      {menuItems.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </>
  )
}

export default MenuItems

const styles = StyleSheet.create({
    item: {
        marginBottom: 16,
        paddingBottom: 20,
        borderWidth: 1, 
        borderColor: '#DBDBDB',
        borderRadius: 10,
        //padding: 10,
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        flexDirection: 'row',          // Align image and text horizontally
        //alignItems: 'center',          // Vertically center items
    },
    image: {
        width: "40%", 
        height: "100%", 
    },
    textContainer: {
      flex: 1,
      marginLeft: 10
    },
    imageText: {
        fontSize: 18, 
        fontWeight: "500"
    },
    saveBox: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignSelf: 'flex-start',
      marginTop: 6,
      backgroundColor: '#FFF7E6'
    },
    saveText: {
      fontSize: 10,
      fontWeight: '700',
    },
    Icon: {
      color:'#FF8C00',
      paddingRight: 2
    }
})