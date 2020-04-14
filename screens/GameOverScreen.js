import React from 'react'
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import CustomButton from '../components/CustomButton';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game is Over</Text>
            <Image source={require('../assets/myImage-1584549945602.jpg')} style={styles.image} />
            <Text>{props.userNumber} Number of Rounds :  {props.rounds}</Text>
            <CustomButton style={styles.button} onTouch={props.newGame}>New Game</CustomButton>
        </View>
    )
}

const styles= StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    image : {
        width : 250,
        height : 250,
        resizeMode : 'cover',
        borderRadius : 150,
        margin : 20
    },
    button : {
        margin : 20
    }
})
export default GameOverScreen
