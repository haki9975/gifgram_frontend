import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = Stylesheet.create({
    card: {

    },
    cardContent: {
        
    }
})

function Card(props) {
    return(
        <View style={StyleSheet.card}>
            <View style={StyleSheet.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

export default Card;