import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerRight: () => (
          <View style={{ flexDirection: 'row', paddingRight: 10 }}>
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Icon name="search" size={20} color='#303030' />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Icon name="shopping-cart" size={20} color='#303030' />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 5 }}>
              <Icon name="align-justify" size={20} color='#303030' />
            </TouchableOpacity>             
          </View>            
        ),

        headerTitle: () => (
          <Text style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 28,
            color: '#FF8C00',
            marginLeft: 0,
          }}>
          CraveCart
          </Text>
        ),
      }
    }
  },
})

const Nav = createStaticNavigation(RootStack);

const Navigation = () => {
  return (
    <Nav />
  )
}

export default Navigation

const styles = StyleSheet.create({})