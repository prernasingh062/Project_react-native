import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ViewMenu() {
    const image = require('../assets/background.jpg')
    const buttonClicked = () => {
        Alert.alert('Open menu now');
    }
 
  return (
      <ImageBackground source={image} style={styles.img}>
            <BlurView
                blurType="dark"
                style={styles.blurView}>
                    <Text style={styles.cardText}>Treat your cravings with delicious foods</Text>
                    <View style={styles.inputContainer}>     
                        <Icon name="map-marker" size={15} style={styles.iconLeft}/>                  
                        <TextInput
                            style={styles.textInput}
                            placeholder="Select your area"/>
                        <Icon name="search" size={15} style={styles.iconRight}/>
                        <TextInput
                            placeholder="Search Restaurants"
                            style={styles.textInput}
                        />
                    </View>
                    <Pressable 
                        onPress={buttonClicked} 
                        style={({ pressed }) => [
                        styles.button,
                        pressed ? styles.buttonPressed : null,
                    ]}>
                        <Text style={styles.buttonText}>View Menu</Text>
                    </Pressable>                    
            </BlurView>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    img: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 190,
    },
    blurView: {
        width: 300,
        height: 170,
        borderRadius: 20,
        shadowRadius: 5,
        alignItems: 'center',
    },
    cardText: {
        textAlign: 'center',
        top: 7,
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10, // adds space between inputs
        position: 'absolute', //Here is the trick
        bottom: 57, //Here is the trick
    },
    textInput: {
        height: 30,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 12,
        paddingLeft: 20, // leave space for icon
        paddingRight: 5,
    },
    iconLeft: {
        position: 'absolute',
        left: 8,
        top: '50%',
        marginTop: -7, // half icon size to center vertically
        color: '#f19a30fd',
        zIndex: 1,
    },
    iconRight: {
        position: 'absolute',
        right: 118,
        top: '50%',
        marginTop: -7,
        color: '#f19a30fd',
        zIndex: 1,
    },
    button: {
        backgroundColor: '#FF8C00',
        padding: 8,
        borderRadius: 10,
        width: '90%',
        //marginBottom: 10
        position: 'absolute', //Here is the trick
        bottom: 10, //Here is the trick
    },
    buttonPressed: {
        backgroundColor: '#FF4500',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }    
})